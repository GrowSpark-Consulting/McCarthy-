import { Eyebrow } from '@/components/shared/eyebrow';
import type { PressureSection } from '@/types/industry';

interface PressureGridProps {
  readonly id?: string;
  readonly content: PressureSection;
}

/**
 * "Why now" — four forces converging on the industry, laid out as a bordered
 * card grid (4 columns down to 1 on mobile). Each card carries a numbered
 * index rather than an icon, since the source content itself is organized by
 * number, not by pictogram.
 */
export function PressureGrid({ id, content }: PressureGridProps) {
  return (
    <section id={id} className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="text-h2-soft text-ink mt-5 max-w-[38ch]">{content.heading}</h2>
        <p className="text-body-lg text-ink-muted mt-5 max-w-[70ch]">{content.body}</p>

        <div className="bg-hairline border-hairline mt-12 grid gap-px overflow-hidden rounded-[var(--radius-panel)] border sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {content.cards.map((card) => (
            <article key={card.index} className="bg-canvas flex flex-col gap-3 p-6">
              <p className="text-eyebrow text-ember-text">{card.index}</p>
              <h3 className="text-card text-ink">{card.title}</h3>
              <p className="text-body text-ink-muted">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
