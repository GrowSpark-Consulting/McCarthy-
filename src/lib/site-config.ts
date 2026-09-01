/**
 * Resolves the origin used for canonical URLs, Open Graph, the sitemap and
 * robots.txt.
 *
 * Order of preference:
 * 1. `NEXT_PUBLIC_SITE_URL` — set this to the real domain once it exists.
 * 2. Vercel's own production URL, so preview and production deployments never
 *    advertise `localhost` as their canonical origin.
 * 3. Localhost, for development.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;

  if (explicit) {
    return explicit.replace(/\/$/, '');
  }

  const vercelHost =
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;

  if (vercelHost) {
    return `https://${vercelHost.replace(/\/$/, '')}`;
  }

  return 'http://localhost:3000';
}

/**
 * Global, environment-aware site metadata.
 *
 * The origin is read from `NEXT_PUBLIC_SITE_URL` rather than hard-coded: the
 * production domain is not confirmed yet, and a guessed canonical URL would be
 * worse than a configurable one.
 */
export const siteConfig = {
  /** Legal/brand name. */
  name: 'McCarthy',
  /** Wordmark as it is drawn in the header and footer. */
  wordmark: 'McCarthy',
  /** Default document title. */
  title: 'McCarthy — AI transformation for the enterprise',
  /** Title pattern for every nested route. */
  titleTemplate: '%s | McCarthy',
  description:
    'AI strategy, agents, automation and workforce transformation — engineered around the way your business actually works.',
  /** Absolute origin, no trailing slash. See `resolveSiteUrl` below. */
  url: resolveSiteUrl(),
  locale: 'en_SG',
  /** Operating locations, used in the organisation JSON-LD and the footer. */
  locations: ['Singapore', 'India'],
  /** Confirmed channels only. */
  social: {
    linkedin: 'https://www.linkedin.com/company/mccarthy-ai',
  },
  keywords: [
    'AI transformation',
    'enterprise AI',
    'AI strategy',
    'AI agents',
    'intelligent automation',
    'AI workforce transformation',
    'AI consulting Singapore',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
