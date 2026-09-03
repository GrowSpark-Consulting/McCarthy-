import type { IndustryPageContent } from '@/types/industry';

/**
 * Financial Services industry page content.
 *
 * Copy is transcribed verbatim from the supplied `financial-services.html`
 * brief — nothing rewritten, shortened, expanded or invented. Bracketed
 * `[...]` text is the brief's own placeholder marker and is kept exactly as
 * written. The only changes are mechanical: the source file's mojibake (`â`
 * standing in for an em dash, `Â·` for a middot, `Â©` for the copyright
 * glyph) is corrected to the intended character, and the source's own
 * trailing arrow glyphs on buttons/links are dropped since this design's
 * button and ArrowLink components already render their own arrow — that
 * glyph was the static HTML's substitute for one, not locked prose.
 *
 * Two of the standard FAQ/process phrasings vary slightly from other
 * industry pages in the source itself (the "How long before we see a
 * result?" answer omits "not quarters" here) — kept exactly as the brief
 * wrote it rather than normalized to match other pages.
 */
export const FINANCIAL_SERVICES_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Financial Services',
    description:
      'Bring AI into decisions that used to take days, without losing the controls regulators expect — with agents built around underwriting, fraud detection and customer operations.',
    path: '/industries/financial-services',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Financial Services' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Financial Services',
    heading: 'Move faster without moving recklessly',
    body: 'Bring AI into decisions that used to take days, without losing the controls regulators expect — with agents built around underwriting, fraud detection and customer operations.',
    primaryCta: { label: 'Book a Financial Services Readiness Audit', href: '#connect-with-us' },
    secondaryLabel: 'See every use case',
    secondaryHref: '#capabilities',
    stats: [
      { value: '4', label: 'functional areas where agents apply' },
      { value: '12+', label: 'specific agent capabilities cataloged below' },
      { value: '1', label: 'audit before any commitment' },
    ],
  },
  intro: {
    label: 'Overview',
    paragraphs: [
      'McCarthy provides proven technical expertise and blueprints to guide banks, lenders and financial firms through deploying AI agents with governance and audit trails built in from day one, not bolted on after.',
      "Financial services runs on hundreds of decisions a day that carry real regulatory weight — approve or decline, flag or clear, escalate or close. Most of those decisions still route through manual review queues built for a slower pace. AI agents don't replace the underwriter or the compliance officer; they make sure the routine version of that decision happens instantly, with a clean audit trail, so people focus on the judgment calls that actually need them.",
      "Below is the full range of what we build for financial services organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on financial institutions isn't new — the tools to answer it are",
    body: 'Four forces are converging on financial operations at once, and each one is a place where agentic AI closes the gap between what you know and what you can act on in time.',
    cards: [
      {
        index: '01',
        title: 'Regulatory scrutiny on AI itself',
        text: 'Regulators increasingly want to see explainable, auditable AI decisions, not black-box models bolted onto legacy processes.',
      },
      {
        index: '02',
        title: 'Fraud sophistication outpacing rules engines',
        text: "Static, rules-based fraud detection can't keep up with patterns that shift faster than a quarterly rule update cycle.",
      },
      {
        index: '03',
        title: 'Customer expectation for instant decisions',
        text: "Customers who can get a same-day loan decision elsewhere won't wait a week for yours.",
      },
      {
        index: '04',
        title: 'Cost-to-serve pressure',
        text: 'Margins are compressed enough that manual review queues and call center volume are a real drag on unit economics, not just an operational inconvenience.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across a financial services institution',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Fraud & risk detection',
        subtitle: 'Catching the pattern before the loss, not after the chargeback.',
        capabilities: [
          {
            name: 'Fraud detection agents',
            desc: 'Monitor transaction patterns continuously and flag anomalies in real time, catching fraud earlier than periodic batch reviews.',
            tags: ['revenue', 'risk'],
          },
          {
            name: 'Transaction monitoring agents',
            desc: 'Watch for structuring, laundering and other suspicious activity patterns across accounts continuously.',
            tags: ['risk'],
          },
          {
            name: 'Account takeover detection agents',
            desc: 'Flag login and behavior anomalies that suggest a compromised account before funds move.',
            tags: ['risk', 'revenue'],
          },
        ],
      },
      {
        index: '2',
        title: 'Underwriting & credit decisions',
        subtitle: 'Turning a multi-day review into a same-day one, without losing the paper trail.',
        capabilities: [
          {
            name: 'Underwriting agents',
            desc: 'Pull and cross-check applicant data across sources automatically, cutting loan and credit decision time from days to hours.',
            tags: ['time', 'revenue'],
          },
          {
            name: 'Risk scoring agents',
            desc: 'Continuously re-score portfolio risk as new data arrives, instead of relying on a static score set at origination.',
            tags: ['risk'],
          },
          {
            name: 'Document verification agents',
            desc: 'Validate income, identity and collateral documentation automatically, reducing manual review time per application.',
            tags: ['time', 'cost'],
          },
        ],
      },
      {
        index: '3',
        title: 'Customer operations',
        subtitle: 'Handling the routine request instantly so staff can handle the complicated one.',
        capabilities: [
          {
            name: 'Customer service agents',
            desc: 'Handle account queries, statements and simple disputes instantly, reducing call center load and improving response time.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Onboarding agents',
            desc: 'Guide new customers through account opening and KYC steps, cutting time-to-active-account.',
            tags: ['time', 'revenue'],
          },
          {
            name: 'Collections agents',
            desc: 'Prioritize and personalize outreach on past-due accounts based on payment behavior patterns, improving recovery without over-escalating.',
            tags: ['revenue'],
          },
        ],
      },
      {
        index: '4',
        title: 'Compliance & governance',
        subtitle: 'Making the audit trail continuous instead of a scramble before the review.',
        capabilities: [
          {
            name: 'Compliance monitoring agents',
            desc: 'Continuously scan transactions and communications against regulatory rules, catching issues before an audit does.',
            tags: ['risk'],
          },
          {
            name: 'Regulatory reporting agents',
            desc: 'Assemble and validate required regulatory filings from source data automatically, reducing manual compilation time.',
            tags: ['time', 'risk'],
          },
          {
            name: 'Model governance agents',
            desc: 'Track and document how every AI-assisted decision was reached, keeping the institution audit-ready at all times.',
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
        desc: 'Faster underwriting decisions win more of the business that would otherwise walk to a faster competitor, and earlier fraud detection protects revenue that would otherwise be lost to chargebacks.',
        metric: 'decision speed / fraud loss rate',
      },
      {
        area: 'Cost reduction',
        desc: 'Automated document review, customer service and compliance reporting reduce cost per application and per service interaction.',
        metric: 'cost per decision / per ticket',
      },
      {
        area: 'Risk reduction',
        desc: 'Continuous compliance monitoring and model governance catch issues before a regulator or auditor does.',
        metric: 'audit findings / exam readiness',
      },
      {
        area: 'Time reclaimed',
        desc: 'Underwriters, compliance staff and customer service reclaim hours previously spent on manual review and reconciliation.',
        metric: 'review hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with financial services industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Is your institution ready for agentic AI?',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Governed AI for regulated finance',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'Fraud detection with agents',
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
    expertTitle: 'Financial Services Lead',
    items: [
      {
        question: 'How can financial institutions adopt AI without increasing regulatory risk?',
        answer: '[Answer]',
      },
      { question: "What's changing fastest in financial services AI right now?", answer: '[Answer]' },
      {
        question: 'Where do most institutions underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: regulatory reporting, not just fraud or underwriting.]',
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
        title: '[Case study headline — e.g. "Cutting loan decision time from days to hours"]',
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
    heading: 'What financial institutions usually ask before they start',
    items: [
      {
        question: 'Will this pass a regulatory exam?',
        answer:
          'We build with audit trails and explainability from the start, and work with your compliance team to make sure documentation meets your specific regulatory requirements.',
      },
      {
        question: 'How long before we see a result?',
        answer:
          'The Readiness Audit is scoped to be short and focused. A first pilot capability is typically live in weeks, because it starts narrow on purpose.',
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
        question: 'How do you keep customer data secure during deployment?',
        answer:
          '[Answer — describe your approach to data handling, encryption, and access control in regulated environments.]',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on financial services and AI",
    articles: [
      { meta: 'Article · 6 min', title: 'What regulators actually want to see in your AI governance' },
      { meta: 'Article · 5 min', title: 'The economics of agent-assisted underwriting' },
      { meta: 'Article · 4 min', title: 'Fraud detection: rules engines vs. AI agents' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit in your institution?',
    primaryLabel: 'Book a Financial Services Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
