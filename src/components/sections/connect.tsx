import { ArrowLink } from '@/components/shared/arrow-link';
import { CONNECT } from '@/content/homepage';

/** Sawtooth line art, drawn once and repeated across the band's right half. */
const SAWTOOTH_TEETH = 16;

/**
 * Section 22 — the connect band.
 *
 * Measured from the reference: the pale mint `#e4f4f1` surface, a 40px/46px
 * ember heading, body copy, and two 20px links — with a field of thin ember
 * sawtooth strokes filling the right-hand side.
 *
 * The newsletter link points at the contact page rather than a form, because
 * no mailing infrastructure exists yet and a dead-end form is worse than a
 * working link.
 */
export function Connect() {
  return (
    <section aria-labelledby="connect-heading" className="bg-surface-mint relative overflow-hidden">
      <svg
        aria-hidden="true"
        viewBox="0 0 600 320"
        preserveAspectRatio="none"
        className="absolute inset-y-0 right-0 hidden h-full w-1/2 md:block"
      >
        {Array.from({ length: SAWTOOTH_TEETH }, (_, index) => {
          const x = index * 38;
          return (
            <path
              key={index}
              d={`M ${x} 320 L ${x + 20} 0 L ${x + 20} 320`}
              fill="none"
              stroke="var(--color-ember)"
              strokeWidth={1}
              opacity={0.9}
            />
          );
        })}
      </svg>

      <div className="container-page relative py-[var(--section-py)]">
        <h2 id="connect-heading" className="text-h2-soft text-ember-text">
          {CONNECT.heading}
        </h2>

        <p className="text-body text-ink mt-5 max-w-[46ch]">{CONNECT.body}</p>

        <div className="mt-8 flex flex-col items-start gap-4">
          <ArrowLink href={CONNECT.primary.href} tone="ember" className="text-body-lg">
            {CONNECT.primary.label}
          </ArrowLink>

          <ArrowLink href={CONNECT.secondary.href} tone="ink" className="text-body-lg">
            {CONNECT.secondary.label}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
