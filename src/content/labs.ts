import { CONSULTING_FOOTER_GROUPS, CONSULTING_FOOTER_LEGAL } from './consulting-footer';
import type { LinkRef } from './homepage';
import type {
  ConsultingBlock,
  ConsultingHeroContent,
  ConsultingPerson,
  ConsultingStat,
} from '@/types/consulting';

/**
 * McCarthy Labs page content.
 *
 * Every string is transcribed verbatim from `mccarthy-labs-copy.md`. Where
 * that file carries a bracketed placeholder the bracket is preserved exactly —
 * no metric, name, city or answer is invented, so an unfinished slot stays
 * visibly unfinished until the real details exist.
 *
 * Hrefs are the one thing the deck does not supply; each points at the closest
 * route the site already declares.
 */

/** The deck's own nav labels, wired to this page's sections. */
export const LABS_TABS: readonly LinkRef[] = [
  { label: 'Who we are', href: '#who-we-are' },
  { label: 'Our people', href: '#our-people' },
  { label: 'How we deliver', href: '#how-we-deliver' },
  { label: 'Where to find us', href: '#where-to-find-us' },
  { label: 'Corporate citizenship', href: '#corporate-citizenship' },
  { label: 'Connect with us', href: '#connect' },
];

export const LABS_HERO: ConsultingHeroContent = {
  eyebrow: 'mccarthy labs',
  headline: ['Where human ingenuity meets advanced', 'technology to deliver results that matter'],
  cta: { label: 'Schedule a visit', href: '/contact' },
  /** The deck asks for Labs photography; the project's team footage stands in. */
  media: {
    videoSrc: '/videos/hero-ai-office.mp4',
    posterSrc: '/videos/hero-ai-office-poster.jpg',
  },
};

/** Figures are the deck's placeholders. None of them is invented. */
export const LABS_STATS: readonly ConsultingStat[] = [
  { value: '[#]', label: 'India Location(s)' },
  { value: '[#]+', label: 'Certifications' },
  { value: '[#]+', label: 'Customers with AI-enabled insights' },
  { value: '[#]', label: 'Monthly automations' },
];

export const LABS_INNOVATION = {
  heading: 'Empowering innovation and collaboration',
  /** The deck supplies no video, so the runtime stays as written. */
  videoLabel: '0:00 / [runtime]',
  paragraphs: [
    "McCarthy Labs is the heartbeat of our delivery — this is where the magic happens. This isn't just an office; it's the innovation hub that powers the outcomes our customers need, faster and more efficiently.",
    "We constantly innovate and unify our talent, technology, and research to work side-by-side with our customers' teams — building products, delivering services, and running R&D that continuously improves how our clients operate.",
    'We deliver high-impact outcomes faster by leveraging:',
  ],
  links: [
    { label: 'Mission-critical expertise', href: '/what-we-do' },
    { label: 'Data-driven insights', href: '/what-we-do' },
    { label: 'AI and automation capabilities', href: '/what-we-do' },
    { label: 'In-house R&D and product development', href: '/what-we-do' },
  ] as readonly LinkRef[],
} as const;

export const LABS_PEOPLE = {
  heading: 'Game-changers, problem-solvers, and innovators.',
  intro: [
    'Our people are not just experts — they are trusted advisors, innovative thinkers, and collaborative partners.',
  ],
  blocks: [
    {
      heading: 'Trusted',
      paragraphs: [
        'Rooted in a heritage of secure-by-design work, customers trust McCarthy with their most sensitive data.',
      ],
    },
    {
      heading: 'Experienced',
      paragraphs: [
        '[X]+ years of experience in operating complex technology environments helps solidify McCarthy as a trusted AI and technology partner.',
      ],
    },
    {
      heading: 'Skilled',
      paragraphs: [
        'McCarthy Labs is composed of technical and research experts with extensive experience in building AI systems and driving exceptional business outcomes.',
      ],
    },
  ] as readonly ConsultingBlock[],
} as const;

/** The deck names no one: every row is a placeholder. */
export const LABS_EXPERTISE = {
  heading: 'Our expertise: A glimpse',
  people: [
    { name: '[Name]', title: '[Title/role]', meta: 'India' },
    { name: '[Name]', title: '[Title/role]', meta: 'India' },
    { name: '[Name]', title: '[Title/role]', meta: 'India' },
    { name: '[Name]', title: '[Title/role]', meta: 'India' },
  ] as readonly ConsultingPerson[],
  action: { label: 'Show more', href: '/careers' } satisfies LinkRef,
} as const;

export const LABS_DELIVERY = {
  heading: 'How we deliver',
  subheading: 'A service model that ensures global expertise with local impact.',
  models: [
    {
      heading: 'Onsite',
      paragraphs: [
        'Service that requires a physical presence at the client location, including consulting, front-end analysis, and implementation support.',
      ],
    },
    {
      heading: 'Local',
      paragraphs: [
        'Service delivered from within India, including the processing of sensitive data and work bound by local legal and regulatory requirements.',
      ],
    },
    {
      heading: 'Regional',
      paragraphs: [
        'Service delivered across [Asia-Pacific / your served region], with shared language, culture, and time zone alignment for ease of integration.',
      ],
    },
    {
      heading: 'Global',
      paragraphs: [
        "Service delivered out of McCarthy's Singapore base and coordinated with McCarthy Labs in India, customized to achieve maximum efficiency — covering hub functions and ongoing operations such as monitoring and development.",
      ],
    },
  ] as readonly ConsultingBlock[],
} as const;

export const LABS_LOCATIONS = {
  heading: 'Where to find us',
  body: "We are a unique hub bringing together McCarthy's product, delivery and research capabilities under one roof.",
  locations: ['[City 1, India]', '[City 2, India]'],
} as const;

export const LABS_CTA = {
  heading: 'Explore how corporate citizenship is set into motion at McCarthy Labs.',
  actions: [{ label: 'Learn more', href: '/about/corporate-citizenship' }] as readonly LinkRef[],
} as const;

export const LABS_FAQ = {
  heading: 'Find out more about McCarthy Labs',
  items: [
    { question: 'What does McCarthy Labs do?', answer: '[Answer]' },
    { question: 'How does McCarthy Labs continuously deliver results?', answer: '[Answer]' },
    {
      question: 'How does McCarthy Labs contribute to sustainability and social impact?',
      answer: '[Answer]',
    },
    { question: 'How can I reach out to you?', answer: '[Answer]' },
  ],
} as const;

export const LABS_FOOTER_GROUPS = CONSULTING_FOOTER_GROUPS;
export const LABS_FOOTER_LEGAL = CONSULTING_FOOTER_LEGAL;
