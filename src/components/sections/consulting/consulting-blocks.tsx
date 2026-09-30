import { Reveal } from '@/components/shared/reveal';
import { cn } from '@/lib/utils';
import type { ConsultingBlock } from '@/types/consulting';

interface ConsultingBlocksProps {
  readonly id?: string;
  readonly heading?: string;
  readonly intro?: readonly string[];
  readonly blocks: readonly ConsultingBlock[];
  /**
   * `dark` is the deliberate contrast band a deck marks as dark; every other
   * band stays on the page's light ground.
   */
  readonly tone?: 'canvas' | 'warm' | 'dark';
  /** Accessible name when the deck gives the band no heading. */
  readonly label?: string;
}

/**
 * A row of major capability blocks.
 *
 * Each opens with a small index, then a large heading and copy at a reading
 * measure, divided by hairlines rather than boxed into cards — whitespace and
 * rules do the work. Two blocks split the row; three or more take a third
 * each, stacking below `md`.
 */
export function ConsultingBlocks({
  id,
  heading,
  intro,
  blocks,
  tone = 'canvas',
  label,
}: ConsultingBlocksProps) {
  const isDark = tone === 'dark';
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-label={heading ? undefined : label}
      aria-labelledby={heading ? headingId : undefined}
      className={cn(
        'scroll-mt-32 py-[clamp(4rem,3rem+5vw,7rem)]',
        isDark ? 'bg-abyss-deep' : tone === 'warm' ? 'bg-surface-warm' : 'bg-canvas',
      )}
    >
      <div className="container-page">
        {heading ? (
          <h2
            id={headingId}
            className={cn(
              'text-h2 max-w-[24ch]',
              isDark ? 'text-ink-inverse' : 'text-ember-text',
            )}
          >
            {heading}
          </h2>
        ) : null}

        {intro?.length ? (
          <div className="mt-8 flex max-w-[62ch] flex-col gap-5">
            {intro.map((paragraph) => (
              <p
                key={paragraph}
                className={cn('text-body-lg', isDark ? 'text-ink-inverse/80' : 'text-ink-muted')}
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}

        <div
          className={cn(
            'mt-12 grid gap-10 lg:mt-16 lg:gap-12',
            blocks.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3',
          )}
        >
          {blocks.map((block, index) => (
            <Reveal key={block.heading} delay={index * 0.08}>
              <article
                className={cn(
                  'flex h-full flex-col border-t pt-8',
                  isDark ? 'border-ink-inverse/20' : 'border-hairline',
                )}
              >
                <p
                  className={cn(
                    'text-eyebrow uppercase',
                    isDark ? 'text-ink-inverse/60' : 'text-ember-text',
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </p>

                <h3
                  className={cn(
                    'text-h3 mt-6 max-w-[18ch]',
                    isDark ? 'text-ink-inverse' : 'text-ink',
                  )}
                >
                  {block.heading}
                </h3>

                {block.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={cn(
                      'text-body mt-5 max-w-[52ch]',
                      isDark ? 'text-ink-inverse/80' : 'text-ink-muted',
                    )}
                  >
                    {paragraph}
                  </p>
                ))}

                {block.tag ? (
                  <p
                    className={cn(
                      'text-legal mt-8 w-fit border px-3 py-1.5',
                      isDark
                        ? 'border-ink-inverse/25 text-ink-inverse/75'
                        : 'border-hairline text-ink-muted',
                    )}
                  >
                    {block.tag}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
