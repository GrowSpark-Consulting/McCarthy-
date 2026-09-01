/**
 * Homepage content.
 *
 * Copy comes from the approved McCarthy homepage deck, which deliberately
 * substitutes every proof point the reference layout fills with something
 * McCarthy has not earned yet (analyst awards, named clients, partner logos,
 * an employer award, an executive quote). Those substitutions are content
 * decisions, not layout ones — the structure and rhythm of each slot is
 * preserved exactly.
 */

export interface LinkRef {
  readonly label: string;
  readonly href: string;
}

export interface NewsItem {
  readonly eyebrow: string;
  readonly title: string;
  readonly link: LinkRef;
}

/** Section 3 — evergreen pointers in the reference's press-release strip. */
export const NEWS_ITEMS: readonly NewsItem[] = [
  {
    eyebrow: 'Insight',
    title: 'Your AI strategy should start with the business, not the model',
    link: { label: 'Read more', href: '/insights/ai-strategy-starts-with-the-business' },
  },
  {
    eyebrow: 'Framework',
    title: 'Inside the McCarthy Transformation System™',
    link: { label: 'Learn more', href: '/about/transformation-system' },
  },
  {
    eyebrow: 'AI Lab',
    title: 'Eight interactive AI systems, live right now',
    link: { label: 'Explore', href: '/ai-lab' },
  },
];

/** Section 4 — sticky in-page tabs. Ids match the section elements. */
export const SECTION_TABS: readonly LinkRef[] = [
  { label: 'Who we are', href: '#who-we-are' },
  { label: 'AI Lab', href: '#ai-lab' },
  { label: 'How we help', href: '#how-we-help' },
  { label: 'Our expertise', href: '#expertise' },
  { label: 'FAQ', href: '#faq' },
];

/** Section 5 — who we are split. */
export const WHO_WE_ARE = {
  eyebrow: 'Who we are',
  heading: 'Where business understanding meets AI execution',
  body: 'McCarthy exists to help organisations understand what AI makes possible, identify where it matters, and turn that opportunity into systems, workflows and people capable of delivering real business outcomes. We start with the business — not the tool.',
  links: [
    { label: 'Our story', href: '/about' },
    { label: 'Our approach', href: '/about/approach' },
    { label: 'The Transformation System', href: '/about/transformation-system' },
  ],
  panel: {
    wordmark: 'We are McCarthy',
    action: { label: 'Watch', href: '/about/film' },
  },
} as const;

export interface TrustPanel {
  readonly index: string;
  readonly title: string;
  readonly body: string;
  readonly link: LinkRef;
  /** Tailwind background utility for the expanded panel. */
  readonly tone: 'verde' | 'verde-mid' | 'verde-deep' | 'verde-dark';
}

/**
 * Section 6 — the reference's four-panel recognition accordion. Every panel
 * here is something McCarthy can actually stand behind today.
 */
export const TRUST_PANELS: readonly TrustPanel[] = [
  {
    index: '01',
    title: 'How we build trust',
    body: 'Business-first thinking, not a sales pitch for a tool.',
    link: { label: 'Read our philosophy', href: '/about/approach' },
    tone: 'verde',
  },
  {
    index: '02',
    title: 'See it before you believe it',
    body: 'Interactive demonstrations of real AI systems — not slideware.',
    link: { label: 'Explore the AI Lab', href: '/ai-lab' },
    tone: 'verde-mid',
  },
  {
    index: '03',
    title: 'Built to a published methodology, not a black box',
    body: 'Discover, Diagnose, Prioritise, Architect, Build, Adopt, Optimise.',
    link: { label: 'See the Transformation System', href: '/about/transformation-system' },
    tone: 'verde-deep',
  },
  {
    index: '04',
    title: 'Business understanding, then AI engineering',
    body: 'One team for strategy, agents, automation and the engineering behind them.',
    link: { label: 'Explore AI Solutions', href: '/ai-solutions' },
    tone: 'verde-dark',
  },
];

/** Sections 8–9 — AI Lab intro and feature. */
export const AI_LAB = {
  eyebrow: 'See McCarthy in action',
  heading: 'Real systems you can try right now',
  body: 'Not screenshots. Not a sales deck. Systems you can actually use.',
  feature: {
    eyebrow: 'AI CEO Command Center',
    heading:
      'Executive intelligence that turns connected business data into decisions, risks and recommended actions',
    /** Silent loop behind the full-bleed feature band. */
    media: {
      videoSrc: '/videos/wave-loop.mp4',
      posterSrc: '/videos/wave-loop-poster.jpg',
    },
    actions: [
      { label: 'Try the demo', href: '/ai-lab/ai-ceo-command-center' },
      { label: 'See all AI Lab systems', href: '/ai-lab' },
    ],
  },
} as const;

export interface Capability {
  readonly index: string;
  readonly title: string;
  readonly body: string;
  readonly link: LinkRef;
}

/** Section 11 — the four-column numbered capability grid. */
export const CAPABILITIES: readonly Capability[] = [
  {
    index: '01',
    title: 'Discover',
    body: 'Understand the business, the people, the technology and the organisation’s real AI readiness before anything is built.',
    link: { label: 'Book an assessment', href: '/ai-audit' },
  },
  {
    index: '02',
    title: 'Design',
    body: 'Map the opportunities, prioritise the use cases that carry commercial weight, and define the architecture behind them.',
    link: { label: 'See our approach', href: '/about/approach' },
  },
  {
    index: '03',
    title: 'Build',
    body: 'AI agents, automation, applications and knowledge systems, engineered to production standards rather than demo standards.',
    link: { label: 'Explore AI Solutions', href: '/ai-solutions' },
  },
  {
    index: '04',
    title: 'Adopt',
    body: 'Train the people, establish the governance, and embed AI into everyday work so the capability outlives the project.',
    link: { label: 'Explore AI Workforce', href: '/ai-workforce' },
  },
];

/** Section 11 heading block. */
export const HOW_WE_HELP = {
  eyebrow: 'Continuous transformation',
  heading: ['Business first. AI second.', 'Technology third.'],
} as const;

/** Section 12 — AI-native promo split. */
export const AI_NATIVE_PROMO = {
  heading: 'Unlock the power of being AI-native',
  body: 'AI-native organisations don’t just use more AI tools — they embed intelligence into the way work happens.',
  link: { label: 'See your AI-native advantage', href: '/about/ai-native' },
} as const;

export interface Article {
  readonly eyebrow: string;
  readonly title: string;
  readonly body: string;
  readonly link: LinkRef;
}

/** Section 13 — published insight articles. */
export const ARTICLES: readonly Article[] = [
  {
    eyebrow: 'AI strategy',
    title: 'Your AI strategy should start with the business, not the model',
    body: 'Model choice is the last decision, not the first. The work that determines whether AI pays back is understanding where the business actually loses time, money and margin.',
    link: { label: 'Read the article', href: '/insights/ai-strategy-starts-with-the-business' },
  },
  {
    eyebrow: 'AI agents',
    title: 'The shift from AI that answers to AI that acts',
    body: 'Agents change the question from “what can it tell me” to “what can it do” — and that changes how systems have to be designed, governed and trusted.',
    link: { label: 'Read the article', href: '/insights/from-answers-to-actions' },
  },
  {
    eyebrow: 'Automation',
    title: 'Don’t automate a broken process',
    body: 'Automation makes a process faster, not better. Fix the workflow first, then let the machine run it.',
    link: { label: 'Read the article', href: '/insights/dont-automate-a-broken-process' },
  },
];

/** Section 14 — the two-panel recognition split. */
export const RECOGNITION_SPLIT = {
  accent: 'Delivering business-first, outcome-focused AI transformation',
  dark: {
    body: 'Built to a published methodology, not a black box.',
    link: { label: 'See the Transformation System', href: '/about/transformation-system' },
  },
} as const;

/** Sections 16–17 — expertise. */
export const EXPERTISE = {
  heading: 'Business-first. AI-native. Engineering-grade.',
  body: 'McCarthy combines AI strategy, intelligent agents, automation, digital engineering and workforce transformation under one roof — so the business doesn’t have to translate between a consultant and a developer.',
  links: [
    { label: 'Explore AI Solutions', href: '/ai-solutions' },
    { label: 'Explore AI Workforce', href: '/ai-workforce' },
  ],
  feature: {
    heading:
      'Singapore is one of the fastest-growing AI adoption markets in APAC — most organisations still don’t know where to start',
    body: 'That’s the gap McCarthy exists to close: turning AI ambition into prioritised, engineered, adopted systems.',
    action: { label: 'Read our approach', href: '/about/approach' },
  },
} as const;

export interface PartnerLogo {
  readonly name: string;
  readonly src: string;
  /** Intrinsic ratio, so each mark keeps its own proportions in the row. */
  readonly width: number;
  readonly height: number;
}

/** Section 18 — the platforms McCarthy builds on. */
export const PARTNERS = {
  heading: 'The platforms we build on',
  link: { label: 'Explore AI Solutions', href: '/ai-solutions' },
  logos: [
    { name: 'Amazon Web Services', src: '/logos/AWS-color-logo.svg', width: 93, height: 216 },
    { name: 'Microsoft', src: '/logos/Microsoft-logo.svg', width: 219, height: 216 },
    { name: 'Google Cloud', src: '/logos/Google-Cloud-logo.svg', width: 209, height: 216 },
    { name: 'Databricks', src: '/logos/databricks-4x3.svg', width: 1600, height: 1200 },
    { name: 'SAP', src: '/logos/SAP-logo.svg', width: 124, height: 216 },
    { name: 'Oracle', src: '/logos/Oracle-logo.svg', width: 215, height: 216 },
    { name: 'Cisco', src: '/logos/Cisco-logo.svg', width: 156, height: 216 },
    { name: 'Dell Technologies', src: '/logos/Dell-Technologies-logo.svg', width: 216, height: 28 },
    { name: 'Palo Alto Networks', src: '/logos/Paloalto-logo.svg', width: 177, height: 216 },
  ] satisfies readonly PartnerLogo[],
} as const;

/** Section 20 — careers split. */
export const CAREERS = {
  panel: { wordmark: 'McCarthy' },
  blocks: [
    {
      heading: 'Small team. Real ownership.',
      body: 'Join early and help shape how an AI transformation company gets built.',
      link: { label: 'Learn more', href: '/careers' },
    },
    {
      heading: 'Careers',
      body: 'Help build an AI transformation company from the ground up.',
      link: { label: 'See open roles', href: '/careers' },
    },
  ],
} as const;

export interface FaqEntry {
  readonly question: string;
  readonly answer: string;
}

/** Section 21 — FAQ accordion. */
export const FAQS: readonly FaqEntry[] = [
  {
    question: 'Does McCarthy provide implementation, not just strategy?',
    answer:
      'Yes. McCarthy advises and builds — strategy, AI agents, automation and the engineering behind them, under one roof.',
  },
  {
    question: 'How is McCarthy different from a typical AI consultancy?',
    answer:
      'We start with the business problem, not the AI tool. Every engagement follows the same methodology: Discover, Diagnose, Prioritise, Architect, Build, Adopt, Optimise.',
  },
  {
    question: 'How would my business benefit from an AI Transformation Assessment?',
    answer:
      'You’ll leave with a prioritised map of where AI can create real value in your business, and a 90-day and 12-month roadmap to act on it.',
  },
  {
    question: 'Is McCarthy hiring?',
    answer: 'We’re building the team as McCarthy grows. See open roles on the Careers page.',
  },
];

/** Section 22 — connect band. */
export const CONNECT = {
  heading: 'Connect with us',
  body: 'Have a transformation challenge, interested in a career at McCarthy, or just want to get in touch?',
  primary: { label: 'Let’s talk', href: '/contact' },
  secondary: { label: 'Subscribe to our newsletter', href: '/contact#newsletter' },
} as const;

/** Section 23 — footer columns. */
export const FOOTER_GROUPS = [
  {
    heading: 'Services',
    columns: [
      [
        { label: 'AI Solutions', href: '/ai-solutions' },
        { label: 'AI Workforce', href: '/ai-workforce' },
        { label: 'AI Lab', href: '/ai-lab' },
      ],
      [
        { label: 'AI Audit', href: '/ai-audit' },
        { label: 'Digital', href: '/digital' },
        { label: 'Industries', href: '/industries' },
      ],
    ],
  },
  {
    heading: 'Company',
    columns: [
      [
        { label: 'About', href: '/about' },
        { label: 'Insights', href: '/insights' },
        { label: 'Careers', href: '/careers' },
      ],
      [
        { label: 'Contact', href: '/contact' },
        { label: 'The Transformation System', href: '/about/transformation-system' },
        { label: 'Our approach', href: '/about/approach' },
      ],
    ],
  },
] as const;

/** Footer legal row. */
export const FOOTER_LEGAL: readonly LinkRef[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];
