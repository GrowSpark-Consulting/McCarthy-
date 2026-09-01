import { ArrowLink } from '@/components/shared/arrow-link';
import { PlaceholderFrame } from '@/components/shared/placeholder-frame';
import { TypeBreak } from '@/components/shared/type-break';
import { ButtonLink } from '@/components/ui/button';
import { EXPERTISE } from '@/content/homepage';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';

/**
 * Sections 15–17 — the expertise break, intro and feature.
 *
 * The reference's feature is a large portrait beside an attributed executive
 * quote. McCarthy has no verified spokesperson, so the same composition carries
 * an unattributed market observation in McCarthy's own voice — no invented
 * person, no invented title — and the portrait slot stays a marked placeholder.
 */
export function Expertise() {
  return (
    <>
      <TypeBreak tone="warm" className="bg-canvas">
        mccarthy expertise
      </TypeBreak>

      <section id="expertise" className="bg-surface-warm scroll-mt-32 pt-12 lg:pt-16">
        <div className="container-page">
          <h2 className="text-h3 text-ink max-w-[24ch]">{EXPERTISE.heading}</h2>
          <p className="text-body text-ink mt-6 max-w-[80ch]">{EXPERTISE.body}</p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {EXPERTISE.links.map((link) => (
              <ArrowLink key={link.href} href={link.href}>
                {link.label}
              </ArrowLink>
            ))}
          </div>
        </div>

        <div className="mt-12 grid lg:mt-16 lg:grid-cols-[minmax(0,877fr)_minmax(0,563fr)]">
          <PlaceholderFrame
            label="Feature photography"
            className="aspect-[16/10] lg:aspect-auto lg:min-h-[31.25rem]"
          />

          <div className="bg-surface-warm flex flex-col justify-center gap-6 p-8 lg:p-12">
            <h3 className="text-h3 text-ink max-w-[22ch]">{EXPERTISE.feature.heading}</h3>

            <p className="text-body text-ink max-w-[46ch]">{EXPERTISE.feature.body}</p>

            <ButtonLink
              href={EXPERTISE.feature.action.href}
              prefetch={PREFETCH_SITE_ROUTES}
              variant="outline"
              shape="control"
              size="control"
              className="w-fit"
            >
              {EXPERTISE.feature.action.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
