import Image from 'next/image';

import { ArrowLink } from '@/components/shared/arrow-link';
import type { LinkRef } from '@/content/homepage';

export interface ServicesHeroFeature {
  readonly title: string;
  readonly link: LinkRef;
}

interface ServicesHeroProps {
  /** Only pass this when the local page nav actually has an anchor for the hero (e.g. "Overview"). */
  readonly id?: string;
  readonly eyebrow: string;
  readonly heading: string;
  readonly body: string;
  /** The background art is decorative (the text conveys the same content), so no alt text is needed. */
  readonly imageSrc: string;
  readonly features: readonly ServicesHeroFeature[];
}

/**
 * The dark "SERVICES" hero every Technology Services subpage opens with:
 * eyebrow, headline, body, then a row of featured-content tiles pinned to
 * the bottom of the dark band. Shared between Applications and AI and Data
 * (and reusable by future Technology Services pages) rather than rebuilt per
 * page — only the copy, background image and feature links differ.
 *
 * Uses a static image rather than a looping video: `next/image` renders
 * reliably on first paint, where a video's fade-in depends on its `canplay`
 * event landing after React attaches the listener, which isn't guaranteed
 * once the browser already has the file cached (see the Agentic
 * Modernization hero, which hit exactly this).
 */
export function ServicesHero({ id, eyebrow, heading, body, imageSrc, features }: ServicesHeroProps) {
  return (
    <section id={id} className="bg-abyss relative isolate scroll-mt-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-left-bottom"
        />
        <div className="from-abyss-deep/70 via-abyss-deep/15 absolute inset-0 bg-gradient-to-r to-transparent" />
        <div className="from-abyss-deep/55 absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent" />
        <div className="from-abyss-deep/85 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />
      </div>

      <div className="container-page relative flex min-h-[26rem] flex-col justify-center py-12 sm:min-h-[30rem] lg:min-h-[32rem] lg:py-16">
        <p className="eyebrow-rule text-eyebrow text-ink-inverse uppercase">{eyebrow}</p>

        <h1 className="text-hero text-ink-inverse mt-6 max-w-[20ch]">{heading}</h1>

        <p className="text-body-lg text-ink-inverse/85 mt-6 max-w-[52ch]">{body}</p>
      </div>

      {features.length > 0 ? (
        <div className="container-page relative pb-10 lg:pb-14">
          <div className="border-ink-inverse/20 grid gap-x-8 gap-y-8 border-t pt-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-4">
                <p className="text-body text-ink-inverse">{feature.title}</p>
                <ArrowLink href={feature.link.href} tone="inverse">
                  {feature.link.label}
                </ArrowLink>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
