import 'server-only';

import type { AiAuditRequest } from '@/lib/validation/ai-audit';

/**
 * Bridge to the Google Apps Script web app.
 *
 * Apps Script owns everything Google-side: it writes the row to the sheet and
 * sends the admin notification through Gmail under the script owner's account.
 * That means this app holds no Google credentials at all — only the deployment
 * URL, and only on the server.
 */

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

/** Apps Script cold starts are slow; past this the request is not coming back. */
const REQUEST_TIMEOUT_MS = 15_000;

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

/**
 * Posts the submission to Apps Script and reports whether it was accepted.
 *
 * Throws on transport failure, timeout, a non-2xx status, an unparseable body,
 * or `success: false`. Callers translate that into the generic message the
 * visitor sees — Google's own error text never reaches the browser.
 */
export async function submitToAppsScript(payload: AppsScriptPayload): Promise<void> {
  if (!APPS_SCRIPT_URL) {
    throw new Error('GOOGLE_APPS_SCRIPT_URL is not set');
  }

  const response = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    // Apps Script web apps reject an unexpected preflight; text/plain keeps the
    // request simple while the body stays JSON, which `doPost` parses from
    // `e.postData.contents`.
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
    redirect: 'follow',
    cache: 'no-store',
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Apps Script responded ${response.status}`);
  }

  const raw = await response.text();
  let parsed: AppsScriptResponse;

  try {
    parsed = JSON.parse(raw) as AppsScriptResponse;
  } catch {
    // An HTML body here almost always means the deployment is private or the
    // URL points at the editor rather than the /exec endpoint.
    throw new Error(`Apps Script returned a non-JSON body: ${raw.slice(0, 160)}`);
  }

  if (parsed.success !== true) {
    throw new Error(`Apps Script rejected the submission: ${parsed.message ?? 'no message'}`);
  }
}
