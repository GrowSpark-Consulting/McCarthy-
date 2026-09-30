import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { ArrowLink } from '@/components/shared/arrow-link';
import { ButtonLink } from '@/components/ui/button';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import type { IndustryHero as IndustryHeroContent } from '@/types/industry';

interface IndustryHeroProps {
  readonly id?: string;
  readonly content: IndustryHeroContent;
  /** The background art is decorative, so no alt text is needed. */
  readonly imageSrc: string;
}

/**
 * The dark industry-page hero: eyebrow, headline, body, a primary/secondary
 * CTA pair, and a row of stat tiles pinned to the bottom of the dark band.
 *
 * Modeled on `ServicesHero` (same overlay treatment over a static image
 * rather than a looping video, for the same first-paint reliability reason)
 * but swaps that component's featured-link row for the stat/CTA pairing the
 * industry pages actually use.
 */
export function IndustryHero({ id, content, imageSrc }: IndustryHeroProps) {
  const { eyebrow, heading, body, primaryCta, secondaryLabel, secondaryHref, stats } = content;

  return (
    <section id={id} className="bg-abyss relative isolate scroll-mt-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <Image src={imageSrc} alt="" fill priority sizes="100vw" className="object-cover object-left-bottom" />
        <div className="from-abyss-deep/70 via-abyss-deep/15 absolute inset-0 bg-gradient-to-r to-transparent" />
        <div className="from-abyss-deep/55 absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent" />
        <div className="from-abyss-deep/85 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />
      </div>

      <div className="container-page relative flex min-h-[26rem] flex-col justify-center py-12 sm:min-h-[30rem] lg:min-h-[32rem] lg:py-16">
        <p className="eyebrow-rule text-eyebrow text-ink-inverse uppercase">{eyebrow}</p>

        <h1 className="text-hero text-ink-inverse mt-6 max-w-[20ch]">{heading}</h1>

        <p className="text-body-lg text-ink-inverse/85 mt-6 max-w-[52ch]">{body}</p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <ButtonLink
            href={primaryCta.href}
            prefetch={PREFETCH_SITE_ROUTES}
            variant="verde"
            shape="pill"
            size="nav"
          >
            {primaryCta.label}
            <span
              aria-hidden="true"
              className="bg-verde-ink/12 flex size-7 items-center justify-center rounded-full transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/button:translate-x-0.5"
            >
              <ArrowRight strokeWidth={1.75} className="size-4" />
            </span>
          </ButtonLink>

          <ArrowLink href={secondaryHref} tone="inverse" className="text-body-lg">
            {secondaryLabel}
          </ArrowLink>
        </div>
      </div>

      {stats.length > 0 ? (
        <div className="container-page relative pb-10 lg:pb-14">
          <div className="border-ink-inverse/20 grid gap-x-8 gap-y-8 border-t pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="text-h3-lg text-verde-bright">{stat.value}</span>
                <span className="text-legal text-ink-inverse/70 max-w-[22ch]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
