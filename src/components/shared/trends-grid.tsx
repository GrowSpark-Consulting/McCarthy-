import { BarChart3, Compass, Factory, TrendingUp, Workflow } from 'lucide-react';

import { ArrowLink } from '@/components/shared/arrow-link';
import { AbstractTile, type AbstractTileTone } from '@/components/shared/abstract-tile';
import type { LinkRef } from '@/content/homepage';
import { cn } from '@/lib/utils';

export interface TrendArticle {
  readonly title: string;
  readonly body: string;
  readonly link: LinkRef;
}

interface TrendsGridProps {
  readonly id?: string;
  readonly eyebrow: string;
  readonly heading: string;
  readonly articles: readonly TrendArticle[];
  readonly className?: string;
}

/** Cycled by index so an arbitrary-length row of cards still reads as distinct pieces. */
const VISUALS: ReadonlyArray<{ icon: typeof Compass; tone: AbstractTileTone }> = [
  { icon: Compass, tone: 'ember' },
  { icon: Factory, tone: 'verde' },
  { icon: TrendingUp, tone: 'abyss' },
  { icon: Workflow, tone: 'mist' },
  { icon: BarChart3, tone: 'ember' },
];

/**
 * A 3-column "trends and insights" article card grid, each topped with an
 * `AbstractTile` since no article photography exists yet. Shared across
 * every consulting/service subpage (Agentic Modernization, Applications, AI
 * and Data, …) rather than rebuilt per page.
 */
export function TrendsGrid({ id, eyebrow, heading, articles, className }: TrendsGridProps) {
  return (
    <section id={id} className={cn('bg-surface-warm scroll-mt-32 py-[var(--section-py)]', className)}>
      <div className="container-page">
        <p className="text-eyebrow text-ink-muted uppercase">{eyebrow}</p>
        <h2 className="text-h2-soft text-ink mt-5 max-w-[30ch]">{heading}</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {articles.map((article, index) => {
            const visual = VISUALS[index % VISUALS.length]!;

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
