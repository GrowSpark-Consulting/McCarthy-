import type { LinkRef } from './homepage';

/**
 * Insights page content.
 *
 * Structured the way the reference's Insights hub is: a hero, one featured
 * piece with a larger visual footprint, a filterable card grid, and a
 * list-style secondary content type (papers/frameworks) beneath it. Every
 * word here is McCarthy's own — nothing is copied from the reference site,
 * which is used only as a layout/structure guide.
 */

export interface InsightArticle {
  readonly category: string;
  readonly title: string;
  readonly body: string;
  readonly meta: string;
  readonly href: string;
}

export interface InsightPaper {
  readonly type: string;
  readonly title: string;
  readonly href: string;
  readonly linkLabel: string;
}

export const INSIGHTS_HERO = {
  eyebrow: 'Insights',
  heading: 'Ideas for AI transformation, from the people building it',
  body: 'Perspectives on AI strategy, agents, automation and workforce transformation — written from real engagements, not a marketing calendar.',
} as const;

/** Topic filters shown as pills above the grid. "All" always leads. */
export const INSIGHT_CATEGORIES = [
  'All',
  'AI strategy',
  'AI agents',
  'Automation',
  'Workforce transformation',
  'Enterprise transformation',
] as const;

/** Clickable suggested terms shown under the search field when it's empty. */
export const SUGGESTED_SEARCHES: readonly string[] = ['AI agents', 'Automation', 'Workforce'];

/**
 * The larger single feature above the grid — the reference's "Readiness
 * Report" slot. McCarthy has no published report to fill it honestly, so it
 * carries the real AI Transformation Assessment instead of an invented
 * document.
 */
export const FEATURED_INSIGHT = {
  eyebrow: 'Featured',
  title: 'How ready is your business for AI, really?',
  body: 'Most AI transformation efforts stall before the first model is ever trained — not from a lack of ambition, but from an unclear picture of where the business actually stands today. The AI Transformation Assessment maps readiness across people, process and technology, and turns it into a prioritised 90-day roadmap.',
  meta: 'AI Transformation Assessment',
  imageSrc: '/videos/hero-ai-office-poster.jpg',
  link: { label: 'Book an AI Transformation Assessment', href: '/ai-audit' } satisfies LinkRef,
} as const;

/**
 * The main filterable grid. The first three reuse copy already published
 * elsewhere on the site (`content/homepage.ts`) so the same article isn't
 * worded two different ways; the rest are original to this page.
 */
export const INSIGHT_ARTICLES: readonly InsightArticle[] = [
  {
    category: 'AI strategy',
    title: 'Your AI strategy should start with the business, not the model',
    body: 'Model choice is the last decision, not the first. The work that determines whether AI pays back is understanding where the business actually loses time, money and margin.',
    meta: 'Insight · 6 min read',
    href: '/insights/ai-strategy-starts-with-the-business',
  },
  {
    category: 'AI agents',
    title: 'The shift from AI that answers to AI that acts',
    body: 'Agents change the question from “what can it tell me” to “what can it do” — and that changes how systems have to be designed, governed and trusted.',
    meta: 'Insight · 7 min read',
    href: '/insights/from-answers-to-actions',
  },
  {
    category: 'Automation',
    title: 'Don’t automate a broken process',
    body: 'Automation makes a process faster, not better. Fix the workflow first, then let the machine run it.',
    meta: 'Insight · 5 min read',
    href: '/insights/dont-automate-a-broken-process',
  },
  {
    category: 'AI strategy',
    title: 'Why most AI pilots never reach production',
    body: 'A working demo and a production system are different disciplines. The gap between them is where most AI investment quietly stalls.',
    meta: 'Insight · 5 min read',
    href: '/insights/why-ai-pilots-stall',
  },
  {
    category: 'AI agents',
    title: 'What makes an agent trustworthy enough to act',
    body: 'Autonomy without oversight is a liability. The agents worth deploying are built with guardrails from the start, not bolted on afterwards.',
    meta: 'Insight · 6 min read',
    href: '/insights/trustworthy-agents',
  },
  {
    category: 'Automation',
    title: 'The difference between automating a task and automating a decision',
    body: 'Automating a task saves time. Automating a decision changes who is accountable for the outcome — and that distinction should shape how you build.',
    meta: 'Insight · 6 min read',
    href: '/insights/task-vs-decision-automation',
  },
  {
    category: 'Workforce transformation',
    title: 'Training people to work alongside AI, not around it',
    body: 'Workforce transformation fails when AI is treated as a tool to route around instead of a capability built into how people actually work.',
    meta: 'Insight · 7 min read',
    href: '/insights/training-people-alongside-ai',
  },
  {
    category: 'Workforce transformation',
    title: 'What good AI governance looks like inside a team',
    body: 'Governance is not a committee that meets quarterly. It is the set of defaults a team applies every time it ships something AI touches.',
    meta: 'Insight · 5 min read',
    href: '/insights/ai-governance-inside-a-team',
  },
  {
    category: 'Enterprise transformation',
    title: 'Why business understanding has to come before architecture',
    body: 'The organisations that get the most from AI are the ones that mapped the business problem before they chose a platform.',
    meta: 'Insight · 6 min read',
    href: '/insights/business-before-architecture',
  },
  {
    category: 'Enterprise transformation',
    title: 'The 90-day case for starting small',
    body: 'A prioritised, narrow first deployment teaches an organisation more about its own readiness than a year of planning does.',
    meta: 'Insight · 4 min read',
    href: '/insights/the-90-day-case-for-starting-small',
  },
];

/**
 * List-style secondary content — the reference's distinct "Insight Papers"
 * treatment. No downloadable document actually exists yet, so the CTA is
 * honest about what happens next rather than pretending to open a PDF.
 */
export const INSIGHT_PAPERS: readonly InsightPaper[] = [
  { type: 'Framework', title: 'The AI Readiness Checklist', href: '/contact', linkLabel: 'Request access' },
  { type: 'Guide', title: 'A Field Guide to Agentic Workflows', href: '/contact', linkLabel: 'Request access' },
  {
    type: 'Framework',
    title: 'Governance Patterns for Enterprise AI',
    href: '/contact',
    linkLabel: 'Request access',
  },
  {
    type: 'Guide',
    title: 'The Workforce Transformation Playbook',
    href: '/contact',
    linkLabel: 'Request access',
  },
];
