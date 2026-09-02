import { Reveal } from '@/components/shared/reveal';
import type { ConsultingBlock } from '@/types/consulting';

interface ConsultingDeliveryProps {
  readonly id?: string;
  readonly heading: string;
  readonly subheading?: string;
  readonly models: readonly ConsultingBlock[];
}

/**
 * The delivery-model band: four labelled tiers across a single row, divided by
 * hairlines. Large labels, quiet copy, and no boxes — the tiers read as one
 * model rather than four cards. Stacks to two columns at `sm` and one on
 * mobile, where each tier keeps its rule.
 */
export function ConsultingDelivery({ id, heading, subheading, models }: ConsultingDeliveryProps) {
  const headingId = id ? `${id}-heading` : 'delivery-heading';

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-canvas scroll-mt-32 py-[clamp(4rem,3rem+5vw,7rem)]"
    >
      <div className="container-page">
        <h2 id={headingId} className="text-h2 text-ink max-w-[18ch]">
          {heading}
        </h2>

        {subheading ? (
          <p className="text-body-lg text-ink-muted mt-6 max-w-[52ch]">{subheading}</p>
        ) : null}

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {models.map((model, index) => (
            <Reveal key={model.heading} delay={index * 0.06}>
              <article className="border-hairline flex h-full flex-col border-t pt-6">
                <h3 className="text-h3 text-ink">{model.heading}</h3>

                {model.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body text-ink-muted mt-4">
                    {paragraph}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
