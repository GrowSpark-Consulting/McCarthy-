import { ArrowLink } from '@/components/shared/arrow-link';
import type { ConsultingCard } from '@/types/consulting';

interface ConsultingCapabilitiesProps {
  readonly heading: string;
  readonly cards: readonly ConsultingCard[];
}

/**
 * Related capabilities — text-led columns.
 *
 * No imagery: the band reads as a footnote to the page rather than competing
 * with the journey cards above it. A hairline over each column warms to ember
 * on hover, which is the site's preference for rules over boxes.
 */
export function ConsultingCapabilities({ heading, cards }: ConsultingCapabilitiesProps) {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="bg-surface-warm py-[clamp(4rem,3rem+5vw,7rem)]"
    >
      <div className="container-page">
        <h2 id="capabilities-heading" className="text-h2 text-ink max-w-[18ch]">
          {heading}
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {cards.map((card) => (
            <article key={card.title} className="group/capability flex flex-col">
              <span
                aria-hidden="true"
                className="bg-hairline group-hover/capability:bg-ember h-px w-full transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]"
              />

              <h3 className="text-h3 text-ink mt-6 max-w-[16ch]">{card.title}</h3>

              <p className="text-body text-ink-muted mt-5 flex-1">{card.body}</p>

              <div className="mt-8">
                <ArrowLink href={card.link.href}>{card.link.label}</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
