import type { IndustryPageContent } from '@/types/industry';

/**
 * Manufacturing industry page content.
 *
 * Copy is transcribed verbatim from the supplied `manufacturing-mockup-full.html`
 * brief — nothing rewritten, shortened, expanded or invented. Bracketed
 * `[...]` text is the brief's own placeholder marker and is kept exactly as
 * written. The only changes are mechanical: the source file's mojibake (`â`
 * standing in for an em dash, `Â·` for a middot, `Â©` for the copyright
 * glyph) is corrected to the intended character, and the source's own
 * trailing arrow glyphs on buttons/links are dropped since this design's
 * button and ArrowLink components already render their own arrow — that
 * glyph was the static HTML's substitute for one, not locked prose.
 */
export const MANUFACTURING_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Manufacturing',
    description:
      'Bridge IT and OT to streamline operations and optimize costs — with AI agents built around how your plant floor, supply chain and back office actually run.',
    path: '/industries/manufacturing',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Manufacturing' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Manufacturing',
    heading: 'Transform operations to exceed customer requirements',
    body: 'Bridge IT and OT to streamline operations and optimize costs — with AI agents built around how your plant floor, supply chain and back office actually run.',
    primaryCta: { label: 'Book an Operations Intelligence Audit', href: '#connect-with-us' },
    secondaryLabel: 'See every use case',
    secondaryHref: '#capabilities',
    stats: [
      { value: '7', label: 'functional areas where agents apply' },
      { value: '24+', label: 'specific agent capabilities cataloged below' },
      { value: '1', label: 'audit before any commitment' },
    ],
  },
  intro: {
    label: 'Overview',
    paragraphs: [
      'McCarthy provides proven technical expertise, capabilities and blueprints to guide manufacturers through the challenge of transforming their IT and OT environments — and addressing the complexities of digitizing and modernizing their plant floor operations.',
      "Manufacturing runs on hundreds of small decisions a day — what to run next, what to reorder, who to dispatch, what to flag. Most of those decisions still happen in someone's head, a spreadsheet, or a phone call. AI agents don't replace the people making those calls; they make sure the person making the call has the right information the moment they need it, and can act on the routine version of that decision without waiting on it at all.",
      "Below is the full range of what we build for manufacturers today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting a line that can't afford downtime to install anything.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure manufacturers are under isn't new — the tools to answer it are",
    body: 'Four forces are converging on plant operations at once, and each one is a place where agentic AI closes the gap between what you know and what you can act on in time.',
    cards: [
      {
        index: '01',
        title: 'Skilled labor shortage',
        text: "Experienced operators and technicians are retiring faster than they're being replaced, and the institutional knowledge they carry rarely gets written down before they leave.",
      },
      {
        index: '02',
        title: 'Supply chain volatility',
        text: 'Lead times, material costs and supplier reliability shift faster than manual planning cycles can track, leaving planners reacting instead of anticipating.',
      },
      {
        index: '03',
        title: 'Margin pressure',
        text: "Customers expect shorter lead times and tighter pricing at the same time input costs are rising — there's less room to absorb inefficiency than there used to be.",
      },
      {
        index: '04',
        title: 'Rising cyber exposure',
        text: "As plant floor systems connect to IT and the cloud, manufacturing has become a more attractive target — and most OT environments weren't built with that exposure in mind.",
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across a manufacturing operation',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot on one line or one process before they scale plant-wide.',
    categories: [
      {
        index: '1',
        title: 'Production & plant floor',
        subtitle: 'Where agents interact directly with how work gets sequenced, run and adjusted in real time.',
        capabilities: [
          {
            name: 'Changeover & scheduling agents',
            desc: 'Optimize production sequencing across SKUs on high-mix lines, cutting changeover time and reordering runs to minimize setup loss.',
            tags: ['time', 'cost'],
          },
          {
            name: 'Throughput & bottleneck agents',
            desc: 'Continuously watch line-level throughput data and flag the constraint before it becomes the reason a shipment is late.',
            tags: ['revenue', 'time'],
          },
          {
            name: 'Digital twin simulation agents',
            desc: 'Test schedule or layout changes against a live model of the line before committing the change on the actual floor.',
            tags: ['risk', 'cost'],
          },
          {
            name: 'Energy load agents',
            desc: 'Shift energy-intensive processes to lower-cost windows automatically where production schedule allows.',
            tags: ['cost'],
          },
        ],
      },
      {
        index: '2',
        title: 'Quality & compliance',
        subtitle: 'Catching defects and compliance gaps at the moment they happen, not at the audit.',
        capabilities: [
          {
            name: 'Computer-vision inspection agents',
            desc: 'Flag defects on the line in real time using camera feeds, instead of waiting for end-of-batch inspection to catch them.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Root-cause analysis agents',
            desc: 'Correlate defect patterns against machine, shift, material lot and environmental data to surface the actual cause, not just the symptom.',
            tags: ['cost', 'risk'],
          },
          {
            name: 'Compliance documentation agents',
            desc: 'Auto-generate and maintain the audit trail regulators and customers expect, pulled directly from production data instead of manual logs.',
            tags: ['risk', 'time'],
          },
          {
            name: 'Supplier quality agents',
            desc: 'Track incoming material quality against spec over time and flag suppliers trending toward a problem before a batch fails.',
            tags: ['risk', 'cost'],
          },
        ],
      },
      {
        index: '3',
        title: 'Maintenance & asset management',
        subtitle: 'Moving maintenance from a calendar to a signal.',
        capabilities: [
          {
            name: 'Predictive maintenance agents',
            desc: 'Monitor machine sensor data continuously and flag failure risk before breakdown, instead of finding out on the line.',
            tags: ['cost', 'revenue'],
          },
          {
            name: 'Spare parts inventory agents',
            desc: 'Forecast which spare parts are actually likely to be needed and when, instead of over-stocking or scrambling on a rush order.',
            tags: ['cost'],
          },
          {
            name: 'Maintenance scheduling agents',
            desc: "Coordinate technician availability, part availability and production schedule into a maintenance window that doesn't cost you more downtime than it prevents.",
            tags: ['time', 'cost'],
          },
          {
            name: 'Asset lifecycle agents',
            desc: 'Track total cost of ownership per asset over time to inform the repair-vs-replace decision with data instead of gut feel.',
            tags: ['cost'],
          },
        ],
      },
      {
        index: '4',
        title: 'Supply chain & procurement',
        subtitle: 'Turning reactive purchasing into a system that watches the market for you.',
        capabilities: [
          {
            name: 'Demand forecasting agents',
            desc: 'Predict order volume by product and customer using historical patterns and current signals, so production planning starts from a better number.',
            tags: ['revenue', 'cost'],
          },
          {
            name: 'Supplier risk agents',
            desc: 'Watch supplier lead times, financial signals and geopolitical exposure continuously, flagging risk before a shortage hits your line.',
            tags: ['risk'],
          },
          {
            name: 'Automated reorder agents',
            desc: 'Trigger purchase orders automatically against defined thresholds, cutting the hours planners spend manually reconciling spreadsheets each week.',
            tags: ['time'],
          },
          {
            name: 'Logistics optimization agents',
            desc: 'Coordinate inbound and outbound shipments against production schedule and dock capacity to reduce demurrage and rush freight.',
            tags: ['cost'],
          },
        ],
      },
      {
        index: '5',
        title: 'Workforce & safety',
        subtitle: 'Protecting people and preserving the knowledge they carry.',
        capabilities: [
          {
            name: 'Safety monitoring agents',
            desc: 'Watch camera and sensor feeds for PPE compliance and hazard conditions in real time, reducing incident rates and the liability that comes with them.',
            tags: ['risk'],
          },
          {
            name: 'Shift scheduling agents',
            desc: 'Balance skill coverage, labor cost and demand forecast into a shift plan, instead of a supervisor rebuilding it manually every week.',
            tags: ['time', 'cost'],
          },
          {
            name: 'Knowledge capture agents',
            desc: "Turn a veteran operator's troubleshooting knowledge into a searchable assistant available to every shift, not just the one they're on.",
            tags: ['risk', 'time'],
          },
          {
            name: 'Training & onboarding agents',
            desc: 'Guide new hires through machine-specific procedures step by step, cutting time-to-competency on the floor.',
            tags: ['time'],
          },
        ],
      },
      {
        index: '6',
        title: 'Finance & back-office operations',
        subtitle: 'The paperwork behind the plant floor, handled without a person re-keying the same numbers twice.',
        capabilities: [
          {
            name: 'Cost variance agents',
            desc: 'Flag actual-vs-budgeted production cost deviations as they happen, instead of discovering the overrun at month-end close.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Order-to-cash agents',
            desc: 'Automate order confirmation, invoicing and reconciliation against production and shipment data, reducing billing errors and days sales outstanding.',
            tags: ['revenue', 'time'],
          },
          {
            name: 'Customer demand-signal agents',
            desc: 'Surface early signals of a customer scaling orders up or down, so sales and production hear about it at the same time.',
            tags: ['revenue'],
          },
        ],
      },
      {
        index: '7',
        title: 'Cybersecurity for connected plant floors',
        subtitle: 'As OT connects to IT, the plant floor becomes an attack surface — this is how agents help hold that line.',
        capabilities: [
          {
            name: 'OT network monitoring agents',
            desc: 'Watch for anomalous traffic between IT and OT networks continuously, catching intrusion attempts before they reach control systems.',
            tags: ['risk'],
          },
          {
            name: 'Access governance agents',
            desc: 'Enforce and audit who has access to which systems on the floor, closing the gap left by manual permission reviews.',
            tags: ['risk'],
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
        desc: "Fewer missed shipments from bottlenecks caught early, faster order-to-cash cycles, and demand signals that let sales and production move together instead of finding out about a swing after it's already a problem.",
        metric: 'on-time delivery / cash cycle',
      },
      {
        area: 'Cost reduction',
        desc: 'Less scrap and rework, lower unplanned downtime, tighter energy use, and fewer hours spent on manual planning and reconciliation work that agents can do continuously instead of weekly.',
        metric: 'COGS / overhead',
      },
      {
        area: 'Risk reduction',
        desc: "Safety incidents caught before they happen, supplier risk flagged before a shortage, compliance documentation that's always audit-ready, and OT systems monitored the way IT already is.",
        metric: 'incident rate / audit exposure',
      },
      {
        area: 'Time reclaimed',
        desc: 'Planners, supervisors and technicians spend less time gathering information and more time acting on it — the hours saved usually show up first in planning and quality teams.',
        metric: 'planner & supervisor hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with manufacturing industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Identify your readiness tipping point',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Run manufacturing smarter with AI',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: "How India's manufacturing gets future-ready",
        linkLabel: 'Get the playbook',
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    heading: 'How this actually gets deployed on your floor',
    body: "We don't start with a platform sale. We start with an audit, because the capability catalogue above only matters where it fits your actual constraints — your systems, your line, your risk tolerance.",
    steps: [
      {
        step: '01',
        title: 'Operations Intelligence Audit',
        desc: "A paid, focused engagement to map where agents would create the most value in your specific operation — and just as importantly, where they wouldn't yet. You get a prioritized list before you commit to anything larger.",
      },
      {
        step: '02',
        title: 'Pilot on one line or process',
        desc: 'We build and deploy the highest-priority capability in a contained scope — one line, one process, one shift — so you see it work before it touches the whole plant.',
      },
      {
        step: '03',
        title: 'Custom platform build',
        desc: 'Once validated, we build the full capability into your systems — integrated with your existing IT/OT stack, not a separate tool your team has to context-switch into.',
      },
      {
        step: '04',
        title: 'Managed retainer',
        desc: 'We stay on to monitor, tune and extend the system as your operation changes — new lines, new products, new suppliers — instead of leaving you with something that goes stale in six months.',
      },
    ],
  },
  expertQa: {
    eyebrow: 'Our experts, your challenges',
    heading: 'A conversation worth having before you commit to anything',
    expertTitle: 'Manufacturing Lead',
    items: [
      {
        question: 'How is AI reshaping manufacturing and industrial supply chains right now?',
        answer:
          '[Answer — leveraging data, building intelligent supply chains, protecting systems from disruption, and closing the talent gap without adding headcount.]',
      },
      { question: "What's the biggest challenge facing manufacturers today?", answer: '[Answer]' },
      {
        question: 'Where do most manufacturers underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: back-office and planning work, not just the plant floor.]',
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
        title: '[Case study headline — e.g. "Cutting unplanned downtime on a multi-line plant"]',
        body: "[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the client's own terms once you have it].",
      },
      {
        tag: '[industry / client type]',
        title: '[Case study headline — e.g. "Reclaiming planner hours through automated reordering"]',
        body: '[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What manufacturers usually ask before they start',
    items: [
      {
        question: 'Do we need to replace our existing systems to use this?',
        answer:
          'No. Agents are built to integrate with what you already run — your MES, ERP, historian, and OT systems — not to replace them.',
      },
      {
        question: 'How long before we see a result?',
        answer:
          'The Operations Intelligence Audit is scoped to be short and focused. A first pilot capability is typically live in weeks, not quarters, because it starts narrow on purpose.',
      },
      {
        question: 'What does this cost?',
        answer:
          "The audit is a fixed, paid engagement — no open-ended discovery. Anything beyond that is scoped against what the audit finds, so you're never paying to explore.",
      },
      {
        question: "Who owns the system once it's built?",
        answer:
          "You do. We build on your infrastructure and hand over what's needed for your team to run it, whether or not you keep us on for the managed retainer.",
      },
      {
        question: 'How do you handle OT security during deployment?',
        answer:
          '[Answer — describe your approach to network segmentation, access control, and change management on production systems.]',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on manufacturing and AI",
    articles: [
      { meta: 'Article · 6 min', title: 'Scaling AI in regulated manufacturing spaces' },
      { meta: 'Article · 5 min', title: 'How tech helps manufacturing firms create a bright future' },
      { meta: 'Article · 4 min', title: 'Why factories need more than automation to unlock Industry 4.0' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit on your floor?',
    primaryLabel: 'Book an Operations Intelligence Audit',
    primaryHref: '#connect-with-us',
  },
};
