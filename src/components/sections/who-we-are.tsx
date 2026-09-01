import { ArrowLink } from '@/components/shared/arrow-link';
import { Eyebrow } from '@/components/shared/eyebrow';
import { ButtonLink } from '@/components/ui/button';
import { WHO_WE_ARE } from '@/content/homepage';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';

/**
 * Section 5 — the who-we-are split.
 *
 * Measured from the reference: a ~445px copy column on the left and an ember
 * panel filling the rest (853x490 at 1440), with the brand line centred in it
 * and a 2px-bordered Watch button pinned to the panel's lower left.
 *
 * The film itself does not exist yet, so the button points at the page that
 * will host it rather than opening an empty player.
 */
export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[minmax(0,445fr)_minmax(0,853fr)] lg:gap-[6.5rem]">
        <div className="flex flex-col">
          <Eyebrow>{WHO_WE_ARE.eyebrow}</Eyebrow>

          <h2 className="text-card text-ink mt-6 max-w-[28rem]">{WHO_WE_ARE.heading}</h2>

          <p className="text-body text-ink mt-6 max-w-[28rem]">{WHO_WE_ARE.body}</p>

          <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3 lg:mt-16">
            {WHO_WE_ARE.links.map((link, index) => (
              <li key={link.href} className="flex items-center gap-4">
                {index > 0 ? (
                  <span aria-hidden="true" className="bg-hairline hidden h-4 w-px sm:block" />
                ) : null}
                <ArrowLink href={link.href} tone="ink" className="text-legal">
                  {link.label}
                </ArrowLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-ember relative flex min-h-[22rem] flex-col justify-between p-8 lg:min-h-[30.625rem] lg:p-10">
          <p className="text-ink-inverse flex flex-1 items-center justify-center text-center text-[clamp(2rem,1.2rem+2.6vw,3.25rem)] leading-[1.1] font-light">
            {WHO_WE_ARE.panel.wordmark}
            <span aria-hidden="true">.</span>
          </p>

          <ButtonLink
            href={WHO_WE_ARE.panel.action.href}
            prefetch={PREFETCH_SITE_ROUTES}
            variant="outline-inverse"
            shape="control"
            size="compact"
            className="w-fit border-2 font-semibold"
          >
            {WHO_WE_ARE.panel.action.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
