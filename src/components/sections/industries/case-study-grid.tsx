import { Building2, Factory, Landmark } from 'lucide-react';

import { AbstractTile, type AbstractTileTone } from '@/components/shared/abstract-tile';
import { Eyebrow } from '@/components/shared/eyebrow';
import type { CaseStudySection } from '@/types/industry';

const VISUALS: ReadonlyArray<{ icon: typeof Building2; tone: AbstractTileTone }> = [
  { icon: Building2, tone: 'ember' },
  { icon: Landmark, tone: 'verde' },
  { icon: Factory, tone: 'abyss' },
];

interface CaseStudyGridProps {
  readonly id?: string;
  readonly content: CaseStudySection;
}

/**
 * "Customer success" — case study cards carrying an industry/client-type tag
 * above the headline. A thin variant of `CustomerStoryGrid`: that shared
 * component has no slot for the tag line this content supplies, so this page
 * family gets its own version rather than dropping that piece of copy.
 */
export function CaseStudyGrid({ id, content }: CaseStudyGridProps) {
  return (
    <section id={id} className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="text-h2-soft text-ink mt-5 max-w-[30ch]">{content.heading}</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-16">
          {content.stories.map((story, index) => {
            const visual = VISUALS[index % VISUALS.length]!;

            return (
              <article key={story.title} className="flex flex-col">
                <AbstractTile icon={visual.icon} tone={visual.tone} className="aspect-[16/10] rounded-[var(--radius-panel)]" />

                <p className="text-eyebrow text-ink-muted mt-6 uppercase">{story.tag}</p>
                <h3 className="text-h3-lg text-ink mt-2 max-w-[36ch]">{story.title}</h3>
                <p className="text-body text-ink-muted mt-3">{story.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
