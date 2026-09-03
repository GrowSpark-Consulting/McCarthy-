import type { FaqEntry, LinkRef } from './homepage';

/**
 * Cyber Resilience page content.
 *
 * Every string here is copied verbatim from the supplied
 * `mccarthy-cyber-resilience-copy.md` brief — nothing rewritten, shortened,
 * expanded or invented. Bracketed `[...]` text is the brief's own
 * placeholder marker and is kept exactly as written. The only change is
 * mechanical: the source file's mojibake (`Â·`, stray `â`) is corrected to
 * the intended `·` / em dash / apostrophe — a transfer encoding artifact,
 * not content.
 *
 * Two structural notes:
 * - The brief's local nav lists "Latest news" but the file supplies no
 *   distinct section for it — `CYBER_LATEST_NEWS` is an honest placeholder,
 *   not invented news content.
 * - "TRENDS AND INSIGHTS" has no supplied sub-heading (unlike Applications'
 *   "Applications news and perspectives" or Cloud's "Cloud news and
 *   perspectives"), so the section heading reuses the nav's own label,
 *   "Trends and insights", rather than inventing a matching phrase.
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

export const CYBER_BREADCRUMB: readonly { label: string; href?: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
  { label: 'Cyber Resilience' },
];

export const CYBER_LOCAL_NAV: readonly LinkRef[] = [
  { label: 'What we do', href: '#what-we-do' },
  { label: 'How we help', href: '#how-we-help' },
  { label: 'Latest news', href: '#latest-news' },
  { label: 'Trends and insights', href: '#trends-and-insights' },
  { label: 'Our customers', href: '#our-customers' },
  { label: 'Our partners', href: '#our-partners' },
  { label: 'Connect with us', href: '#connect-with-us' },
];

export const CYBER_HERO = {
  eyebrow: 'Services',
  heading: 'Cyber resilience',
  body: 'Navigate cyber risks with confidence.',
  features: [
    {
      title: 'Secure your enterprise for the Frontier AI era',
      link: { label: 'Explore now', href: '#' } satisfies LinkRef,
    },
    {
      title: 'Is your cyber resilience ready for the AI era?',
      link: { label: 'Take the assessment', href: '#' } satisfies LinkRef,
    },
    {
      title: '[Positioning/report piece — e.g. "Prepare for AI, quantum and network risk"]',
      link: { label: 'Read the Readiness Report', href: '#' } satisfies LinkRef,
    },
  ],
} as const;

export const CYBER_WHAT_WE_DO = {
  heading: 'Empowering businesses to help achieve cyber resilience and regulatory compliance',
  video: { duration: '0:00 / [runtime]' },
  bodyParagraphs: [
    'Today’s businesses are focused on mitigating risks, enhancing trust, and securing digital operations to support their goals and minimize the impact of cybersecurity disruptions. McCarthy helps businesses navigate their cyber risks with confidence — become operationally resilient and help meet regulatory requirements, through our integrated security and resiliency focus, strong knowledge of cyber resilience and regulations, and deep expertise in modernizing and securing complex mission-critical systems.',
    'We help businesses anticipate, protect, withstand, and recover from adverse conditions, attacks and compromises of their cyber-enabled business. Through our consult-led approach and co-created solutions with customers and partners, we help address your unique cyber challenges swiftly and effectively and maximize value of your security investments.',
  ],
} as const;

export const CYBER_HOW_WE_HELP = {
  eyebrow: 'How McCarthy helps',
  heading: 'Integrated services designed for end-to-end protection and resilience',
  tabs: [
    {
      label: 'Our services',
      capabilities: [
        { title: 'Governance, Risk and Compliance', body: 'Anticipate risks and maintain compliance.' },
        { title: 'Zero Trust Services', body: 'Protect critical data and infrastructure.' },
        { title: 'Security operations and response', body: 'Withstand advanced cyber threats.' },
        { title: 'Incident Recovery Services', body: 'Recover quickly from unplanned outages.' },
      ] satisfies readonly Capability[],
    },
    { label: 'The McCarthy difference', placeholder: '[Content for this tab to be supplied]' },
    { label: 'Awards and recognition', placeholder: '[Content for this tab to be supplied]' },
  ],
} as const;

export const CYBER_ASSESSMENT = {
  keyword: 'resilient',
  body: 'How resilient is your enterprise in an AI-native world? Answer a few quick questions to see how you compare to industry leaders.',
  link: { label: 'Start the assessment', href: '#' } satisfies LinkRef,
} as const;

/** Listed in the local nav but not described in the brief — placeholder, not invented news. */
export const CYBER_LATEST_NEWS = {
  heading: 'Latest news',
  placeholder: '[Content for this section to be supplied]',
} as const;

export const CYBER_TRENDS = {
  eyebrow: 'Trends and insights',
  heading: 'Trends and insights',
  articles: [
    {
      title: '360-degree cyber awareness amid instability',
      body: 'AI and geopolitical tensions are reshaping cyber risk, making resilience a strategic, cross-border business imperative — not just an IT concern.',
      link: { label: 'Read more', href: '#' },
    },
    {
      title: '[Methodology/whitepaper piece — e.g. a recovery-modeling approach you’ve developed]',
      body: 'Discover how [your methodology name] enhances cyber resilience by accurately estimating recovery times, improving backup insights, and tackling key challenges in cyber recovery through effective assessments.',
      link: { label: 'Read the whitepaper', href: '#' },
    },
    {
      title: '[Recognition piece — e.g. an analyst or market mention]',
      body: '[Description of the recognition and what it highlights about McCarthy’s cyber resilience capability.]',
      link: { label: 'Read more', href: '#' },
    },
  ] satisfies readonly TrendArticle[],
} as const;

export const CYBER_CUSTOMER_SUCCESS = {
  heading: 'We’re invested in customer success',
  stories: [
    {
      title:
        '[Case study 1 headline — e.g. "Enabling resilient digital banking services for a diversified economy"]',
      body: 'To sustain its leadership role in [sector], [Client] wanted to preemptively increase the resiliency of its IT infrastructure and applications that run its services.',
    },
    {
      title:
        '[Case study 2 headline — e.g. "Navigating the IT complexity of successful business growth through acquisitions"]',
      body: 'Over the past [X] years, as [Client] grew, the IT team addressed the increasing complexity of operations with a series of [solutions] from various service providers in the region.',
    },
  ] satisfies readonly CustomerStory[],
} as const;

export const CYBER_CUSTOMERS = {
  heading: 'Our customers',
  names: ['[Client 1]', '[Client 2]'],
} as const;

export const CYBER_PARTNERS = {
  heading:
    'We work with a broad partner ecosystem to design, solution, implement, and operate security-rich environments.',
  link: { label: 'Learn more about our alliance partners', href: '#' } satisfies LinkRef,
} as const;

export const CYBER_EXPERT_VOICE = {
  heading: 'AI-driven threats demand faster decisions',
  quote:
    'The organizations that lead won’t be those that avoid incidents, but those that respond quickly and with confidence. As AI accelerates threats and complexity, resilience is measured by the ability to make better decisions under pressure and restore critical services quickly when disruption occurs.',
  name: '[Name]',
  title: '[Title — e.g. "Global Practice Leader | Cyber Resilience"]',
} as const;

export const CYBER_FAQS: readonly FaqEntry[] = [
  { question: 'What is cyber resilience?', answer: '[Answer]' },
  { question: 'What are the best practices for implementing enterprise cyber resilience?', answer: '[Answer]' },
  { question: 'How can organizations assess their cyber resilience capabilities?', answer: '[Answer]' },
];
