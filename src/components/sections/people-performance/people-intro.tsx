import { Reveal } from '@/components/shared/reveal';
import { PEOPLE_INTRO } from '@/content/people-performance';

/**
 * What is it? — the editorial intro, and the first jump-navigation target.
 *
 * The reference gives this block the page's most air and its clearest
 * asymmetry: a large heading held to a short measure on the left, body copy
 * set lower and to the right so the eye steps down into it. The offset is what
 * makes it read as editorial rather than as a two-column layout.
 *
 * Two type sizes inside the right column, not one: the deck's opening
 * statement is the argument the whole page answers, so it is set large and
 * light, and the supporting paragraph steps down beneath it.
 */
export function PeopleIntro() {
  return (
    <section
      id="what-is-it"
      aria-labelledby="people-intro-heading"
      className="bg-canvas scroll-mt-32 py-[clamp(4.5rem,3rem+7vw,9rem)]"
    >
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6 xl:col-span-5">
          <h2 id="people-intro-heading" className="text-h2 text-ink max-w-[18ch]">
            {PEOPLE_INTRO.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7 lg:pt-3">
          <p className="text-h3 text-ink max-w-[34ch]">{PEOPLE_INTRO.lead}</p>

          <div className="mt-8 flex flex-col gap-7">
            {PEOPLE_INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-ink-muted max-w-[58ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
