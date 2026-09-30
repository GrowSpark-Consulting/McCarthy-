import 'server-only';

import { createSign } from 'node:crypto';

/**
 * Appends rows to a Google Sheet using a service account.
 *
 * Implemented directly against the REST API with a self-signed JWT rather than
 * pulling in `googleapis` — that package is tens of megabytes for one append
 * call, and Node's own `crypto` signs the assertion in a few lines.
 *
 * Credentials are read from the environment and never leave the server.
 */

const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const TAB_NAME = process.env.GOOGLE_SHEETS_TAB_NAME ?? 'AI Audit';

const TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

/** Refresh slightly early so a token never expires mid-flight. */
const TOKEN_SKEW_SECONDS = 60;
const TOKEN_LIFETIME_SECONDS = 3600;

/** Whether the integration has everything it needs to run. */
export function isSheetsConfigured(): boolean {
  return Boolean(CLIENT_EMAIL && PRIVATE_KEY && SPREADSHEET_ID);
}

function base64Url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Environment variables cannot hold real newlines on most platforms, so the PEM
 * is stored with escaped `\n` and restored here.
 */
function normalisePrivateKey(key: string): string {
  return key.includes('\\n') ? key.replace(/\\n/g, '\n') : key;
}

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000);

  if (cachedToken && cachedToken.expiresAt - TOKEN_SKEW_SECONDS > now) {
    return cachedToken.value;
  }

  const header = base64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = base64Url(
    JSON.stringify({
      iss: CLIENT_EMAIL,
      scope: SCOPE,
      aud: TOKEN_ENDPOINT,
      iat: now,
      exp: now + TOKEN_LIFETIME_SECONDS,
    }),
  );

  const signer = createSign('RSA-SHA256');
  signer.update(`${header}.${claims}`);
  signer.end();

  const signature = base64Url(signer.sign(normalisePrivateKey(PRIVATE_KEY as string)));
  const assertion = `${header}.${claims}.${signature}`;

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Google token exchange failed (${response.status})`);
  }

  const payload = (await response.json()) as { access_token: string; expires_in: number };

  cachedToken = {
    value: payload.access_token,
    expiresAt: now + payload.expires_in,
  };

  return payload.access_token;
}

/**
 * Appends one row to the configured tab.
 *
 * `valueInputOption=RAW` keeps Sheets from reinterpreting values — a company
 * called "1-10" stays text rather than becoming a date.
 */
export async function appendSheetRow(values: readonly string[]): Promise<void> {
  if (!isSheetsConfigured()) {
    throw new Error('Google Sheets is not configured');
  }

  const token = await getAccessToken();
  const range = encodeURIComponent(`${TAB_NAME}!A1`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [values] }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Sheets append failed (${response.status}): ${detail.slice(0, 200)}`);
  }
}

/** Column order for the AI Audit tab. Header row should match exactly. */
export const AI_AUDIT_SHEET_COLUMNS = [
  'Timestamp',
  'Name',
  'Email',
  'Company',
  'Job Title',
  'Website',
  'Industry',
  'Company Size',
  'Goals',
  'Challenge',
  'Preferred Contact',
  'Additional Information',
] as const;
