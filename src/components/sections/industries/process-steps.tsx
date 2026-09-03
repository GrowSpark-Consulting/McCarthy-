import { Eyebrow } from '@/components/shared/eyebrow';
import type { ProcessSection } from '@/types/industry';

interface ProcessStepsProps {
  readonly id?: string;
  readonly content: ProcessSection;
}

/**
 * "How we work" — the four-step deployment path (audit → pilot → build →
 * retainer), as a divided vertical list with a large step numeral. Same
 * numbered-block device as `WorkflowApproach`, in a single column since this
 * content is a sequence rather than a 2-up split.
 */
export function ProcessSteps({ id, content }: ProcessStepsProps) {
  return (
    <section id={id} className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="text-h2-soft text-ink mt-5 max-w-[38ch]">{content.heading}</h2>
        <p className="text-body-lg text-ink-muted mt-5 max-w-[70ch]">{content.body}</p>

        <div className="border-hairline mt-12 border-t lg:mt-16">
          {content.steps.map((step) => (
            <div
              key={step.step}
              className="border-hairline grid gap-4 border-b py-9 lg:grid-cols-[minmax(0,120fr)_minmax(0,1220fr)] lg:gap-10 lg:py-10"
            >
              <p className="text-h3 text-ember-text font-light italic">{step.step}</p>

              <div>
                <h3 className="text-h4 text-ink">{step.title}</h3>
                <p className="text-body text-ink-muted mt-3 max-w-[68ch]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
