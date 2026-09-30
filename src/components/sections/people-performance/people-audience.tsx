import { Reveal } from '@/components/shared/reveal';
import { PEOPLE_AUDIENCE } from '@/content/people-performance';

/**
 * Who we help.
 *
 * The jump navigation promises this band, and the copy deck has no words for
 * it, so the layout ships finished and every string stays bracketed — the same
 * decision the sibling Business Workflow page makes for its unwritten
 * value-proposition band. Three columns under hairlines that warm to ember on
 * hover, so an unwritten section still reads as deliberate rather than as an
 * empty form.
 */
export function PeopleAudience() {
  return (
    <section
      id="who-we-help"
      aria-labelledby="people-audience-heading"
      className="bg-canvas scroll-mt-32 py-[clamp(4rem,3rem+5vw,7rem)]"
    >
      <div className="container-page">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <h2
            id="people-audience-heading"
            className="text-h2 text-ink max-w-[14ch] lg:col-span-6 xl:col-span-5"
          >
            {PEOPLE_AUDIENCE.heading}
          </h2>

          <p className="text-body-lg text-ink-muted max-w-[52ch] lg:col-span-6 lg:col-start-7 lg:pt-3">
            {PEOPLE_AUDIENCE.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {PEOPLE_AUDIENCE.blocks.map((block, index) => (
            <Reveal key={block.heading} delay={index * 0.06}>
              <article className="group/audience flex h-full flex-col">
                <span
                  aria-hidden="true"
                  className="bg-hairline group-hover/audience:bg-ember h-px w-full transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]"
                />

                <h3 className="text-h3 text-ink mt-6 max-w-[16ch]">{block.heading}</h3>

                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body text-ink-muted mt-5">
                    {paragraph}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
