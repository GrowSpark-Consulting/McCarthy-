import type { IndustryPageContent } from '@/types/industry';

/**
 * Healthcare industry page content.
 *
 * Copy is transcribed verbatim from the supplied `healthcare.html` brief —
 * nothing rewritten, shortened, expanded or invented. Bracketed `[...]` text
 * is the brief's own placeholder marker and is kept exactly as written. The
 * only changes are mechanical: the source file's mojibake (`â` standing in
 * for an em dash, `Â·` for a middot, `Â©` for the copyright glyph) is
 * corrected to the intended character, and the source's own trailing arrow
 * glyphs on buttons/links are dropped since this design's button and
 * ArrowLink components already render their own arrow — that glyph was the
 * static HTML's substitute for one, not locked prose.
 */
export const HEALTHCARE_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Healthcare',
    description:
      'Reduce administrative burden so care teams can focus on patients, not paperwork — with AI agents built around scheduling, documentation and patient communication.',
    path: '/industries/healthcare',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Healthcare' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Healthcare',
    heading: 'Give clinicians back their time',
    body: 'Reduce administrative burden so care teams can focus on patients, not paperwork — with AI agents built around scheduling, documentation and patient communication.',
    primaryCta: { label: 'Book a Healthcare Readiness Audit', href: '#connect-with-us' },
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
      'McCarthy provides proven technical expertise and blueprints to guide healthcare providers through deploying AI agents into scheduling, documentation and patient communication — always with human oversight where it matters most.',
      "Healthcare runs on hundreds of small administrative decisions a day — who to schedule, what to chart, which claim to check. Most of that work still happens manually, after hours, by people who trained for clinical care, not data entry. AI agents don't replace the clinician's judgment; they clear the administrative load around it, so care teams spend their time with patients instead of on paperwork.",
      "Below is the full range of what we build for healthcare organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on healthcare providers isn't new — the tools to answer it are",
    body: 'Four forces are converging on care delivery at once, and each one is a place where agentic AI closes the gap between what your team knows and what they have time to act on.',
    cards: [
      {
        index: '01',
        title: 'Clinician burnout from administrative load',
        text: 'Charting, prior authorizations and inbox management routinely extend the workday well past the last patient visit.',
      },
      {
        index: '02',
        title: 'Staffing shortages across care teams',
        text: 'Nursing and front-desk roles are hard to fill, and the gap gets absorbed as more work on fewer people.',
      },
      {
        index: '03',
        title: 'Rising claim denial rates',
        text: 'Coding errors and missing documentation drive costly rework and delayed reimbursement.',
      },
      {
        index: '04',
        title: 'Patient expectation for responsiveness',
        text: 'Patients used to instant answers elsewhere expect the same from scheduling and billing, not a callback in three days.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across a healthcare provider',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Clinical documentation',
        subtitle: 'Turning the visit into the chart automatically, not after hours.',
        capabilities: [
          {
            name: 'Clinical documentation agents',
            desc: 'Draft visit notes from consultations in real time, cutting the hours clinicians spend on charting after hours.',
            tags: ['time'],
          },
          {
            name: 'Coding assistance agents',
            desc: 'Suggest accurate billing codes based on documented visit content, reducing coding errors before claims submission.',
            tags: ['cost', 'risk'],
          },
          {
            name: 'Inbox triage agents',
            desc: 'Sort and prioritize the clinical inbox — results, refill requests, messages — so urgent items surface first.',
            tags: ['time', 'risk'],
          },
        ],
      },
      {
        index: '2',
        title: 'Scheduling & patient access',
        subtitle: 'Filling the calendar without a full-time person managing it by phone.',
        capabilities: [
          {
            name: 'Scheduling agents',
            desc: 'Manage appointment booking, rebooking and reminders automatically, reducing no-show rates and admin time spent chasing patients.',
            tags: ['revenue', 'time'],
          },
          {
            name: 'Patient triage agents',
            desc: 'Handle initial intake questions and route urgency appropriately, reducing front-desk and call center load.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Referral coordination agents',
            desc: 'Track referrals end-to-end and flag ones stalling before a patient falls through the cracks.',
            tags: ['risk', 'revenue'],
          },
        ],
      },
      {
        index: '3',
        title: 'Billing & claims',
        subtitle: 'Catching the error before it costs you a denied claim and a resubmission cycle.',
        capabilities: [
          {
            name: 'Billing & claims agents',
            desc: 'Catch coding errors and missing documentation before claims are submitted, reducing denied-claim rework and speeding reimbursement.',
            tags: ['revenue', 'time'],
          },
          {
            name: 'Prior authorization agents',
            desc: 'Assemble and submit prior authorization documentation automatically, cutting the delay between order and approval.',
            tags: ['time', 'revenue'],
          },
          {
            name: 'Denial management agents',
            desc: 'Flag denied claims by root cause and route them for correction and resubmission automatically.',
            tags: ['revenue', 'time'],
          },
        ],
      },
      {
        index: '4',
        title: 'Patient communication',
        subtitle: 'Answering the question the patient has right now, not at the next callback slot.',
        capabilities: [
          {
            name: 'Patient communication agents',
            desc: 'Handle appointment, billing and general care questions instantly, reducing call center volume.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Follow-up & adherence agents',
            desc: 'Send and track post-visit follow-up and medication adherence reminders, supporting outcomes without adding staff workload.',
            tags: ['risk'],
          },
          {
            name: 'Care navigation agents',
            desc: 'Help patients understand next steps and coordinate across departments for complex care journeys.',
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
        desc: 'Fewer no-shows, faster claims turnaround and fewer denials directly protect revenue that otherwise leaks out of the billing cycle.',
        metric: 'claims cycle time / denial rate',
      },
      {
        area: 'Cost reduction',
        desc: 'Automated documentation, scheduling and billing reduce administrative cost per visit and per claim.',
        metric: 'admin cost per visit',
      },
      {
        area: 'Risk reduction',
        desc: "Inbox triage and referral tracking catch time-sensitive items before they're missed.",
        metric: 'missed follow-up rate',
      },
      {
        area: 'Time reclaimed',
        desc: 'Clinicians and front-desk staff reclaim hours previously spent on charting, scheduling calls and claims rework.',
        metric: 'clinician after-hours charting time',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with healthcare industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Where healthcare AI reduces burnout, not just cost',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Clinical documentation with agents',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'Patient communication automation',
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
    expertTitle: 'Healthcare Lead',
    items: [
      { question: 'Where does AI create the most immediate relief for care teams?', answer: '[Answer]' },
      { question: 'How do you keep AI safe in clinical settings?', answer: '[Answer]' },
      {
        question: 'Where do most providers underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: claims and prior authorization, not just documentation.]',
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
        title: '[Case study headline — e.g. "Cutting after-hours charting time for a multi-site clinic"]',
        body: "[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the client's own terms once you have it].",
      },
      {
        tag: '[industry / client type]',
        title: '[Case study headline — e.g. "Reducing claim denials through automated documentation checks"]',
        body: '[Client] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What healthcare providers usually ask before they start',
    items: [
      {
        question: 'Does this replace clinical judgment?',
        answer:
          'No. Agents handle documentation, scheduling and administrative work — clinical decisions stay with your care team.',
      },
      {
        question: 'How do you handle patient data privacy?',
        answer:
          '[Answer — describe your approach to data handling and compliance with relevant health data regulations.]',
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
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on healthcare and AI",
    articles: [
      { meta: 'Article · 6 min', title: 'The real cost of clinician burnout — and where AI actually helps' },
      { meta: 'Article · 5 min', title: 'What patients think about AI-assisted care' },
      { meta: 'Article · 4 min', title: 'Claims denials: the hidden AI opportunity in healthcare finance' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit in your care team?',
    primaryLabel: 'Book a Healthcare Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
