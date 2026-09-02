import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { ConsultingVisual } from '@/components/sections/consulting/consulting-visual';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import type { ConsultingCard } from '@/types/consulting';

interface ConsultingJourneyProps {
  readonly heading: string;
  readonly cards: readonly ConsultingCard[];
}

/**
 * The journey band: image-led cards that carry the page's calls to action.
 *
 * The visual leads and the copy sits beneath it in ink on the page's own
 * canvas, rather than white-on-scrim over the crop — which turns a card into a
 * dark block halfway down an otherwise light page. The photography still
 * leads; it just no longer has to be dimmed to hold text.
 *
 * With more than two cards the first takes the full row at a wide crop and a
 * larger heading — the action card the reference gives its own weight — and
 * the rest follow in a three-up row of story cards. Two cards simply split the
 * row. The circular arrow is the site's existing card affordance.
 */
export function ConsultingJourney({ heading, cards }: ConsultingJourneyProps) {
  const hasLead = cards.length > 2;

  return (
    <section aria-labelledby="journey-heading" className="bg-canvas py-[clamp(4rem,3rem+5vw,7rem)]">
      <div className="container-page">
        <h2 id="journey-heading" className="text-h2 text-ink max-w-[24ch]">
          {heading}
        </h2>

        <div
          className={cn(
            'mt-12 grid gap-10 lg:mt-16 lg:gap-12',
            hasLead ? 'lg:grid-cols-3' : 'lg:grid-cols-2',
          )}
        >
          {cards.map((card, index) => {
            const isLead = hasLead && index === 0;

            return (
              <Link
                key={card.title}
                href={card.link.href}
                prefetch={PREFETCH_SITE_ROUTES}
                className={cn(
                  'group/card focus-visible:outline-ember flex flex-col focus-visible:outline-2 focus-visible:outline-offset-4',
                  isLead && 'lg:col-span-3 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12',
                )}
              >
                <div className="overflow-hidden">
                  <ConsultingVisual
                    src={card.image}
                    accent={card.accent}
                    sizes={
                      isLead
                        ? '(min-width: 1024px) 50vw, 100vw'
                        : '(min-width: 1024px) 33vw, 100vw'
                    }
                    className={cn(
                      'transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-quint)] group-hover/card:scale-105',
                      isLead ? 'aspect-[16/10] lg:aspect-[3/2]' : 'aspect-[16/10]',
                    )}
                  />
                </div>

                <div className={cn('flex flex-col', isLead && 'lg:py-4')}>
                  <h3
                    className={cn(
                      'text-ink group-hover/card:text-ember-text mt-8 transition-colors duration-[var(--duration-base)]',
                      isLead ? 'text-h2-soft max-w-[20ch] lg:mt-0' : 'text-h3 max-w-[22ch]',
                    )}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={cn(
                      'text-ink-muted mt-4 flex-1',
                      isLead ? 'text-body-lg max-w-[54ch]' : 'text-body max-w-[46ch]',
                    )}
                  >
                    {card.body}
                  </p>

                  <div className="text-body text-ink mt-6 flex items-center gap-3">
                    {card.link.label}
                    <span
                      aria-hidden="true"
                      className="border-ink/30 group-hover/card:bg-ink-strong group-hover/card:text-ink-inverse group-hover/card:border-ink-strong flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]"
                    >
                      <ArrowRight strokeWidth={1.75} className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
