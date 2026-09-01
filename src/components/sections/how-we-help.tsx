import { ArrowLink } from '@/components/shared/arrow-link';
import { TypeBreak } from '@/components/shared/type-break';
import { CAPABILITIES, HOW_WE_HELP } from '@/content/homepage';

/**
 * Sections 10–11 — the capability grid.
 *
 * Measured from the reference: an orange 40px/46px light heading, a full-width
 * hairline beneath it, then four 335px columns with 20px gaps, each opening
 * with a ~110px outlined numeral, a 32px/40px light title, body copy and an
 * arrow link. Stacks to one column below `md`.
 */
export function HowWeHelp() {
  return (
    <>
      <TypeBreak tone="canvas" className="bg-surface-warm">
        how mccarthy helps
      </TypeBreak>

      <section id="how-we-help" className="bg-canvas scroll-mt-32 pt-14 lg:pt-20">
        <div className="container-page">
          <p className="text-eyebrow text-ink-muted uppercase">{HOW_WE_HELP.eyebrow}</p>

          <h2 className="text-h2-soft text-ember-text mt-5 max-w-[24ch]">
            {HOW_WE_HELP.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="border-hairline mt-12 border-t lg:mt-16">
          <div className="container-page grid gap-12 pt-12 pb-[var(--section-py)] md:grid-cols-2 md:gap-x-5 md:gap-y-16 lg:grid-cols-4 lg:pt-16">
            {CAPABILITIES.map((capability) => (
              <article key={capability.index} className="flex flex-col">
                <p
                  aria-hidden="true"
                  className="numeral-outline font-display text-[clamp(4.5rem,3rem+4vw,7rem)]"
                >
                  {capability.index}
                </p>

                <h3 className="text-h3 text-ink mt-8 lg:mt-12">{capability.title}</h3>

                <p className="text-body text-ink mt-6 flex-1">{capability.body}</p>

                <div className="mt-8">
                  <ArrowLink href={capability.link.href}>{capability.link.label}</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
