import { WORKFLOW_PILLARS } from '@/content/business-workflow';

/**
 * The reference's three value-proposition blocks.
 *
 * The copy deck supplies no words for this band, so the layout ships finished
 * and the copy stays bracketed. Composed as three editorial columns under a
 * hairline that warms to ember on hover — the site's own card language — so an
 * unwritten section still reads as deliberate rather than as an empty form.
 */
export function WorkflowPillars() {
  return (
    <section aria-label="Value propositions" className="bg-surface-warm py-[var(--section-py)]">
      <div className="container-page grid gap-10 md:grid-cols-3 md:gap-8">
        {WORKFLOW_PILLARS.map((pillar, index) => (
          <article key={pillar.heading} className="group/pillar flex flex-col">
            <span
              aria-hidden="true"
              className="bg-hairline group-hover/pillar:bg-ember h-px w-full transition-colors duration-[var(--duration-base)] ease-[var(--ease-out-quint)]"
            />

            <p className="text-eyebrow text-ink-muted mt-5 uppercase">
              {String(index + 1).padStart(2, '0')}
            </p>

            <h3 className="text-h3 text-ink-muted mt-6 max-w-[18ch]">{pillar.heading}</h3>

            {pillar.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body text-ink-muted mt-4">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
