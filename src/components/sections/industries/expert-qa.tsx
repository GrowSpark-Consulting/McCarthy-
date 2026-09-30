import { UserRound } from 'lucide-react';

import { AbstractTile } from '@/components/shared/abstract-tile';
import { Eyebrow } from '@/components/shared/eyebrow';
import type { ExpertQaSection } from '@/types/industry';

interface ExpertQaProps {
  readonly id?: string;
  readonly content: ExpertQaSection;
}

/**
 * "Our experts, your challenges" — a portrait card beside a running list of
 * question/answer pairs. Distinct from `ExpertVoice` (a single pull-quote):
 * the source content here is a short interview, not one quote, so it needs
 * its own list layout rather than reusing that component with one entry.
 */
export function ExpertQa({ id, content }: ExpertQaProps) {
  return (
    <section id={id} className="bg-canvas scroll-mt-32 py-[var(--section-py)]">
      <div className="container-page">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="text-h2-soft text-ink mt-5 max-w-[32ch]">{content.heading}</h2>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,280fr)_minmax(0,1060fr)] lg:gap-14">
          <div className="bg-surface-warm border-hairline border p-6">
            <AbstractTile icon={UserRound} tone="verde" className="aspect-[4/5] rounded-[var(--radius-panel)]" />
            <p className="text-card text-ink mt-5">[Name]</p>
            <p className="text-body text-ink-muted mt-1">
              {content.expertTitle}
              <br />
              McCarthy
            </p>
          </div>

          <div className="flex flex-col gap-9">
            {content.items.map((item) => (
              <div key={item.question} className="border-hairline border-t pt-7 first:border-t-0 first:pt-0">
                <p className="text-h4 text-ink">{item.question}</p>
                <p className="text-body-lg text-ink-muted mt-3 max-w-[64ch]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
