import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { Reveal } from '@/components/shared/reveal';
import { ButtonLink } from '@/components/ui/button';
import { CAREERS_JOIN } from '@/content/careers';

/**
 * Join our growing team — the page's closing band, directly above the footer.
 *
 * A team photo under the abyss scrim the dark heroes use, with the dark
 * connect band's verde pill as the action, so the close reads as part of the
 * site rather than a one-off banner. The photo is decorative; the heading
 * carries the meaning.
 */
export function CareersJoin() {
  const { heading, body, cta, image } = CAREERS_JOIN;
  const isExternal = cta.href.startsWith('http');

  return (
    <section
      aria-labelledby="careers-join-heading"
      className="bg-abyss relative isolate overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <Image src={image.src} alt="" fill sizes="100vw" className="object-cover object-[60%_center]" />
        <div className="bg-abyss-deep/70 absolute inset-0" />
        <div className="from-abyss-deep/70 absolute inset-0 bg-gradient-to-r to-transparent" />
      </div>

      <Reveal className="container-page relative flex min-h-[26rem] flex-col justify-center py-[clamp(4.5rem,3rem+6vw,8.5rem)] lg:min-h-[30rem]">
        <h2
          id="careers-join-heading"
          className="font-display text-ink-inverse max-w-[16ch] text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] leading-[1.06] font-light tracking-[-0.01em] text-balance"
        >
          {heading}
        </h2>

        <p className="text-body-lg text-ink-inverse/85 mt-6 max-w-[44ch]">{body}</p>

        <div className="mt-10">
          <ButtonLink
            href={cta.href}
            variant="verde"
            shape="pill"
            size="nav"
            {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          >
            {cta.label}
            {isExternal ? <span className="sr-only"> (opens in a new tab)</span> : null}
            <span
              aria-hidden="true"
              className="bg-verde-ink/12 flex size-7 items-center justify-center rounded-full transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/button:translate-x-0.5"
            >
              <ArrowRight strokeWidth={1.75} className="size-4" />
            </span>
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
