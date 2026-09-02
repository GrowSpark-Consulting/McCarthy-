import { Reveal } from '@/components/shared/reveal';
import { cn } from '@/lib/utils';

interface ConsultingEditorialProps {
  readonly id?: string;
  readonly eyebrow?: string;
  readonly heading: string;
  readonly paragraphs: readonly string[];
  /** Warm surface separates consecutive editorial bands without a rule. */
  readonly tone?: 'canvas' | 'warm';
  readonly children?: React.ReactNode;
}

/**
 * The large editorial band: heading held short on the left, copy stepped down
 * and to the right. The offset is what makes it read as editorial rather than
 * as a two-column layout, and it gives the page its most generous whitespace.
 *
 * `children` takes an optional action beneath the copy — a watch control, a
 * link — so the band does not need a variant per page.
 */
export function ConsultingEditorial({
  id,
  eyebrow,
  heading,
  paragraphs,
  tone = 'canvas',
  children,
}: ConsultingEditorialProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        'scroll-mt-32 py-[clamp(4.5rem,3rem+7vw,9rem)]',
        tone === 'warm' ? 'bg-surface-warm' : 'bg-canvas',
      )}
    >
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          {eyebrow ? (
            <p className="eyebrow-rule text-eyebrow text-ink mb-6 uppercase">{eyebrow}</p>
          ) : null}

          <h2 id={headingId} className="text-h2 text-ink max-w-[16ch]">
            {heading}
          </h2>
        </div>

        <div className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7 lg:pt-2">
          {paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.06}>
              <p className="text-body-lg text-ink-muted max-w-[58ch]">{paragraph}</p>
            </Reveal>
          ))}

          {children}
        </div>
      </div>
    </section>
  );
}
