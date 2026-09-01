import { ArrowLink } from '@/components/shared/arrow-link';
import { Eyebrow } from '@/components/shared/eyebrow';
import { HeroWavefield } from '@/components/sections/hero/hero-wavefield';
import { TypeBreak } from '@/components/shared/type-break';
import { ButtonLink } from '@/components/ui/button';
import { AI_LAB } from '@/content/homepage';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';

/**
 * Sections 7–9 — the AI Lab break, intro and feature.
 *
 * The reference fills this slot with a named client case study over a
 * full-bleed 21:9 photograph. McCarthy has no verified client engagement yet,
 * so the same composition carries the AI Lab demo — real, and something a
 * visitor can actually go and use — over the site's own wave artwork rather
 * than stock photography.
 */
export function AiLab() {
  return (
    <>
      <TypeBreak tone="warm" className="bg-canvas">
        the ai lab
      </TypeBreak>

      <section id="ai-lab" className="bg-surface-warm scroll-mt-32 pt-12 pb-0 lg:pt-16">
        <div className="container-page">
          <Eyebrow>{AI_LAB.eyebrow}</Eyebrow>
          <h2 className="text-h3-xl mt-6 max-w-[20ch]">{AI_LAB.heading}</h2>
          <p className="text-body text-ink mt-4 max-w-[52ch]">{AI_LAB.body}</p>
        </div>

        {/* Full-bleed feature, 21:9 at desktop as in the reference. */}
        <div className="bg-abyss relative mt-10 aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9] lg:mt-14 lg:aspect-[21/9]">
          <div aria-hidden="true" className="absolute inset-0" data-accent="verde">
            <div className="absolute inset-0 bg-[linear-gradient(150deg,var(--color-abyss-deep)_10%,var(--hero-accent-deep)_72%,var(--color-abyss-deep)_100%)]" />
            <HeroWavefield className="opacity-80 mix-blend-screen" />
            <div className="from-abyss-deep via-abyss-deep/45 absolute inset-0 bg-gradient-to-r to-transparent" />
          </div>

          <div className="relative flex h-full items-center">
            <div className="container-page">
              <Eyebrow tone="inverse">{AI_LAB.feature.eyebrow}</Eyebrow>

              <h3 className="text-h3-xl text-ink-inverse mt-6 max-w-[32rem]">
                {AI_LAB.feature.heading}
              </h3>

              <div className="mt-8 flex flex-wrap gap-4">
                {AI_LAB.feature.actions.map((action, index) => (
                  <ButtonLink
                    key={action.href}
                    href={action.href}
                    prefetch={PREFETCH_SITE_ROUTES}
                    variant="outline-inverse"
                    shape="control"
                    size="control"
                    className={index === 0 ? 'font-semibold' : 'font-semibold'}
                  >
                    {action.label}
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container-page pt-8 pb-[var(--section-py)]">
          <ArrowLink href="/ai-lab">See all eight AI Lab systems</ArrowLink>
        </div>
      </section>
    </>
  );
}
