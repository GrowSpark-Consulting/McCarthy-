import type { LinkRef } from './homepage';

/**
 * Agentic Modernization page content.
 *
 * Structured after the Kyndryl consulting-subpage reference (local nav, hero,
 * intro statement, value props, a five-part "how we help" model, trends,
 * customer success, related capabilities, team, connect CTA). Every word here
 * is McCarthy's own — the reference is a layout guide only.
 *
 * Two content gaps are marked, not invented: the source brief's
 * "[proprietary framework/tool name]" bracket is smoothed into generic
 * wording below rather than filled with a fabricated product name, and the
 * customer stories / team roster are explicit placeholders (see
 * `AMOD_CUSTOMER_SUCCESS` and `AMOD_TEAM`) until real McCarthy detail exists.
 */

export interface ValueProp {
  readonly title: string;
  readonly body: string;
}

export interface HelpItem {
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
  readonly link: LinkRef;
}

export interface Capability {
  readonly title: string;
  readonly body: string;
  readonly link: LinkRef;
}

export interface TeamMember {
  readonly name: string;
  readonly role: string;
}

export const AMOD_BREADCRUMB: readonly { label: string; href?: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Consulting' },
];

/** Anchors for the local page nav — ids match the `id` on each section below. */
export const AMOD_LOCAL_NAV: readonly LinkRef[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'How McCarthy Helps', href: '#how-mccarthy-helps' },
  { label: 'Customer Success', href: '#customer-success' },
  { label: 'Meet the Team', href: '#meet-the-team' },
  { label: 'Connect with Us', href: '#connect-with-us' },
];

export const AMOD_HERO = {
  eyebrow: 'Agentic modernization',
  headline: ['Build a continuously', 'modern operation for the', 'AI era'],
  body: 'Continuously modernize with AI to cut cost, technical debt, and risk.',
} as const;

export const AMOD_INTRO = {
  statement:
    'AI is reshaping how enterprises compete and operate, making continuous modernization a business imperative.',
  body: 'At McCarthy, we build what we run and run what we build. With real production experience across manufacturing, logistics, financial services, healthcare, and energy, we help you modernize legacy and modern environments with confidence. Our audit-first approach lets you scale modernization using proven operational frameworks and open standards that adapt to changing business priorities — and deliver a continuously modern operation.',
} as const;

export const AMOD_VALUE_PROPS: readonly ValueProp[] = [
  {
    title: 'Business-driven, expert-guided.',
    body: 'Human oversight with industry and domain expertise for predictable, measurable outcomes.',
  },
  {
    title: 'Audit-first. De-risked, rapid iterations.',
    body: 'A structured Operations Intelligence Audit that identifies where automation pays off before you commit — proven frameworks, honestly labeled as hypotheses until tested.',
  },
  {
    title: 'Governance by design.',
    body: 'Production-grade controls for cost and data. Security and compliance built in from day one.',
  },
];

export const AMOD_HOW_WE_HELP = {
  eyebrow: 'How McCarthy helps',
  heading: 'A connected modernization model from operational insight to governed execution',
  items: [
    {
      title: 'Scale and de-risk outcomes',
      body: 'We run modernization engagements on compressed timelines and at lower cost through our audit-first model — starting with a paid Operations Intelligence Audit, not a blank-check discovery phase. Combined with structured measurement and a defined delivery methodology, we deliver governed outcomes with less dependence on scarce specialist skills.',
    },
    {
      title: 'Start anywhere',
      body: 'Start your modernization journey anywhere — operations, data infrastructure, customer-facing systems, or core processes. Modernization benefits are activated as an integrated continuum, not isolated workstreams, and it’s all connected by an honesty-first standard: frameworks labeled as hypotheses, statistics attributed to named sources, and limitations stated up front.',
    },
    {
      title: 'Co-existence layer',
      body: 'Modernize without replacing everything. Legacy and modern systems run side by side, enabling continuous modernization with zero disruption, reduced risk, and improved agility. Integrating the new with the old reduces technical debt, preserves institutional knowledge, and accelerates innovation.',
    },
    {
      title: 'Experts at the center of transformation',
      body: 'McCarthy experts remain central to the process, providing human oversight, governance, and accountability. Our team combines operational, industry, technical, and strategic expertise into a single engagement model — driving adoption through change management, not just deployment.',
    },
    {
      title: 'Continuous optimization and learning',
      body: 'We help clients move beyond one-off modernization projects to an operating model that continuously learns and improves. Using operational insights, reusable workflows, governance controls, and human feedback, each modernization cycle reduces technical debt, preserves knowledge, and makes the operation faster, smarter, and more adaptable over time.',
    },
  ] satisfies readonly HelpItem[],
} as const;

export const AMOD_TRENDS = {
  eyebrow: 'Trends and insights',
  heading: 'What we think about modernizing in the AI era',
  articles: [
    {
      title: 'A decision-maker’s guide to the agentic AI era',
      body: 'Understand why traditional approaches fail and what enterprises should be doing instead.',
      link: { label: 'Read the article', href: '/insights/agentic-ai-decision-makers-guide' },
    },
    {
      title: 'AI-native modernization for industry-specific operations',
      body: 'Learn why traditional modernization breaks down and how organizations can take a more focused approach across manufacturing, logistics, financial services and other complex environments.',
      link: { label: 'Read the article', href: '/insights/ai-native-modernization-by-industry' },
    },
    {
      title: 'From strategy to practice: scaling agentic modernization',
      body: 'McCarthy research exploring what separates organizations that successfully scale agentic AI from those that remain stuck in experimentation.',
      link: { label: 'Read the report', href: '/insights/scaling-agentic-modernization' },
    },
  ] satisfies readonly TrendArticle[],
} as const;

/**
 * Placeholder stories until real McCarthy customer outcomes exist to
 * publish — linked to the Insights hub rather than a fabricated case-study
 * page, since no dedicated destination for either exists yet.
 */
export const AMOD_CUSTOMER_SUCCESS = {
  heading: 'Customer success with continuous modernization',
  stories: [
    {
      title: 'Accelerating operational intelligence with McCarthy AI',
      link: { label: 'Read the customer story', href: '/insights' },
    },
    {
      title: 'McCarthy helps a growing enterprise modernize critical workflows with governed AI',
      link: { label: 'Read the customer story', href: '/insights' },
    },
  ] satisfies readonly CustomerStory[],
} as const;

export const AMOD_CAPABILITIES = {
  heading: 'Related capabilities',
  items: [
    {
      title: 'Operations Intelligence Audit',
      body: 'A structured audit that identifies modernization opportunities, measures operational friction, and prioritizes high-value automation.',
      link: { label: 'Learn more', href: '/ai-audit' },
    },
    {
      title: 'Custom AI Platform Builds',
      body: 'Production-ready AI systems designed around real business workflows, data, governance, and operational requirements.',
      link: { label: 'Learn more', href: '/ai-solutions' },
    },
    {
      title: 'Managed AI Retainers',
      body: 'Ongoing engineering, optimization, governance, and AI modernization support as the operating environment evolves.',
      link: { label: 'Learn more', href: '/contact' },
    },
  ] satisfies readonly Capability[],
} as const;

/**
 * Explicit placeholders, not invented people — bracketed names/roles per the
 * source brief, preserving the reference's 4×2 desktop grid until real
 * McCarthy team members and photography are supplied.
 */
export const AMOD_TEAM: readonly TeamMember[] = [
  { name: '[Team member]', role: '[Role]' },
  { name: '[Team member]', role: '[Role]' },
  { name: '[Team member]', role: '[Role]' },
  { name: '[Team member]', role: '[Role]' },
  { name: '[Team member]', role: '[Role]' },
  { name: '[Team member]', role: '[Role]' },
  { name: '[Team member]', role: '[Role]' },
  { name: '[Team member]', role: '[Role]' },
];

export const AMOD_CONNECT_CTA = {
  heading:
    'Learn how McCarthy Consult can help your business modernize continuously and operate AI-native at scale.',
  link: { label: 'Let’s talk', href: '/contact' } satisfies LinkRef,
} as const;
