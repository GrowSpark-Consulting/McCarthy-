import { ArrowUpRight } from 'lucide-react';

import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';
import { ButtonLink } from '@/components/ui/button';
import { CAREERS_ANCHORS, CAREERS_OPENINGS, CAREERS_OPPORTUNITIES } from '@/content/careers';

/**
 * Explore opportunities — a heading, one sentence and one action.
 *
 * Intentionally not a job board: no search, filters or listings yet. The
 * button points wherever `CAREERS_OPENINGS` does, opening a new tab when that
 * destination is off-site. Set on the warm band so it reads as its own beat
 * between the photo section above and the image-backed close below.
 */
export function CareersOpportunities() {
  const { eyebrow, heading, body } = CAREERS_OPPORTUNITIES;
  const isExternal = CAREERS_OPENINGS.href.startsWith('http');

  return (
    <section
      id={CAREERS_ANCHORS.opportunities}
      aria-labelledby="careers-opportunities-heading"
      className="bg-surface-warm scroll-mt-32 py-[clamp(4rem,2.5rem+5vw,7rem)]"
    >
      <Reveal className="container-page flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id="careers-opportunities-heading" className="text-h2 text-ink mt-6">
            {heading}
          </h2>
          <p className="text-body-lg text-ink mt-6 max-w-[44ch]">{body}</p>
        </div>

        <div className="shrink-0">
          <ButtonLink
            href={CAREERS_OPENINGS.href}
            variant="ember"
            shape="control"
            size="control"
            className="w-full sm:w-auto"
            {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          >
            {CAREERS_OPENINGS.label}
            {isExternal ? <span className="sr-only"> (opens in a new tab)</span> : null}
            <ArrowUpRight
              aria-hidden="true"
              strokeWidth={1.75}
              className="size-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
            />
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
