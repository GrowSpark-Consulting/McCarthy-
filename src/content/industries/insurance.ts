import type { IndustryPageContent } from '@/types/industry';

/**
 * Insurance industry page content.
 *
 * Copy is transcribed verbatim from the supplied `insurance.html` brief —
 * nothing rewritten, shortened, expanded or invented. Bracketed `[...]` text
 * is the brief's own placeholder marker and is kept exactly as written. The
 * only changes are mechanical: the source file's mojibake (`â` standing in
 * for an em dash, `Â·` for a middot, `Â©` for the copyright glyph) is
 * corrected to the intended character, and the source's own trailing arrow
 * glyphs on buttons/links are dropped since this design's button and
 * ArrowLink components already render their own arrow — that glyph was the
 * static HTML's substitute for one, not locked prose.
 */
export const INSURANCE_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Insurance',
    description:
      'Cut the time between a claim being filed and a customer being paid — with AI agents built around claims processing, underwriting and fraud detection.',
    path: '/industries/insurance',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Insurance' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Insurance',
    heading: 'Settle claims faster. Underwrite smarter.',
    body: 'Cut the time between a claim being filed and a customer being paid — with AI agents built around claims processing, underwriting and fraud detection.',
    primaryCta: { label: 'Book an Insurance Readiness Audit', href: '#connect-with-us' },
    secondaryLabel: 'See every use case',
    secondaryHref: '#capabilities',
    stats: [
      { value: '4', label: 'functional areas where agents apply' },
      { value: '10+', label: 'specific agent capabilities cataloged below' },
      { value: '1', label: 'audit before any commitment' },
    ],
  },
  intro: {
    label: 'Overview',
    paragraphs: [
      'McCarthy provides proven technical expertise and blueprints to guide insurers through deploying AI agents that reduce claims cycle time and underwriting turnaround while keeping every decision auditable.',
      "Insurance runs on hundreds of decisions a day that carry both financial and regulatory weight — approve, deny, escalate, flag. Most of that still routes through manual review built for a slower, paper-based era. AI agents don't replace the adjuster or underwriter's judgment; they make sure the routine version of the decision happens instantly, with a clean record, so people focus on the complex claims and applications that actually need a human read.",
      "Below is the full range of what we build for insurance organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on insurers isn't new — the tools to answer it are",
    body: 'Four forces are converging on insurance operations at once, and each one is a place where agentic AI closes the gap between what your data shows and what your team can act on in time.',
    cards: [
      {
        index: '01',
        title: 'Customer expectation for speed',
        text: "Policyholders who can get a same-day claim decision elsewhere won't tolerate a multi-week cycle for a straightforward claim.",
      },
      {
        index: '02',
        title: 'Fraud sophistication outpacing manual review',
        text: 'Fraudulent claim patterns shift faster than a periodic training update for adjusters can keep up with.',
      },
      {
        index: '03',
        title: 'Underwriting capacity constraints',
        text: 'Skilled underwriters are hard to hire, and manual data-pulling from multiple sources is often the real bottleneck, not the judgment call itself.',
      },
      {
        index: '04',
        title: 'Regulatory pressure on explainability',
        text: 'Regulators increasingly expect insurers to be able to explain exactly how an AI-assisted decision was reached.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across an insurance operation',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Claims processing',
        subtitle: 'Cutting the cycle from weeks to days without cutting corners.',
        capabilities: [
          {
            name: 'Claims processing agents',
            desc: 'Review documentation, photos and policy terms automatically, cutting claims cycle time from weeks to days.',
            tags: ['revenue', 'time'],
          },
          {
            name: 'Damage assessment agents',
            desc: 'Analyze photo and sensor evidence to estimate damage and validate claims consistency automatically.',
            tags: ['time', 'risk'],
          },
          {
            name: 'Claims triage agents',
            desc: 'Route claims to the right adjuster or straight-through processing based on complexity, reducing time-to-first-touch.',
            tags: ['time'],
          },
        ],
      },
      {
        index: '2',
        title: 'Underwriting',
        subtitle: 'Turning a multi-source manual pull into an instant, documented decision.',
        capabilities: [
          {
            name: 'Underwriting agents',
            desc: 'Pull risk data from multiple sources and pre-score applications, speeding up quote turnaround and freeing underwriters for complex cases.',
            tags: ['time', 'revenue'],
          },
          {
            name: 'Risk assessment agents',
            desc: 'Continuously reassess portfolio risk as new data arrives, instead of relying on a static score set at policy issuance.',
            tags: ['risk'],
          },
          {
            name: 'Document processing agents',
            desc: 'Extract and validate application data from submitted documents automatically, cutting manual data entry time.',
            tags: ['time', 'cost'],
          },
        ],
      },
      {
        index: '3',
        title: 'Fraud detection',
        subtitle: 'Flagging the suspicious claim before payout, not after.',
        capabilities: [
          {
            name: 'Fraud detection agents',
            desc: 'Flag suspicious claim patterns in real time, catching fraud before payout instead of after.',
            tags: ['revenue', 'risk'],
          },
          {
            name: 'Network analysis agents',
            desc: 'Detect coordinated fraud rings by analyzing relationships across claims, providers and policyholders.',
            tags: ['risk'],
          },
        ],
      },
      {
        index: '4',
        title: 'Customer service',
        subtitle: 'Answering the policy question instantly instead of routing through a queue.',
        capabilities: [
          {
            name: 'Customer service agents',
            desc: 'Handle policy questions, renewals and simple claim status checks instantly, reducing call center volume.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Renewal agents',
            desc: 'Identify at-risk renewals and proactively manage outreach to reduce unplanned lapses.',
            tags: ['revenue'],
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
        desc: 'Faster claims and underwriting decisions improve retention and win rate, and earlier fraud detection protects revenue that would otherwise be lost to payout.',
        metric: 'claims cycle time / fraud loss rate',
      },
      {
        area: 'Cost reduction',
        desc: 'Automated document processing and claims triage reduce cost per claim and per application.',
        metric: 'cost per claim',
      },
      {
        area: 'Risk reduction',
        desc: 'Continuous risk reassessment and fraud network analysis catch issues earlier and keep decisions auditable.',
        metric: 'fraud detection rate / audit findings',
      },
      {
        area: 'Time reclaimed',
        desc: 'Underwriters and adjusters reclaim hours previously spent on manual data-pulling and documentation review.',
        metric: 'underwriter & adjuster hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with insurance industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Is your claims process AI-ready?',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Underwriting with agentic AI',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'Fraud detection in claims',
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
    expertTitle: 'Insurance Lead',
    items: [
      { question: 'Where does AI reduce claims cycle time the most?', answer: '[Answer]' },
      { question: 'How do you keep underwriting AI explainable to regulators?', answer: '[Answer]' },
      {
        question: 'Where do most insurers underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: renewal management, not just claims.]',
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
        title: '[Case study headline — e.g. "Cutting claims cycle time from weeks to days"]',
        body: "[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the client's own terms once you have it].",
      },
      {
        tag: '[industry / client type]',
        title: '[Case study headline — e.g. "Catching fraud earlier without adding review headcount"]',
        body: '[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What insurers usually ask before they start',
    items: [
      {
        question: 'Will this pass a regulatory review?',
        answer:
          'We build with audit trails and explainability from the start, and work with your compliance team to meet your specific regulatory requirements.',
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
        question: 'How do you prevent false-positive fraud flags from frustrating good customers?',
        answer:
          '[Answer — describe your approach to balancing fraud detection sensitivity with customer experience.]',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on insurance and AI",
    articles: [
      { meta: 'Article · 6 min', title: 'Why claims cycle time is the metric that matters most' },
      { meta: 'Article · 5 min', title: "AI-native underwriting: what's actually changing" },
      { meta: 'Article · 4 min', title: 'The fraud patterns only agents catch' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit in your claims process?',
    primaryLabel: 'Book an Insurance Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
