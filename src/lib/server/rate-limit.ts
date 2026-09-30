import 'server-only';

/**
 * Fixed-window rate limiting.
 *
 * Uses Upstash Redis over its REST API when configured, which is the only
 * option that actually holds across serverless instances. Without it, an
 * in-process map is used — correct on a single long-lived server, best-effort
 * on serverless, and always better than nothing.
 *
 * No project Redis existed to reuse, so this is new.
 */

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export interface RateLimitResult {
  readonly allowed: boolean;
  /** Seconds until the window resets. */
  readonly retryAfter: number;
}

interface Window {
  count: number;
  expiresAt: number;
}

const memoryWindows = new Map<string, Window>();

/** Keeps the fallback map from growing without bound. */
function sweepExpired(now: number): void {
  for (const [key, window] of memoryWindows) {
    if (window.expiresAt <= now) {
      memoryWindows.delete(key);
    }
  }
}

function limitInMemory(key: string, max: number, windowSeconds: number): RateLimitResult {
  const now = Date.now();

  if (memoryWindows.size > 5000) {
    sweepExpired(now);
  }

  const existing = memoryWindows.get(key);

  if (!existing || existing.expiresAt <= now) {
    memoryWindows.set(key, { count: 1, expiresAt: now + windowSeconds * 1000 });
    return { allowed: true, retryAfter: 0 };
  }

  existing.count += 1;

  if (existing.count > max) {
    return { allowed: false, retryAfter: Math.ceil((existing.expiresAt - now) / 1000) };
  }

  return { allowed: true, retryAfter: 0 };
}

/**
 * INCR the counter and set its TTL on first write, in one pipelined round trip.
 */
async function limitInRedis(
  key: string,
  max: number,
  windowSeconds: number,
): Promise<RateLimitResult> {
  const response = await fetch(`${UPSTASH_URL}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      ['INCR', key],
      ['EXPIRE', key, String(windowSeconds), 'NX'],
      ['TTL', key],
    ]),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Upstash responded ${response.status}`);
  }

  const payload = (await response.json()) as Array<{ result?: number; error?: string }>;
  const count = Number(payload[0]?.result ?? 0);
  const ttl = Number(payload[2]?.result ?? windowSeconds);

  if (count > max) {
    return { allowed: false, retryAfter: ttl > 0 ? ttl : windowSeconds };
  }

  return { allowed: true, retryAfter: 0 };
}

/**
 * @param identifier Caller identity — the client IP for this route.
 * @param max Requests permitted per window.
 * @param windowSeconds Length of the window.
 */
export async function rateLimit(
  identifier: string,
  max: number,
  windowSeconds: number,
): Promise<RateLimitResult> {
  const key = `ratelimit:ai-audit:${identifier}`;

  if (UPSTASH_URL && UPSTASH_TOKEN) {
    try {
      return await limitInRedis(key, max, windowSeconds);
    } catch (error) {
      // A rate limiter that is down must not take the form down with it.
      console.error('[ai-audit] rate limit backend unavailable, falling back', error);
    }
  }

  return limitInMemory(key, max, windowSeconds);
}

/**
 * Best-effort client IP.
 *
 * Trusts `x-forwarded-for` because the app is expected to sit behind Vercel's
 * proxy, which overwrites the header. Behind an untrusted proxy this value can
 * be spoofed, which is why it gates rate limiting only and never authorisation.
 */
export function clientIpFrom(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');

  if (forwarded) {
    const [first] = forwarded.split(',');
    if (first?.trim()) {
      return first.trim();
    }
  }

  return headers.get('x-real-ip')?.trim() || 'unknown';
}
