import { Eyebrow } from '@/components/shared/eyebrow';
import { cn } from '@/lib/utils';
import type { CapabilitySection, CapabilityTag } from '@/types/industry';

interface CapabilityCatalogueProps {
  readonly id?: string;
  readonly content: CapabilitySection;
}

const TAG_LABEL: Record<CapabilityTag, string> = {
  revenue: 'Revenue',
  cost: 'Cost',
  risk: 'Risk',
  time: 'Time',
};

/** Kept to McCarthy's own palette families — no new colour is introduced for this. */
const TAG_CLASS: Record<CapabilityTag, string> = {
  revenue: 'bg-verde/10 text-verde-deep',
  cost: 'bg-ember/10 text-ember-deep',
  risk: 'bg-ink/6 text-ink-muted',
  time: 'bg-link/10 text-link',
};

/**
 * The full capability catalogue — every category the brief lists (e.g.
 * "Personalized learning", "Production & plant floor"), each rendered as a
 * labelled block of capability cards carrying revenue/cost/risk/time tags.
 *
 * A plain categorized grid rather than `CapabilityTabs`: the source content
 * presents every category at once (it's a catalogue to scan), not a
 * single-panel-at-a-time switcher.
 */
export function CapabilityCatalogue({ id, content }: CapabilityCatalogueProps) {
  return (
    <section id={id} className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="text-h2-soft text-ink mt-5 max-w-[42ch]">{content.heading}</h2>
        <p className="text-body-lg text-ink-muted mt-5 max-w-[70ch]">{content.body}</p>

        <div className="mt-14 flex flex-col gap-16 lg:mt-16 lg:gap-20">
          {content.categories.map((category) => (
            <div key={category.index} className="border-hairline border-t pt-10 lg:pt-12">
              <div className="flex flex-wrap items-baseline gap-4">
                <span className="text-eyebrow text-ember-text">({category.index})</span>
                <h3 className="text-h3-lg text-ink">{category.title}</h3>
              </div>
              <p className="text-body text-ink-muted mt-3 max-w-[62ch]">{category.subtitle}</p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:gap-10">
                {category.capabilities.map((capability) => (
                  <article key={capability.name} className="flex flex-col">
                    <span aria-hidden="true" className="bg-ember block h-[2px] w-7" />
                    <h4 className="text-card text-ink mt-5">{capability.name}</h4>
                    <p className="text-body text-ink-muted mt-4 flex-1">{capability.desc}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {capability.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            'text-legal rounded-[var(--radius-control)] px-2.5 py-1 font-medium',
                            TAG_CLASS[tag],
                          )}
                        >
                          {TAG_LABEL[tag]}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
