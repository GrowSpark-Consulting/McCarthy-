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
  /** Absolute origin, no trailing slash. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, ''),
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
