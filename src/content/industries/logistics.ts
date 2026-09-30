import type { IndustryPageContent } from '@/types/industry';

/**
 * Logistics industry page content.
 *
 * Copy is transcribed verbatim from the supplied `logistics.html` brief —
 * nothing rewritten, shortened, expanded or invented. Bracketed `[...]` text
 * is the brief's own placeholder marker and is kept exactly as written. The
 * only changes are mechanical: the source file's mojibake (`â` standing in
 * for an em dash, `Â·` for a middot, `Â©` for the copyright glyph) is
 * corrected to the intended character, and the source's own trailing arrow
 * glyphs on buttons/links are dropped since this design's button and
 * ArrowLink components already render their own arrow — that glyph was the
 * static HTML's substitute for one, not locked prose.
 */
export const LOGISTICS_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Logistics',
    description:
      'Turn a reactive supply chain into one that sees delays before they cost you — with AI agents built around dispatch, warehousing and fleet operations.',
    path: '/industries/logistics',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Logistics' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Logistics',
    heading: 'Move freight faster, with fewer surprises',
    body: 'Turn a reactive supply chain into one that sees delays before they cost you — with AI agents built around dispatch, warehousing and fleet operations.',
    primaryCta: { label: 'Book a Logistics Readiness Audit', href: '#connect-with-us' },
    secondaryLabel: 'See every use case',
    secondaryHref: '#capabilities',
    stats: [
      { value: '5', label: 'functional areas where agents apply' },
      { value: '15+', label: 'specific agent capabilities cataloged below' },
      { value: '1', label: 'audit before any commitment' },
    ],
  },
  intro: {
    label: 'Overview',
    paragraphs: [
      'McCarthy provides proven technical expertise and blueprints to guide logistics and supply chain operators through the challenge of connecting dispatch, warehouse and fleet systems that were never built to talk to each other.',
      "A logistics operation runs on hundreds of small decisions a day — which driver gets which job, what to reorder, which customer to notify. Most of those decisions still happen on a phone call or a spreadsheet. AI agents don't replace the dispatcher; they make sure routine decisions get made instantly, so people spend their time on the exceptions that actually need judgment.",
      "Below is the full range of what we build for logistics organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on logistics operators isn't new — the tools to answer it are",
    body: 'Four forces are converging on freight and warehouse operations at once, and each one is a place where agentic AI closes the gap between what you know and what you can act on in time.',
    cards: [
      {
        index: '01',
        title: 'Freight cost volatility',
        text: 'Fuel, capacity and freight rates shift week to week, making budgets stale before the quarter ends.',
      },
      {
        index: '02',
        title: 'Real-time visibility expectations',
        text: 'Shippers and end customers expect accurate ETAs, not a tracking number that stops updating halfway through the journey.',
      },
      {
        index: '03',
        title: 'Driver and labor shortage',
        text: 'Warehouse and driving roles are harder to staff, and turnover erodes the route and customer knowledge experienced staff carry.',
      },
      {
        index: '04',
        title: 'Fragmented systems across partners',
        text: 'TMS, WMS, carrier portals and spreadsheets rarely talk to each other, so nobody has one true picture of a shipment.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across a logistics and supply chain operation',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Dispatch & routing',
        subtitle: 'Getting the right load to the right vehicle, and adjusting the moment conditions change.',
        capabilities: [
          {
            name: 'Route optimization agents',
            desc: 'Re-plan delivery routes in real time against traffic, weather and new orders, cutting fuel cost and missed delivery windows.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Dynamic dispatch agents',
            desc: 'Assign the next job to the right driver or vehicle automatically based on location, capacity and priority.',
            tags: ['time', 'cost'],
          },
          {
            name: 'Exception handling agents',
            desc: 'Detect a delay or route deviation as it happens and proactively notify the customer before they call to ask.',
            tags: ['risk', 'time'],
          },
        ],
      },
      {
        index: '2',
        title: 'Warehouse operations',
        subtitle: 'Where agents cut the walk-time, the miscounts and the manual reconciliation.',
        capabilities: [
          {
            name: 'Picking optimization agents',
            desc: 'Coordinate pick paths and inventory placement, reducing picker walk-time and order fulfillment time.',
            tags: ['time', 'cost'],
          },
          {
            name: 'Inventory accuracy agents',
            desc: 'Reconcile system inventory against physical counts continuously, catching discrepancies before a stockout.',
            tags: ['cost', 'risk'],
          },
          {
            name: 'Labor allocation agents',
            desc: 'Match warehouse staffing to forecasted volume by shift, avoiding both overtime and idle labor.',
            tags: ['cost'],
          },
        ],
      },
      {
        index: '3',
        title: 'Customer communication',
        subtitle: 'Answering the question before the customer has to ask it.',
        capabilities: [
          {
            name: 'Shipment status agents',
            desc: 'Answer "where\'s my shipment" queries instantly by pulling live tracking data, cutting call center volume.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Proactive delay agents',
            desc: 'Notify customers of a delay with a revised ETA before they notice it themselves, protecting the relationship.',
            tags: ['risk', 'revenue'],
          },
          {
            name: 'Booking & quoting agents',
            desc: 'Handle rate quotes and booking requests instantly for standard lanes, freeing staff for complex negotiations.',
            tags: ['time', 'revenue'],
          },
        ],
      },
      {
        index: '4',
        title: 'Demand & network planning',
        subtitle: 'Seeing the shift in demand before it shows up as a shortage or a spike.',
        capabilities: [
          {
            name: 'Demand forecasting agents',
            desc: 'Predict volume spikes by route and season, so you staff and stock ahead of demand instead of scrambling during it.',
            tags: ['revenue', 'cost'],
          },
          {
            name: 'Network design agents',
            desc: 'Continuously test whether your current hub and route network still matches actual demand patterns.',
            tags: ['cost'],
          },
          {
            name: 'Carrier performance agents',
            desc: 'Score carriers on reliability and cost over time, informing which lanes to renegotiate or reassign.',
            tags: ['cost', 'risk'],
          },
        ],
      },
      {
        index: '5',
        title: 'Fleet & compliance',
        subtitle: 'Keeping vehicles moving and drivers compliant without a paper trail.',
        capabilities: [
          {
            name: 'Predictive maintenance agents',
            desc: 'Monitor fleet telematics to flag maintenance needs before a breakdown strands a load.',
            tags: ['cost', 'risk'],
          },
          {
            name: 'Driver compliance agents',
            desc: 'Track hours-of-service and safety compliance automatically, reducing violation risk.',
            tags: ['risk'],
          },
          {
            name: 'Fuel efficiency agents',
            desc: 'Identify which routes or driving patterns are burning excess fuel and recommend adjustments.',
            tags: ['cost'],
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
        desc: 'Fewer missed delivery windows and faster quoting mean fewer lost customers and faster deal cycles on new lanes.',
        metric: 'on-time delivery / win rate',
      },
      {
        area: 'Cost reduction',
        desc: 'Optimized routing, warehouse labor and fuel use directly reduce cost per shipment.',
        metric: 'cost per mile / per order',
      },
      {
        area: 'Risk reduction',
        desc: 'Compliance and maintenance agents catch violations and breakdowns before they become incidents or fines.',
        metric: 'incident & violation rate',
      },
      {
        area: 'Time reclaimed',
        desc: 'Dispatchers and customer service reclaim hours previously spent manually tracking and answering status questions.',
        metric: 'dispatcher & CS hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with logistics industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Identify your logistics AI readiness tipping point',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Building the AI-native warehouse',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'Route and fleet optimization with agents',
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
    expertTitle: 'Logistics Lead',
    items: [
      {
        question: 'Where should logistics operators start with AI?',
        answer:
          '[Answer — typically dispatch or customer status queries, since both have clear, measurable volume.]',
      },
      { question: "What's the biggest blocker to AI adoption in logistics?", answer: '[Answer]' },
      {
        question: 'Where do most operators underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: warehouse labor allocation, not just routing.]',
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
        title: '[Case study headline — e.g. "Cutting missed delivery windows across a regional fleet"]',
        body: "[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the client's own terms once you have it].",
      },
      {
        tag: '[industry / client type]',
        title: '[Case study headline — e.g. "Reclaiming dispatcher hours through automated exception handling"]',
        body: '[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What logistics operators usually ask before they start',
    items: [
      {
        question: 'Do we need to replace our TMS or WMS to use this?',
        answer: 'No. Agents are built to integrate with what you already run, not to replace it.',
      },
      {
        question: 'How long before we see a result?',
        answer:
          'The Readiness Audit is scoped to be short and focused. A first pilot capability is typically live in weeks, not quarters, because it starts narrow on purpose.',
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
        question: 'How do you handle real-time data from multiple carriers and partners?',
        answer: '[Answer — describe your approach to integration across fragmented partner systems.]',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on logistics and AI",
    articles: [
      { meta: 'Article · 6 min', title: 'Why last-mile delivery is the best place to start with agents' },
      { meta: 'Article · 5 min', title: 'The real cost of manual dispatch decisions' },
      { meta: 'Article · 4 min', title: 'How AI is changing warehouse labor economics' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit in your network?',
    primaryLabel: 'Book a Logistics Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
