import 'server-only';

/**
 * Transactional email.
 *
 * No email infrastructure existed in the project, so this is new. It talks to
 * Resend's HTTP API with `fetch` — no SDK, no SMTP dependency, and it runs
 * anywhere Next.js does. Swapping providers means changing `deliver()` only;
 * nothing else in the codebase knows who sends the mail.
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;
const NOTIFICATION_EMAIL = process.env.AI_AUDIT_NOTIFICATION_EMAIL;

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

export function isEmailConfigured(): boolean {
  return Boolean(RESEND_API_KEY && EMAIL_FROM);
}

export function notificationRecipient(): string | undefined {
  return NOTIFICATION_EMAIL;
}

interface EmailMessage {
  readonly to: string;
  readonly subject: string;
  /** Plain text is always sent; HTML is optional but preferred by clients. */
  readonly text: string;
  readonly html?: string;
  readonly replyTo?: string;
}

async function deliver(message: EmailMessage): Promise<void> {
  if (!isEmailConfigured()) {
    throw new Error('Email is not configured');
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to: [message.to],
      subject: message.subject,
      text: message.text,
      ...(message.html ? { html: message.html } : {}),
      ...(message.replyTo ? { reply_to: message.replyTo } : {}),
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Email send failed (${response.status}): ${detail.slice(0, 200)}`);
  }
}

/** Escapes interpolated values so submitted text cannot inject markup. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export interface AuditNotification {
  readonly fullName: string;
  readonly email: string;
  readonly company: string;
  readonly jobTitle: string;
  readonly website: string;
  readonly industry: string;
  readonly companySize: string;
  readonly goals: string;
  readonly challenge: string;
  readonly preferredContact: string;
  readonly additionalInfo: string;
  readonly submittedAt: string;
}

const NOTIFICATION_FIELDS: ReadonlyArray<[string, keyof AuditNotification]> = [
  ['Name', 'fullName'],
  ['Email', 'email'],
  ['Company', 'company'],
  ['Job Title', 'jobTitle'],
  ['Website', 'website'],
  ['Industry', 'industry'],
  ['Company Size', 'companySize'],
  ['Goals', 'goals'],
  ['Challenge', 'challenge'],
  ['Preferred Contact', 'preferredContact'],
  ['Additional Information', 'additionalInfo'],
  ['Submission Time', 'submittedAt'],
];

/** Notifies the team. Replies go straight to the person who submitted. */
export async function sendAuditNotification(data: AuditNotification): Promise<void> {
  const recipient = notificationRecipient();

  if (!recipient) {
    throw new Error('AI_AUDIT_NOTIFICATION_EMAIL is not set');
  }

  const text = NOTIFICATION_FIELDS.map(([label, key]) => `${label}: ${data[key] || '—'}`).join(
    '\n',
  );

  const rows = NOTIFICATION_FIELDS.map(
    ([label, key]) =>
      `<tr><td style="padding:6px 16px 6px 0;color:#6d6d6d;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 0;color:#3d3c3c">${escapeHtml(data[key] || '—')}</td></tr>`,
  ).join('');

  await deliver({
    to: recipient,
    replyTo: data.email,
    subject: `New AI Audit Request — ${data.company}`,
    text,
    html: `<div style="font-family:Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:#3d3c3c">
  <h1 style="font-size:20px;margin:0 0 16px">New AI Audit Request</h1>
  <table style="border-collapse:collapse">${rows}</table>
</div>`,
  });
}

/** Confirms receipt to the person who submitted the form. */
export async function sendAuditConfirmation(fullName: string, email: string): Promise<void> {
  const firstName = fullName.split(' ')[0] || fullName;

  const text = `Hi ${firstName},

Thank you for requesting an AI Audit.

We've received your information and our team will review it before getting back to you.

Best regards,
McCarthy`;

  await deliver({
    to: email,
    subject: 'Your AI Audit Request Has Been Received',
    text,
    html: `<div style="font-family:Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#3d3c3c">
  <p>Hi ${escapeHtml(firstName)},</p>
  <p>Thank you for requesting an AI Audit.</p>
  <p>We&rsquo;ve received your information and our team will review it before getting back to you.</p>
  <p>Best regards,<br>McCarthy</p>
</div>`,
  });
}
