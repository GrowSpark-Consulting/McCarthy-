import { CONSULTING_FOOTER_GROUPS, CONSULTING_FOOTER_LEGAL } from './consulting-footer';
import type { LinkRef } from './homepage';
import type {
  ConsultingBlock,
  ConsultingCard,
  ConsultingHeroContent,
  ConsultingStat,
} from '@/types/consulting';

/**
 * McCarthy Flow page content.
 *
 * Every string is transcribed verbatim from `mccarthy-flow-copy.md`. Where
 * that file carries a bracketed placeholder the bracket is preserved exactly —
 * no metric, client or answer is invented, so an unfinished slot stays visibly
 * unfinished until real data exists.
 *
 * Hrefs are the one thing the deck does not supply; each points at the closest
 * route the site already declares.
 */

const STILLS = {
  office: '/videos/hero-ai-office-poster.jpg',
  wave: '/videos/wave-loop-poster.jpg',
} as const;

/** The deck's own nav labels, wired to this page's sections. */
export const FLOW_TABS: readonly LinkRef[] = [
  { label: 'What is McCarthy Flow?', href: '#what-is-mccarthy-flow' },
  { label: 'Value', href: '#value' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Results', href: '#results' },
  { label: 'Resources', href: '#resources' },
  { label: 'Connect with us', href: '#connect' },
];

export const FLOW_HERO: ConsultingHeroContent = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/what-we-do' },
    { label: 'McCarthy Flow' },
  ],
  eyebrow: 'mccarthy flow',
  headline: ['Move faster with AI agents built', 'around your rules'],
  note: {
    text: 'Already have a McCarthy Flow account?',
    link: { label: 'Sign in ›', href: '/contact' },
  },
  media: {
    videoSrc: '/videos/wave-loop.mp4',
    posterSrc: '/videos/wave-loop-poster.jpg',
  },
};

export const FLOW_WHAT = {
  heading: 'What is McCarthy Flow?',
  paragraphs: [
    'McCarthy Flow turns AI agents into action across your business and IT estate. From daily operations to modernization and business workflows, agents work within trusted guardrails, helping teams move from insight to execution in moments, not days.',
    'Powered by the operational knowledge McCarthy has built managing complex environments, Flow gives agents the context they need to act safely and effectively. Every action strengthens the platform, creating a smarter, more adaptive estate that improves continuously. This is the foundation of an agentic control plane built for enterprise scale.',
  ],
  action: { label: 'Watch Now', href: '/ai-lab' },
} as const;

/** Figures are the deck's placeholders. None of them is invented. */
export const FLOW_VALUE = {
  heading: 'Why McCarthy Flow matters',
  stats: [
    {
      value: '[$X]',
      label: '[Metric label — e.g. "in annual savings for customers"]',
      body: '[One–two sentences on how Flow delivers this — avoiding major incidents, planned maintenance costs, etc. Fill with your real numbers once you have client data.]',
    },
    {
      value: '[X]M+',
      label: '[X] actionable insights per month',
      body: '[Description of the AI-driven insights volume and what it enables.]',
    },
    {
      value: '[X]+',
      label: '[X] customers using McCarthy Flow',
      body: '[Positioning line — e.g. "An AI-powered agentic platform now onboarded across X customers and X+ services."]',
    },
  ] as readonly ConsultingStat[],
} as const;

export const FLOW_RUN = {
  heading: 'Run and transform your digital business',
  blocks: [
    {
      heading: 'Integrate',
      paragraphs: [
        'Turn disconnected systems into a connected estate. Flow gives AI agents the context, visibility and operational intelligence needed to act safely and deliver meaningful results.',
      ],
    },
    {
      heading: 'Observe',
      paragraphs: [
        'Flow delivers real-time insights each month, helping organizations detect risks earlier, uncover patterns faster and understand agent behavior.',
      ],
    },
    {
      heading: 'Orchestrate',
      paragraphs: [
        'From resolving issues to accelerating modernization, Flow orchestrates AI agents and automation across your estate, with approval built in for critical actions.',
      ],
    },
  ] as readonly ConsultingBlock[],
} as const;

/** The deck marks this band dark; it is the page's one deliberate contrast. */
export const FLOW_OPERATIONS = {
  heading: "Agentic IT operations, where downtime isn't an option",
  blocks: [
    {
      heading: 'Knowing where complexity creates risk',
      paragraphs: [
        'McCarthy understands how complex systems behave under pressure, from hidden dependencies to cascading failures — insights no AI model learns from training data alone.',
      ],
    },
    {
      heading: 'Knowing when action is safe',
      paragraphs: [
        'In production environments, every action has consequences. McCarthy helps AI agents act with the right guardrails, judgement and human oversight.',
      ],
    },
    {
      heading: 'Applying operational expertise everywhere',
      paragraphs: [
        'The expertise used to govern AI across mission-critical technology estates helps organizations deploy and scale trusted AI across every part of the business.',
      ],
    },
  ] as readonly ConsultingBlock[],
} as const;

export const FLOW_CATALOG = {
  heading: 'Our catalog',
  body: "The McCarthy Flow Services Catalog is designed to connect businesses with a catalog of [X]+ services. It leverages McCarthy's data-driven insights to provide seamless integration between digital business needs and the technology that supports them.",
  action: {
    label: 'Explore the McCarthy Flow services catalog',
    href: '/what-we-do',
  } satisfies LinkRef,
} as const;

export const FLOW_RESULTS = {
  heading: 'We focus on driving better business outcomes for our customers',
  clients: [
    '[Client 1]',
    '[Client 2]',
    '[Client 3]',
    '[Client 4]',
    '[Client 5]',
    '[Client 6]',
  ],
  caseStudy: {
    title:
      '[Case study headline — e.g. "McCarthy Flow and [Cloud Partner] help deploy cloud resources and enable cost optimization"]',
    body: 'With McCarthy Flow and [Partner], we helped [Client] assess [area] and strategically cut costs. The [program name], jointly developed by McCarthy and [Client], improved operational visibility and helped focus on customer experience.',
    link: { label: 'Learn more', href: '/insights' },
    image: STILLS.office,
  } as ConsultingCard,
} as const;

export const FLOW_RESOURCES = {
  eyebrow: 'Resources',
  heading: 'Resources',
  cards: [
    {
      title: '[Recognition/award piece — e.g. industry analyst mention]',
      body: '[Description of the recognition and what it cites McCarthy for.]',
      link: { label: 'Read more', href: '/insights' },
      image: STILLS.wave,
    },
    {
      title: 'McCarthy Flow enables continuous transformation',
      body: 'Use actionable insights to continuously innovate, achieve higher levels of operational maturity, and provide a foundation for current and future digital business requirements.',
      link: { label: 'Read more', href: '/insights' },
      accent: 'verde',
    },
    {
      title: 'Unlock the full potential of your IT infrastructure',
      body: 'McCarthy Flow Intelligence for IT Operations combines AI insights from the McCarthy Flow platform with McCarthy Consult expertise to improve efficiency, reduce incidents, and strengthen compliance and resilience.',
      link: { label: 'Read more', href: '/insights' },
      accent: 'azure',
    },
  ] as readonly ConsultingCard[],
} as const;

export const FLOW_FAQ = {
  heading: 'Frequently asked questions',
  items: [
    {
      question: 'How does McCarthy Flow put AI to work in mission-critical systems?',
      answer: '[Answer]',
    },
    { question: 'What is an agentic control plane?', answer: '[Answer]' },
    {
      question: 'How does Flow govern agents across a multi-vendor estate?',
      answer: '[Answer]',
    },
  ],
} as const;

export const FLOW_CTA = {
  /** The deck's own section title stands in; no heading is invented for the bar. */
  heading: 'McCarthy Flow',
  actions: [
    { label: 'Learn more', href: '/contact' },
    { label: 'Download solution brief', href: '/contact' },
    { label: 'Download the solution flyer', href: '/contact' },
  ] as readonly LinkRef[],
} as const;

export const FLOW_FOOTER_GROUPS = CONSULTING_FOOTER_GROUPS;
export const FLOW_FOOTER_LEGAL = CONSULTING_FOOTER_LEGAL;
