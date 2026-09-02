import { Compass, Factory, TrendingUp } from 'lucide-react';

import { ArrowLink } from '@/components/shared/arrow-link';
import { AbstractTile, type AbstractTileTone } from '@/components/shared/abstract-tile';
import { AMOD_TRENDS } from '@/content/agentic-modernization';

/** One visual per article, in source order — varied so the row reads as three distinct pieces. */
const ARTICLE_VISUALS: ReadonlyArray<{ icon: typeof Compass; tone: AbstractTileTone }> = [
  { icon: Compass, tone: 'ember' },
  { icon: Factory, tone: 'verde' },
  { icon: TrendingUp, tone: 'abyss' },
];

/**
 * "Trends and Insights" — a 3-column article card grid, each topped with an
 * `AbstractTile` since no article photography exists yet.
 */
export function Trends() {
  return (
    <section aria-labelledby="amod-trends-heading" className="bg-surface-warm py-[var(--section-py)]">
      <div className="container-page">
        <p className="text-eyebrow text-ink-muted uppercase">{AMOD_TRENDS.eyebrow}</p>
        <h2 id="amod-trends-heading" className="text-h2-soft text-ink mt-5 max-w-[30ch]">
          {AMOD_TRENDS.heading}
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {AMOD_TRENDS.articles.map((article, index) => {
            const visual = ARTICLE_VISUALS[index % ARTICLE_VISUALS.length]!;

            return (
              <article key={article.title} className="flex flex-col">
                <AbstractTile
                  icon={visual.icon}
                  tone={visual.tone}
                  className="aspect-[16/9] rounded-[var(--radius-panel)]"
                />

                <h3 className="text-card text-ink mt-6">{article.title}</h3>
                <p className="text-body text-ink-muted mt-4 flex-1">{article.body}</p>

                <div className="mt-6">
                  <ArrowLink href={article.link.href}>{article.link.label}</ArrowLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
