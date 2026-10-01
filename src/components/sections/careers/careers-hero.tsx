import Image from 'next/image';
import Link from 'next/link';

import { ButtonLink } from '@/components/ui/button';
import { CAREERS_BREADCRUMB, CAREERS_HERO } from '@/content/careers';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';

/**
 * Careers masthead — the reference's split composition.
 *
 * A light band: breadcrumb under the floating header, then the eyebrow, an
 * ember headline and two compact pill buttons on the left, and a photo cut to
 * a parallelogram on the right. The photo bleeds to the viewport's right
 * edge and its slanted left edge cuts back into the white, so the two halves
 * interlock rather than sitting side by side.
 *
 * Below `lg` the photo drops under the copy, full-bleed, and keeps a single
 * slanted edge — enough of the same gesture without losing half a phone-width
 * photo to the clip.
 */
export function CareersHero() {
  const { eyebrow, heading, primary, secondary, image } = CAREERS_HERO;

  return (
    <section
      aria-labelledby="careers-hero-heading"
      className="bg-canvas relative isolate overflow-hidden pt-[calc(var(--header-band)+1rem)]"
    >
      <div className="container-page">
        <nav aria-label="Breadcrumb">
          <ol className="text-legal text-ink-muted flex flex-wrap items-center gap-1.5">
            {CAREERS_BREADCRUMB.map((step, index) => (
              <li key={step.label} className="flex items-center gap-1.5">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {step.href ? (
                  <Link
                    href={step.href}
                    prefetch={PREFETCH_SITE_ROUTES}
                    className="text-ink-strong hover:text-ember-text font-medium transition-colors duration-[var(--duration-base)]"
                  >
                    {step.label}
                  </Link>
                ) : (
                  <span aria-current="page">{step.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="relative lg:min-h-[min(40rem,calc(100svh-var(--header-band)-4rem))]">
        <div className="container-page relative z-10 pt-14 pb-12 sm:pt-20 lg:flex lg:min-h-[inherit] lg:items-center lg:pt-0 lg:pb-16">
          <div className="lg:max-w-[44%]">
            <p className="eyebrow-rule text-eyebrow text-ink uppercase">{eyebrow}</p>

            <h1
              id="careers-hero-heading"
              className="font-display text-ember-text mt-6 max-w-[13ch] text-[clamp(2.75rem,1.9rem+3vw,4.5rem)] leading-[1.06] font-normal tracking-[-0.015em] text-balance lg:mt-8"
            >
              {heading}
            </h1>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-12">
              <ButtonLink href={primary.href} variant="outline" shape="pill" size="compact" className="px-5">
                {primary.label}
              </ButtonLink>
              <ButtonLink href={secondary.href} variant="outline" shape="pill" size="compact" className="px-5">
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)] sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[62%] lg:[clip-path:polygon(40%_0,100%_0,60%_100%,0_100%)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover object-right lg:object-[58%_center]"
          />
        </div>
      </div>
    </section>
  );
}
