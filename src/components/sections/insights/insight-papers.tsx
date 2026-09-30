import { ArrowLink } from '@/components/shared/arrow-link';
import { Eyebrow } from '@/components/shared/eyebrow';
import { INSIGHT_PAPERS } from '@/content/insights';

/**
 * The reference's second content type, rendered distinctly from the card
 * grid above it: a plain list rather than imagery, matching the same
 * left-heading / right-rows rhythm as the homepage FAQ.
 */
export function InsightPapers() {
  return (
    <section aria-labelledby="insight-papers-heading" className="bg-canvas py-[var(--section-py)]">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,460fr)_minmax(0,930fr)] lg:gap-8">
        <div>
          <Eyebrow>Guides &amp; frameworks</Eyebrow>
          <h2 id="insight-papers-heading" className="text-h3 text-ink mt-6 max-w-[20ch]">
            Frameworks our team uses in the field
          </h2>
        </div>

        <div className="border-hairline border-t">
          {INSIGHT_PAPERS.map((paper) => (
            <div
              key={paper.title}
              className="border-hairline flex flex-wrap items-center justify-between gap-4 border-b py-6"
            >
              <div>
                <p className="text-eyebrow text-ink-muted uppercase">{paper.type}</p>
                <h3 className="text-card text-ink mt-2">{paper.title}</h3>
              </div>

              <ArrowLink href={paper.href}>{paper.linkLabel}</ArrowLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
