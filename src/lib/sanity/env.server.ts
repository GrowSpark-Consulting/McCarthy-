import 'server-only';

/**
 * The shared secret Sanity signs News webhooks with. Server-only: importing
 * this module from a client component fails the build, so the value can never
 * reach a browser bundle.
 *
 * Returns `undefined` when unset so the webhook route can answer 503 rather
 * than crash.
 */
export function getRevalidateSecret(): string | undefined {
  const secret = process.env.SANITY_REVALIDATE_SECRET?.trim();

  return secret ? secret : undefined;
}
