import { Reveal } from '@/components/shared/reveal';
import { cn } from '@/lib/utils';
import type { ConsultingStat } from '@/types/consulting';

interface ConsultingStatsProps {
  readonly stats: readonly ConsultingStat[];
  readonly id?: string;
  /** Accessible name for the band, since the deck gives it no heading. */
  readonly label: string;
  readonly heading?: string;
}

/**
 * An oversized metrics band.
 *
 * The figure carries the band and everything else is quiet beneath it: a small
 * label, then a supporting line where the deck sets one. Columns are divided
 * by hairlines rather than boxed, which keeps a row of numbers reading as
 * editorial rather than as a dashboard.
 *
 * Figures come from the copy deck exactly as written — including its bracketed
 * placeholders, which stay visibly unfilled until real data exists.
 */
export function ConsultingStats({ stats, id, label, heading }: ConsultingStatsProps) {
  return (
    <section
      id={id}
      aria-label={heading ? undefined : label}
      aria-labelledby={heading ? 'stats-heading' : undefined}
      className="bg-canvas scroll-mt-32 py-[clamp(3.5rem,2.5rem+4vw,6rem)]"
    >
      <div className="container-page">
        {heading ? (
          <h2 id="stats-heading" className="text-h2 text-ink mb-12 max-w-[22ch] lg:mb-16">
            {heading}
          </h2>
        ) : null}

        <dl
          className={cn(
            'grid gap-10 md:gap-8',
            stats.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3',
          )}
        >
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="border-hairline flex h-full flex-col border-t pt-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="flex flex-col">
                  <span className="text-ember-text font-display text-[clamp(2.75rem,2rem+2.6vw,4.5rem)] leading-[1.05] font-light">
                    {stat.value}
                  </span>
                  <span className="text-body-lg text-ink mt-4">{stat.label}</span>
                  {stat.body ? (
                    <span className="text-body text-ink-muted mt-3">{stat.body}</span>
                  ) : null}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
