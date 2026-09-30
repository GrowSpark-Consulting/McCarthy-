import { BookOpen, ClipboardList, FileText } from 'lucide-react';

import { ArrowLink } from '@/components/shared/arrow-link';
import { AbstractTile, type AbstractTileTone } from '@/components/shared/abstract-tile';
import { Eyebrow } from '@/components/shared/eyebrow';
import type { ResourcesSection } from '@/types/industry';

const VISUALS: ReadonlyArray<{ icon: typeof FileText; tone: AbstractTileTone }> = [
  { icon: FileText, tone: 'ember' },
  { icon: BookOpen, tone: 'verde' },
  { icon: ClipboardList, tone: 'abyss' },
];

interface ResourcesGridProps {
  readonly id?: string;
  readonly content: ResourcesSection;
}

/**
 * "Go deeper" — the readiness report / ebook / playbook row. Distinct from
 * `TrendsGrid` because these cards carry a format tag instead of a body
 * paragraph — the source content never supplies a description for them.
 */
export function ResourcesGrid({ id, content }: ResourcesGridProps) {
  return (
    <section id={id} className="bg-surface-warm scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="text-h2-soft text-ink mt-5 max-w-[36ch]">{content.heading}</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {content.cards.map((card, index) => {
            const visual = VISUALS[index % VISUALS.length]!;

            return (
              <article key={card.title} className="flex flex-col">
                <AbstractTile icon={visual.icon} tone={visual.tone} className="aspect-[4/3] rounded-[var(--radius-panel)]" />

                <p className="text-eyebrow text-ink-muted mt-6 uppercase">{card.tag}</p>
                <h3 className="text-card text-ink mt-2 flex-1">{card.title}</h3>

                <div className="mt-6">
                  <ArrowLink href="#connect-with-us">{card.linkLabel}</ArrowLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
