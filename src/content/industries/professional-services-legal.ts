import type { IndustryPageContent } from '@/types/industry';

/**
 * Professional Services & Legal industry page content.
 *
 * Copy is transcribed verbatim from the supplied `professional-services-legal.html`
 * brief — nothing rewritten, shortened, expanded or invented. Bracketed
 * `[...]` text is the brief's own placeholder marker and is kept exactly as
 * written. The only changes are mechanical: the source file's mojibake (`â`
 * standing in for an em dash, `Â·` for a middot, `Â©` for the copyright
 * glyph) is corrected to the intended character, and the source's own
 * trailing arrow glyphs on buttons/links are dropped since this design's
 * button and ArrowLink components already render their own arrow — that
 * glyph was the static HTML's substitute for one, not locked prose.
 */
export const PROFESSIONAL_SERVICES_LEGAL_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Professional Services & Legal',
    description:
      'Free up your highest-value people from document review and research — with AI agents built around research, document review and client operations.',
    path: '/industries/professional-services-legal',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Professional Services & Legal' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Professional Services & Legal',
    heading: 'Bill for judgment, not hours spent searching',
    body: 'Free up your highest-value people from document review and research — with AI agents built around research, document review and client operations.',
    primaryCta: { label: 'Book a Professional Services Readiness Audit', href: '#connect-with-us' },
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
      'McCarthy provides proven technical expertise and blueprints to guide law firms and professional services firms through deploying AI agents into research, document review and client operations — so experts spend their time on advice, not admin.',
      "An advisory practice runs on hundreds of research and review decisions a day — what does this clause say, what does precedent suggest, what's the status of this matter. Most of that still happens as billable hours spent searching before the actual judgment call. AI agents don't replace the lawyer or consultant's judgment; they make sure the research and review work that precedes it happens in minutes instead of hours.",
      "Below is the full range of what we build for professional services and legal organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on professional services firms isn't new — the tools to answer it are",
    body: 'Four forces are converging on advisory work at once, and each one is a place where agentic AI closes the gap between what a client needs and how fast a firm can deliver it.',
    cards: [
      {
        index: '01',
        title: 'Client pressure on fees',
        text: "Clients increasingly push back on paying premium rates for research and document review that doesn't require senior judgment.",
      },
      {
        index: '02',
        title: 'Junior talent bottleneck',
        text: "Research and first-pass review work traditionally trains junior staff, but it's also the most time-consuming part of a matter to staff and supervise.",
      },
      {
        index: '03',
        title: 'Volume of unstructured information',
        text: 'Contracts, filings and case law grow faster than manual review capacity, especially across multi-document due diligence.',
      },
      {
        index: '04',
        title: 'Competitive pressure from AI-native firms',
        text: "Firms already using AI for research and review can turn around matters faster, putting pricing and speed pressure on firms that haven't.",
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across a professional services or legal firm',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Document review & analysis',
        subtitle: 'Turning hours of review into minutes of judgment.',
        capabilities: [
          {
            name: 'Document review agents',
            desc: 'Scan contracts and filings for key clauses, risks and inconsistencies, cutting review time from hours to minutes per document.',
            tags: ['time', 'revenue'],
          },
          {
            name: 'Due diligence agents',
            desc: 'Cross-reference large document sets for a transaction or matter, flagging issues for lawyer review instead of requiring a full manual read.',
            tags: ['time', 'risk'],
          },
          {
            name: 'Contract drafting agents',
            desc: 'Generate first-draft clauses and full documents from templates and matter specifics, speeding up drafting turnaround.',
            tags: ['time'],
          },
        ],
      },
      {
        index: '2',
        title: 'Research',
        subtitle: 'Getting to the relevant precedent or data point without a day of manual search.',
        capabilities: [
          {
            name: 'Research agents',
            desc: 'Pull and synthesize information across case law, regulations or market data on demand, reducing junior-staff research hours.',
            tags: ['time', 'revenue'],
          },
          {
            name: 'Precedent matching agents',
            desc: "Identify relevant prior matters or precedent within the firm's own history automatically, avoiding reinventing the analysis.",
            tags: ['time'],
          },
          {
            name: 'Regulatory monitoring agents',
            desc: 'Track regulatory and legal changes relevant to client industries continuously, flagging what actually matters to a given client.',
            tags: ['risk'],
          },
        ],
      },
      {
        index: '3',
        title: 'Client & matter operations',
        subtitle: 'Keeping the engagement moving without the partner chasing status updates.',
        capabilities: [
          {
            name: 'Client intake agents',
            desc: 'Handle initial client questions and document collection automatically, speeding up matter or engagement setup.',
            tags: ['time', 'revenue'],
          },
          {
            name: 'Billing and time-tracking agents',
            desc: 'Reconcile time entries against engagement scope automatically, reducing billing disputes and write-offs.',
            tags: ['revenue', 'time'],
          },
          {
            name: 'Matter status agents',
            desc: 'Keep clients and internal teams updated on matter status automatically, reducing the manual update burden on senior staff.',
            tags: ['time'],
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
        desc: 'Faster turnaround wins more time-sensitive matters, and reduced billing disputes protect realized revenue.',
        metric: 'turnaround time / realization rate',
      },
      {
        area: 'Cost reduction',
        desc: 'Automated research and document review reduce the hours required per matter, improving margin on fixed-fee work.',
        metric: 'hours per matter',
      },
      {
        area: 'Risk reduction',
        desc: 'Due diligence and regulatory monitoring agents catch issues that manual review under time pressure can miss.',
        metric: 'missed-issue rate',
      },
      {
        area: 'Time reclaimed',
        desc: 'Senior staff reclaim hours previously spent on research and first-pass review, redirecting time to advisory judgment.',
        metric: 'senior staff hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with professional services and legal industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Where AI creates leverage in professional services',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Contract review and analysis with agents',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'Research automation for advisory firms',
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
    expertTitle: 'Professional Services Lead',
    items: [
      { question: 'Where does AI create the most leverage for advisory firms?', answer: '[Answer]' },
      { question: 'How do firms keep client confidentiality intact with AI tools?', answer: '[Answer]' },
      {
        question: 'Where do most firms underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: billing reconciliation, not just document review.]',
      },
      { question: 'What does a realistic first 90 days look like?', answer: '[Answer]' },
    ],
  },
  caseStudies: {
    eyebrow: 'Customer success',
    heading: "What this looks like once it's running",
    stories: [
      {
        tag: '[firm type]',
        title:
          '[Case study headline — e.g. "Cutting due diligence review time on a multi-document transaction"]',
        body: "[Firm] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the firm's own terms once you have it].",
      },
      {
        tag: '[firm type]',
        title: '[Case study headline — e.g. "Reducing billing disputes through automated time reconciliation"]',
        body: '[Firm] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What professional services firms usually ask before they start',
    items: [
      {
        question: 'How do you protect client confidentiality?',
        answer:
          '[Answer — describe your approach to data handling and confidentiality for client-privileged information.]',
      },
      {
        question: 'How long before we see a result?',
        answer:
          'The Readiness Audit is scoped to be short and focused. A first pilot capability is typically live in weeks, not quarters.',
      },
      {
        question: 'What does this cost?',
        answer:
          "The audit is a fixed, paid engagement — no open-ended discovery. Anything beyond that is scoped against what the audit finds.",
      },
      {
        question: "Who owns the system once it's built?",
        answer: "You do. We build on your infrastructure and hand over what's needed for your team to run it.",
      },
      {
        question: 'Does this replace junior associates or consultants?',
        answer:
          'No — it removes the lowest-judgment portion of research and review work, freeing junior staff for the analysis and client exposure that actually builds their skills.',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on professional services and AI",
    articles: [
      { meta: 'Article · 6 min', title: 'Why document review is the fastest AI win in legal' },
      { meta: 'Article · 5 min', title: 'The billable hour in an AI-native firm' },
      { meta: 'Article · 4 min', title: 'What clients actually want from AI-assisted advisory work' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit in your practice?',
    primaryLabel: 'Book a Professional Services Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
