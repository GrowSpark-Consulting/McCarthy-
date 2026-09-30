import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react';

import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

/**
 * Form primitives for the McCarthy design system.
 *
 * Built on the same tokens as the rest of the site: 4px control radius, ember
 * focus ring, hairline borders, 16px body type. Every control is a real native
 * element — labels are associated, errors are announced, and the whole set
 * works with a keyboard and a screen reader without extra wiring.
 */

const CONTROL_BASE = [
  'w-full rounded-[var(--radius-control)] border bg-canvas px-4 py-3 text-body text-ink',
  'placeholder:text-ink-muted/70',
  'transition-[border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
  'focus:outline-none focus-visible:border-ember focus-visible:ring-2 focus-visible:ring-ember/25',
  'disabled:cursor-not-allowed disabled:opacity-60',
];

/** Minimum 50px tall, matching the site's content buttons. */
const CONTROL_HEIGHT = 'min-h-[3.125rem]';

interface FieldProps {
  readonly label: string;
  readonly htmlFor: string;
  readonly required?: boolean;
  /** Message shown when the field fails validation. */
  readonly error?: string;
  /** Persistent helper text, read out alongside the label. */
  readonly hint?: string;
  readonly className?: string;
  readonly children: ReactNode;
}

/**
 * Label + control + error, wired together.
 *
 * The error is rendered into a live region so it is announced the moment
 * validation fails, and referenced by `aria-describedby` on the control.
 */
export function Field({ label, htmlFor, required, error, hint, className, children }: FieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={htmlFor} className="text-body text-ink font-medium">
        {label}
        {required ? (
          <>
            <span aria-hidden="true" className="text-ember ml-1">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        ) : null}
      </label>

      {hint ? (
        <p id={`${htmlFor}-hint`} className="text-ink-muted -mt-1 text-sm">
          {hint}
        </p>
      ) : null}

      {children}

      <p
        id={`${htmlFor}-error`}
        role="alert"
        aria-live="polite"
        className={cn('text-danger text-sm', error ? 'block' : 'hidden')}
      >
        {error}
      </p>
    </div>
  );
}

/** Builds the `aria-describedby` value for a control. */
export function describedBy(id: string, hasError: boolean, hasHint: boolean): string | undefined {
  const ids = [hasHint ? `${id}-hint` : null, hasError ? `${id}-error` : null].filter(Boolean);
  return ids.length > 0 ? ids.join(' ') : undefined;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly invalid?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { className, invalid, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        CONTROL_BASE,
        CONTROL_HEIGHT,
        invalid ? 'border-danger' : 'border-hairline hover:border-ink-muted',
        className,
      )}
      {...props}
    />
  );
});

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly invalid?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { className, invalid, rows = 5, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      aria-invalid={invalid || undefined}
      className={cn(
        CONTROL_BASE,
        'resize-y',
        invalid ? 'border-danger' : 'border-hairline hover:border-ink-muted',
        className,
      )}
      {...props}
    />
  );
});

export interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  readonly invalid?: boolean;
  readonly options: readonly string[];
  /** Shown as the empty first option. */
  readonly placeholder: string;
}

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(function SelectInput(
  { className, invalid, options, placeholder, ...props },
  ref,
) {
  return (
    <div className="relative">
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          CONTROL_BASE,
          CONTROL_HEIGHT,
          'cursor-pointer appearance-none pr-11',
          invalid ? 'border-danger' : 'border-hairline hover:border-ink-muted',
          className,
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        aria-hidden="true"
        strokeWidth={1.5}
        className="text-ink-muted pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2"
      />
    </div>
  );
});

interface CheckboxCardProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly label: string;
}

/**
 * A checkbox drawn as a selectable card.
 *
 * The native input stays in the DOM (visually hidden, not `display: none`) so
 * it keeps its role, focus behaviour and keyboard handling; the card reacts
 * through `peer-*` variants.
 */
export const CheckboxCard = forwardRef<HTMLInputElement, CheckboxCardProps>(function CheckboxCard(
  { label, className, id, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn('relative', className)}>
      <input ref={ref} id={inputId} type="checkbox" className="peer sr-only" {...props} />
      {/* `peer-checked:` only reaches siblings of the input, so the tick and its
          box are addressed through the label with an arbitrary descendant
          variant rather than by putting `peer-*` on the nested elements. */}
      <label
        htmlFor={inputId}
        className={cn(
          'flex cursor-pointer items-center gap-3 rounded-[var(--radius-control)] border px-4 py-3.5',
          'text-body text-ink select-none',
          'transition-[border-color,background-color] duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
          'border-hairline hover:border-ink-muted',
          'peer-checked:border-ember peer-checked:bg-ember/6',
          'peer-checked:[&_[data-box]]:border-ember peer-checked:[&_[data-box]]:bg-ember',
          'peer-checked:[&_[data-tick]]:opacity-100',
          'peer-focus-visible:ring-ember/30 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2',
        )}
      >
        <span
          data-box
          aria-hidden="true"
          className={cn(
            'flex size-5 shrink-0 items-center justify-center rounded-[2px] border',
            'border-ink-muted/60 transition-colors duration-[var(--duration-fast)]',
          )}
        >
          <Check
            data-tick
            strokeWidth={3}
            className="text-ink-inverse size-3 opacity-0 transition-opacity duration-[var(--duration-fast)]"
          />
        </span>
        {label}
      </label>
    </div>
  );
});

interface RadioPillProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly label: string;
}

/** Radio drawn as a pill, for short mutually exclusive choices. */
export const RadioPill = forwardRef<HTMLInputElement, RadioPillProps>(function RadioPill(
  { label, className, id, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn('relative', className)}>
      <input ref={ref} id={inputId} type="radio" className="peer sr-only" {...props} />
      <label
        htmlFor={inputId}
        className={cn(
          'flex cursor-pointer items-center justify-center rounded-full border px-5 py-3',
          'text-body text-ink select-none',
          'transition-[border-color,background-color,color] duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
          'border-hairline hover:border-ink-muted',
          'peer-checked:border-ink peer-checked:bg-ink peer-checked:text-ink-inverse',
          'peer-focus-visible:ring-ember/30 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2',
        )}
      >
        {label}
      </label>
    </div>
  );
});
