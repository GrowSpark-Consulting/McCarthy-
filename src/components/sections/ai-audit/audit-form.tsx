'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  CheckboxCard,
  describedBy,
  Field,
  RadioPill,
  SelectInput,
  TextArea,
  TextInput,
} from '@/components/ui/field';
import {
  AUDIT_FORM_COPY,
  COMPANY_SIZE_OPTIONS,
  CONTACT_METHOD_OPTIONS,
  GOAL_OPTIONS,
  INDUSTRY_OPTIONS,
} from '@/content/ai-audit';
import { DURATION, EASE } from '@/lib/motion';
import { aiAuditRequestSchema, type AiAuditFormInput } from '@/lib/validation/ai-audit';

/** Where the form posts. */
const ENDPOINT = '/api/ai-audit';

/**
 * How long a submission can run before the page says so. Saving writes to the
 * sheet and sends the admin email, which takes a few seconds; without a word
 * the wait reads as a hang.
 */
const SLOW_HINT_DELAY_MS = 4000;

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

interface ApiErrorBody {
  readonly success?: boolean;
  readonly message?: string;
  readonly fields?: Record<string, string>;
}

/**
 * AI Audit consultation form.
 *
 * Validation is React Hook Form + the shared zod schema, so the browser applies
 * exactly the rules the API will re-apply. Submission is `fetch`, never a page
 * reload, and the button is disabled for the duration — combined with the
 * server's fingerprint check, a double click cannot produce two rows.
 *
 * Accessibility: every control has a real label, errors are announced through
 * per-field live regions and referenced with `aria-describedby`, the form-level
 * error is a live region too, and focus moves to the first invalid control on a
 * failed submit.
 */
export function AuditForm() {
  const [state, setState] = useState<SubmitState>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AiAuditFormInput>({
    resolver: zodResolver(aiAuditRequestSchema),
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      jobTitle: '',
      website: '',
      goals: [],
      challenge: '',
      additionalInfo: '',
      preferredContact: 'Email',
      companyFax: '',
    },
  });

  const onSubmit = useCallback(
    async (values: AiAuditFormInput) => {
      setState('submitting');
      setFormError(null);

      try {
        const response = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setState('success');
          // Move the reader to the confirmation rather than leaving focus on a
          // button that has just been replaced.
          window.requestAnimationFrame(() => successRef.current?.focus());
          return;
        }

        const body = (await response.json().catch(() => ({}))) as ApiErrorBody;

        if (body.fields) {
          for (const [field, message] of Object.entries(body.fields)) {
            setError(field as keyof AiAuditFormInput, { type: 'server', message });
          }
        }

        setFormError(body.message ?? 'Something went wrong. Please try again.');
        setState('error');
      } catch {
        setFormError('We could not reach the server. Check your connection and try again.');
        setState('error');
      }
    },
    [setError],
  );

  const isSubmitting = state === 'submitting';
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    if (!isSubmitting) {
      setIsSlow(false);
      return;
    }

    const timer = window.setTimeout(() => setIsSlow(true), SLOW_HINT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [isSubmitting]);

  if (state === 'success') {
    return (
      <section
        id="audit-form"
        aria-labelledby="audit-success-heading"
        className="bg-canvas scroll-mt-28 py-[var(--section-py)]"
      >
        <div className="container-page">
          <motion.div
            ref={successRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
            className="border-hairline mx-auto max-w-[46rem] rounded-2xl border p-8 text-center sm:p-12"
          >
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: DURATION.base, delay: 0.1, ease: EASE.outExpo }}
              className="bg-success/10 text-success mx-auto flex size-14 items-center justify-center rounded-full"
            >
              <Check aria-hidden="true" strokeWidth={2.5} className="size-7" />
            </motion.span>

            <h2 id="audit-success-heading" className="text-h3-xl text-ink mt-7">
              {AUDIT_FORM_COPY.successHeading}
            </h2>

            <p className="text-body text-ink mx-auto mt-4 max-w-[52ch]">
              {AUDIT_FORM_COPY.successBody}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="audit-form"
      aria-labelledby="audit-form-heading"
      className="bg-canvas scroll-mt-28 py-[var(--section-py)]"
    >
      <div className="container-page">
        <div className="mx-auto max-w-[52rem]">
          <h2 id="audit-form-heading" className="text-h2-soft text-ink">
            {AUDIT_FORM_COPY.heading}
          </h2>

          <p className="text-body text-ink mt-5 max-w-[56ch]">{AUDIT_FORM_COPY.body}</p>

          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="border-hairline mt-10 rounded-2xl border p-6 sm:p-9 lg:mt-12"
          >
            {/* Honeypot: off-screen, not announced, never focusable. */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
              <label htmlFor="company-fax">Company fax</label>
              <input
                id="company-fax"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register('companyFax')}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name" htmlFor="fullName" required error={errors.fullName?.message}>
                <TextInput
                  id="fullName"
                  autoComplete="name"
                  placeholder="Your full name"
                  invalid={Boolean(errors.fullName)}
                  aria-describedby={describedBy('fullName', Boolean(errors.fullName), false)}
                  {...register('fullName')}
                />
              </Field>

              <Field label="Work Email" htmlFor="email" required error={errors.email?.message}>
                <TextInput
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  invalid={Boolean(errors.email)}
                  aria-describedby={describedBy('email', Boolean(errors.email), false)}
                  {...register('email')}
                />
              </Field>

              <Field label="Company" htmlFor="company" required error={errors.company?.message}>
                <TextInput
                  id="company"
                  autoComplete="organization"
                  placeholder="Company name"
                  invalid={Boolean(errors.company)}
                  aria-describedby={describedBy('company', Boolean(errors.company), false)}
                  {...register('company')}
                />
              </Field>

              <Field label="Job Title" htmlFor="jobTitle" error={errors.jobTitle?.message}>
                <TextInput
                  id="jobTitle"
                  autoComplete="organization-title"
                  placeholder="Your role"
                  invalid={Boolean(errors.jobTitle)}
                  aria-describedby={describedBy('jobTitle', Boolean(errors.jobTitle), false)}
                  {...register('jobTitle')}
                />
              </Field>

              <Field
                label="Company Website"
                htmlFor="website"
                error={errors.website?.message}
                className="sm:col-span-2"
              >
                <TextInput
                  id="website"
                  inputMode="url"
                  autoComplete="url"
                  placeholder="https://company.com"
                  invalid={Boolean(errors.website)}
                  aria-describedby={describedBy('website', Boolean(errors.website), false)}
                  {...register('website')}
                />
              </Field>

              <Field label="Industry" htmlFor="industry" error={errors.industry?.message}>
                <SelectInput
                  id="industry"
                  placeholder="Select an industry"
                  options={INDUSTRY_OPTIONS}
                  invalid={Boolean(errors.industry)}
                  aria-describedby={describedBy('industry', Boolean(errors.industry), false)}
                  {...register('industry')}
                />
              </Field>

              <Field label="Company Size" htmlFor="companySize" error={errors.companySize?.message}>
                <SelectInput
                  id="companySize"
                  placeholder="Select a size"
                  options={COMPANY_SIZE_OPTIONS}
                  invalid={Boolean(errors.companySize)}
                  aria-describedby={describedBy('companySize', Boolean(errors.companySize), false)}
                  {...register('companySize')}
                />
              </Field>
            </div>

            <fieldset className="border-hairline mt-9 border-t pt-8">
              <legend className="text-body text-ink font-medium">
                What would you like to improve?
              </legend>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {GOAL_OPTIONS.map((goal) => (
                  <CheckboxCard key={goal} label={goal} value={goal} {...register('goals')} />
                ))}
              </div>
            </fieldset>

            <div className="mt-9 grid gap-6">
              <Field
                label="Tell us about your challenge"
                htmlFor="challenge"
                required
                error={errors.challenge?.message}
              >
                <TextArea
                  id="challenge"
                  placeholder="What are you currently trying to improve or automate?"
                  invalid={Boolean(errors.challenge)}
                  aria-describedby={describedBy('challenge', Boolean(errors.challenge), false)}
                  required
                  {...register('challenge')}
                />
              </Field>
            </div>

            <fieldset className="border-hairline mt-9 border-t pt-8">
              <legend className="text-body text-ink font-medium">Preferred Contact Method</legend>

              <div className="mt-5 flex flex-wrap gap-3">
                {CONTACT_METHOD_OPTIONS.map((method) => (
                  <RadioPill
                    key={method}
                    label={method}
                    value={method}
                    {...register('preferredContact')}
                  />
                ))}
              </div>
            </fieldset>

            <div className="mt-9">
              <Field
                label="Additional Information"
                htmlFor="additionalInfo"
                hint="Optional"
                error={errors.additionalInfo?.message}
              >
                <TextArea
                  id="additionalInfo"
                  rows={4}
                  placeholder="Anything else that would help us prepare"
                  invalid={Boolean(errors.additionalInfo)}
                  aria-describedby={describedBy(
                    'additionalInfo',
                    Boolean(errors.additionalInfo),
                    true,
                  )}
                  {...register('additionalInfo')}
                />
              </Field>
            </div>

            <AnimatePresence>
              {formError ? (
                <motion.p
                  role="alert"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: DURATION.base, ease: EASE.outQuint }}
                  className="border-danger/30 bg-danger/6 text-danger text-body mt-8 rounded-[var(--radius-control)] border px-4 py-3"
                >
                  <span className="font-medium">{AUDIT_FORM_COPY.errorHeading} </span>
                  {formError}
                </motion.p>
              ) : null}
            </AnimatePresence>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                type="submit"
                variant="ember"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="font-semibold sm:w-auto"
                block
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      aria-hidden="true"
                      className="size-4 animate-spin motion-reduce:animate-none"
                    />
                    {AUDIT_FORM_COPY.submitting}
                  </>
                ) : (
                  <>
                    {AUDIT_FORM_COPY.submit}
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </Button>

              <p className="text-ink-muted text-sm">
                We use this only to prepare for the conversation.
              </p>
            </div>

            <p role="status" aria-live="polite" className="text-ink-muted mt-4 min-h-5 text-sm">
              {isSlow ? AUDIT_FORM_COPY.stillWorking : ''}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
