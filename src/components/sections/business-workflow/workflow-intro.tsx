import { WORKFLOW_INTRO } from '@/content/business-workflow';

/**
 * Overview — the editorial intro, and the first jump-navigation target.
 *
 * The reference gives this block the page's most air and its clearest
 * asymmetry: a large heading held to a short measure on the left, body copy
 * set lower and to the right so the eye steps down into it. The offset is what
 * makes it read as editorial rather than as a two-column layout.
 */
export function WorkflowIntro() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="bg-canvas scroll-mt-32 py-[clamp(4.5rem,3rem+7vw,9rem)]"
    >
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-8">
        <h2
          id="overview-heading"
          className="text-h2 text-ink max-w-[14ch] lg:col-span-6 xl:col-span-5"
        >
          {WORKFLOW_INTRO.heading}
        </h2>

        <div className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7 lg:pt-3">
          {WORKFLOW_INTRO.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-ink-muted max-w-[58ch]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
