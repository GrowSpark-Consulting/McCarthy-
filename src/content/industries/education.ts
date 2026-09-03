import type { IndustryPageContent } from '@/types/industry';

/**
 * Education industry page content.
 *
 * Copy is transcribed verbatim from the supplied `education.html` brief —
 * nothing rewritten, shortened, expanded or invented. Bracketed `[...]` text
 * is the brief's own placeholder marker and is kept exactly as written. The
 * only changes are mechanical: the source file's mojibake (`â` standing in
 * for an em dash, `Â·` for a middot, `Â©` for the copyright glyph) is
 * corrected to the intended character, and the source's own trailing arrow
 * glyphs on buttons/links are dropped since this design's button and
 * ArrowLink components already render their own arrow — that glyph was the
 * static HTML's substitute for one, not locked prose.
 */
export const EDUCATION_CONTENT: IndustryPageContent = {
  meta: {
    title: 'Education',
    description:
      'Reduce administrative load on educators while improving learning outcomes — with AI agents built around personalized learning, admissions and student services.',
    path: '/industries/education',
  },
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries' },
    { label: 'Education' },
  ],
  localNav: [
    { label: 'Why now', href: '#pressures' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Industries / Education',
    heading: 'Give every student a personalized path, at scale',
    body: 'Reduce administrative load on educators while improving learning outcomes — with AI agents built around personalized learning, admissions and student services.',
    primaryCta: { label: 'Book an Education Readiness Audit', href: '#connect-with-us' },
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
      'McCarthy provides proven technical expertise and blueprints to guide schools, universities and edtech organizations through deploying AI agents into personalized learning and administrative operations — supporting educators, not replacing them.',
      "An institution runs on hundreds of small decisions a day — how to pace a lesson, which application to process, how to answer a student's question. Most of that still depends on one teacher or administrator having the bandwidth to notice and respond. AI agents don't replace the educator's judgment; they make sure the routine version of the decision — adapt this content, answer this question, flag this application — happens instantly, so educators spend their time teaching.",
      "Below is the full range of what we build for education organizations today — organized by where it lives in your operation, what it typically improves, and how we'd actually deploy it without disrupting work that can't afford downtime to change.",
    ],
  },
  pressures: {
    eyebrow: 'Why now',
    heading: "The pressure on educational institutions isn't new — the tools to answer it are",
    body: 'Four forces are converging on education at once, and each one is a place where agentic AI closes the gap between what students need and what staff have time to deliver.',
    cards: [
      {
        index: '01',
        title: 'Educator workload and burnout',
        text: 'Grading, admin and individualized attention compete for the same limited hours, and something usually gives.',
      },
      {
        index: '02',
        title: 'Widening gaps in student outcomes',
        text: "One-size-fits-all pacing leaves some students behind and others under-challenged, and manual differentiation doesn't scale to every classroom.",
      },
      {
        index: '03',
        title: 'Admissions and enrollment competition',
        text: 'Institutions compete for the same applicant pool, and slow or generic application processing loses candidates to faster competitors.',
      },
      {
        index: '04',
        title: 'Rising expectation for digital-first service',
        text: 'Students and parents expect the same responsiveness from student services that they get from any consumer app.',
      },
    ],
  },
  capabilities: {
    eyebrow: 'The full capability catalogue',
    heading: 'Everywhere agentic AI applies across an educational institution',
    body: 'Organized by function. Every card below is something we can scope, pilot and deploy — most start as a narrow pilot before they scale across your operation.',
    categories: [
      {
        index: '1',
        title: 'Personalized learning',
        subtitle: 'Adapting to each student without needing a teacher for every one of them.',
        capabilities: [
          {
            name: 'Personalized learning agents',
            desc: "Adapt content and pacing to each student's progress in real time, improving outcomes without adding teacher workload.",
            tags: ['risk'],
          },
          {
            name: 'Tutoring agents',
            desc: 'Provide on-demand, subject-specific support outside class hours, extending help beyond what one teacher can give individually.',
            tags: ['risk'],
          },
          {
            name: 'Grading and feedback agents',
            desc: 'Provide first-pass feedback on assignments, freeing instructor time for higher-value coaching.',
            tags: ['time'],
          },
        ],
      },
      {
        index: '2',
        title: 'Admissions & enrollment',
        subtitle: 'Processing the application before the candidate loses interest and goes elsewhere.',
        capabilities: [
          {
            name: 'Admissions agents',
            desc: 'Screen applications, verify documents and answer applicant questions automatically, cutting admissions cycle time.',
            tags: ['time', 'revenue'],
          },
          {
            name: 'Enrollment communication agents',
            desc: 'Handle routine enrollment and financial aid questions instantly, reducing the burden on admissions staff during peak periods.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Yield prediction agents',
            desc: 'Identify which accepted applicants are likely to enroll, informing where to focus outreach effort.',
            tags: ['revenue'],
          },
        ],
      },
      {
        index: '3',
        title: 'Student services & operations',
        subtitle: 'Answering the scheduling or aid question the moment a student asks it.',
        capabilities: [
          {
            name: 'Student support agents',
            desc: 'Handle common questions on enrollment, financial aid and scheduling instantly, reducing front-office load.',
            tags: ['cost', 'time'],
          },
          {
            name: 'Retention risk agents',
            desc: 'Flag early signals of a student at risk of disengaging or dropping out, so advisors can intervene earlier.',
            tags: ['risk'],
          },
          {
            name: 'Scheduling agents',
            desc: 'Coordinate class scheduling and resource allocation across departments, reducing manual conflict resolution.',
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
        area: 'Outcomes & growth',
        desc: 'Personalized pacing and earlier retention-risk flags improve student outcomes and reduce preventable attrition.',
        metric: 'student outcomes / retention rate',
      },
      {
        area: 'Cost reduction',
        desc: 'Automated admissions processing and student support reduce administrative cost per applicant and per student.',
        metric: 'admin cost per student',
      },
      {
        area: 'Risk reduction',
        desc: 'Retention risk agents and enrollment monitoring catch issues before they become a lost student or a missed intake target.',
        metric: 'attrition rate / yield accuracy',
      },
      {
        area: 'Time reclaimed',
        desc: 'Educators and admissions staff reclaim hours previously spent on grading, application review and routine student questions.',
        metric: 'educator & staff hours / week',
      },
    ],
    note: "We don't publish generic industry percentages here because your baseline is what determines the real number — this is exactly what the Operations Intelligence Audit measures before we recommend anything. Any figures used in a proposal to you will be pulled from your own operational data, or clearly attributed to a named source if we're citing outside research.",
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Go deeper with education industry resources',
    cards: [
      {
        tag: 'Readiness report',
        title: 'Is your institution ready for AI in the classroom?',
        linkLabel: 'Get the report',
      },
      {
        tag: 'Ebook',
        title: 'Personalized learning with agents',
        linkLabel: 'Read the ebook',
      },
      {
        tag: 'Playbook',
        title: 'Automating admissions and student services',
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
    expertTitle: 'Education Lead',
    items: [
      { question: 'Where should institutions start with AI?', answer: '[Answer]' },
      {
        question: 'How do you keep AI supportive of teachers rather than a replacement for them?',
        answer: '[Answer]',
      },
      {
        question: 'Where do most institutions underestimate the value of agentic AI?',
        answer: '[Answer — likely candidate: retention risk flagging, not just admissions.]',
      },
      { question: 'What does a realistic first 90 days look like?', answer: '[Answer]' },
    ],
  },
  caseStudies: {
    eyebrow: 'Customer success',
    heading: "What this looks like once it's running",
    stories: [
      {
        tag: '[institution type]',
        title: '[Case study headline — e.g. "Cutting admissions cycle time for a growing institution"]',
        body: '[Institution] wanted to [problem]. McCarthy deployed [capability] and [outcome, described in the institution\'s own terms once you have it].',
      },
      {
        tag: '[institution type]',
        title: '[Case study headline — e.g. "Improving retention through early risk flagging"]',
        body: '[Institution] wanted to [problem]. McCarthy deployed [capability] and [outcome].',
      },
    ],
  },
  faq: {
    eyebrow: 'You have questions',
    heading: 'What educational institutions usually ask before they start',
    items: [
      {
        question: 'Does this replace teachers?',
        answer:
          'No. Agents handle grading support, admin and routine student questions — teaching and pedagogical judgment stay with your educators.',
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
        question: 'How do you protect student data privacy?',
        answer: '[Answer — describe your approach to student data handling and compliance.]',
      },
    ],
  },
  insights: {
    eyebrow: 'Trends and insights',
    heading: "What we're reading on education and AI",
    articles: [
      { meta: 'Article · 6 min', title: 'What personalized learning actually looks like with agents' },
      { meta: 'Article · 5 min', title: 'The hidden admin burden AI can remove from educators' },
      { meta: 'Article · 4 min', title: 'AI in admissions: efficiency without losing the human read' },
    ],
  },
  cta: {
    heading: 'Ready to see where agents fit in your institution?',
    primaryLabel: 'Book an Education Readiness Audit',
    primaryHref: '#connect-with-us',
  },
};
