import { createHash } from 'node:crypto';

import { NextResponse } from 'next/server';

import {
  isEmailConfigured,
  notificationRecipient,
  sendAuditConfirmation,
  sendAuditNotification,
} from '@/lib/server/email';
import { appendSheetRow, isSheetsConfigured } from '@/lib/server/google-sheets';
import { clientIpFrom, rateLimit } from '@/lib/server/rate-limit';
import { aiAuditRequestSchema, type AiAuditRequest } from '@/lib/validation/ai-audit';

/** Node runtime: the Sheets JWT is signed with `node:crypto`. */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Submissions allowed per IP per window. */
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECONDS = 600;

/** How long an identical submission is treated as a duplicate click. */
const DEDUPE_WINDOW_SECONDS = 180;

/** Hard ceiling on the request body. The schema's own limits are well inside this. */
const MAX_BODY_BYTES = 16 * 1024;

type ApiError = { readonly error: string; readonly fields?: Record<string, string> };

function errorResponse(status: number, body: ApiError, headers?: HeadersInit) {
  return NextResponse.json(body, { status, headers });
}

/** Formats a value for a spreadsheet cell. */
function cell(value: string | undefined): string {
  return value ?? '';
}

/**
 * POST /api/ai-audit
 *
 * Pipeline: size check → JSON parse → schema validation (which also enforces
 * the honeypot) → rate limit → duplicate suppression → Google Sheets append →
 * notification and confirmation emails.
 *
 * The Sheets write is the operation that decides success: if the lead is
 * recorded, the request succeeds even when email delivery fails, because a
 * captured lead with a missing notification is recoverable and a lost lead is
 * not. Email failures are logged.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const declaredLength = Number(request.headers.get('content-length') ?? '0');

  if (declaredLength > MAX_BODY_BYTES) {
    return errorResponse(413, { error: 'That request was too large.' });
  }

  const raw = await request.text();

  if (raw.length > MAX_BODY_BYTES) {
    return errorResponse(413, { error: 'That request was too large.' });
  }

  let payload: unknown;

  try {
    payload = JSON.parse(raw);
  } catch {
    return errorResponse(400, { error: 'We could not read that request.' });
  }

  const parsed = aiAuditRequestSchema.safeParse(payload);

  if (!parsed.success) {
    // Field-level messages so the form can highlight the offending inputs;
    // nothing internal is exposed.
    const fields: Record<string, string> = {};

    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === 'string' && !fields[key]) {
        fields[key] = issue.message;
      }
    }

    return errorResponse(422, { error: 'Please check the highlighted fields.', fields });
  }

  const data: AiAuditRequest = parsed.data;
  const ip = clientIpFrom(request.headers);

  const limit = await rateLimit(ip, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_SECONDS);

  if (!limit.allowed) {
    return errorResponse(
      429,
      { error: 'Too many requests. Please try again shortly.' },
      { 'Retry-After': String(limit.retryAfter) },
    );
  }

  // Suppress duplicate rows from double-clicks or a retried request.
  const fingerprint = createHash('sha256')
    .update(`${data.email}|${data.company}|${data.challenge ?? ''}`)
    .digest('hex')
    .slice(0, 32);

  const duplicate = await rateLimit(`dupe:${fingerprint}`, 1, DEDUPE_WINDOW_SECONDS);

  if (!duplicate.allowed) {
    // Report success: the visitor's first submission was accepted, and showing
    // an error for their second click would be wrong.
    return NextResponse.json({ ok: true, duplicate: true });
  }

  const submittedAt = new Date().toISOString();
  const goals = data.goals.join(', ');

  const sheetsReady = isSheetsConfigured();
  const emailReady = isEmailConfigured();

  if (!sheetsReady && !emailReady) {
    if (process.env.NODE_ENV === 'development') {
      // Lets the full client experience be exercised locally without secrets.
      console.warn('[ai-audit] no sink configured; logging submission instead', {
        ...data,
        submittedAt,
      });
      return NextResponse.json({ ok: true, delivered: 'log' });
    }

    console.error('[ai-audit] no delivery target configured');
    return errorResponse(503, {
      error: 'Submissions are temporarily unavailable. Please email us directly.',
    });
  }

  if (sheetsReady) {
    try {
      await appendSheetRow([
        submittedAt,
        data.fullName,
        data.email,
        data.company,
        cell(data.jobTitle),
        cell(data.website),
        cell(data.industry),
        cell(data.companySize),
        goals,
        cell(data.challenge),
        data.preferredContact,
        cell(data.additionalInfo),
      ]);
    } catch (error) {
      console.error('[ai-audit] sheets append failed', error);

      // Without email as a backstop there is nowhere left to put the lead.
      if (!emailReady || !notificationRecipient()) {
        return errorResponse(502, {
          error: 'We could not record your request. Please try again in a moment.',
        });
      }
    }
  }

  if (emailReady) {
    const results = await Promise.allSettled([
      notificationRecipient()
        ? sendAuditNotification({
            fullName: data.fullName,
            email: data.email,
            company: data.company,
            jobTitle: cell(data.jobTitle),
            website: cell(data.website),
            industry: cell(data.industry),
            companySize: cell(data.companySize),
            goals,
            challenge: cell(data.challenge),
            preferredContact: data.preferredContact,
            additionalInfo: cell(data.additionalInfo),
            submittedAt,
          })
        : Promise.resolve(),
      sendAuditConfirmation(data.fullName, data.email),
    ]);

    for (const result of results) {
      if (result.status === 'rejected') {
        console.error('[ai-audit] email delivery failed', result.reason);
      }
    }
  }

  return NextResponse.json({ ok: true });
}

/** Anything other than POST is not part of this endpoint's contract. */
export async function GET(): Promise<NextResponse> {
  return errorResponse(405, { error: 'Method not allowed.' }, { Allow: 'POST' });
}
