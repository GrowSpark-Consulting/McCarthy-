import 'server-only';

import { request } from 'node:https';

import type { AiAuditRequest } from '@/lib/validation/ai-audit';

/**
 * Bridge to the Google Apps Script web app.
 *
 * Apps Script owns everything Google-side: it writes the row to the sheet and
 * sends the admin notification through Gmail under the script owner's account.
 * That means this app holds no Google credentials at all — only the deployment
 * URL, and only on the server.
 *
 * How a web app call works, and why it is done by hand here:
 *
 * 1. POST to `/exec`. Apps Script runs `doPost` — the row is written and the
 *    email sent — then answers `302` pointing at `script.googleusercontent.com`.
 * 2. GET that location to read what `doPost` returned.
 *
 * Hop 2 was measured failing intermittently: over IPv6 it returned `404` on 3
 * of 5 attempts from a network where IPv4 succeeded 5 of 5. A plain `fetch`
 * follows the redirect on whichever route it gets and would report a failure
 * for a lead that had already been saved. So both hops prefer IPv4, and hop 2
 * — a read of stored output, safe to repeat — is retried. Hop 1 is never
 * retried once it may have reached Google, so a retry cannot create a second
 * row or a second email.
 */

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

/** Per-request ceiling. Apps Script cold starts can take several seconds. */
const HOP_TIMEOUT_MS = 10_000;

/** Attempts at reading the result (hop 2). */
const RESULT_ATTEMPTS = 3;

/** Base backoff between result reads; grows linearly per attempt. */
const RESULT_RETRY_DELAY_MS = 400;

/** Hard cap on redirects within a single read. */
const MAX_REDIRECTS = 3;

/** Errors meaning "no IPv4 route here" — the only case hop 1 may retry. */
const NO_IPV4_ROUTE = new Set(['ENETUNREACH', 'EHOSTUNREACH', 'EADDRNOTAVAIL', 'EAI_ADDRFAMILY']);

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
}

/**
 * Maps the validated form request onto the Apps Script contract.
 *
 * Optional fields become empty strings rather than being omitted, so the sheet
 * always receives the same twelve columns in the same order.
 *
 * No timestamp is sent: Apps Script generates it server-side, because a
 * browser-supplied time cannot be trusted.
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
}

/** One HTTPS request, no redirect following, bounded by `HOP_TIMEOUT_MS`. */
function send(url: string, { method, body, family }: SendOptions): Promise<RawResponse> {
  return new Promise((resolve, reject) => {
    const req = request(
      url,
      {
        method,
        family,
        timeout: HOP_TIMEOUT_MS,
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

    req.on('timeout', () => req.destroy(new Error(`Apps Script request timed out (${method})`)));
    req.on('error', reject);

    if (body) {
      req.write(body);
    }

    req.end();
  });
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Hop 1. Pinned to IPv4; falls back to the OS default only when IPv4 has no
 * route at all — a failure raised before any byte left the machine, so the
 * retry cannot duplicate a submission.
 */
async function postSubmission(body: string): Promise<RawResponse> {
  try {
    return await send(APPS_SCRIPT_URL as string, { method: 'POST', body, family: 4 });
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;

    if (code && NO_IPV4_ROUTE.has(code)) {
      return send(APPS_SCRIPT_URL as string, { method: 'POST', body, family: 0 });
    }

    throw error;
  }
}

/**
 * Hop 2. Reads the stored `doPost` result, following up to `MAX_REDIRECTS`
 * further redirects, and retrying on anything other than a 200. The final
 * attempt lets the OS pick the route, so an IPv6-only host still works.
 */
async function readResult(location: string): Promise<RawResponse> {
  let lastFailure: unknown = new Error('Apps Script result was never read');

  for (let attempt = 1; attempt <= RESULT_ATTEMPTS; attempt += 1) {
    const family = attempt < RESULT_ATTEMPTS ? 4 : 0;
    let target = location;

    try {
      for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects += 1) {
        const response = await send(target, { method: 'GET', family });

        if (response.status === 200) {
          return response;
        }

        if (response.status >= 300 && response.status < 400 && response.location) {
          target = response.location;
          continue;
        }

        lastFailure = new Error(`Apps Script result returned ${response.status}`);
        break;
      }
    } catch (error) {
      lastFailure = error;
    }

    if (attempt < RESULT_ATTEMPTS) {
      await sleep(RESULT_RETRY_DELAY_MS * attempt);
    }
  }

  throw lastFailure;
}

/**
 * Posts the submission to Apps Script and reports whether it was accepted.
 *
 * Throws on transport failure, a non-2xx outcome, an unparseable body, or
 * `success: false`. Callers translate that into the generic message the
 * visitor sees — Google's own error text never reaches the browser.
 */
export async function submitToAppsScript(payload: AppsScriptPayload): Promise<void> {
  if (!APPS_SCRIPT_URL) {
    throw new Error('GOOGLE_APPS_SCRIPT_URL is not set');
  }

  const first = await postSubmission(JSON.stringify(payload));

  const isRedirect = first.status >= 300 && first.status < 400 && Boolean(first.location);
  const final = isRedirect ? await readResult(first.location as string) : first;

  if (final.status !== 200) {
    throw new Error(`Apps Script responded ${final.status}`);
  }

  let parsed: AppsScriptResponse;

  try {
    parsed = JSON.parse(final.body) as AppsScriptResponse;
  } catch {
    // An HTML body here almost always means the deployment is private, or the
    // URL is the editor's rather than the /exec endpoint.
    throw new Error(`Apps Script returned a non-JSON body: ${final.body.slice(0, 160)}`);
  }

  if (parsed.success !== true) {
    throw new Error(`Apps Script rejected the submission: ${parsed.message ?? 'no message'}`);
  }
}

/**
 * Reads the deployment's `doGet` health check. Writes nothing — safe to call
 * against any deployment to confirm which script is behind the URL.
 */
export async function checkAppsScriptHealth(): Promise<{ status: number; body: string }> {
  if (!APPS_SCRIPT_URL) {
    throw new Error('GOOGLE_APPS_SCRIPT_URL is not set');
  }

  const first = await send(APPS_SCRIPT_URL, { method: 'GET', family: 4 });
  const final =
    first.status >= 300 && first.status < 400 && first.location
      ? await readResult(first.location)
      : first;

  return { status: final.status, body: final.body };
}
