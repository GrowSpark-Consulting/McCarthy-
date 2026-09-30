import type { FaqEntry, LinkRef } from './homepage';

/**
 * AI and Data page content.
 *
 * Every string here is copied verbatim from the supplied
 * `mccarthy-ai-and-data-copy.md` brief — nothing rewritten, shortened,
 * expanded or invented. Bracketed `[...]` text is the brief's own
 * placeholder marker and is kept exactly as written. The only change is
 * mechanical: the source file's mojibake (`Â·`, stray `â`) is corrected to
 * the intended `·` / em dash — a transfer encoding artifact, not content.
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

export const AI_DATA_BREADCRUMB: readonly { label: string; href?: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
  { label: 'Artificial Intelligence and Data' },
];

export const AI_DATA_LOCAL_NAV: readonly LinkRef[] = [
  { label: 'What we do', href: '#what-we-do' },
  { label: 'How we help', href: '#how-we-help' },
  { label: 'Trends and insights', href: '#trends-and-insights' },
  { label: 'Our customers', href: '#our-customers' },
  { label: 'Our partners', href: '#our-partners' },
  { label: 'Connect with us', href: '#connect-with-us' },
];

export const AI_DATA_HERO = {
  eyebrow: 'Services',
  heading: 'AI and data',
  body: 'Unlocking value from data and AI faster to help you scale and transform your digital business.',
  features: [
    {
      title: 'Realize business value with end-to-end data and AI transformation',
      link: { label: 'Read the solution brief', href: '#' } satisfies LinkRef,
    },
    {
      title: '‘Rethink AI’: Becoming AI-native',
      link: { label: 'Learn more', href: '#' } satisfies LinkRef,
    },
    {
      title:
        '[Recognition/positioning piece — e.g. a report or benchmark that establishes credibility]',
      link: { label: 'Read the report', href: '#' } satisfies LinkRef,
    },
  ],
} as const;

export const AI_DATA_WHAT_WE_DO = {
  heading: 'Improve the use of data insights in decision-making',
  body: 'Gather business insights at scale with a robust data foundation, modernization, and platform management. Our expertise — combined with the latest innovations from technology partners and hyperscalers — prepares your business for artificial intelligence. We integrate reliable, modular, and scalable solutions with your existing data architecture to accelerate your data modernization journey, enabling faster data preparation through automated workflows and a modern data fabric.',
} as const;

export const AI_DATA_FEATURED_RESOURCE = {
  heading: 'Three insights for reshaping the AI-native enterprise',
  body: 'Experts unpack what leaders need to gain a competitive advantage.',
  link: { label: 'Read the article', href: '#' } satisfies LinkRef,
} as const;

export const AI_DATA_HOW_WE_HELP = {
  eyebrow: 'How McCarthy helps',
  heading: 'Delivering scalable business insights with AI-ready data modernization',
  tabs: [
    {
      label: 'Our services',
      capabilities: [
        {
          title: 'AI and generative AI',
          body: '[Description — how McCarthy designs and deploys AI-powered applications and agentic workflows for clients.]',
        },
        {
          title: 'Data modernization',
          body: '[Description — how McCarthy modernizes clients’ data infrastructure to become AI-ready.]',
        },
      ] satisfies readonly Capability[],
    },
    {
      label: 'The McCarthy difference',
      placeholder: '[Content for this tab to be supplied]',
    },
  ],
} as const;

export const AI_DATA_STRATEGY = {
  community: {
    body: 'Get exclusive insights from senior AI decision-makers on governance, adoption, ROI and the realities of scaling enterprise AI.',
    link: { label: 'Join the community', href: '#' } satisfies LinkRef,
  },
  assessment: {
    heading: 'How does your AI strategy stack up?',
    body: 'Take our quick AI assessment and discover how your organization compares to industry benchmarks.',
    link: { label: 'Start the assessment', href: '/ai-audit' } satisfies LinkRef,
  },
} as const;

export const AI_DATA_TRENDS = {
  eyebrow: 'Trends and insights',
  heading: 'Data and AI news and perspectives',
  articles: [
    {
      title: '[Practical guide piece — e.g. "5 best practices for implementing [AI tool] at scale"]',
      body: '[Description of the practical guidance — preparing data, strategizing, adopting responsible AI, refining continuously.]',
      link: { label: 'Read more', href: '#' },
    },
    {
      title: 'How to successfully scale production-level generative AI projects',
      body: 'Hear our experts discuss the future of generative AI in [industry], the role of AI agents in operations, and the need for ethical AI practices.',
      link: { label: 'Listen to the podcast', href: '#' },
    },
    {
      title: 'How AI eliminates tech debt and unlocks new software possibilities',
      body: '[Description of AI’s role in reducing technical debt, improving code quality, and enabling new development approaches, benefiting organizations by making software development faster and more efficient.]',
      link: { label: 'Read more', href: '#' },
    },
  ] satisfies readonly TrendArticle[],
} as const;

/** The brief's "We're invested in customer success" section — distinct from the plain client list below it. */
export const AI_DATA_CUSTOMER_SUCCESS = {
  heading: 'We’re invested in customer success',
  stories: [
    {
      title: '[Case study 1 headline]',
      body: '[Client] [outcome achieved] — describe the solution McCarthy built and the measurable result (e.g. pilot deployment, scale reached).',
    },
    {
      title: '[Case study 2 headline]',
      body: 'McCarthy transformed [Client]’s [system/process] with modern systems and technology for [outcome — faster, more efficient, better customer service].',
    },
    {
      title: '[Case study 3 headline]',
      body: 'McCarthy helps [Client] transform its data assets, complementing the client’s efforts to enhance customer experiences, boost employee productivity, and ensure effective data management.',
    },
  ] satisfies readonly CustomerStory[],
} as const;

export const AI_DATA_CUSTOMERS = {
  heading: 'Our customers',
  names: ['[Client 1]', '[Client 2]', '[Client 3]'],
} as const;

export const AI_DATA_PARTNERS = {
  heading: 'Global alliance partnerships enable our customers’ complex hybrid IT ecosystems.',
  link: { label: 'Learn more about our alliance partners', href: '#' } satisfies LinkRef,
} as const;

export const AI_DATA_EXPERT_VOICE = {
  heading: 'Harnessing the power of AI, responsibly',
  quote:
    '[A quote on McCarthy’s principles for responsible AI — evaluating efficacy, identifying and weighing risks, and technical review to ensure any AI deployment is fit for purpose.]',
  name: '[Name]',
  title: '[Title — e.g. "Global Practice Leader | AI and Data"]',
  profileLink: { label: 'View profile', href: '#' } satisfies LinkRef,
} as const;

export const AI_DATA_FAQS: readonly FaqEntry[] = [
  {
    question: 'What are data and artificial intelligence services?',
    answer: '[Answer]',
  },
  {
    question: 'How can AI-powered data services improve customer experiences?',
    answer: '[Answer]',
  },
  {
    question: 'How does McCarthy support businesses in adopting generative AI?',
    answer: '[Answer]',
  },
];
