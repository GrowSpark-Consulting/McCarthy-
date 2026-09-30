import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { ConsultingVisual } from '@/components/sections/consulting/consulting-visual';
import { Eyebrow } from '@/components/shared/eyebrow';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import type { ConsultingCard } from '@/types/consulting';

interface ConsultingFeatureProps {
  readonly id?: string;
  readonly eyebrow: string;
  readonly card: ConsultingCard;
}

/**
 * A single featured callout: one wide crop beside the copy, at more weight
 * than a card in a grid and less than a section of its own. The whole block is
 * the link, with the site's circular arrow filling on hover.
 */
export function ConsultingFeature({ id, eyebrow, card }: ConsultingFeatureProps) {
  return (
    <section id={id} className="bg-surface-warm scroll-mt-32 py-[clamp(3.5rem,2.5rem+4vw,6rem)]">
      <div className="container-page">
        <Eyebrow>{eyebrow}</Eyebrow>

        <Link
          href={card.link.href}
          prefetch={PREFETCH_SITE_ROUTES}
          className="group/feature focus-visible:outline-ember mt-10 grid items-center gap-8 focus-visible:outline-2 focus-visible:outline-offset-4 lg:grid-cols-2 lg:gap-16"
        >
          <div className="overflow-hidden">
            <ConsultingVisual
              src={card.image}
              accent={card.accent}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[16/10] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-quint)] group-hover/feature:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-h3-xl text-ink group-hover/feature:text-ember-text max-w-[22ch] transition-colors duration-[var(--duration-base)]">
              {card.title}
            </h2>

            <p className="text-body-lg text-ink-muted mt-5 max-w-[52ch]">{card.body}</p>

            <div className="text-body text-ink mt-8 flex items-center gap-3">
              {card.link.label}
              <span
                aria-hidden="true"
                className="border-ink/30 group-hover/feature:bg-ink-strong group-hover/feature:text-ink-inverse group-hover/feature:border-ink-strong flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]"
              >
                <ArrowRight strokeWidth={1.75} className="size-4" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
