import type { IndustryPageContent } from '@/types/industry';

/**
 * Hospitality & Travel industry page content.
 *
 * Copy is transcribed verbatim from the supplied `hospitality-travel.html`
 * brief — nothing rewritten, shortened, expanded or invented. Bracketed
 * `[...]` text is the brief's own placeholder marker and is kept exactly as
 * written. The only changes are mechanical: the source file's mojibake (`â`
 * standing in for an em dash, `Â·` for a middot, `Â©` for the copyright
 * glyph) is corrected to the intended character, and the source's own
 * trailing arrow glyphs on buttons/links are dropped since this design's
 * button and ArrowLink components already render their own arrow — that
 * glyph was the static HTML's substitute for one, not locked prose.
 */
export const HOSPITALITY_TRAVEL_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Hospitality & Travel',
    description:
      'Deliver personalized service at scale, without scaling headcount the same way — with AI agents built around booking, guest service and revenue management.',
    path: '/industries/hospitality-travel',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Hospitality & Travel' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Hospitality & Travel',
    heading: 'Turn every guest interaction into a reason to return',
    body: 'Deliver personalized service at scale, without scaling headcount the same way — with AI agents built around booking, guest service and revenue management.',
    primaryCta: { label: 'Book a Hospitality Readiness Audit', href: '#connect-with-us' },
    secondaryLabel: 'See every use case',
    secondaryHref: '#capabilities',
    stats: [
      { value: '3', label: 'functional areas where agents apply' },
      { value: '8+', label: 'specific agent capabilities cataloged below' },
      { value: '1', label: 'audit before any commitment' },
    ],
  },
  intro: {
    label: 'Overview',
    paragraphs: [
      'McCarthy provides proven technical expertise and blueprints to guide hotels, travel operators and hospitality groups through deploying AI agents into booking, guest service and revenue management — so guests get faster service and you get better margins.',
      "A hospitality operation runs on hundreds of small guest decisions a day — how to price tonight's rooms, how to respond to a request, how to staff tomorrow's shift. Most of that still depends on a front desk or revenue manager reacting in real time without full visibility. AI agents don't replace the hospitality touch guests remember; they clear the operational load around it, so staff spend their time on the moments that actually make a guest want to come back.",
      "Below is the full range of what we build for hospitality and travel organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on hospitality operators isn't new — the tools to answer it are",
    body: 'Four forces are converging on guest operations at once, and each one is a place where agentic AI closes the gap between guest expectation and what staff can deliver in the moment.',
    cards: [
      {
        index: '01',
        title: 'Guest expectation for instant service',
        text: 'Guests expect requests and questions answered immediately across channels, not routed through a queue at the front desk.',
      },
      {
        index: '02',
        title: 'Revenue volatility from demand swings',
        text: 'Occupancy and rates shift with seasonality, events and competitor pricing faster than a manual repricing cycle can track.',
      },
      {
        index: '03',
        title: 'Staffing cost pressure',
        text: 'Labor is one of the largest cost lines in hospitality, and matching staffing to actual demand is a constant balancing act.',
      },
      {
        index: '04',
        title: 'Competitive pressure from OTAs and direct competitors',
        text: 'Guests compare prices and reviews in seconds, and a slow or generic response can lose a booking before a human even sees the inquiry.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across a hospitality or travel operation',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Guest service',
        subtitle: 'Answering the request the moment it comes in, across whichever channel the guest used.',
        capabilities: [
          {
            name: 'Guest service agents',
            desc: 'Handle booking changes, requests and FAQs instantly across channels, reducing front-desk and call center load while improving response time.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Concierge agents',
            desc: 'Provide personalized local recommendations and itinerary support based on guest preferences and history.',
            tags: ['revenue'],
          },
          {
            name: 'Complaint resolution agents',
            desc: 'Detect and route service issues to staff immediately based on guest communication sentiment, preventing small issues from becoming bad reviews.',
            tags: ['risk'],
          },
        ],
      },
      {
        index: '2',
        title: 'Revenue management',
        subtitle: "Repricing continuously instead of reacting to last week's occupancy report.",
        capabilities: [
          {
            name: 'Revenue management agents',
            desc: 'Adjust room or ticket pricing continuously against demand, seasonality and competitor rates — protecting margin without manual repricing.',
            tags: ['revenue'],
          },
          {
            name: 'Personalization agents',
            desc: 'Tailor offers and upsells to guest preferences and history, lifting ancillary revenue per booking.',
            tags: ['revenue'],
          },
          {
            name: 'Booking optimization agents',
            desc: 'Predict cancellation likelihood and optimize overbooking strategy to protect occupancy without over-committing.',
            tags: ['revenue', 'risk'],
          },
        ],
      },
      {
        index: '3',
        title: 'Operations',
        subtitle: 'Matching staffing and maintenance to actual demand, not a fixed schedule.',
        capabilities: [
          {
            name: 'Operations agents',
            desc: 'Coordinate housekeeping, maintenance and staffing schedules against occupancy in real time, cutting labor cost without hurting service levels.',
            tags: ['cost'],
          },
          {
            name: 'Predictive maintenance agents',
            desc: 'Flag equipment and facility issues before they become a guest-facing problem or an emergency repair.',
            tags: ['cost', 'risk'],
          },
        ],
      },
    ],
  },
  impact: {
    eyebrow: 'The business case',
    heading: 'What this actually moves — by revenue, cost, risk and time',
    body: "Every capability above rolls up into one of four outcomes. This is how we'd frame the business case with your leadership team before any build starts.",
    rows: [
      {
        area: 'Revenue protection & growth',
        desc: 'Dynamic pricing and personalized upsells directly lift RevPAR and ancillary revenue per booking.',
        metric: 'RevPAR / ancillary revenue',
      },
      {
        area: 'Cost reduction',
        desc: 'Optimized staffing and predictive maintenance reduce labor and facility cost without cutting service quality.',
        metric: 'labor cost per occupied room',
      },
      {
        area: 'Risk reduction',
        desc: 'Complaint resolution and predictive maintenance agents catch issues before they become bad reviews or guest-facing failures.',
        metric: 'review score / incident rate',
      },
      {
        area: 'Time reclaimed',
        desc: 'Front-desk and operations staff reclaim hours previously spent on manual scheduling and routine guest requests.',
        metric: 'front-desk & ops hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with hospitality and travel industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Where hospitality AI pays off fastest',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Dynamic pricing and revenue management with agents',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'AI-powered guest service',
        linkLabel: 'Get the playbook',
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    heading: 'How this actually gets deployed in your operation',
    body: "We don't start with a platform sale. We start with an audit, because the capability catalogue above only matters where it fits your actual constraints — your systems, your team, your risk tolerance.",
    steps: [
      {
        step: '01',
        title: 'Operations Intelligence Audit',
        desc: "A paid, focused engagement to map where agents would create the most value in your specific operation — and just as importantly, where they wouldn't yet. You get a prioritized list before you commit to anything larger.",
      },
      {
        step: '02',
        title: 'Pilot on one process',
        desc: 'We build and deploy the highest-priority capability in a contained scope — one team, one process, one location — so you see it work before it touches the whole organization.',
      },
      {
        step: '03',
        title: 'Custom platform build',
        desc: 'Once validated, we build the full capability into your systems — integrated with your existing stack, not a separate tool your team has to context-switch into.',
      },
      {
        step: '04',
        title: 'Managed retainer',
        desc: 'We stay on to monitor, tune and extend the system as your operation changes, instead of leaving you with something that goes stale in six months.',
      },
    ],
  },
  expertQa: {
    eyebrow: 'Our experts, your challenges',
    heading: 'A conversation worth having before you commit to anything',
    expertTitle: 'Hospitality Lead',
    items: [
      { question: 'Where does AI move the needle fastest in hospitality?', answer: '[Answer]' },
      { question: 'How do you keep AI-driven service still feeling personal?', answer: '[Answer]' },
      {
        question: 'Where do most operators underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: staffing optimization, not just pricing.]',
      },
      { question: 'What does a realistic first 90 days look like?', answer: '[Answer]' },
    ],
  },
  caseStudies: {
    eyebrow: 'Customer success',
    heading: "What this looks like once it's running",
    stories: [
      {
        tag: '[operator type]',
        title: '[Case study headline — e.g. "Lifting RevPAR through continuous dynamic pricing"]',
        body: "[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the client's own terms once you have it].",
      },
      {
        tag: '[operator type]',
        title: '[Case study headline — e.g. "Cutting labor cost through demand-matched staffing"]',
        body: '[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What hospitality operators usually ask before they start',
    items: [
      {
        question: 'Does this require replacing our property management system?',
        answer: 'No. Agents are built to integrate with what you already run, not to replace it.',
      },
      {
        question: 'How long before we see a result?',
        answer:
          'The Readiness Audit is scoped to be short and focused. A first pilot capability is typically live in weeks, not quarters.',
      },
      {
        question: 'What does this cost?',
        answer:
          'The audit is a fixed, paid engagement — no open-ended discovery. Anything beyond that is scoped against what the audit finds.',
      },
      {
        question: "Who owns the system once it's built?",
        answer: "You do. We build on your infrastructure and hand over what's needed for your team to run it.",
      },
      {
        question: 'Can this work across a multi-property group with different systems?',
        answer: '[Answer — describe your approach to multi-property deployment.]',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on hospitality and AI",
    articles: [
      { meta: 'Article · 6 min', title: 'Why dynamic pricing is the fastest ROI in hospitality AI' },
      { meta: 'Article · 5 min', title: 'What guests actually want from AI-assisted service' },
      { meta: 'Article · 4 min', title: 'Staffing optimization: the quiet AI win in hospitality' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit in your guest experience?',
    primaryLabel: 'Book a Hospitality Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
