import type { NavCta, NavLink } from '@/types/navigation';

/**
 * Site information architecture — declared once, consumed by the desktop
 * header, the mobile menu and the search overlay.
 *
 * Routes point at their final paths. Only `/` exists in Phase 1; the remaining
 * pages are delivered in later phases and will resolve without any change here.
 */
export const PRIMARY_NAV: readonly NavLink[] = [
  {
    label: 'AI Solutions',
    href: '/ai-solutions',
    description: 'AI agents, automation, applications and knowledge systems.',
  },
  {
    label: 'AI Workforce',
    href: '/ai-workforce',
    description: 'Training, governance and embedding AI into everyday work.',
  },
  {
    label: 'AI Lab',
    href: '/ai-lab',
    description: 'Interactive demonstrations of real AI systems — not slideware.',
  },
  {
    label: 'Industries',
    href: '/industries',
    description: 'Where AI creates measurable value, sector by sector.',
  },
  {
    label: 'About',
    href: '/about',
    description: 'Who McCarthy is and how the Transformation System works.',
  },
] as const;

/**
 * Whether `next/link` may prefetch site routes.
 *
 * The destinations above ship phase by phase. Until they exist, Next would
 * prefetch every visible link on load and take a 404 for each one, so
 * prefetching is off by default; `canPrefetch` opts in the routes that exist.
 */
export const PREFETCH_SITE_ROUTES = false;

/** Routes that are actually built. Add each page here as it ships. */
const LIVE_ROUTES: ReadonlySet<string> = new Set(['/', '/ai-audit']);

/**
 * Routes whose hero is dark enough for the header to sit over it as
 * translucent glass.
 *
 * Everywhere else the header uses its solid surface: measured against a white
 * hero, the translucent bar composites to rgb(117,129,131), which puts the nav
 * labels at 3.39:1 — below the 4.5:1 WCAG AA needs. Solid restores it.
 */
const DARK_HERO_ROUTES: ReadonlySet<string> = new Set(['/']);

/** Whether the header may use its translucent state on this route. */
export function hasDarkHero(pathname: string): boolean {
  return DARK_HERO_ROUTES.has(pathname);
}

/**
 * Prefetch only what resolves. Passing this to `next/link` gives live routes an
 * instant transition without firing 404s for the pages still to come.
 */
export function canPrefetch(href: string): boolean {
  return LIVE_ROUTES.has(href);
}

/** Header call to action. */
export const PRIMARY_CTA: NavCta = {
  label: 'Book an AI Audit',
  href: '/ai-audit',
  ariaLabel: 'Book an AI Audit with McCarthy',
} as const;

/**
 * Everything the site search can reach today. Kept separate from `PRIMARY_NAV`
 * because search also covers destinations that are not in the top-level menu.
 */
export const SEARCHABLE_DESTINATIONS: readonly NavLink[] = [
  ...PRIMARY_NAV,
  {
    label: 'AI Audit',
    href: '/ai-audit',
    description: 'Book an AI Transformation Assessment.',
  },
  {
    label: 'Insights',
    href: '/insights',
    description: 'Perspectives on AI strategy, agents and automation.',
  },
  {
    label: 'Careers',
    href: '/careers',
    description: 'Help build an AI transformation company from the ground up.',
  },
  {
    label: 'Contact',
    href: '/contact',
    description: 'Talk to McCarthy about a transformation challenge.',
  },
] as const;

/**
 * Case-insensitive substring match across label and description.
 * Returns every destination when the query is empty, so the overlay always has
 * something useful on screen.
 */
export function searchDestinations(query: string): readonly NavLink[] {
  const term = query.trim().toLowerCase();

  if (term.length === 0) {
    return SEARCHABLE_DESTINATIONS;
  }

  return SEARCHABLE_DESTINATIONS.filter((destination) => {
    const haystack = `${destination.label} ${destination.description ?? ''}`.toLowerCase();
    return haystack.includes(term);
  });
}
