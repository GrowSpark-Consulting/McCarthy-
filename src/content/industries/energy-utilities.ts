import type { IndustryPageContent } from '@/types/industry';

/**
 * Energy & Utilities industry page content.
 *
 * Copy is transcribed verbatim from the supplied `energy-utilities.html`
 * brief — nothing rewritten, shortened, expanded or invented. Bracketed
 * `[...]` text is the brief's own placeholder marker and is kept exactly as
 * written. The only changes are mechanical: the source file's mojibake (`â`
 * standing in for an em dash, `Â·` for a middot, `Â©` for the copyright
 * glyph) is corrected to the intended character, and the source's own
 * trailing arrow glyphs on buttons/links are dropped since this design's
 * button and ArrowLink components already render their own arrow — that
 * glyph was the static HTML's substitute for one, not locked prose.
 */
export const ENERGY_UTILITIES_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Energy & Utilities',
    description:
      'Anticipate failures and optimize load before they become outages — with AI agents built around asset monitoring, demand forecasting and field operations.',
    path: '/industries/energy-utilities',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Energy & Utilities' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Energy & Utilities',
    heading: 'Keep the grid running, smarter',
    body: 'Anticipate failures and optimize load before they become outages — with AI agents built around asset monitoring, demand forecasting and field operations.',
    primaryCta: { label: 'Book an Energy Readiness Audit', href: '#connect-with-us' },
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
      'McCarthy provides proven technical expertise and blueprints to guide energy and utility operators through moving maintenance from reactive to predictive across assets, substations and field teams.',
      "A utility runs on hundreds of small operational decisions a day — which asset to inspect, where to route a crew, when to shed load. Most of those decisions still rely on fixed schedules and periodic inspection rather than continuous signal. AI agents don't replace the field engineer's judgment; they make sure the routine version of the decision — flag this asset, dispatch this crew, shift this load — happens the moment the data says it should.",
      "Below is the full range of what we build for energy and utilities organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on energy and utility operators isn't new — the tools to answer it are",
    body: 'Four forces are converging on grid and asset operations at once, and each one is a place where agentic AI closes the gap between what your sensors know and what your team can act on in time.',
    cards: [
      {
        index: '01',
        title: 'Aging infrastructure',
        text: "Much of the grid and asset base is operating past its original design life, and inspection cycles built for newer assets don't catch failure risk early enough.",
      },
      {
        index: '02',
        title: 'Extreme weather volatility',
        text: 'Storms and heat events are less predictable and more frequent, straining both demand forecasting and field response capacity.',
      },
      {
        index: '03',
        title: 'Renewable integration complexity',
        text: 'Distributed and intermittent generation makes load balancing a continuous problem rather than a periodic one.',
      },
      {
        index: '04',
        title: 'Field workforce shortage',
        text: 'Experienced linemen and technicians are retiring, and the diagnostic knowledge they carry rarely gets captured before they leave.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across an energy or utility operation',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Asset monitoring & maintenance',
        subtitle: 'Moving from a fixed inspection calendar to a continuous signal.',
        capabilities: [
          {
            name: 'Predictive maintenance agents',
            desc: 'Monitor equipment sensor data across substations and assets, flagging failure risk before an outage occurs.',
            tags: ['risk', 'cost'],
          },
          {
            name: 'Asset health scoring agents',
            desc: 'Continuously score asset condition against historical failure patterns, prioritizing inspection and replacement spend.',
            tags: ['cost', 'risk'],
          },
          {
            name: 'Vegetation & inspection agents',
            desc: 'Analyze imagery and sensor data to flag vegetation encroachment or line issues before they cause an outage.',
            tags: ['risk'],
          },
        ],
      },
      {
        index: '2',
        title: 'Demand & load management',
        subtitle: 'Balancing supply and demand before the shortfall, not during it.',
        capabilities: [
          {
            name: 'Demand forecasting agents',
            desc: 'Predict load spikes by weather, season and region, helping operators balance supply ahead of time instead of reacting to shortfalls.',
            tags: ['risk', 'cost'],
          },
          {
            name: 'Load shedding agents',
            desc: 'Recommend or automate load-shedding sequences during peak stress to protect grid stability with minimal customer impact.',
            tags: ['risk'],
          },
          {
            name: 'Renewable integration agents',
            desc: 'Forecast intermittent generation output and adjust dispatch plans continuously as conditions change.',
            tags: ['cost', 'risk'],
          },
        ],
      },
      {
        index: '3',
        title: 'Field operations',
        subtitle: 'Getting the right crew to the right place before the outage spreads.',
        capabilities: [
          {
            name: 'Field service agents',
            desc: 'Prioritize and route technician dispatch based on urgency and location, cutting response time on outages.',
            tags: ['time', 'revenue'],
          },
          {
            name: 'Outage prediction agents',
            desc: 'Correlate weather, asset condition and historical patterns to predict where outages are likely, pre-positioning crews.',
            tags: ['risk', 'time'],
          },
          {
            name: 'Knowledge capture agents',
            desc: "Turn veteran technician troubleshooting knowledge into a searchable assistant available to every crew, not just the one they're on.",
            tags: ['risk', 'time'],
          },
        ],
      },
      {
        index: '4',
        title: 'Billing & customer operations',
        subtitle: 'Catching the anomaly before it becomes a customer complaint or a revenue leak.',
        capabilities: [
          {
            name: 'Usage anomaly agents',
            desc: 'Detect anomalies in consumption patterns automatically, catching both fraud and faulty metering earlier.',
            tags: ['revenue', 'risk'],
          },
          {
            name: 'Customer communication agents',
            desc: 'Handle outage status, billing questions and service requests instantly, reducing call center load during peak events.',
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
        desc: 'Fewer prolonged outages and earlier anomaly detection protect revenue that would otherwise be lost to service credits and metering errors.',
        metric: 'outage duration / revenue leakage',
      },
      {
        area: 'Cost reduction',
        desc: 'Predictive maintenance and optimized crew dispatch reduce both emergency repair cost and unnecessary preventive spend.',
        metric: 'maintenance cost per asset',
      },
      {
        area: 'Risk reduction',
        desc: 'Continuous asset monitoring and outage prediction reduce the frequency and severity of unplanned outages.',
        metric: 'unplanned outage frequency',
      },
      {
        area: 'Time reclaimed',
        desc: 'Field engineers and dispatchers reclaim hours previously spent on manual inspection scheduling and reactive routing.',
        metric: 'dispatcher & field hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with energy and utilities industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Grid modernization and AI readiness',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Predictive maintenance for utility assets',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'Demand forecasting with agents',
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
    expertTitle: 'Energy & Utilities Lead',
    items: [
      { question: 'How is AI changing grid operations?', answer: '[Answer]' },
      { question: "What's the biggest barrier to AI adoption in utilities?", answer: '[Answer]' },
      {
        question: 'Where do most utilities underestimate the value of agentic AI?',
        answer:
          '[Answer — likely candidate: knowledge capture from retiring technicians, not just predictive maintenance.]',
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
        title: '[Case study headline — e.g. "Reducing unplanned outages through predictive asset monitoring"]',
        body: "[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the client's own terms once you have it].",
      },
      {
        tag: '[industry / client type]',
        title: '[Case study headline — e.g. "Cutting outage response time with predictive crew dispatch"]',
        body: '[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What energy and utility operators usually ask before they start',
    items: [
      {
        question: 'Does this require replacing our SCADA or asset management systems?',
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
        question: 'How do you handle security for critical infrastructure systems?',
        answer:
          '[Answer — describe your approach to OT security and critical infrastructure protection standards.]',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on energy, utilities and AI",
    articles: [
      { meta: 'Article · 6 min', title: 'Why utilities are moving from reactive to predictive maintenance' },
      { meta: 'Article · 5 min', title: 'AI and the future of demand forecasting' },
      { meta: 'Article · 4 min', title: 'Grid resilience in the age of extreme weather' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit in your grid operations?',
    primaryLabel: 'Book an Energy Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
