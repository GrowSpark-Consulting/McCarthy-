import type { LinkRef } from './homepage';

/**
 * Applications page content.
 *
 * Every string here is copied verbatim from the supplied
 * `mccarthy-application-services-copy.md` brief — nothing rewritten,
 * shortened, expanded or invented. Bracketed `[...]` text is the brief's own
 * placeholder marker and is kept exactly as written, including its editorial
 * asides, per the brief's explicit instruction to preserve placeholders
 * rather than fill them in.
 *
 * Two exceptions, both mechanical rather than editorial:
 * - The source file's mojibake (`Â·`, stray `â`) is corrected to the
 *   intended `·` / em dash — a transfer encoding artifact, not content.
 * - "Application development"'s italic `*(...)*` aside ("e.g. your work on
 *   [[dreamfit-couture]]...") reads as a note to whoever is editing the
 *   brief, not page copy — addressed to "you" rather than a site visitor —
 *   so only the plain sentence before it is used as the card body.
 */

export interface Capability {
  readonly title: string;
  readonly body: string;
}

export interface TrendArticle {
  readonly title: string;
  readonly body: string;
  readonly link: LinkRef;
}

export interface CustomerStory {
  readonly title: string;
  readonly body: string;
}

export const APPLICATIONS_BREADCRUMB: readonly { label: string; href?: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
  { label: 'Applications' },
];

export const APPLICATIONS_LOCAL_NAV: readonly LinkRef[] = [
  { label: 'What we do', href: '#what-we-do' },
  { label: 'How we help', href: '#how-we-help' },
  { label: 'Trends and insights', href: '#trends-and-insights' },
  { label: 'Our customers', href: '#our-customers' },
  { label: 'Our partners', href: '#our-partners' },
  { label: 'Connect with us', href: '#connect-with-us' },
];

export const APPLICATIONS_HERO = {
  eyebrow: 'Services',
  heading: 'Application Services',
  body: 'Transform your applications with an agentic AI-powered approach for business agility.',
  features: [
    {
      title: 'Reimagine app ecosystems with AI for lasting value',
      link: { label: 'Read the eBook', href: '#' } satisfies LinkRef,
    },
    {
      title: 'Enable business agility and innovation at scale',
      link: { label: 'Read the report', href: '#' } satisfies LinkRef,
    },
    {
      title:
        '[Navigate a major platform migration/transformation — swap for whichever large systems work you actually do]',
      link: { label: 'Learn more', href: '#' } satisfies LinkRef,
    },
  ],
} as const;

export const APPLICATIONS_WHAT_WE_DO = {
  heading: 'Turn your applications into real business outcomes with agentic AI-driven workflows',
  intro:
    'To stay agile and deliver intelligent, more adaptive experiences, organizations must reimagine applications in an AI-native era. Traditional approaches built for periodic change are no longer enough.',
  lead: 'McCarthy helps you continuously modernize and manage complex application portfolios across hybrid, multi-cloud and distributed environments. We embed AI, automation, security and governance into your processes from the start. With agentic AI-enabled, workflow-driven modernization across the application lifecycle, we help you:',
  bullets: [
    'boost performance',
    'strengthen resilience',
    'improve security and trust',
    'unlock measurable business outcomes',
  ],
} as const;

export const APPLICATIONS_HOW_WE_HELP = {
  eyebrow: 'How McCarthy helps',
  heading: 'Helping optimize applications with AI for agility, performance and security',
  tabs: [
    {
      label: 'Our services',
      capabilities: [
        {
          title: 'Application modernization',
          body: '[Description — rebuilding/re-architecting legacy applications with modern, AI-native foundations.]',
        },
        {
          title: 'Application development',
          body: 'Build secure, intelligent applications.',
        },
        {
          title: 'Application management services',
          body: '[Description — ongoing support, maintenance and operations for client applications.]',
        },
        {
          title: '[Platform-specific service tile — e.g. "Cloud application services"]',
          body: '[Description]',
        },
        {
          title: '[Platform-specific service tile — e.g. "Custom AI product engineering"]',
          body: '[Description]',
        },
      ] satisfies readonly Capability[],
    },
    {
      label: 'The McCarthy difference',
      placeholder: '[Content for this tab to be supplied]',
    },
    {
      label: 'Awards and recognition',
      placeholder: '[Content for this tab to be supplied]',
    },
  ],
} as const;

export const APPLICATIONS_TRENDS = {
  eyebrow: 'Trends and insights',
  heading: 'Applications news and perspectives',
  articles: [
    {
      title: 'AI, architecture, and lessons shaping modern business application strategy',
      body: 'McCarthy experts share lessons on agentic AI, modular architectures, and business-aligned application strategies for future-ready, adaptive, and scalable ecosystems.',
      link: { label: 'Read more', href: '#' },
    },
    {
      title: '[Piece on your AI-driven modernization approach or a specific practice launch]',
      body: '[Description of a McCarthy initiative — e.g. a center of excellence, framework, or methodology you’ve built for faster, scalable transformations.]',
      link: { label: 'Read more', href: '#' },
    },
    {
      title: 'McCarthy partners with [Client] on technology transformation',
      body: 'McCarthy and [Client] extend their partnership to modernize [Client]’s technology ecosystem using [your agentic AI framework name] and automation to boost reliability, decision-making, and customer experience.',
      link: { label: 'Read more', href: '#' },
    },
  ] satisfies readonly TrendArticle[],
} as const;

/** The brief's "OUR CUSTOMERS" section is itself titled "We're invested in customer success". */
export const APPLICATIONS_CUSTOMERS = {
  heading: 'We’re invested in customer success',
  stories: [
    {
      title: '[Case study 1 headline]',
      body: '[Client] achieves its vision of [outcome] by [what McCarthy did — re-architecting, rebuilding, modernizing].',
    },
    {
      title: '[Case study 2 headline]',
      body: '[Client], a [industry] company, wanted to [goal]. McCarthy helped [what was delivered].',
    },
  ] satisfies readonly CustomerStory[],
} as const;

export const APPLICATIONS_PARTNERS = {
  heading: 'Global alliance partnerships enable our customers’ complex hybrid IT ecosystems.',
  link: { label: 'Learn more about our alliance partners', href: '#' } satisfies LinkRef,
} as const;

export const APPLICATIONS_EXPERT_VOICE = {
  heading: '[Insight headline — e.g. "What we’ve learned building AI-native applications for clients"]',
  quote:
    '[A quote from someone on your team about lessons learned delivering application/product work — technical alignment with business outcomes, buy-in, etc.]',
  name: '[Name]',
  title: '[Title — e.g. "Head of Application Services"]',
  profileLink: { label: 'View profile', href: '#' } satisfies LinkRef,
} as const;
