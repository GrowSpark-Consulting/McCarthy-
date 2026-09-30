/**
 * AI Audit page content.
 *
 * Kept separate from the component tree so copy can be revised without touching
 * layout, and so the same option lists drive the form, the zod schema and the
 * spreadsheet columns.
 */

export const AUDIT_HERO = {
  eyebrow: 'AI Audit',
  heading: 'Find where AI can create real value in your business.',
  body: 'Get a practical assessment of your workflows, technology, and operations to identify where AI can improve efficiency, reduce costs, and unlock new opportunities.',
  primary: { label: 'Book Your AI Audit', href: '#audit-form' },
  secondary: { label: 'Talk to an Expert', href: '/contact' },
  /** Signals shown in the hero's diagram panel. */
  signals: [
    { label: 'Workflows mapped', value: 'End to end' },
    { label: 'Systems reviewed', value: 'Data + tooling' },
    { label: 'Opportunities ranked', value: 'By business value' },
    { label: 'Roadmap', value: '90 days + 12 months' },
  ],
} as const;

export interface AuditStage {
  readonly index: string;
  readonly title: string;
  readonly body: string;
}

export const AUDIT_STAGES: readonly AuditStage[] = [
  {
    index: '01',
    title: 'Discover',
    body: 'Understand your current workflows, systems, processes, and business challenges.',
  },
  {
    index: '02',
    title: 'Identify',
    body: 'Find repetitive, inefficient, expensive, or manually intensive processes where AI could help.',
  },
  {
    index: '03',
    title: 'Prioritize',
    body: 'Evaluate opportunities based on potential impact, feasibility, complexity, and business value.',
  },
  {
    index: '04',
    title: 'Plan',
    body: 'Receive a practical roadmap showing what to implement first and what can come later.',
  },
];

export const AUDIT_PROCESS = {
  heading: 'What happens during an AI Audit?',
  body: 'Four stages, run in order. Each one produces something you keep, whether or not you work with us afterwards.',
} as const;

export const AUDIT_FORM_COPY = {
  heading: 'Let’s understand your business.',
  body: 'Tell us a little about your organization and we’ll use it to prepare for the conversation.',
  submit: 'Request My AI Audit',
  submitting: 'Submitting…',
  submitted: 'Request Received',
  successHeading: 'Thank you.',
  successBody:
    'We’ve received your AI Audit request and will be in touch shortly. A confirmation email is on its way to the address you gave us.',
  errorHeading: 'That didn’t go through.',
} as const;

/**
 * Option lists. `value` is what reaches the spreadsheet and the zod enum;
 * `label` is what the visitor reads.
 */
export const INDUSTRY_OPTIONS = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Manufacturing',
  'Retail',
  'Real Estate',
  'Professional Services',
  'Logistics',
  'Other',
] as const;

export const COMPANY_SIZE_OPTIONS = [
  '1–10',
  '11–50',
  '51–200',
  '201–500',
  '501–1,000',
  '1,000+',
] as const;

export const GOAL_OPTIONS = [
  'Automate repetitive work',
  'Improve customer experience',
  'Reduce operational costs',
  'Improve internal productivity',
  'Build AI-powered products',
  'Analyze business data',
  'Explore AI opportunities',
  'Other',
] as const;

export const CONTACT_METHOD_OPTIONS = ['Email', 'Phone', 'Video Call'] as const;
