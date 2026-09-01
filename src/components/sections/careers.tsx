import { BrandWordmark } from '@/components/shared/brand-wordmark';
import { PlaceholderFrame } from '@/components/shared/placeholder-frame';
import { TypeBreak } from '@/components/shared/type-break';
import { ButtonLink } from '@/components/ui/button';
import { CAREERS } from '@/content/homepage';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';

/**
 * Sections 19–20 — the careers composition.
 *
 * Three columns in the reference: a full-bleed portrait, an ember panel
 * carrying the wordmark, and a text column with two blocks separated by a
 * hairline. The reference's first block is an employer award; McCarthy has none,
 * so it states something true about joining a small team instead.
 */
export function Careers() {
  return (
    <>
      <TypeBreak tone="ember" variant="accent" className="bg-canvas">
        let&rsquo;s build what&rsquo;s next
      </TypeBreak>

      <section
        aria-labelledby="careers-heading"
        className="bg-canvas pt-12 pb-[var(--section-py)] lg:pt-16"
      >
        <h2 id="careers-heading" className="sr-only">
          Careers at McCarthy
        </h2>

        <div className="grid lg:grid-cols-[minmax(0,420fr)_minmax(0,420fr)_minmax(0,600fr)]">
          <PlaceholderFrame
            label="Team photography"
            className="aspect-[4/5] lg:aspect-auto lg:min-h-[40rem]"
          />

          <div className="bg-ember flex min-h-[18rem] items-center justify-center p-8 lg:min-h-[40rem]">
            <BrandWordmark size="lg" tone="light" withPeriod={false} />
          </div>

          <div className="flex flex-col justify-center gap-10 p-8 lg:p-12">
            {CAREERS.blocks.map((block, index) => (
              <div
                key={block.heading}
                className={
                  index > 0
                    ? 'border-hairline flex flex-col gap-5 border-t pt-10'
                    : 'flex flex-col gap-5'
                }
              >
                <h3 className="text-h3-xl text-ember-text max-w-[14ch]">{block.heading}</h3>

                <p className="text-body-lg text-ink max-w-[34ch]">{block.body}</p>

                <ButtonLink
                  href={block.link.href}
                  prefetch={PREFETCH_SITE_ROUTES}
                  variant="outline"
                  shape="control"
                  size="compact"
                  className="w-fit"
                >
                  {block.link.label}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
