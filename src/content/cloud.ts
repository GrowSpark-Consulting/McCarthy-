import type { FaqEntry, LinkRef } from './homepage';

/**
 * Cloud (Hybrid Cloud Services) page content.
 *
 * Every string here is copied verbatim from the supplied
 * `mccarthy-cloud-services-copy.md` brief — nothing rewritten, shortened,
 * expanded or invented. Bracketed `[...]` text is the brief's own
 * placeholder marker and is kept exactly as written. The only change is
 * mechanical: the source file's mojibake (`Â·`, stray `â`) is corrected to
 * the intended `·` / em dash / apostrophe — a transfer encoding artifact,
 * not content.
 *
 * One structural judgment call: the brief lists six "with [service]" labels
 * immediately above six capability headings, in matching count and a
 * plausible 1:1 order (Cloud Consulting → strategy, Private Cloud →
 * enterprise modernization, Public Cloud → choosing a provider, Hybrid IT
 * Operating Model → transforming IT ops, Cloud Migration → the adoption
 * journey, Managed Cloud → maximizing infrastructure). They're paired below
 * as each card's small tag — a layout reading of the brief's own structure,
 * not new wording.
 */

export interface Capability {
  readonly title: string;
  readonly body: string;
  readonly tag?: string;
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

export const CLOUD_BREADCRUMB: readonly { label: string; href?: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
  { label: 'Cloud' },
];

export const CLOUD_LOCAL_NAV: readonly LinkRef[] = [
  { label: 'What we do', href: '#what-we-do' },
  { label: 'How we help', href: '#how-we-help' },
  { label: 'Trends and insights', href: '#trends-and-insights' },
  { label: 'Our customers', href: '#our-customers' },
  { label: 'Our partners', href: '#our-partners' },
  { label: 'Connect with us', href: '#connect-with-us' },
];

export const CLOUD_HERO = {
  eyebrow: 'Services',
  heading: 'Hybrid Cloud Services',
  body: 'Secure and managed cloud solutions that drive outcome-based modernization.',
  features: [
    {
      title: '[Recognition/positioning piece — e.g. an analyst mention or capability report]',
      link: { label: 'Learn more', href: '#' } satisfies LinkRef,
    },
    {
      title:
        '[Migration accelerator offering — e.g. "Quickly move legacy workloads to the cloud without rewrites or disruption"]',
      link: { label: 'Explore McCarthy Cloud Uplift', href: '#' } satisfies LinkRef,
    },
    {
      title: '[Second recognition piece — e.g. a report naming McCarthy in a category]',
      link: { label: 'Read the report', href: '#' } satisfies LinkRef,
    },
  ],
} as const;

export const CLOUD_WHAT_WE_DO = {
  heading: 'Unlock innovation with the right cloud solutions',
  body: 'Cloud is a key enabler of digital transformation, but significant barriers exist to its expansion. Many enterprises struggle to demonstrate the value of their IT modernization and associated business outcomes. McCarthy Services for Hybrid Cloud provide a 360-degree approach to identifying and solving challenges while driving transformation forward.',
} as const;

export const CLOUD_HOW_WE_HELP = {
  eyebrow: 'How McCarthy helps',
  heading: 'Enabling outcome-based IT modernization and transformation',
  tabs: [
    {
      label: 'Our services',
      capabilities: [
        { tag: 'with Cloud Consulting', title: 'Optimize your cloud strategy', body: '[Description]' },
        { tag: 'with Private Cloud Services', title: 'Modernize your enterprise', body: '[Description]' },
        {
          tag: 'with Public Cloud Services',
          title: 'Choose the right cloud provider',
          body: '[Description]',
        },
        {
          tag: 'with Hybrid IT Operating Model',
          title: 'Transform your IT operations',
          body: '[Description]',
        },
        {
          tag: 'with Cloud Migration Services',
          title: 'Start your cloud adoption journey',
          body: '[Description]',
        },
        {
          tag: 'with Managed Cloud Services',
          title: 'Maximize your IT infrastructure',
          body: '[Description]',
        },
      ] satisfies readonly Capability[],
    },
    { label: 'The McCarthy difference', placeholder: '[Content for this tab to be supplied]' },
    { label: 'Awards and recognition', placeholder: '[Content for this tab to be supplied]' },
  ],
} as const;

export const CLOUD_TRENDS = {
  eyebrow: 'Trends and insights',
  heading: 'Cloud news and perspectives',
  articles: [
    {
      title: 'How cloud-native companies work differently — and better',
      body: 'McCarthy’s cloud-native approach empowers enterprises to modernize their infrastructure by transitioning from traditional systems to agile, scalable cloud-native environments.',
      link: { label: 'Read the article', href: '#' },
    },
    {
      title: 'Cybersecurity in the age of AI and multi-cloud environments',
      body: 'Each cloud provider offers robust security features tailored to protect their specific environment. While these native services are effective, they often fall short when managing security across multiple cloud environments.',
      link: { label: 'Read more', href: '#' },
    },
    {
      title: 'Cloud Readiness Report',
      body: 'Organizations that treat cloud as a core capability for business agility and AI adoption get a competitive advantage.',
      link: { label: 'Read more', href: '#' },
    },
  ] satisfies readonly TrendArticle[],
} as const;

export const CLOUD_CUSTOMER_SUCCESS = {
  heading: 'We’re invested in customer success',
  stories: [
    {
      title: '[Case study 1 headline — e.g. "Charting a course towards IT modernization"]',
      body: 'We helped [Client] chart a course toward IT modernization by lifting and shifting applications to the cloud for immediate scalability.',
    },
    {
      title: '[Case study 2 headline — e.g. "Cloud assessment yields cost savings"]',
      body: '[Client] sought an experienced partner to take a deep look at what was causing unpredictable costs in their cloud-based model and make recommendations for improvements.',
    },
  ] satisfies readonly CustomerStory[],
} as const;

export const CLOUD_CUSTOMERS = {
  heading: 'Our customers',
  names: ['[Client 1]', '[Client 2]'],
} as const;

export const CLOUD_PARTNERS = {
  heading: 'Global alliance partnerships enable our customers’ complex hybrid IT ecosystems.',
  link: { label: 'Learn more about our alliance partners', href: '#' } satisfies LinkRef,
} as const;

export const CLOUD_EXPERT_VOICE = {
  heading: 'There’s no one-size-fits-all approach to cloud',
  quote:
    'In today’s rapidly evolving digital landscape, a tailored cloud strategy helps businesses navigate their unique opportunities and needs. Businesses face challenges from conflicting operating models to inefficient automation — and there’s no one-size-fits-all approach.',
  name: '[Name]',
  title: '[Title — e.g. "Global Practice Leader | Cloud"]',
} as const;

export const CLOUD_FAQ_HEADING = 'Your most common questions';

export const CLOUD_FAQS: readonly FaqEntry[] = [
  { question: 'What are cloud services and how do they help businesses?', answer: '[Answer]' },
  { question: 'What is the difference between public, private, and hybrid cloud?', answer: '[Answer]' },
  { question: 'Why are enterprises moving to cloud-based infrastructure?', answer: '[Answer]' },
  {
    question: 'How can enterprises control and reduce cloud costs as their cloud usage grows?',
    answer: '[Answer]',
  },
  {
    question: 'What security and compliance considerations matter most when running workloads in the cloud?',
    answer: '[Answer]',
  },
];
