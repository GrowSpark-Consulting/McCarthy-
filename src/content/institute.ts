import { CONSULTING_FOOTER_GROUPS, CONSULTING_FOOTER_LEGAL } from './consulting-footer';
import type { LinkRef } from './homepage';
import type {
  ConsultingBlock,
  ConsultingCard,
  ConsultingHeroContent,
  ConsultingPerson,
} from '@/types/consulting';

/**
 * McCarthy Institute page content.
 *
 * Every string is transcribed verbatim from `mccarthy-institute-copy.md`.
 * Where that file carries a bracketed placeholder the bracket is preserved
 * exactly — no name, title, client or metric is invented to fill a gap, so an
 * unfinished slot stays visibly unfinished.
 *
 * Hrefs are the one thing the deck does not supply; each points at the closest
 * route the site already declares.
 */

const STILLS = {
  office: '/videos/hero-ai-office-poster.jpg',
} as const;

/** The deck's own nav labels, wired to this page's sections. */
export const INSTITUTE_TABS: readonly LinkRef[] = [
  { label: 'What is McCarthy Institute?', href: '#what-is-mccarthy-institute' },
  { label: 'How does it work?', href: '#how-does-it-work' },
  { label: 'Resources', href: '#resources' },
  { label: 'Meet the experts', href: '#meet-the-experts' },
  { label: 'Talk to an expert', href: '#connect' },
];

export const INSTITUTE_HERO: ConsultingHeroContent = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/what-we-do' },
    { label: 'McCarthy Institute' },
  ],
  eyebrow: 'mccarthy institute',
  headline: ['Education-led. Governance-ready.', 'Built for responsible AI adoption.'],
  media: {
    videoSrc: '/videos/hero-ai-office.mp4',
    posterSrc: '/videos/hero-ai-office-poster.jpg',
  },
};

export const INSTITUTE_WHAT = {
  heading: 'What is McCarthy Institute?',
  paragraphs: [
    'AI adoption is no longer a technology issue but a readiness issue. Boards expect accountability, employees demand clarity on how to use these tools, and regulators expect control. Yet most enterprises roll out AI faster than they build the judgment, governance and security practices to use it safely.',
    'McCarthy Institute is a training-led practice that helps enterprises build AI capability the right way. We teach your people how to use AI and AI agents effectively, understand where the ethical and security risks sit, and put governance in place before scale — not after. With Institute, responsible AI adoption becomes a capability your teams own, not a policy document nobody reads.',
  ],
} as const;

export const INSTITUTE_FEATURE = {
  eyebrow: 'Featured resource',
  card: {
    title: 'Designing Agentic AI: What your teams need to know before you deploy',
    body: 'Learn what enterprises need to teach their people before scaling intelligent agents across workflows — from pilots to enterprise impact, safely.',
    link: { label: 'Learn more', href: '/insights' },
    image: STILLS.office,
  } as ConsultingCard,
} as const;

export const INSTITUTE_HOW = {
  heading: 'How does McCarthy Institute work?',
  intro: [
    'McCarthy Institute offers a structured model for building AI capability across your enterprise — combining hands-on training, applied governance frameworks, and deep technical grounding to build teams that are both confident and careful with AI.',
    'McCarthy Institute helps your enterprise do the following through training, governance advisory, security enablement and delivery:',
  ],
  blocks: [
    {
      heading: 'Build AI fluency as a skill',
      paragraphs: [
        'by teaching staff and teams how platforms and agents should be used across real moments in their work, not just in theory.',
      ],
    },
    {
      heading: 'Design governance that adapts',
      paragraphs: [
        'by mapping how AI decisions, approvals and oversight should evolve as usage, risk and regulation change over time.',
      ],
    },
    {
      heading: 'Operationalize ethics and security',
      paragraphs: [
        'by embedding responsible-use principles, access controls and accountability into how teams actually work with AI day to day.',
      ],
    },
  ] as readonly ConsultingBlock[],
} as const;

export const INSTITUTE_RESOURCES = {
  eyebrow: 'Resources',
  heading: 'Resources',
  cards: [
    {
      title: 'AI Ethics in Practice',
      body: 'Explore how enterprises translate AI ethics principles into day-to-day decisions — from data use to agent oversight — without slowing teams down.',
      link: { label: 'Read the article', href: '/insights' },
      image: STILLS.office,
    },
    {
      title: "Governance's Moment of Truth",
      body: 'Explore how leadership and training teams build the judgment needed to govern AI adoption as agents move from pilots into everyday operations.',
      link: { label: 'Read the article', href: '/insights' },
      accent: 'ember',
    },
    {
      title: '[Case study — e.g. "Accelerating responsible AI adoption at [Client]"]',
      body: 'Discover how McCarthy Institute helped [Client] train their teams on AI and AI agents, building governance and security practices that scaled adoption with confidence.',
      link: { label: 'Read the story', href: '/insights' },
      accent: 'azure',
    },
  ] as readonly ConsultingCard[],
} as const;

/**
 * The deck names no one yet: every row is a placeholder, and the note that the
 * original carries thirteen rows is guidance for whoever fills them in, not
 * content for the page.
 */
export const INSTITUTE_EXPERTS = {
  heading: 'Meet the McCarthy Institute experts',
  people: [
    {
      name: '[Name]',
      title: '[Title — e.g. "Global Head, AI Training and Governance"]',
      meta: 'McCarthy',
    },
    { name: '[Name]', title: '[Title — e.g. "Institute Lead - India"]', meta: 'McCarthy' },
    { name: '[Name]', title: '[Title — e.g. "Institute Lead - Singapore"]', meta: 'McCarthy' },
  ] as readonly ConsultingPerson[],
} as const;

export const INSTITUTE_FOOTER_GROUPS = CONSULTING_FOOTER_GROUPS;
export const INSTITUTE_FOOTER_LEGAL = CONSULTING_FOOTER_LEGAL;
