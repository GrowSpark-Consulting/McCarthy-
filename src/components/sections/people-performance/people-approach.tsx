import { Reveal } from '@/components/shared/reveal';
import { PEOPLE_APPROACH } from '@/content/people-performance';

/**
 * How does it work? — the five disciplines the intro paragraph names.
 *
 * Set as a numbered editorial index rather than a card grid: five items divide
 * badly into three or four columns, and rows separated by hairlines are the
 * site's own preference for separation over boxes. Each row warms its rule to
 * ember on hover, matching the card language used elsewhere.
 *
 * The deck supplies no descriptions, so those stay bracketed. The layout ships
 * finished around them.
 */
export function PeopleApproach() {
  return (
    <section
      id="how-does-it-work"
      aria-labelledby="people-approach-heading"
      className="bg-surface-warm scroll-mt-32 py-[clamp(4rem,3rem+5vw,7rem)]"
    >
      <div className="container-page">
        <Reveal>
          <h2 id="people-approach-heading" className="text-h2 text-ink max-w-[18ch]">
            {PEOPLE_APPROACH.heading}
          </h2>
        </Reveal>

        <ol className="border-hairline mt-12 border-b lg:mt-16">
          {PEOPLE_APPROACH.blocks.map((block, index) => (
            <li key={block.heading}>
              <Reveal
                delay={Math.min(index, 3) * 0.05}
                className="group/row border-hairline hover:border-ember grid gap-4 border-t py-8 transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)] lg:grid-cols-12 lg:gap-8 lg:py-10"
              >
                <div className="flex items-baseline gap-5 lg:col-span-6 xl:col-span-5">
                  <span aria-hidden="true" className="text-eyebrow text-ink-muted shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="text-h3 text-ink group-hover/row:text-ember-text max-w-[16ch] transition-colors duration-[var(--duration-base)]">
                    {block.heading}
                  </h3>
                </div>

                <div className="flex flex-col gap-4 pl-10 lg:col-span-6 lg:col-start-7 lg:pt-2 lg:pl-0">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-body-lg text-ink-muted max-w-[54ch]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
