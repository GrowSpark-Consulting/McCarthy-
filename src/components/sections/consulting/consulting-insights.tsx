import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { ConsultingVisual } from '@/components/sections/consulting/consulting-visual';
import { Eyebrow } from '@/components/shared/eyebrow';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import type { ConsultingCard } from '@/types/consulting';

interface ConsultingInsightsProps {
  readonly eyebrow: string;
  readonly heading: string;
  readonly cards: readonly ConsultingCard[];
  readonly id?: string;
}

/**
 * Trends and insights.
 *
 * Asymmetric rather than a row of equal cards: the lead piece takes half the
 * width with a tall crop, and the rest stack beside it as compact rows with
 * their own small crop. That gives the section a clear first article and lets
 * a fourth entry sit in the composition instead of orphaning onto a new line.
 *
 * Every card is one link. Hover scales the crop, shifts the title to ember and
 * nudges the chevron — the site's existing card language.
 *
 * Card bodies are never clamped: the copy deck's wording is the deliverable.
 */
export function ConsultingInsights({
  eyebrow,
  heading,
  cards,
  id = 'insights',
}: ConsultingInsightsProps) {
  const [lead, ...rest] = cards;
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-surface-warm scroll-mt-32 py-[clamp(4rem,3rem+5vw,7rem)]"
    >
      <div className="container-page">
        <Eyebrow>{eyebrow}</Eyebrow>

        <h2 id={headingId} className="text-h2 text-ink mt-6 max-w-[20ch] lg:max-w-[24ch]">
          {heading}
        </h2>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          {lead ? (
            <Link
              href={lead.link.href}
              prefetch={PREFETCH_SITE_ROUTES}
              className="group/card focus-visible:outline-ember flex flex-col focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <div className="overflow-hidden">
                <ConsultingVisual
                  src={lead.image}
                  accent={lead.accent}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[16/10] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-quint)] group-hover/card:scale-105"
                />
              </div>

              <h3 className="text-h3 text-ink group-hover/card:text-ember-text mt-8 max-w-[20ch] transition-colors duration-[var(--duration-base)]">
                {lead.title}
              </h3>

              <p className="text-body-lg text-ink-muted mt-4 max-w-[52ch] flex-1">{lead.body}</p>

              <div className="text-body text-ink mt-6 flex items-center gap-2">
                {lead.link.label}
                <ChevronRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="text-ember size-4 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/card:translate-x-1"
                />
              </div>
            </Link>
          ) : null}

          <div className="flex flex-col">
            {rest.map((card) => (
              <Link
                key={card.title}
                href={card.link.href}
                prefetch={PREFETCH_SITE_ROUTES}
                className="group/card border-hairline focus-visible:outline-ember flex gap-5 border-t py-6 first:border-t-0 first:pt-0 last:pb-0 focus-visible:outline-2 focus-visible:outline-offset-4 sm:gap-8 lg:py-8"
              >
                <div className="w-28 shrink-0 overflow-hidden sm:w-40 lg:w-44">
                  <ConsultingVisual
                    src={card.image}
                    accent={card.accent}
                    sizes="12rem"
                    className="aspect-[4/3] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-quint)] group-hover/card:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-body-lg text-ink group-hover/card:text-ember-text sm:text-card transition-colors duration-[var(--duration-base)]">
                    {card.title}
                  </h3>

                  <p className="text-body text-ink-muted mt-2 flex-1">{card.body}</p>

                  <div className="text-legal text-ink mt-4 flex items-center gap-2">
                    {card.link.label}
                    <ChevronRight
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="text-ember size-4 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/card:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
