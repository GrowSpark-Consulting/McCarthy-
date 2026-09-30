import { createHash } from 'node:crypto';

import { NextResponse } from 'next/server';

import {
  isAppsScriptConfigured,
  submitToAppsScript,
  toAppsScriptPayload,
} from '@/lib/server/apps-script';
import { clientIpFrom, rateLimit } from '@/lib/server/rate-limit';
import { aiAuditRequestSchema, type AiAuditRequest } from '@/lib/validation/ai-audit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Submissions allowed per IP per window. */
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECONDS = 600;

/** How long an identical submission is treated as a duplicate click. */
const DEDUPE_WINDOW_SECONDS = 180;

/** Hard ceiling on the request body. The schema's own limits sit well inside it. */
const MAX_BODY_BYTES = 32 * 1024;

/** The single message shown to a visitor when delivery fails. */
const DELIVERY_FAILURE_MESSAGE = "We couldn't submit your request right now. Please try again.";

interface ErrorBody {
  readonly success: false;
  readonly message: string;
  readonly fields?: Record<string, string>;
}

function fail(status: number, body: ErrorBody, headers?: HeadersInit) {
  return NextResponse.json(body, { status, headers });
}

/**
 * POST /api/ai-audit
 *
 * Pipeline: size check → JSON parse → schema validation (which also enforces
 * the honeypot) → rate limit → duplicate suppression → Google Apps Script.
 *
 * Apps Script owns the Google side: it appends the row and sends the single
 * admin notification through Gmail. This app therefore holds no Google
 * credentials — only the deployment URL, server-side.
 *
 * No email is ever sent to the person who submitted the form. The success
 * message on the page is UI only.
 *
 * Google's own error text never reaches the browser: failures are logged in
 * full and answered with one generic message.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const declaredLength = Number(request.headers.get('content-length') ?? '0');

  if (declaredLength > MAX_BODY_BYTES) {
    return fail(413, { success: false, message: 'That request was too large.' });
  }

  const raw = await request.text();

  if (raw.length > MAX_BODY_BYTES) {
    return fail(413, { success: false, message: 'That request was too large.' });
  }

  let payload: unknown;

  try {
    payload = JSON.parse(raw);
  } catch {
    return fail(400, { success: false, message: 'We could not read that request.' });
  }

  const parsed = aiAuditRequestSchema.safeParse(payload);

  if (!parsed.success) {
    const fields: Record<string, string> = {};

    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === 'string' && !fields[key]) {
        fields[key] = issue.message;
      }
    }

    return fail(422, {
      success: false,
      message: 'Please check the highlighted fields.',
      fields,
    });
  }

  const data: AiAuditRequest = parsed.data;
  const ip = clientIpFrom(request.headers);

  const limit = await rateLimit(ip, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_SECONDS);

  if (!limit.allowed) {
    return fail(
      429,
      { success: false, message: 'Too many requests. Please try again shortly.' },
      { 'Retry-After': String(limit.retryAfter) },
    );
  }

  // Suppress duplicate rows from a double click or a retried request.
  const fingerprint = createHash('sha256')
    .update(`${data.email}|${data.company}|${data.challenge}`)
    .digest('hex')
    .slice(0, 32);

  const duplicate = await rateLimit(`dupe:${fingerprint}`, 1, DEDUPE_WINDOW_SECONDS);

  if (!duplicate.allowed) {
    // The first submission was accepted; showing an error for the second click
    // would be wrong, and re-posting would create a second row.
    return NextResponse.json({ success: true, message: 'AI Audit request received successfully' });
  }

  if (!isAppsScriptConfigured()) {
    if (process.env.NODE_ENV === 'development') {
      // Lets the full client experience be exercised locally without a
      // deployed Apps Script.
      console.warn('[ai-audit] GOOGLE_APPS_SCRIPT_URL unset; logging submission instead', data);
      return NextResponse.json({ success: true, message: 'Logged (development only)' });
    }

    console.error('[ai-audit] GOOGLE_APPS_SCRIPT_URL is not configured');
    return fail(500, { success: false, message: DELIVERY_FAILURE_MESSAGE });
  }

  try {
    await submitToAppsScript(toAppsScriptPayload(data));
  } catch (error) {
    console.error('[ai-audit] Apps Script delivery failed', error);
    return fail(500, { success: false, message: DELIVERY_FAILURE_MESSAGE });
  }

  return NextResponse.json({ success: true, message: 'AI Audit request received successfully' });
}

/** Anything other than POST is not part of this endpoint's contract. */
export async function GET(): Promise<NextResponse> {
  return fail(405, { success: false, message: 'Method not allowed.' }, { Allow: 'POST' });
}
