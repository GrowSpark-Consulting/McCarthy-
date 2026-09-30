import 'server-only';

import { request } from 'node:https';

import type { AiAuditRequest } from '@/lib/validation/ai-audit';

/**
 * Bridge to the Google Apps Script web app.
 *
 * Apps Script owns everything Google-side: it writes the row to the sheet and
 * sends the admin notification through Gmail under the script owner's account.
 * This app holds no Google credentials — only the deployment URL, server-side.
 *
 * A web app call is two hops, made by hand here rather than with `fetch`:
 *
 * 1. POST to `/exec`. Apps Script runs `doPost` to completion — row written,
 *    email sent — and only then answers `302` to script.googleusercontent.com.
 * 2. GET that location to read what `doPost` returned.
 *
 * Measured against the live deployment from a network with an unstable route
 * to Google, hop 2 failed intermittently (404 over IPv6, stalls over IPv4)
 * while the row had already been saved. Treating that as a failure showed the
 * visitor an error for a lead that was in the sheet, invited a duplicate
 * resubmission, and spent ~20s on retries first. So:
 *
 * - The redirect to the content host is itself proof that `doPost` ran.
 * - Hop 2 gets one short attempt. If it answers, its verdict stands —
 *   including `success: false`. If it cannot be read, the submission is
 *   accepted on the strength of the redirect, and a warning is logged.
 * - Hop 1 is retried only when the connection fails before the request is
 *   sent, so no retry can write a second row or send a second email.
 *
 * On a healthy network (Vercel) hop 2 answers in ~0.5s and its verdict is
 * always read.
 */

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

/** Establishing TCP + TLS. Nothing has been sent yet, so a stall here is safe to retry. */
const CONNECT_TIMEOUT_MS = 6_000;

/**
 * Waiting for `doPost` to finish once the request is sent. Measured at ~9s on
 * the first run after a new version (a cold start that opens the sheet and
 * sends mail), shorter when warm.
 */
const SUBMIT_RESPONSE_TIMEOUT_MS = 30_000;

/** Reading the stored reply. Short on purpose — see the module docs. */
const RESULT_TIMEOUT_MS = 4_000;

/** Connection attempts for hop 1, every one of them before anything is sent. */
const SUBMIT_CONNECT_ATTEMPTS = 3;

/** Redirects followed within the hop 2 read. */
const MAX_REDIRECTS = 2;

/** Where Apps Script sends the caller once `doPost` has returned. */
const RESULT_HOST = 'script.googleusercontent.com';

export function isAppsScriptConfigured(): boolean {
  return Boolean(APPS_SCRIPT_URL);
}

/** Payload shape the Apps Script `doPost` expects. */
export interface AppsScriptPayload {
  readonly name: string;
  readonly email: string;
  readonly company: string;
  readonly jobTitle: string;
  readonly website: string;
  readonly industry: string;
  readonly companySize: string;
  readonly goals: readonly string[];
  readonly challenge: string;
  readonly preferredContact: string;
  readonly additionalInformation: string;
}

/** What the Apps Script returns. */
interface AppsScriptResponse {
  readonly success?: boolean;
  readonly message?: string;
  /** False when the row was saved but the admin email could not be sent. */
  readonly notified?: boolean;
}

/** The result of a submission the script accepted. */
export interface SubmissionOutcome {
  /** True when the script's own reply was read; false when accepted on the redirect alone. */
  readonly confirmed: boolean;
  /** Whether the admin email went out. Unknown when the reply was not read. */
  readonly notified: boolean | null;
}

/**
 * Maps the validated form request onto the Apps Script contract.
 *
 * Optional fields become empty strings rather than being omitted, so the sheet
 * always receives the same twelve columns in the same order. No timestamp is
 * sent: Apps Script generates it, because a browser-supplied time cannot be
 * trusted.
 */
export function toAppsScriptPayload(data: AiAuditRequest): AppsScriptPayload {
  return {
    name: data.fullName,
    email: data.email,
    company: data.company,
    jobTitle: data.jobTitle ?? '',
    website: data.website ?? '',
    industry: data.industry ?? '',
    companySize: data.companySize ?? '',
    goals: data.goals,
    challenge: data.challenge,
    preferredContact: data.preferredContact,
    additionalInformation: data.additionalInfo ?? '',
  };
}

interface RawResponse {
  readonly status: number;
  readonly location?: string;
  readonly body: string;
}

interface SendOptions {
  readonly method: 'GET' | 'POST';
  readonly body?: string;
  /** 4 pins IPv4; 0 lets the OS choose. */
  readonly family: 0 | 4;
  readonly connectTimeoutMs: number;
  readonly responseTimeoutMs: number;
}

/** A failure raised before the TLS handshake completed — nothing was sent. */
class NotSentError extends Error {
  override readonly name = 'NotSentError';
}

/**
 * One HTTPS request on a fresh connection, no redirect following.
 *
 * A fresh connection (`agent: false`) is what makes the connect phase
 * observable: the handshake always happens, so a failure before it completes
 * is known not to have sent anything and is raised as `NotSentError`.
 */
function send(
  url: string,
  { method, body, family, connectTimeoutMs, responseTimeoutMs }: SendOptions,
): Promise<RawResponse> {
  return new Promise((resolve, reject) => {
    let connected = false;

    const req = request(
      url,
      {
        method,
        family,
        agent: false,
        headers: body
          ? {
              // Apps Script web apps reject an unexpected CORS preflight;
              // text/plain keeps the request simple while the body stays JSON,
              // which `doPost` reads from `e.postData.contents`.
              'Content-Type': 'text/plain;charset=utf-8',
              'Content-Length': Buffer.byteLength(body),
            }
          : undefined,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on('data', (chunk: Buffer) => chunks.push(chunk));
        res.on('end', () =>
          resolve({
            status: res.statusCode ?? 0,
            location: typeof res.headers.location === 'string' ? res.headers.location : undefined,
            body: Buffer.concat(chunks).toString('utf8'),
          }),
        );
        res.on('error', reject);
      },
    );

    const connectTimer = setTimeout(() => {
      req.destroy(
        new NotSentError(`Could not connect to Apps Script within ${connectTimeoutMs}ms`),
      );
    }, connectTimeoutMs);

    req.on('socket', (socket) => {
      socket.once('secureConnect', () => {
        connected = true;
        clearTimeout(connectTimer);
        req.setTimeout(responseTimeoutMs, () =>
          req.destroy(new Error(`Apps Script did not respond within ${responseTimeoutMs}ms`)),
        );
      });
    });

    req.on('error', (error) => {
      clearTimeout(connectTimer);
      reject(connected || error instanceof NotSentError ? error : new NotSentError(error.message));
    });

    req.end(body);
  });
}

/**
 * Hop 1. Retried only on `NotSentError`, alternating the address family so an
 * unhealthy route is not tried three times over. Any failure after the request
 * may have reached Google is final — repeating it could duplicate the row.
 */
async function postSubmission(body: string): Promise<RawResponse> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= SUBMIT_CONNECT_ATTEMPTS; attempt += 1) {
    const family = attempt % 2 === 1 ? 4 : 0;

    try {
      return await send(APPS_SCRIPT_URL as string, {
        method: 'POST',
        body,
        family,
        connectTimeoutMs: CONNECT_TIMEOUT_MS,
        responseTimeoutMs: SUBMIT_RESPONSE_TIMEOUT_MS,
      });
    } catch (error) {
      lastError = error;

      if (!(error instanceof NotSentError)) {
        throw error;
      }
    }
  }

  throw lastError;
}

/** Hop 2. One short attempt; `null` when the reply could not be read. */
async function readResult(location: string): Promise<RawResponse | null> {
  let target = location;

  try {
    for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects += 1) {
      const response = await send(target, {
        method: 'GET',
        family: 4,
        connectTimeoutMs: RESULT_TIMEOUT_MS,
        responseTimeoutMs: RESULT_TIMEOUT_MS,
      });

      if (response.status === 200) {
        return response;
      }

      if (response.status >= 300 && response.status < 400 && response.location) {
        target = response.location;
        continue;
      }

      return null;
    }
  } catch {
    return null;
  }

  return null;
}

function hostOf(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return '';
  }
}

/** Turns the script's reply into an outcome, or throws for a rejection. */
function interpret(body: string): SubmissionOutcome {
  let parsed: AppsScriptResponse;

  try {
    parsed = JSON.parse(body) as AppsScriptResponse;
  } catch {
    // HTML here almost always means the deployment is not public, the new
    // version is not authorized yet, or the URL is not the /exec endpoint.
    throw new Error(`Apps Script returned a non-JSON body: ${body.slice(0, 160)}`);
  }

  if (parsed.success !== true) {
    throw new Error(`Apps Script rejected the submission: ${parsed.message ?? 'no message'}`);
  }

  return { confirmed: true, notified: parsed.notified ?? null };
}

/**
 * Posts the submission to Apps Script.
 *
 * Resolves when the script accepted it; throws when it was rejected or never
 * reached the script. Callers translate a throw into the generic message the
 * visitor sees — Google's own error text never reaches the browser.
 */
export async function submitToAppsScript(payload: AppsScriptPayload): Promise<SubmissionOutcome> {
  if (!APPS_SCRIPT_URL) {
    throw new Error('GOOGLE_APPS_SCRIPT_URL is not set');
  }

  const first = await postSubmission(JSON.stringify(payload));

  if (first.status >= 300 && first.status < 400 && first.location) {
    const host = hostOf(first.location);

    // Anywhere else — accounts.google.com above all — means the deployment is
    // not public and `doPost` never ran.
    if (host !== RESULT_HOST) {
      throw new Error(
        `Apps Script redirected to ${host || 'an invalid URL'}; check its access setting`,
      );
    }

    const result = await readResult(first.location);

    if (!result) {
      console.warn(
        '[ai-audit] doPost ran (redirected to the result host) but its reply could not be read; ' +
          'accepting the submission. Check the sheet and the Apps Script Executions log.',
      );
      return { confirmed: false, notified: null };
    }

    return interpret(result.body);
  }

  if (first.status === 200) {
    return interpret(first.body);
  }

  throw new Error(`Apps Script responded ${first.status}`);
}

/** The deployment's `doGet` reply. Writes nothing. */
export interface HealthReport {
  readonly status: number;
  readonly body: string;
}

/**
 * Reads the deployment's `doGet` health check, which reports the script
 * version and whether it is authorized to send email. Safe against any
 * deployment.
 */
export async function checkAppsScriptHealth(): Promise<HealthReport> {
  if (!APPS_SCRIPT_URL) {
    throw new Error('GOOGLE_APPS_SCRIPT_URL is not set');
  }

  const first = await send(APPS_SCRIPT_URL, {
    method: 'GET',
    family: 4,
    connectTimeoutMs: CONNECT_TIMEOUT_MS,
    responseTimeoutMs: SUBMIT_RESPONSE_TIMEOUT_MS,
  });

  if (first.status >= 300 && first.status < 400 && first.location) {
    const result = await readResult(first.location);
    return result ?? { status: 502, body: 'Health reply could not be read' };
  }

  return { status: first.status, body: first.body };
}
