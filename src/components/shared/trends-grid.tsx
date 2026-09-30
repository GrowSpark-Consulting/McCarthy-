import Image from 'next/image';
import { BarChart3, Compass, Factory, TrendingUp, Workflow } from 'lucide-react';

import { ArrowLink } from '@/components/shared/arrow-link';
import { AbstractTile, type AbstractTileTone } from '@/components/shared/abstract-tile';
import type { LinkRef } from '@/content/homepage';
import { cn } from '@/lib/utils';

export interface TrendArticle {
  readonly title: string;
  readonly body: string;
  readonly link: LinkRef;
  /** Article photography; without it the card falls back to an `AbstractTile`. */
  readonly image?: string;
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

/** Frosted badge tint over a photo — the same tone the card's tile would use. */
const BADGE_CLASS: Record<AbstractTileTone, string> = {
  ember: 'bg-ember-deep/45',
  verde: 'bg-verde/45',
  abyss: 'bg-abyss/60',
  mist: 'bg-ink/40',
};

/**
 * A 3-column "trends and insights" article card grid. Cards with photography
 * show it at a square crop with the card's icon in a frosted badge; the rest
 * are topped with an `AbstractTile`. Shared across
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
            const Icon = visual.icon;

            return (
              <article key={article.title} className="flex flex-col">
                {article.image ? (
                  <div className="relative aspect-square overflow-hidden rounded-[var(--radius-panel)]">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        'border-ink-inverse/20 absolute bottom-3 left-3 flex size-12 items-center justify-center rounded-xl border backdrop-blur-md lg:bottom-5 lg:left-5 lg:size-[4.5rem] lg:rounded-2xl',
                        BADGE_CLASS[visual.tone],
                      )}
                    >
                      <Icon strokeWidth={1.5} className="text-ink-inverse size-6 lg:size-9" />
                    </span>
                  </div>
                ) : (
                  <AbstractTile
                    icon={visual.icon}
                    tone={visual.tone}
                    className="aspect-[16/9] rounded-[var(--radius-panel)]"
                  />
                )}

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
