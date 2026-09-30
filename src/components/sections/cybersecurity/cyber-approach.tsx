import { CYBER_APPROACH } from '@/content/cybersecurity';

/**
 * How McCarthy Helps.
 *
 * The deck gives this page one two-column block and no separate copy for a
 * "how we help" band, so the two are the same section: the deck's pair of
 * capabilities, presented at the weight the reference gives its own — a small
 * ember index, a large heading and the copy at a reading measure, divided by
 * hairlines rather than boxed into cards.
 *
 * The heading is the deck's own nav label. No heading is invented for it.
 */
export function CyberApproach() {
  return (
    <section
      id="how-mccarthy-helps"
      aria-labelledby="how-mccarthy-helps-heading"
      className="bg-canvas scroll-mt-32 pt-14 lg:pt-20"
    >
      <div className="container-page">
        <h2 id="how-mccarthy-helps-heading" className="text-h2-soft text-ember-text max-w-[20ch]">
          {CYBER_APPROACH.heading}
        </h2>
      </div>

      <div className="border-hairline mt-12 border-t lg:mt-16">
        <div className="container-page grid gap-12 pt-12 pb-[var(--section-py)] lg:grid-cols-2 lg:gap-16 lg:pt-16">
          {CYBER_APPROACH.blocks.map((block, index) => (
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
