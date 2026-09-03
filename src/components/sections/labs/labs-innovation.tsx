import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

import { ConsultingVisual } from '@/components/sections/consulting/consulting-visual';
import { Reveal } from '@/components/shared/reveal';
import { LABS_INNOVATION } from '@/content/labs';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';

/**
 * Empowering innovation and collaboration.
 *
 * The deck marks a video here but supplies none, so the slot is the project's
 * own visual with the deck's runtime line beneath it, presented as a still
 * rather than as a play control that would lead nowhere. Real footage drops
 * into the same frame.
 *
 * The four capabilities beneath run as a horizontal link row on desktop —
 * each an arrow link, the site's existing affordance — and stack on mobile.
 */
export function LabsInnovation() {
  const { heading, videoLabel, paragraphs, links } = LABS_INNOVATION;

  return (
    <section
      id="who-we-are"
      aria-labelledby="innovation-heading"
      className="bg-canvas scroll-mt-32 py-[clamp(4rem,3rem+5vw,7rem)]"
    >
      <div className="container-page">
        <h2 id="innovation-heading" className="text-h2 text-ink max-w-[18ch]">
          {heading}
        </h2>

        <figure className="mt-12 lg:mt-16">
          <ConsultingVisual
            src="/videos/hero-ai-office-poster.jpg"
            sizes="(min-width: 1024px) 90vw, 100vw"
            className="aspect-[16/9] w-full"
          />

          <figcaption className="text-legal text-ink-muted mt-3 flex items-center gap-2">
            <Play aria-hidden="true" strokeWidth={1.5} className="size-4" />
            {videoLabel}
          </figcaption>
        </figure>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.06}>
                <p className="text-body-lg text-ink-muted max-w-[62ch]">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="border-hairline mt-10 grid border-t sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <li key={link.label} className="border-hairline border-b sm:border-b-0">
              <Link
                href={link.href}
                prefetch={PREFETCH_SITE_ROUTES}
                className="group/link text-body text-ink hover:text-ember-text focus-visible:outline-ember flex h-full items-start justify-between gap-4 py-6 pr-4 transition-colors duration-[var(--duration-base)] focus-visible:outline-2 focus-visible:outline-offset-2 lg:pr-8"
              >
                {link.label}
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="text-ember mt-1 size-4 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/link:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
