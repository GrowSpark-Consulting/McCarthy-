import { ArrowLink } from '@/components/shared/arrow-link';
import { AI_DATA_STRATEGY } from '@/content/ai-and-data';

/** "AI strategy" — the community callout beside the self-assessment CTA, on a dark band. */
export function AiStrategy() {
  return (
    <section aria-label="AI strategy" className="bg-abyss py-[var(--section-py)]">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="border-ink-inverse/20 flex flex-col gap-5 border-t pt-8">
          <p className="text-body-lg text-ink-inverse max-w-[36ch]">{AI_DATA_STRATEGY.community.body}</p>
          <ArrowLink href={AI_DATA_STRATEGY.community.link.href} tone="inverse">
            {AI_DATA_STRATEGY.community.link.label}
          </ArrowLink>
        </div>

        <div className="border-ink-inverse/20 flex flex-col gap-5 border-t pt-8">
          <h3 className="text-h3 text-ink-inverse max-w-[24ch]">{AI_DATA_STRATEGY.assessment.heading}</h3>
          <p className="text-body-lg text-ink-inverse/85 max-w-[40ch]">{AI_DATA_STRATEGY.assessment.body}</p>
          <ArrowLink href={AI_DATA_STRATEGY.assessment.link.href} tone="inverse">
            {AI_DATA_STRATEGY.assessment.link.label}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
