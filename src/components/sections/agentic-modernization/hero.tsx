import Image from 'next/image';

import { AMOD_HERO } from '@/content/agentic-modernization';

/** Same abstract wave art already used elsewhere on this page (Customer Success). */
const HERO_IMAGE_SRC = '/videos/wave-loop-poster.jpg';

/**
 * Hero. A static image rather than the looping video that art asset also
 * ships with (`wave-loop.mp4`) — `next/image` renders reliably on first
 * paint, where the video's fade-in depends on its `canplay` event landing
 * after React attaches the listener, which isn't guaranteed once the browser
 * already has the file cached. Reuses the homepage's `text-hero` type scale
 * (2.5–3rem clamp, 300 weight) so headline size/weight/line-height match the
 * reference without a new font size.
 */
export function Hero() {
  return (
    <section
      id="overview"
      className="bg-abyss relative isolate min-h-[28rem] scroll-mt-32 overflow-hidden sm:min-h-[32rem] lg:min-h-[36rem]"
    >
      <div aria-hidden="true" className="absolute inset-0">
        {/*
          The art's brightest wave glow sits in its lower-left third; this
          hero's container is a wider aspect ratio than the source image, so
          `object-cover` has to crop vertically — `object-left-bottom` keeps
          that glow in frame instead of the default centre crop trimming it
          away top and bottom.
        */}
        <Image
          src={HERO_IMAGE_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-left-bottom"
        />
        <div className="from-abyss-deep/70 via-abyss-deep/15 absolute inset-0 bg-gradient-to-r to-transparent" />
        <div className="from-abyss-deep/55 absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent" />
      </div>

      <div className="container-page relative flex min-h-[28rem] flex-col justify-center py-12 sm:min-h-[32rem] lg:min-h-[36rem] lg:py-16">
        <p className="eyebrow-rule text-eyebrow text-ink-inverse uppercase">{AMOD_HERO.eyebrow}</p>

        <h1 className="text-hero text-ink-inverse mt-6 max-w-[20ch]">
          {AMOD_HERO.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="text-body-lg text-ink-inverse/85 mt-6 max-w-[52ch]">{AMOD_HERO.body}</p>
      </div>
    </section>
  );
}
