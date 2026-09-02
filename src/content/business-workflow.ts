import type { LinkRef } from './homepage';
import type { ConsultingCard, ConsultingHeroContent } from '@/types/consulting';

/**
 * Business Workflow Transformation page content.
 *
 * Every string here is transcribed verbatim from
 * `mccarthy-business-workflow-transformation-copy.md`. Where that file carries
 * a bracketed placeholder the bracket is preserved exactly — nothing is
 * invented to fill a gap, so an unfinished slot stays visibly unfinished
 * rather than shipping as plausible-looking marketing copy.
 *
 * Hrefs are the one thing the copy deck does not supply. Each points at the
 * closest route the site already declares (see `lib/navigation.ts`, whose
 * destinations likewise land as later phases ship them); swap them here when
 * the real URLs exist.
 */

export interface WorkflowBlock {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  /** Small label the copy deck tags onto a block, e.g. "XLAs". */
  readonly tag?: string;
}

/** The page's jump navigation, reusing the homepage's floating pill. */
export const WORKFLOW_TABS: readonly LinkRef[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'How McCarthy Helps', href: '#how-mccarthy-helps' },
  { label: 'Insights', href: '#insights' },
  { label: 'Connect with Us', href: '#connect' },
];

export const WORKFLOW_HERO: ConsultingHeroContent = {
  breadcrumb: { home: { label: 'Home', href: '/' }, current: 'Consulting' },
  eyebrow: 'Business workflow transformation',
  /** Set as three lines in the deck; the break is intentional. */
  headline: ['Transform the', 'workflows your', 'business depends on'],
  body: 'Redesign how people, AI and systems work together, with control built into every workflow.',
  /** The project's own AI-office loop — the same footage the homepage hero uses. */
  media: {
    videoSrc: '/videos/hero-ai-office.mp4',
    posterSrc: '/videos/hero-ai-office-poster.jpg',
  },
};

/** Frames from the project's footage, reused as card artwork. */
export const WORKFLOW_STILLS = {
  office: '/videos/hero-ai-office-poster.jpg',
  wave: '/videos/wave-loop-poster.jpg',
} as const;

export const WORKFLOW_INTRO = {
  heading: 'Make AI agents work better across your business',
  paragraphs: [
    'AI is creating new opportunities to accelerate decisions, improve customer and employee experiences, and introduce new ways of working. But adding agents to workflows with manual handoffs, disconnected systems or unclear accountability can increase delays, errors and business risk.',
    'McCarthy redesigns how people, agents, systems, policy and evidence work together. We help organizations govern execution, prove whether outcomes improve, and keep workflows performing in production.',
  ],
} as const;

/**
 * The reference page carries three value-proposition blocks here. The copy
 * deck has no equivalent, so the structure ships ready and the words stay
 * bracketed — writing three headings would mean inventing them.
 */
export const WORKFLOW_PILLARS: readonly WorkflowBlock[] = [
  {
    heading: '[Value proposition 1 — heading]',
    paragraphs: ['[Supporting paragraph.]'],
  },
  {
    heading: '[Value proposition 2 — heading]',
    paragraphs: ['[Supporting paragraph.]'],
  },
  {
    heading: '[Value proposition 3 — heading]',
    paragraphs: ['[Supporting paragraph.]'],
  },
];

export const WORKFLOW_APPROACH = {
  /** The deck titles no heading here; its own nav label stands in. */
  heading: 'How McCarthy helps',
  blocks: [
    {
      heading: 'Prove value in production',
      paragraphs: [
        'Turn workflow transformation from promise into evidence by measuring whether experience, adoption, productivity, trust, control, service quality and business outcomes improve in live workflows.',
        'McCarthy connects operational telemetry, workflow evidence, and value signals in a closed loop from evidence to action. This helps leaders identify friction, validate whether the workflow is delivering the intended outcome, and improve performance before scaling what works.',
      ],
    },
    {
      heading: 'Operate and improve in production',
      paragraphs: [
        'Operate with visibility across agents, people, services and systems. Govern exceptions, adapt controls and continuously improve as policies, demand and operating conditions change.',
        'McCarthy helps clients reuse proven workflow designs, human-agent patterns, policy controls, evidence models and governance practices from one workflow to the next. This allows successful patterns to scale without rebuilding control, measurement and operational accountability from scratch.',
      ],
      tag: 'XLAs',
    },
  ] as readonly WorkflowBlock[],
} as const;

export const WORKFLOW_INSIGHTS = {
  eyebrow: 'Trends and insights',
  heading: 'Learn how AI is reshaping business processes',
  cards: [
    {
      title: 'Give enterprise AI the context to act',
      body: 'Explore why AI needs workflow, data, policy and operational context to move from isolated outputs to useful enterprise action.',
      link: { label: 'Read the article', href: '/insights' },
      image: WORKFLOW_STILLS.office,
    },
    {
      title: 'Design how people and AI work together',
      body: 'Explore why agentic AI requires a deliberately designed collaboration model across people, decisions, workflows and accountability.',
      link: { label: 'Read the article', href: '/insights' },
      accent: 'verde',
    },
    {
      title: 'Why AI readiness starts with people',
      body: 'See why redesigning roles, workflows and governance is becoming critical to converting accelerating AI adoption into measurable value.',
      link: { label: 'Read the report', href: '/insights' },
      accent: 'azure',
    },
    {
      title: '[Series/guide title — e.g. "Unlocking the power of AI: Your essential guide"]',
      body: "[Description of your event series or flagship guide — who's featured, format, what it covers, and the CTA payoff.]",
      link: { label: 'Watch the series', href: '/insights' },
      accent: 'ember',
    },
  ] as readonly ConsultingCard[],
} as const;

export const WORKFLOW_JOURNEY = {
  heading: 'Continue your business workflow transformation journey',
  cards: [
    {
      title: 'Benchmark your AI readiness and uncover capability gaps',
      body: 'Get a clear view of your AI maturity and a tailored roadmap to accelerate AI value. Take our quick AI assessment to see how your organization compares with industry benchmarks.',
      link: { label: 'Start the assessment', href: '/ai-audit' },
      image: WORKFLOW_STILLS.wave,
    },
    {
      title: '[Customer outcome headline — e.g. "GenAI-powered reporting boosts customer satisfaction"]',
      body: 'McCarthy helped a [industry] client develop an AI-powered [use case]. The solution enables [role] to [what they can now do] using a simple interface and receive accurate results in minutes.',
      link: { label: 'Read the customer story', href: '/insights' },
      accent: 'ember',
    },
  ] as readonly ConsultingCard[],
} as const;

export const WORKFLOW_CAPABILITIES = {
  heading: 'Related capabilities',
  cards: [
    {
      title: '[Capability 1 — e.g. Experience Management as a Service]',
      body: '[One-line description of what it measures/delivers.]',
      link: { label: 'Learn more', href: '/mccarthy-flow' },
    },
    {
      title: 'Policy as code',
      body: 'Translate your business rules, compliance requirements and operational policies into guardrails that overcome the traditional limitations of conventional AI agent controls.',
      link: { label: 'Learn more', href: '/policy-as-code' },
    },
    {
      title: 'Artificial intelligence',
      body: "Build and deploy adaptive, human-centric AI strategies rooted in your infrastructure, designed for scale, and guided by McCarthy's principles to deliver lasting value and agility.",
      link: { label: 'Learn more', href: '/artificial-intelligence-and-data' },
    },
  ] as readonly ConsultingCard[],
} as const;

export const WORKFLOW_FAQ = {
  heading: 'You have questions. We have answers.',
  items: [
    {
      question: 'How can AI improve mission-critical workflows without increasing risk?',
      answer: "[Answer — expand to a short paragraph when you're ready.]",
    },
    {
      question: 'Can we transform workflows with our existing systems and AI investments?',
      answer: '[Answer]',
    },
    {
      question: 'How do we identify which mission-critical workflows to transform first?',
      answer: '[Answer]',
    },
    {
      question: 'How do we measure the value of AI-enabled workflow transformation?',
      answer: '[Answer]',
    },
  ],
} as const;
