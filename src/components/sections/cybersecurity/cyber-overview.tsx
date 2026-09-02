import { CYBER_OVERVIEW } from '@/content/cybersecurity';

/**
 * Overview — the editorial intro, and the first jump-navigation target.
 *
 * The deck opens this band with a single declarative line rather than a
 * descriptive heading, so it is set as a statement: uppercase, held to a short
 * measure on the left, with the paragraph stepped down and to the right. The
 * offset is what makes it read as editorial rather than as two columns.
 */
export function CyberOverview() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="bg-canvas scroll-mt-32 py-[clamp(4.5rem,3rem+7vw,9rem)]"
    >
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-8">
        <h2
          id="overview-heading"
          className="text-h3-lg text-ink max-w-[16ch] uppercase lg:col-span-5"
        >
          {CYBER_OVERVIEW.heading}
        </h2>

        <div className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7 lg:pt-2">
          {CYBER_OVERVIEW.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-ink-muted max-w-[58ch]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
