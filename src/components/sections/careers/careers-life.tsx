import Image from 'next/image';

import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';
import { CAREERS_ANCHORS, CAREERS_LIFE } from '@/content/careers';

/**
 * Life at McCarthy — one large photo beside a short text block.
 *
 * The photo takes the wider column and the text sits against its lower edge,
 * an editorial split rather than another card row. Below `lg` the two stack,
 * photo first, at a landscape ratio so the whole table of people stays in
 * frame. The only motion is a slow zoom on the photo while it's pointed at.
 */
export function CareersLife() {
  const { eyebrow, heading, body, locationsLabel, location, image } = CAREERS_LIFE;

  return (
    <section
      id={CAREERS_ANCHORS.life}
      aria-labelledby="careers-life-heading"
      className="bg-canvas scroll-mt-32 pb-[clamp(4rem,2.5rem+5vw,7.5rem)]"
    >
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] sm:aspect-[16/10] lg:aspect-[5/4]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[30%_center] transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:pb-4">
          <Eyebrow>{eyebrow}</Eyebrow>

          <h2 id="careers-life-heading" className="text-h2-soft text-ink mt-6 max-w-[16ch]">
            {heading}
          </h2>

          <p className="text-body-lg text-ink-muted mt-6 max-w-[42ch]">{body}</p>

          <dl className="mt-10 flex flex-col gap-1">
            <dt className="text-eyebrow text-ink-muted uppercase">{locationsLabel}</dt>
            <dd className="text-h4 text-ink font-display">{location}</dd>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
