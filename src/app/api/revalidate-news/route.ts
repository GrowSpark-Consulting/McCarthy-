import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { revalidatePath } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';

import { newsHref } from '@/lib/news';
import { getRevalidateSecret } from '@/lib/sanity/env.server';

/**
 * On-demand revalidation for McCarthy News, called by a signed Sanity webhook.
 *
 * Mirrors `next-sanity/webhook`'s `parseBody(req, secret, true)`: verify the
 * signature against the raw body, then wait for Content Lake / API CDN
 * eventual consistency before revalidating, so the re-render cannot re-cache
 * stale data.
 *
 * Expected webhook projection:
 *   {_type, "slug": after().slug.current, "previousSlug": before().slug.current,
 *    "operation": delta::operation()}
 */

const NEWS_TYPE = 'newsPost';
const CONSISTENCY_DELAY_MS = 3000;
/** Matches the Studio's slug rule; anything else is never turned into a path. */
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Every page that renders News content, beyond the article pages themselves. */
const NEWS_PAGES = ['/', '/news', '/sitemap.xml'] as const;

interface NewsWebhookPayload {
  readonly _type?: unknown;
  readonly slug?: unknown;
  readonly previousSlug?: unknown;
  readonly operation?: unknown;
}

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status });
}

export async function POST(request: NextRequest) {
  const secret = getRevalidateSecret();

  if (!secret) {
    console.error('[revalidate-news] SANITY_REVALIDATE_SECRET is not configured');
    return json({ message: 'Revalidation is not configured' }, 503);
  }

  const signature = request.headers.get(SIGNATURE_HEADER_NAME);
  const rawBody = await request.text();

  let validSignature = false;

  if (signature) {
    try {
      validSignature = await isValidSignature(rawBody, signature, secret);
    } catch {
      validSignature = false;
    }
  }

  if (!validSignature) {
    console.warn('[revalidate-news] Rejected request with a missing or invalid signature');
    return json({ message: 'Invalid signature' }, 401);
  }

  await new Promise((resolve) => setTimeout(resolve, CONSISTENCY_DELAY_MS));

  let body: NewsWebhookPayload;

  try {
    body = JSON.parse(rawBody) as NewsWebhookPayload;
  } catch {
    return json({ message: 'Invalid JSON body' }, 400);
  }

  if (typeof body?._type !== 'string' || !body._type) {
    return json({ message: 'Bad request: missing _type' }, 400);
  }

  if (body._type !== NEWS_TYPE) {
    return json({ message: 'Ignored type', type: body._type }, 200);
  }

  const paths = new Set<string>(NEWS_PAGES);

  for (const slug of [body.slug, body.previousSlug]) {
    if (typeof slug === 'string' && SLUG_PATTERN.test(slug)) {
      paths.add(newsHref(slug));
    }
  }

  for (const path of paths) {
    revalidatePath(path);
  }

  const revalidated = [...paths];

  console.info('[revalidate-news] Revalidated', {
    operation: typeof body.operation === 'string' ? body.operation : 'unknown',
    slug: body.slug ?? null,
    previousSlug: body.previousSlug ?? null,
    paths: revalidated,
  });

  return json({ revalidated: true, paths: revalidated, now: Date.now() }, 200);
}

export function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405, headers: { Allow: 'POST' } },
  );
}
