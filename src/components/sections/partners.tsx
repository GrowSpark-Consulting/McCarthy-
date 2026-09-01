import Image from 'next/image';

import { ArrowLink } from '@/components/shared/arrow-link';
import { PARTNERS } from '@/content/homepage';

/**
 * Section 18 — the platform band.
 *
 * Keeps the reference's rhythm: a 34px grey heading, an arrow link, then a
 * centred row of technology marks. The marks are third-party trademarks shown
 * to identify the platforms McCarthy builds on; the heading is worded as a
 * statement of tooling rather than a claim of formal alliance.
 *
 * Each logo keeps its own intrinsic ratio inside a fixed-height box, so a wide
 * mark and a square one sit on the same optical baseline.
 */
export function Partners() {
  return (
    <section aria-labelledby="partners-heading" className="bg-canvas py-[var(--section-py)]">
      <div className="container-page">
        <h2 id="partners-heading" className="text-h3-lg text-ink-muted">
          {PARTNERS.heading}
        </h2>

        <div className="mt-4">
          <ArrowLink href={PARTNERS.link.href}>{PARTNERS.link.label}</ArrowLink>
        </div>

        <ul className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:mt-16 lg:grid-cols-5 lg:gap-x-12">
          {PARTNERS.logos.map((logo) => (
            <li key={logo.src} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto max-w-[9rem] object-contain opacity-80 transition-opacity duration-[var(--duration-base)] hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
