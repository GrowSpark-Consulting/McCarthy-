import type { IndustryPageContent } from '@/types/industry';

/**
 * Construction industry page content.
 *
 * Copy is transcribed verbatim from the supplied `construction.html` brief —
 * nothing rewritten, shortened, expanded or invented. Bracketed `[...]` text
 * is the brief's own placeholder marker and is kept exactly as written. The
 * only changes are mechanical: the source file's mojibake (`â` standing in
 * for an em dash, `Â·` for a middot, `Â©` for the copyright glyph) is
 * corrected to the intended character, and the source's own trailing arrow
 * glyphs on buttons/links are dropped since this design's button and
 * ArrowLink components already render their own arrow — that glyph was the
 * static HTML's substitute for one, not locked prose.
 */
export const CONSTRUCTION_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Construction',
    description:
      'Cut the guesswork out of site management, procurement and safety — with AI agents built around project planning, site monitoring and cost control.',
    path: '/industries/construction',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Construction' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Construction',
    heading: 'Build on schedule, on budget',
    body: 'Cut the guesswork out of site management, procurement and safety — with AI agents built around project planning, site monitoring and cost control.',
    primaryCta: { label: 'Book a Construction Readiness Audit', href: '#connect-with-us' },
    secondaryLabel: 'See every use case',
    secondaryHref: '#capabilities',
    stats: [
      { value: '4', label: 'functional areas where agents apply' },
      { value: '11+', label: 'specific agent capabilities cataloged below' },
      { value: '1', label: 'audit before any commitment' },
    ],
  },
  intro: {
    label: 'Overview',
    paragraphs: [
      'McCarthy provides proven technical expertise and blueprints to guide construction firms through turning fragmented project data — schedules, budgets, site photos, subcontractor updates — into decisions made in real time, not after the fact.',
      "A construction project runs on hundreds of small decisions a day — what to order, who to dispatch, what to flag as a safety risk. Most of that still lives across separate spreadsheets, site walks and phone calls between the office and the field. AI agents don't replace the site manager's judgment; they make sure the routine version of the decision — reorder this material, flag this delay, catch this hazard — happens the moment the data says it should, not at the next site visit.",
      "Below is the full range of what we build for construction organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on construction firms isn't new — the tools to answer it are",
    body: "Four forces are converging on project delivery at once, and each one is a place where agentic AI closes the gap between what's happening on site and what the office knows.",
    cards: [
      {
        index: '01',
        title: 'Cost overruns from delayed visibility',
        text: 'Budget problems often surface at monthly reporting instead of the week they actually started, by which point the fix is more expensive.',
      },
      {
        index: '02',
        title: 'Skilled labor shortage',
        text: "Experienced site supervisors and tradespeople are hard to find, and Singapore's active pipeline of projects competes for the same limited pool.",
      },
      {
        index: '03',
        title: 'Material price and supply volatility',
        text: "Lead times and material costs swing enough to turn a fixed-price bid into a losing one if procurement timing isn't tracked continuously.",
      },
      {
        index: '04',
        title: 'Site safety and compliance exposure',
        text: 'Manual safety walks catch a fraction of hazard conditions compared to continuous monitoring, and incidents carry real liability and delay cost.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across a construction firm',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Project planning & scheduling',
        subtitle: 'Catching the delay before it cascades into the critical path.',
        capabilities: [
          {
            name: 'Scheduling agents',
            desc: 'Track subcontractor progress against the project timeline and flag delays before they cascade into the critical path.',
            tags: ['risk', 'time'],
          },
          {
            name: 'Resource allocation agents',
            desc: 'Match crew and equipment availability to the schedule continuously, reducing idle time and double-booking.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Progress tracking agents',
            desc: 'Compare site photos and reported progress against the plan automatically, catching discrepancies early.',
            tags: ['risk'],
          },
        ],
      },
      {
        index: '2',
        title: 'Cost & procurement',
        subtitle: 'Watching the budget continuously instead of finding out at month-end.',
        capabilities: [
          {
            name: 'Cost estimation agents',
            desc: "Cross-reference material prices, labor rates and project scope continuously, catching budget overruns weeks before they'd otherwise surface.",
            tags: ['cost', 'risk'],
          },
          {
            name: 'Procurement agents',
            desc: 'Monitor material lead times and pricing across suppliers, automatically flagging the best time to order.',
            tags: ['cost', 'risk'],
          },
          {
            name: 'Change order agents',
            desc: 'Track scope changes and their cost impact in real time, keeping the budget conversation current instead of retroactive.',
            tags: ['revenue', 'risk'],
          },
        ],
      },
      {
        index: '3',
        title: 'Site safety & compliance',
        subtitle: 'Turning the safety walk into a continuous watch.',
        capabilities: [
          {
            name: 'Site safety agents',
            desc: 'Monitor camera feeds for PPE compliance and hazard conditions in real time, reducing incident rates and the liability that comes with them.',
            tags: ['risk'],
          },
          {
            name: 'Compliance documentation agents',
            desc: 'Maintain the permit and inspection audit trail regulators expect, pulled directly from site data instead of manual logs.',
            tags: ['risk', 'time'],
          },
          {
            name: 'Equipment safety agents',
            desc: 'Track equipment inspection and maintenance schedules automatically, reducing the risk of operating non-compliant machinery.',
            tags: ['risk'],
          },
        ],
      },
      {
        index: '4',
        title: 'Workforce & subcontractor management',
        subtitle: "Coordinating a workforce that's rarely all in one place at once.",
        capabilities: [
          {
            name: 'Subcontractor coordination agents',
            desc: 'Track subcontractor commitments, deliverables and payment milestones automatically, reducing disputes and delays.',
            tags: ['risk', 'time'],
          },
          {
            name: 'Labor tracking agents',
            desc: 'Reconcile time and attendance against site activity, reducing payroll disputes and improving labor cost visibility.',
            tags: ['cost', 'time'],
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
        desc: 'Fewer schedule delays and faster change-order processing protect margin on fixed-price contracts and improve win rate on time-sensitive bids.',
        metric: 'schedule adherence / change order cycle',
      },
      {
        area: 'Cost reduction',
        desc: 'Earlier cost visibility and optimized procurement timing reduce material and labor cost overruns.',
        metric: 'cost overrun rate',
      },
      {
        area: 'Risk reduction',
        desc: 'Continuous safety monitoring and compliance documentation reduce incident rates and audit exposure.',
        metric: 'incident rate / compliance findings',
      },
      {
        area: 'Time reclaimed',
        desc: 'Site managers and project office staff reclaim hours previously spent on manual progress tracking and reconciliation.',
        metric: 'site manager hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with construction industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Is your project data AI-ready?',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'AI-powered site safety monitoring',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'Cutting cost overruns with predictive agents',
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
    expertTitle: 'Construction Lead',
    items: [
      { question: 'Where should construction firms start with AI?', answer: '[Answer]' },
      { question: "What's the biggest source of budget overrun AI can actually fix?", answer: '[Answer]' },
      {
        question: 'Where do most firms underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: subcontractor coordination, not just cost tracking.]',
      },
      { question: 'What does a realistic first 90 days look like?', answer: '[Answer]' },
    ],
  },
  caseStudies: {
    eyebrow: 'Customer success',
    heading: "What this looks like once it's running",
    stories: [
      {
        tag: '[industry / client type]',
        title: '[Case study headline — e.g. "Catching cost overruns weeks earlier on a commercial build"]',
        body: "[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the client's own terms once you have it].",
      },
      {
        tag: '[industry / client type]',
        title: '[Case study headline — e.g. "Reducing site incidents through continuous safety monitoring"]',
        body: '[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What construction firms usually ask before they start',
    items: [
      {
        question: 'Does this require new hardware on site?',
        answer:
          "In most cases we work with cameras and systems you already have — we'll flag clearly if a specific use case needs new sensors.",
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
        question: 'How does this work across multiple concurrent job sites?',
        answer: '[Answer — describe your approach to multi-site deployment and data consolidation.]',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on construction and AI",
    articles: [
      { meta: 'Article · 6 min', title: "Why Singapore's construction sector is betting on AI" },
      { meta: 'Article · 5 min', title: "Computer vision on the job site: what's actually working" },
      { meta: 'Article · 4 min', title: 'The hidden cost of manual procurement in construction' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit on your next project?',
    primaryLabel: 'Book a Construction Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
