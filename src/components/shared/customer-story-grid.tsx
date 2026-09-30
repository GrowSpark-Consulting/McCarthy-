import { Building2, Factory, Landmark } from 'lucide-react';

import { ArrowLink } from '@/components/shared/arrow-link';
import { AbstractTile, type AbstractTileTone } from '@/components/shared/abstract-tile';
import type { LinkRef } from '@/content/homepage';
import { cn } from '@/lib/utils';

export interface CustomerStory {
  readonly title: string;
  readonly body?: string;
  /** Omit when the source content doesn't supply a CTA for this story — no "Read more" is invented. */
  readonly link?: LinkRef;
}

interface CustomerStoryGridProps {
  readonly id?: string;
  readonly heading: string;
  readonly stories: readonly CustomerStory[];
  readonly note?: string;
}

const VISUALS: ReadonlyArray<{ icon: typeof Building2; tone: AbstractTileTone }> = [
  { icon: Building2, tone: 'ember' },
  { icon: Landmark, tone: 'verde' },
  { icon: Factory, tone: 'abyss' },
];

/**
 * A customer/case-study card grid — 2 or 3 columns depending on how many
 * stories are supplied. No real customer photography exists yet, so each
 * card carries an `AbstractTile` rather than a stock or invented logo.
 */
export function CustomerStoryGrid({ id, heading, stories, note }: CustomerStoryGridProps) {
  const columnClass = stories.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <section id={id} className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <h2 className="text-h2-soft text-ink max-w-[30ch]">{heading}</h2>

        <div className={cn('mt-12 grid gap-10 md:gap-8 lg:mt-16', columnClass)}>
          {stories.map((story, index) => {
            const visual = VISUALS[index % VISUALS.length]!;

            return (
              <article key={story.title} className="flex flex-col">
                <AbstractTile
                  icon={visual.icon}
                  tone={visual.tone}
                  className="aspect-[16/10] rounded-[var(--radius-panel)]"
                />

                <h3 className="text-h3-lg text-ink mt-6 max-w-[30ch]">{story.title}</h3>
                {story.body ? <p className="text-body text-ink-muted mt-3 flex-1">{story.body}</p> : null}

                {story.link ? (
                  <div className="mt-6">
                    <ArrowLink href={story.link.href}>{story.link.label}</ArrowLink>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>

        {note ? <p className="text-legal text-ink-muted mt-10 max-w-[60ch]">{note}</p> : null}
      </div>
    </section>
  );
}
