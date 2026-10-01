import Image from 'next/image';

import { Reveal } from '@/components/shared/reveal';
import { CAREERS_ANCHORS, CAREERS_AREAS } from '@/content/careers';

/**
 * Join our growing team — the oversized outlined headline and the four
 * career-area cards beneath it.
 *
 * The headline is this section's real `h2`, drawn as a thin ember stroke with
 * no fill at a size tied to the viewport width, so it spans the frame at
 * every breakpoint the way the reference's does. It sits on one line from
 * `sm` and on two below, where a single line would shrink it to body-copy
 * scale. The wrapper clips horizontally, so the bleed can never scroll the
 * page sideways.
 *
 * Cards follow the reference: photo first with rounded corners, then title
 * and a line of copy — no panel, icon or shadow. They are not links yet;
 * there is nothing role-specific to send anyone to until listings exist.
 */
export function CareersAreas() {
  const { heading, areas } = CAREERS_AREAS;

  return (
    <section
      id={CAREERS_ANCHORS.team}
      aria-labelledby="careers-areas-heading"
      className="bg-canvas scroll-mt-40 pb-[clamp(4rem,2.5rem+5vw,7.5rem)]"
    >
      <div className="overflow-x-clip">
        <h2
          id="careers-areas-heading"
          className="font-display pl-[var(--page-gutter)] text-[16vw] leading-[0.98] font-normal tracking-[-0.02em] whitespace-nowrap text-transparent [-webkit-text-stroke:1px_var(--color-ember)] sm:text-[min(10.4vw,9.4rem)] sm:[-webkit-text-stroke:1.5px_var(--color-ember)] 2xl:pl-[max(var(--page-gutter),calc((100vw-var(--page-max-width))/2+var(--page-gutter)))]"
        >
          {heading[0]} <br className="sm:hidden" />
          {heading[1]}
        </h2>
      </div>

      <ul className="container-page mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8">
        {areas.map((area, index) => (
          <li key={area.title}>
            <Reveal delay={index * 0.08}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-bar)]">
                <Image
                  src={area.image.src}
                  alt={area.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-h3-lg text-ink mt-6 font-light">{area.title}</h3>
              <p className="text-body-lg text-ink mt-4 max-w-[34ch]">{area.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
