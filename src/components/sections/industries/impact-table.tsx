import { Eyebrow } from '@/components/shared/eyebrow';
import type { ImpactSection } from '@/types/industry';

interface ImpactTableProps {
  readonly id?: string;
  readonly content: ImpactSection;
}

/**
 * "The business case" — a dark band listing the four outcome rows every
 * capability rolls up into (area, description, the metric it would move).
 * Same dark surface and rhythm as `ExpertVoice`/`Connect(tone="dark")`, so
 * the page's dark sections read as one family rather than three one-offs.
 */
export function ImpactTable({ id, content }: ImpactTableProps) {
  return (
    <section id={id} className="bg-abyss scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <Eyebrow tone="inverse">{content.eyebrow}</Eyebrow>
        <h2 className="text-h2-soft text-ink-inverse mt-5 max-w-[42ch]">{content.heading}</h2>
        <p className="text-body-lg text-ink-inverse/70 mt-5 max-w-[70ch]">{content.body}</p>

        <div className="border-ink-inverse/20 mt-12 border-t lg:mt-16">
          {content.rows.map((row) => (
            <div
              key={row.area}
              className="border-ink-inverse/20 grid gap-3 border-b py-7 lg:grid-cols-[minmax(0,280fr)_minmax(0,760fr)_minmax(0,260fr)] lg:items-center lg:gap-8 lg:py-8"
            >
              <p className="text-card text-ink-inverse">{row.area}</p>
              <p className="text-body text-ink-inverse/70">{row.desc}</p>
              <p className="text-legal text-verde-bright font-mono lg:text-right">{row.metric}</p>
            </div>
          ))}
        </div>

        <p className="text-legal text-ink-inverse/50 mt-8 max-w-[62ch]">{content.note}</p>
      </div>
    </section>
  );
}
