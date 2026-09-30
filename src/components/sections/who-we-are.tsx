import Image from 'next/image';

import { ArrowLink } from '@/components/shared/arrow-link';
import { Eyebrow } from '@/components/shared/eyebrow';
import { WHO_WE_ARE } from '@/content/homepage';

/**
 * Section 5 — the who-we-are split.
 *
 * Measured from the reference: a ~445px copy column on the left and an ember
 * panel filling the rest (853x490 at 1440), with the brand line set small in
 * its top-left corner.
 *
 * The panel carries the "We are McCarthy" photograph under a dark scrim so
 * the wordmark stays legible; the ember fill shows while it loads.
 */
export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[minmax(0,445fr)_minmax(0,853fr)] lg:gap-[6.5rem]">
        <div className="flex flex-col">
          <Eyebrow>{WHO_WE_ARE.eyebrow}</Eyebrow>

          <h2 className="text-card text-ink mt-6 max-w-[28rem]">{WHO_WE_ARE.heading}</h2>

          <p className="text-body text-ink mt-6 max-w-[28rem]">{WHO_WE_ARE.body}</p>

          <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3 lg:mt-16">
            {WHO_WE_ARE.links.map((link, index) => (
              <li key={link.href} className="flex items-center gap-4">
                {index > 0 ? (
                  <span aria-hidden="true" className="bg-hairline hidden h-4 w-px sm:block" />
                ) : null}
                <ArrowLink href={link.href} tone="ink" className="text-legal">
                  {link.label}
                </ArrowLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="group bg-ember relative isolate aspect-[4/3] overflow-hidden p-5 sm:aspect-[16/9] sm:p-7 lg:aspect-auto lg:min-h-[30.625rem] lg:p-9">
          <Image
            src={WHO_WE_ARE.panel.image.src}
            alt={WHO_WE_ARE.panel.image.alt}
            fill
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="-z-20 object-cover object-[62%_center] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-br from-black/55 via-black/10 to-transparent"
          />

          <p className="text-ink-inverse text-[clamp(1.125rem,0.95rem+0.8vw,1.625rem)] leading-[1.15] font-light [text-shadow:0_1px_16px_rgb(0_0_0/0.4)]">
            {WHO_WE_ARE.panel.wordmark}
            <span aria-hidden="true">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
