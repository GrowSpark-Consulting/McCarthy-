import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { ConsultingVisual } from '@/components/sections/consulting/consulting-visual';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';
import { PEOPLE_INSIGHTS } from '@/content/people-performance';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';

/**
 * Trends and insights.
 *
 * Three equal editorial columns: the deck carries three articles of similar
 * weight, so promoting one to a lead would invent a hierarchy the copy does
 * not have. Each card is one link — hover zooms the crop, shifts the title to
 * ember and nudges the chevron, which is the site's existing card language.
 *
 * The tile is the shared `ConsultingVisual` rather than a second copy of it:
 * real footage where the project has it, the hero's own wave artwork —
 * re-tinted per card by the deck's `accent` — where it does not.
 *
 * Titles and bodies are never clamped — the deck's wording is the deliverable.
 * `mt-auto` pins every "Read more" to the same baseline across the row
 * regardless of how long a body runs.
 */
export function PeopleInsights() {
  return (
    <section
      id="insights"
      aria-labelledby="people-insights-heading"
      className="bg-surface-warm scroll-mt-32 py-[clamp(4rem,3rem+5vw,7rem)]"
    >
      <div className="container-page">
        <Reveal>
          <Eyebrow>{PEOPLE_INSIGHTS.eyebrow}</Eyebrow>

          <h2 id="people-insights-heading" className="text-h2 text-ink mt-6 max-w-[24ch]">
            {PEOPLE_INSIGHTS.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {PEOPLE_INSIGHTS.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.07} className="h-full">
              <Link
                href={card.link.href}
                prefetch={PREFETCH_SITE_ROUTES}
                className="group/card flex h-full flex-col"
              >
                <div className="overflow-hidden">
                  <ConsultingVisual
                    src={card.image}
                    accent={card.accent}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/10] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-quint)] group-hover/card:scale-105"
                  />
                </div>

                <h3 className="text-card text-ink group-hover/card:text-ember-text mt-7 transition-colors duration-[var(--duration-base)]">
                  {card.title}
                </h3>

                <p className="text-body text-ink-muted mt-4">{card.body}</p>

                <div className="text-body text-ink mt-auto flex items-center gap-2 pt-6">
                  {card.link.label}
                  <ChevronRight
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="text-ember size-4 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/card:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
