import type { IndustryPageContent } from '@/types/industry';

/**
 * Retail & E-commerce industry page content.
 *
 * Copy is transcribed verbatim from the supplied `retail-ecommerce.html`
 * brief — nothing rewritten, shortened, expanded or invented. Bracketed
 * `[...]` text is the brief's own placeholder marker and is kept exactly as
 * written. The only changes are mechanical: the source file's mojibake (`â`
 * standing in for an em dash, `Â·` for a middot, `Â©` for the copyright
 * glyph) is corrected to the intended character, and the source's own
 * trailing arrow glyphs on buttons/links are dropped since this design's
 * button and ArrowLink components already render their own arrow — that
 * glyph was the static HTML's substitute for one, not locked prose.
 */
export const RETAIL_ECOMMERCE_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Retail & E-commerce',
    description:
      'Turn inventory, pricing and customer service into a competitive edge, not a cost center — with AI agents built around demand forecasting, personalization and support.',
    path: '/industries/retail-ecommerce',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Retail & E-commerce' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Retail & E-commerce',
    heading: 'Know what your customers want before they do',
    body: 'Turn inventory, pricing and customer service into a competitive edge, not a cost center — with AI agents built around demand forecasting, personalization and support.',
    primaryCta: { label: 'Book a Retail Readiness Audit', href: '#connect-with-us' },
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
      'McCarthy provides proven technical expertise and blueprints to guide retailers and e-commerce brands through connecting demand forecasting, personalization and customer support so stock stays right-sized and customers get answers instantly.',
      "Retail runs on hundreds of small decisions a day — what to stock, what to price, what to recommend. Most of that still relies on last month's report and a merchandiser's gut feel. AI agents don't replace the merchandiser's judgment; they make sure the routine version of that decision — reorder this SKU, adjust this price, answer this question — happens continuously, not once a week.",
      "Below is the full range of what we build for retail and e-commerce organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on retailers isn't new — the tools to answer it are",
    body: 'Four forces are converging on retail operations at once, and each one is a place where agentic AI closes the gap between what your data shows and what your team can act on in time.',
    cards: [
      {
        index: '01',
        title: 'Inventory imbalance eating margin',
        text: 'Stockouts lose the sale and overstock ties up cash and ends in markdowns — both are a forecasting problem more than a buying one.',
      },
      {
        index: '02',
        title: 'Customer expectation for personalization',
        text: 'Customers expect relevant recommendations and instant answers, and a generic experience quietly pushes them to a competitor who offers better.',
      },
      {
        index: '03',
        title: 'Rising customer acquisition cost',
        text: 'As paid acquisition gets more expensive, retention and average order value matter more than they used to.',
      },
      {
        index: '04',
        title: 'Price competition intensity',
        text: 'Competitors can reprice in real time, and a retailer checking prices manually is always a step behind.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across a retail or e-commerce operation',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Demand & inventory',
        subtitle: "Getting the right stock to the right place before it's a stockout or a markdown.",
        capabilities: [
          {
            name: 'Demand forecasting agents',
            desc: 'Predict SKU-level demand by location and season, reducing both stockouts and overstock — directly protecting margin.',
            tags: ['revenue', 'cost'],
          },
          {
            name: 'Automated reordering agents',
            desc: 'Trigger purchase orders automatically against demand forecasts and lead times, reducing manual buying hours.',
            tags: ['time', 'cost'],
          },
          {
            name: 'Markdown optimization agents',
            desc: 'Recommend markdown timing and depth based on sell-through data, protecting margin versus a fixed clearance schedule.',
            tags: ['revenue'],
          },
        ],
      },
      {
        index: '2',
        title: 'Personalization & merchandising',
        subtitle: "Making every customer's experience feel like it was built for them.",
        capabilities: [
          {
            name: 'Personalization agents',
            desc: 'Tailor product recommendations and offers per customer in real time, lifting average order value.',
            tags: ['revenue'],
          },
          {
            name: 'Search & discovery agents',
            desc: 'Improve on-site search relevance continuously based on behavior data, reducing zero-result searches and abandoned sessions.',
            tags: ['revenue'],
          },
          {
            name: 'Email & lifecycle agents',
            desc: 'Trigger personalized lifecycle campaigns based on browsing and purchase behavior, improving retention without manual segmentation work.',
            tags: ['revenue', 'time'],
          },
        ],
      },
      {
        index: '3',
        title: 'Pricing',
        subtitle: 'Watching the market continuously instead of checking competitors once a week.',
        capabilities: [
          {
            name: 'Pricing agents',
            desc: 'Monitor competitor pricing and demand elasticity continuously, adjusting prices to protect margin without manual repricing work.',
            tags: ['revenue', 'time'],
          },
          {
            name: 'Promotion effectiveness agents',
            desc: 'Analyze promotion performance in real time and recommend adjustments mid-campaign instead of only in the post-mortem.',
            tags: ['revenue'],
          },
        ],
      },
      {
        index: '4',
        title: 'Customer service',
        subtitle: 'Answering the order-status question instantly, at 2am or on a Tuesday afternoon.',
        capabilities: [
          {
            name: 'Customer service agents',
            desc: 'Handle order status, returns and FAQs instantly around the clock, cutting support cost per ticket.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Returns processing agents',
            desc: 'Automate return authorization and refund decisions against policy, reducing processing time and manual review.',
            tags: ['time', 'cost'],
          },
          {
            name: 'Review & feedback agents',
            desc: 'Surface patterns in customer feedback continuously, flagging product or service issues before they show up in churn.',
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
        desc: 'Better forecasting, personalization and dynamic pricing directly lift conversion, average order value and full-price sell-through.',
        metric: 'AOV / sell-through rate',
      },
      {
        area: 'Cost reduction',
        desc: 'Automated reordering and customer service reduce buying labor and support cost per ticket.',
        metric: 'support cost per ticket',
      },
      {
        area: 'Risk reduction',
        desc: 'Review and feedback monitoring catch product or service issues before they become churn or brand damage.',
        metric: 'churn rate / negative review rate',
      },
      {
        area: 'Time reclaimed',
        desc: 'Merchandisers and support teams reclaim hours previously spent on manual forecasting, repricing and ticket triage.',
        metric: 'merchandiser & support hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with retail and e-commerce industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Where retail AI pays for itself fastest',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Personalization at scale with agents',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'Inventory forecasting that actually works',
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
    expertTitle: 'Retail Lead',
    items: [
      { question: 'Where should retailers start with AI agents?', answer: '[Answer]' },
      { question: 'How do you balance personalization with customer trust?', answer: '[Answer]' },
      {
        question: 'Where do most retailers underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: returns processing, not just personalization.]',
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
        title: '[Case study headline — e.g. "Reducing stockouts and overstock through demand forecasting"]',
        body: "[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the client's own terms once you have it].",
      },
      {
        tag: '[industry / client type]',
        title: '[Case study headline — e.g. "Lifting average order value through real-time personalization"]',
        body: '[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What retailers usually ask before they start',
    items: [
      {
        question: 'Does this require replacing our e-commerce platform?',
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
        question: 'How do you handle customer data privacy in personalization?',
        answer: '[Answer — describe your approach to data handling and privacy compliance.]',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on retail and AI",
    articles: [
      { meta: 'Article · 6 min', title: 'The real ROI of AI-driven inventory forecasting' },
      { meta: 'Article · 5 min', title: "Why generic chatbots fail and agentic support doesn't" },
      { meta: 'Article · 4 min', title: "Dynamic pricing: what customers will and won't tolerate" },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit in your storefront?',
    primaryLabel: 'Book a Retail Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
