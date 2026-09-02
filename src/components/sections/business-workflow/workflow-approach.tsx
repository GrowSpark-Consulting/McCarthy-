import { WORKFLOW_APPROACH } from '@/content/business-workflow';

/**
 * How McCarthy Helps — the reference's "workflow redesign to accountable
 * operations" band.
 *
 * Two substantial blocks separated by hairlines rather than boxed into cards,
 * each opening with a small ember index and holding its copy at a reading
 * measure. Whitespace and rules do the dividing — the editorial treatment the
 * reference uses.
 *
 * No decorative type break opens the band: every visible word on this page
 * comes from the copy deck, and a watermark would be one that does not.
 *
 * The heading is the copy deck's own nav label — the deck gives the band no
 * heading of its own, and one is not invented here.
 */
export function WorkflowApproach() {
  return (
    <section
      id="how-mccarthy-helps"
      aria-labelledby="how-mccarthy-helps-heading"
      className="bg-canvas scroll-mt-32 pt-14 lg:pt-20"
    >
      <div className="container-page">
        <h2 id="how-mccarthy-helps-heading" className="text-h2-soft text-ember-text max-w-[20ch]">
          {WORKFLOW_APPROACH.heading}
        </h2>
      </div>

      <div className="border-hairline mt-12 border-t lg:mt-16">
        <div className="container-page grid gap-12 pt-12 pb-[var(--section-py)] lg:grid-cols-2 lg:gap-16 lg:pt-16">
          {WORKFLOW_APPROACH.blocks.map((block, index) => (
            <article
              key={block.heading}
              className="border-hairline flex flex-col border-t pt-8 lg:pt-10"
            >
              <p className="text-eyebrow text-ember-text uppercase">
                {String(index + 1).padStart(2, '0')}
              </p>

              <h3 className="text-h3-lg text-ink mt-6 max-w-[18ch]">{block.heading}</h3>

              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-ink mt-6 max-w-[60ch]">
                  {paragraph}
                </p>
              ))}

              {block.tag ? (
                <p className="border-hairline text-legal text-ink-muted mt-8 w-fit border px-3 py-1.5">
                  {block.tag}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
