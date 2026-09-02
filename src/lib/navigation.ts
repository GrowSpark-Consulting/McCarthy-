import type { MegaMenu, NavCta, NavLink, PrimaryNavItem } from '@/types/navigation';

/**
 * Whether `next/link` may prefetch site routes.
 *
 * Only `/` exists in Phase 1; the remaining pages are delivered in later
 * phases and will resolve without any change here.
 */
export const PREFETCH_SITE_ROUTES = false;

const WHAT_WE_DO_MEGA_MENU: MegaMenu = {
  columns: [
    [
      {
        heading: 'Consulting services',
        links: [
          { label: 'Agentic modernization', href: '/agentic-modernization' },
          { label: 'Business workflow transformation', href: '/business-workflow-transformation' },
          { label: 'Cybersecurity', href: '/cybersecurity' },
          { label: 'People and performance', href: '/people-and-performance' },
        ],
      },
      {
        heading: 'How we work',
        links: [
          { label: 'McCarthy Labs', href: '/ai-lab' },
          { label: 'McCarthy Flow', href: '/mccarthy-flow' },
          { label: 'The McCarthy Transformation System™️', href: '/about/transformation-system' },
          { label: 'McCarthy Institute', href: '/mccarthy-institute' },
        ],
      },
    ],
    [
      {
        heading: 'Technology services',
        links: [
          { label: 'Applications', href: '/applications' },
          { label: 'Artificial intelligence and data', href: '/artificial-intelligence-and-data' },
          { label: 'Cloud', href: '/cloud' },
          { label: 'Cyber resilience', href: '/cyber-resilience' },
          { label: 'Digital workplace', href: '/digital-workplace' },
          { label: 'Mainframe', href: '/mainframe' },
          { label: 'Networks', href: '/networks' },
        ],
      },
    ],
    [
      {
        heading: 'Industries',
        links: [
          { label: 'Automotive', href: '/industries/automotive' },
          { label: 'Banking and financial markets', href: '/industries/banking-and-financial-markets' },
          { label: 'Chemical, Oil and Gas', href: '/industries/chemical-oil-and-gas' },
          { label: 'Consumer and Retail', href: '/industries/consumer-and-retail' },
          { label: 'Government', href: '/industries/government' },
          { label: 'Healthcare', href: '/industries/healthcare' },
          { label: 'Insurance', href: '/industries/insurance' },
          { label: 'Manufacturing', href: '/industries/manufacturing' },
          { label: 'Technology, Media and…', href: '/industries/technology-media' },
          { label: 'Travel and Transportation', href: '/industries/travel-and-transportation' },
          { label: 'Utilities', href: '/industries/utilities' },
        ],
      },
    ],
  ],
  spotlight: {
    eyebrow: 'Spotlight',
    title: 'Inside the McCarthy Transformation System™',
    body: 'A published methodology, not a black box — Discover, Diagnose, Prioritise, Architect, Build, Adopt, Optimise.',
    link: { label: 'See the Transformation System', href: '/about/transformation-system' },
  },
} as const;

const WHO_WE_ARE_MEGA_MENU: MegaMenu = {
  columns: [
    [
      {
        heading: 'Our company',
        links: [
          { label: 'About us', href: '/about' },
          { label: 'Alliances', href: '/about/alliances' },
          { label: 'Leadership', href: '/about/leadership' },
          { label: 'Locations', href: '/about/locations' },
          { label: 'Trust', href: '/about/trust' },
        ],
      },
    ],
    [
      {
        heading: 'Our impact',
        links: [
          { label: 'Customer stories', href: '/customer-stories' },
          { label: 'News', href: '/news' },
        ],
      },
    ],
    [
      {
        heading: 'Get involved',
        links: [
          { label: 'Careers', href: '/careers' },
          { label: 'Contact us', href: '/contact' },
        ],
      },
    ],
  ],
  spotlight: {
    eyebrow: 'Spotlight',
    title: 'Where business understanding meets AI execution',
    body: 'McCarthy exists to help organisations understand what AI makes possible, and turn that opportunity into systems, workflows and people capable of delivering real business outcomes.',
    link: { label: 'Our story', href: '/about' },
  },
} as const;

/**
 * Site information architecture — declared once, consumed by the desktop
 * header, the mobile menu and the search overlay.
 *
 * "What we do" and "Who we are" are mega-menu triggers rather than plain
 * links; "Insights", "News" and "Careers" route directly and carry no
 * dropdown.
 */
export const PRIMARY_NAV: readonly PrimaryNavItem[] = [
  { label: 'What we do', megaMenu: WHAT_WE_DO_MEGA_MENU },
  { label: 'Who we are', megaMenu: WHO_WE_ARE_MEGA_MENU },
  { label: 'Insights', href: '/insights' },
  { label: 'News', href: '/news' },
  { label: 'Careers', href: '/careers' },
] as const;

/** Header call to action. */
export const PRIMARY_CTA: NavCta = {
  label: 'Book an AI Audit',
  href: '/ai-audit',
  ariaLabel: 'Book an AI Audit with McCarthy',
} as const;

/**
 * Everything the site search can reach today. Kept separate from
 * `PRIMARY_NAV` because search also covers destinations that are not in the
 * top-level menu (and the top-level menu itself now mixes plain links with
 * mega-menu triggers that have no direct route).
 */
export const SEARCHABLE_DESTINATIONS: readonly NavLink[] = [
  {
    label: 'What we do',
    href: '/what-we-do',
    description: 'Consulting, technology services and industries.',
  },
  { label: 'Who we are', href: '/about', description: 'McCarthy, our company, our impact.' },
  {
    label: 'Insights',
    href: '/insights',
    description: 'Perspectives on AI strategy, agents and automation.',
  },
  { label: 'News', href: '/news', description: 'The latest from McCarthy.' },
  {
    label: 'Careers',
    href: '/careers',
    description: 'Help build an AI transformation company from the ground up.',
  },
  ...WHAT_WE_DO_MEGA_MENU.columns.flat().flatMap((column) => column.links),
  ...WHO_WE_ARE_MEGA_MENU.columns.flat().flatMap((column) => column.links),
  {
    label: 'AI Audit',
    href: '/ai-audit',
    description: 'Book an AI Transformation Assessment.',
  },
  {
    label: 'Contact',
    href: '/contact',
    description: 'Talk to McCarthy about a transformation challenge.',
  },
] as const;

/** Stable id for a mega-menu trigger, shared by the trigger button and its panel. */
export function getMegaMenuId(label: string): string {
  return `megamenu-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

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

/**
 * Routes that open with a dark, full-bleed hero the fixed header sits on top of.
 *
 * The bar rides those transparently with inverted labels until it is hovered
 * or the page scrolls past the hero. Every other route puts it over a light
 * page, where the white glass and ink labels are the readable pairing.
 */
const DARK_HERO_ROUTES: readonly string[] = [
  '/',
  '/business-workflow-transformation',
  '/what-we-do/consulting/people-performance',
  '/cybersecurity',
  '/mccarthy-institute',
  '/mccarthy-flow',
  '/ai-lab',
];

export function hasDarkHero(pathname: string): boolean {
  return DARK_HERO_ROUTES.includes(pathname);
}
