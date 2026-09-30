import type { IndustryPageContent } from '@/types/industry';

/**
 * Government & Public Sector industry page content.
 *
 * Copy is transcribed verbatim from the supplied `government-public-sector.html`
 * brief — nothing rewritten, shortened, expanded or invented. Bracketed
 * `[...]` text is the brief's own placeholder marker and is kept exactly as
 * written. The only changes are mechanical: the source file's mojibake (`â`
 * standing in for an em dash, `Â·` for a middot, `Â©` for the copyright
 * glyph) is corrected to the intended character, and the source's own
 * trailing arrow glyphs on buttons/links are dropped since this design's
 * button and ArrowLink components already render their own arrow — that
 * glyph was the static HTML's substitute for one, not locked prose.
 */
export const GOVERNMENT_PUBLIC_SECTOR_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Government & Public Sector',
    description:
      'Bring AI into public services without sacrificing transparency or trust — with agents built around citizen services, case management and internal operations.',
    path: '/industries/government-public-sector',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Government & Public Sector' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Government & Public Sector',
    heading: 'Serve citizens faster, with full accountability',
    body: 'Bring AI into public services without sacrificing transparency or trust — with agents built around citizen services, case management and internal operations.',
    primaryCta: { label: 'Book a Public Sector Readiness Audit', href: '#connect-with-us' },
    secondaryLabel: 'See every use case',
    secondaryHref: '#capabilities',
    stats: [
      { value: '3', label: 'functional areas where agents apply' },
      { value: '9+', label: 'specific agent capabilities cataloged below' },
      { value: '1', label: 'audit before any commitment' },
    ],
  },
  intro: {
    label: 'Overview',
    paragraphs: [
      'McCarthy provides proven technical expertise and blueprints to guide government agencies and public sector bodies through deploying AI agents into citizen services and internal operations — built with auditability and governance from the start.',
      "Public sector operations run on hundreds of case and service decisions a day — process this application, route this case, verify this document. Most of that still moves through manual queues built for paper-era volumes. AI agents don't replace the case officer's judgment; they make sure the routine version of the decision happens instantly and transparently, so staff spend their time on the cases that genuinely need discretion.",
      "Below is the full range of what we build for government and public sector organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on public agencies isn't new — the tools to answer it are",
    body: 'Four forces are converging on public service delivery at once, and each one is a place where agentic AI closes the gap between citizen expectation and agency capacity.',
    cards: [
      {
        index: '01',
        title: 'Rising citizen expectation for digital service',
        text: 'Citizens who can manage banking and shopping online expect the same from government services, not a form and a queue number.',
      },
      {
        index: '02',
        title: 'Case backlogs outpacing staffing',
        text: 'Application and case volumes often grow faster than headcount, and the backlog becomes the story instead of the service.',
      },
      {
        index: '03',
        title: 'Demand for transparency and accountability',
        text: 'Every AI-assisted decision in the public sector needs to be explainable to the citizen it affects and auditable to oversight bodies.',
      },
      {
        index: '04',
        title: 'National AI strategy momentum',
        text: 'Coordinated national AI initiatives are creating both funding and expectation for agencies to modernize, not just permission to.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across a government agency',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Citizen services',
        subtitle: 'Answering the routine request instantly, day or night.',
        capabilities: [
          {
            name: 'Citizen service agents',
            desc: 'Handle routine inquiries, applications and status checks instantly — cutting wait times for services that used to require an office visit or long call queue.',
            tags: ['time', 'risk'],
          },
          {
            name: 'Multilingual service agents',
            desc: 'Handle citizen inquiries across languages consistently, improving access without a proportional increase in staff.',
            tags: ['risk'],
          },
          {
            name: 'Appointment & queue agents',
            desc: 'Manage scheduling and queue prioritization for in-person services, reducing wait times and no-shows.',
            tags: ['time'],
          },
        ],
      },
      {
        index: '2',
        title: 'Case management',
        subtitle: 'Moving the case forward without a person manually chasing its status.',
        capabilities: [
          {
            name: 'Case management agents',
            desc: 'Organize and prioritize case files across departments, reducing the administrative time staff spend on routing and status updates.',
            tags: ['time'],
          },
          {
            name: 'Document processing agents',
            desc: 'Extract and verify data from forms and applications automatically, cutting manual processing time on high-volume services.',
            tags: ['time', 'cost'],
          },
          {
            name: 'Eligibility verification agents',
            desc: 'Cross-check applicant data against eligibility criteria automatically, speeding up benefit and service determinations.',
            tags: ['time', 'risk'],
          },
        ],
      },
      {
        index: '3',
        title: 'Compliance & internal operations',
        subtitle: 'Keeping every process audit-ready, continuously.',
        capabilities: [
          {
            name: 'Compliance and audit agents',
            desc: 'Continuously monitor internal processes against policy, catching issues before they become findings in a formal audit.',
            tags: ['risk'],
          },
          {
            name: 'Records management agents',
            desc: 'Organize and retrieve records automatically against retention and disclosure requirements, reducing manual archival work.',
            tags: ['time', 'risk'],
          },
          {
            name: 'Procurement agents',
            desc: 'Monitor vendor contracts and procurement processes for compliance and value, flagging issues before renewal.',
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
        area: 'Service delivery improvement',
        desc: 'Faster processing and multilingual access directly improve the citizen experience and reduce complaint volume.',
        metric: 'processing time / citizen satisfaction',
      },
      {
        area: 'Cost reduction',
        desc: 'Automated document processing and case routing reduce administrative cost per case.',
        metric: 'cost per case processed',
      },
      {
        area: 'Risk & accountability',
        desc: 'Continuous compliance monitoring keeps agencies audit-ready and reduces the risk of findings in formal review.',
        metric: 'audit findings / backlog age',
      },
      {
        area: 'Time reclaimed',
        desc: 'Case officers and service staff reclaim hours previously spent on manual data entry and status tracking.',
        metric: 'case officer hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with government and public sector industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'AI readiness for public agencies',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Citizen service automation with agents',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'Governance frameworks for public sector AI',
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
    expertTitle: 'Public Sector Lead',
    items: [
      { question: 'Where should government agencies start with AI?', answer: '[Answer]' },
      { question: 'How do you build public trust in AI-driven services?', answer: '[Answer]' },
      {
        question: 'Where do most agencies underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: internal compliance monitoring, not just citizen-facing services.]',
      },
      { question: 'What does a realistic first 90 days look like?', answer: '[Answer]' },
    ],
  },
  caseStudies: {
    eyebrow: 'Customer success',
    heading: "What this looks like once it's running",
    stories: [
      {
        tag: '[agency type]',
        title: '[Case study headline — e.g. "Cutting application processing time for a national service"]',
        body: "[Agency] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the agency's own terms once you have it].",
      },
      {
        tag: '[agency type]',
        title: '[Case study headline — e.g. "Reducing case backlog through automated document verification"]',
        body: '[Agency] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What government agencies usually ask before they start',
    items: [
      {
        question: 'How do you ensure decisions remain explainable to citizens and oversight bodies?',
        answer:
          'We build with audit trails and explainability from the start, and work with your legal and compliance teams to meet public accountability requirements.',
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
        question: 'How do you handle data residency and sovereignty requirements?',
        answer: '[Answer — describe your approach to data residency for government clients.]',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on public sector AI",
    articles: [
      { meta: 'Article · 6 min', title: "Singapore's National AI Council and what it means for agencies" },
      { meta: 'Article · 5 min', title: 'The case for governed AI in citizen services' },
      { meta: 'Article · 4 min', title: 'What public sector procurement gets wrong about AI' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit in your agency?',
    primaryLabel: 'Book a Public Sector Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
