import { Newspaper, Rss, TrendingUp } from 'lucide-react';

import { AbstractTile, type AbstractTileTone } from '@/components/shared/abstract-tile';
import { Eyebrow } from '@/components/shared/eyebrow';
import type { InsightsSection } from '@/types/industry';

const VISUALS: ReadonlyArray<{ icon: typeof Newspaper; tone: AbstractTileTone }> = [
  { icon: Newspaper, tone: 'ember' },
  { icon: TrendingUp, tone: 'verde' },
  { icon: Rss, tone: 'mist' },
];

interface InsightsGridProps {
  readonly id?: string;
  readonly content: InsightsSection;
}

/**
 * "Trends and insights" — the source content supplies only a read-time meta
 * line and a headline per article (no body copy, no link), so this stays a
 * thin card rather than reusing `TrendsGrid`, which requires both.
 */
export function InsightsGrid({ id, content }: InsightsGridProps) {
  return (
    <section id={id} className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="text-h2-soft text-ink mt-5 max-w-[36ch]">{content.heading}</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {content.articles.map((article, index) => {
            const visual = VISUALS[index % VISUALS.length]!;

            return (
              <article key={article.title} className="flex flex-col">
                <AbstractTile icon={visual.icon} tone={visual.tone} className="aspect-[16/9] rounded-[var(--radius-panel)]" />

                <p className="text-legal text-ink-muted mt-6">{article.meta}</p>
                <h3 className="text-card text-ink mt-2">{article.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
