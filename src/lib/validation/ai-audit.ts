import { z } from 'zod';

import {
  COMPANY_SIZE_OPTIONS,
  CONTACT_METHOD_OPTIONS,
  GOAL_OPTIONS,
  INDUSTRY_OPTIONS,
} from '@/content/ai-audit';

/**
 * One schema, used by the browser and the API route.
 *
 * Client-side validation is a convenience; the server re-parses the same schema
 * on every request, so a crafted payload gets the identical treatment. Keeping
 * a single definition means the two can never drift.
 */

/** Longest address allowed by RFC 5321. */
const MAX_EMAIL_LENGTH = 254;

/** Field bounds. */
const MAX_NAME = 100;
const MIN_COMPANY = 2;
const MAX_COMPANY = 150;
const MAX_SHORT_TEXT = 120;
const MIN_CHALLENGE = 10;
const MAX_LONG_TEXT = 3000;

/** Trims, and turns an empty string into `undefined` so optionals behave. */
const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Please keep this under ${max} characters.`)
    .optional()
    .transform((value) => (value === '' ? undefined : value));

/**
 * Accepts `company.com` as readily as `https://company.com`, then validates the
 * normalised result. Anything that is not http(s) is rejected.
 */
const websiteSchema = z
  .string()
  .trim()
  .optional()
  .transform((value) => {
    if (!value) {
      return undefined;
    }

    return /^https?:\/\//i.test(value) ? value : `https://${value}`;
  })
  .refine(
    (value) => {
      if (!value) {
        return true;
      }

      try {
        const url = new URL(value);
        return (
          (url.protocol === 'http:' || url.protocol === 'https:') && url.hostname.includes('.')
        );
      } catch {
        return false;
      }
    },
    { message: 'Enter a valid website address, for example company.com' },
  );

/**
 * An unselected `<select>` posts an empty string, not `undefined`, so a bare
 * `z.enum(...).optional()` would reject every submission that skipped an
 * optional dropdown. Empty values are normalised away before the enum runs.
 */
const optionalChoice = <T extends readonly [string, ...string[]]>(values: T, message: string) =>
  z.preprocess(
    (value) => (value === '' || value === null ? undefined : value),
    z.enum(values, { error: message }).optional(),
  );

export const aiAuditRequestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(MAX_NAME, `Please keep your name under ${MAX_NAME} characters.`),

  email: z
    .string()
    .trim()
    .min(1, 'Please enter your work email.')
    .max(MAX_EMAIL_LENGTH, 'That email address is too long.')
    .pipe(z.email('Enter a valid email address, for example you@company.com'))
    .transform((value) => value.toLowerCase()),

  company: z
    .string()
    .trim()
    .min(MIN_COMPANY, 'Please enter your company name.')
    .max(MAX_COMPANY, `Please keep this under ${MAX_COMPANY} characters.`),

  jobTitle: optionalText(MAX_SHORT_TEXT),
  website: websiteSchema,

  industry: optionalChoice(INDUSTRY_OPTIONS, 'Please choose one of the listed industries.'),
  companySize: optionalChoice(
    COMPANY_SIZE_OPTIONS,
    'Please choose one of the listed company sizes.',
  ),

  goals: z
    .array(z.enum(GOAL_OPTIONS, { error: 'Please choose from the listed goals.' }))
    .max(GOAL_OPTIONS.length)
    .default([]),

  challenge: z
    .string()
    .trim()
    .min(MIN_CHALLENGE, 'Please tell us a little about the challenge — at least 10 characters.')
    .max(MAX_LONG_TEXT, `Please keep this under ${MAX_LONG_TEXT} characters.`),
  preferredContact: z
    .enum(CONTACT_METHOD_OPTIONS, { error: 'Please choose a contact method.' })
    .default('Email'),
  additionalInfo: optionalText(MAX_LONG_TEXT),

  /**
   * Honeypot. Hidden from sighted users and from assistive technology, so only
   * a bot fills it in. Any value at all rejects the submission.
   */
  companyFax: z
    .string()
    .max(0, 'Rejected.')
    .optional()
    .transform(() => undefined),
});

/** Shape accepted by the form before zod applies its transforms. */
export type AiAuditFormInput = z.input<typeof aiAuditRequestSchema>;

/** Shape the API route works with after parsing. */
export type AiAuditRequest = z.output<typeof aiAuditRequestSchema>;
