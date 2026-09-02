import { CONSULTING_FOOTER_GROUPS, CONSULTING_FOOTER_LEGAL } from './consulting-footer';
import type { LinkRef } from './homepage';
import type { ConsultingBlock, ConsultingCard, ConsultingHeroContent } from '@/types/consulting';

/**
 * Cybersecurity page content.
 *
 * Every string is transcribed verbatim from `mccarthy-cybersecurity-copy.md`.
 * Where that file carries a bracketed placeholder the bracket is preserved
 * exactly — nothing is invented to fill a gap, so an unfinished slot stays
 * visibly unfinished rather than shipping as plausible-looking marketing copy.
 *
 * Hrefs are the one thing the copy deck does not supply. Each points at the
 * closest route the site already declares (see `lib/navigation.ts`, whose
 * destinations likewise land as later phases ship them); swap them here when
 * the real URLs exist.
 */

/** Frames from the project's footage, reused as card artwork. */
const STILLS = {
  office: '/videos/hero-ai-office-poster.jpg',
  wave: '/videos/wave-loop-poster.jpg',
} as const;

/** The page's jump navigation, reusing the shared floating pill. */
export const CYBER_TABS: readonly LinkRef[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'How McCarthy Helps', href: '#how-mccarthy-helps' },
  { label: 'Insights', href: '#insights' },
  { label: 'Connect with Us', href: '#connect' },
];

export const CYBER_HERO: ConsultingHeroContent = {
  breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Consulting' }],
  eyebrow: 'Cybersecurity',
  /** Set as three lines in the deck; the break is intentional. */
  headline: ['Turn cyber resilience', 'into an operating model', 'for the AI era'],
  body: 'Anticipate, prioritize, defend, recover and reduce business risk.',
  /** The project's own footage — people working with enterprise technology. */
  media: {
    videoSrc: '/videos/hero-ai-office.mp4',
    posterSrc: '/videos/hero-ai-office-poster.jpg',
  },
};

export const CYBER_OVERVIEW = {
  heading: 'When risk accelerates, resilience must run.',
  paragraphs: [
    'Disruption will not wait for a perfect plan. Resilience must be built into the technology, operations, data and AI enterprises rely on. McCarthy combines deep operational expertise with cyber resilience capabilities to keep critical operations moving and recover with confidence — even when AI turns exposure into impact.',
  ],
} as const;

/**
 * The deck's two-column section. The page presents it as How McCarthy Helps —
 * the deck supplies no separate copy for that band, and its own nav label is
 * the only heading available for one.
 */
export const CYBER_APPROACH = {
  heading: 'How McCarthy Helps',
  blocks: [
    {
      heading: 'Enhance resilience and accelerate recovery',
      paragraphs: [
        'Design around critical services, dependencies and hybrid environments. Strengthen and operationalize recovery processes so organizations can respond decisively when cyber incidents become business events.',
      ],
    },
    {
      heading: 'Build digital trust with secure AI and data',
      paragraphs: [
        'Modernize data foundations for AI with unified, governed protection. Build resilience and recovery guardrails for trusted AI adoption through stronger data governance, accountability, policy management and regulatory readiness.',
      ],
    },
  ] as readonly ConsultingBlock[],
} as const;

export const CYBER_INSIGHTS = {
  eyebrow: 'Trends and insights',
  heading: 'Explore articles on cyber resilience and AI',
  cards: [
    {
      title: 'Secure the AI frontier',
      body: 'Explore practical approaches to secure AI foundations, protect critical operations and build cyber resilience as AI-driven risk accelerates.',
      link: { label: 'Read the article', href: '/insights' },
      image: STILLS.office,
    },
    {
      title: '[Guest-publication piece — e.g. "Reallocating cybersecurity capital in the [era name]"]',
      body: 'Discover why leading organizations are shifting cybersecurity investment from threat volume to business impact, resilience and operational confidence.',
      link: { label: 'Read the [publication] article', href: '/insights' },
      accent: 'ember',
    },
    {
      title: 'AI sovereignty and enterprise control',
      body: 'Explore how organizations can maintain control of their data, models, governance and operations while scaling AI across increasingly complex environments.',
      link: { label: 'Read the report', href: '/insights' },
      accent: 'azure',
    },
    {
      title: 'AI poses the future enterprise cybersecurity risk',
      body: 'Understand how AI is reshaping the cyber threat landscape and what organizations must do to protect critical systems, data and operations.',
      link: { label: 'Read the article', href: '/insights' },
      accent: 'verde',
    },
  ] as readonly ConsultingCard[],
} as const;

export const CYBER_JOURNEY = {
  heading: 'Continue your cybersecurity transformation journey',
  cards: [
    {
      title: 'Benchmark your cyber resilience and transformation readiness',
      body: 'Evaluate how effectively your organization aligns security with business objectives, governs emerging technologies and AI adoption, and strengthens resilience across critical business services.',
      link: { label: 'Start the assessment', href: '/ai-audit' },
      image: STILLS.wave,
    },
    {
      title: 'McCarthy helps [Client A] advance secure business transformation',
      body: 'Discover how [Client A] worked with McCarthy to align security with business transformation, strengthen operational resilience and create the foundation for secure innovation at scale.',
      link: { label: 'Read the customer story', href: '/insights' },
      accent: 'verde',
    },
    {
      title: 'McCarthy helps [Client B] modernize with resilience and confidence',
      body: 'Discover how [Client B] worked with McCarthy to modernize critical technology platforms, strengthen operational resilience and create a scalable foundation for future innovation and growth.',
      link: { label: 'Read the customer story', href: '/insights' },
      accent: 'azure',
    },
    {
      title: '[Client C — e.g. industry vertical] enables resilient [outcome]',
      body: 'Discover how McCarthy helped [Client C] strengthen recovery readiness, improve operational resilience and support uninterrupted [core service] across critical services.',
      link: { label: 'Read the customer story', href: '/insights' },
      accent: 'ember',
    },
  ] as readonly ConsultingCard[],
} as const;

export const CYBER_CAPABILITIES = {
  heading: 'Related capabilities',
  cards: [
    {
      title: 'Governance and risk management',
      body: 'Turn cyber, operational, regulatory and AI risk into informed business decisions. Establish governance, prioritize investments and build a clear roadmap for resilience.',
      link: { label: 'Learn more', href: '/governance-and-risk-management' },
    },
    {
      title: 'Cyber defense transformation',
      body: 'Modernize security operations, controls and response capabilities. Apply Zero Trust principles and AI-enabled operations to detect threats earlier and respond faster.',
      link: { label: 'Learn more', href: '/cyber-defense-transformation' },
    },
    {
      title: 'Resilience and recovery',
      body: 'Strengthen resilience across critical services and hybrid environments. Improve recovery readiness, minimize disruption impact and accelerate business recovery.',
      link: { label: 'Learn more', href: '/cyber-resilience' },
    },
  ] as readonly ConsultingCard[],
} as const;

/** The deck's footer is the shared consulting one. */
export const CYBER_FOOTER_GROUPS = CONSULTING_FOOTER_GROUPS;
export const CYBER_FOOTER_LEGAL = CONSULTING_FOOTER_LEGAL;
