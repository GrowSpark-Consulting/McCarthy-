import { ArrowLink } from '@/components/shared/arrow-link';
import { RECOGNITION_SPLIT } from '@/content/homepage';

/**
 * Section 14 — the two-panel split.
 *
 * The reference pairs a pale panel carrying an ember statement with a dark
 * `#515151` panel carrying an analyst award. McCarthy has no analyst
 * recognition, so the dark panel states something verifiable instead: the
 * methodology is published.
 *
 * Measured: two equal panels, ~340px tall at 1440, inset 8px from the edges.
 */
export function RecognitionSplit() {
  return (
    <section aria-label="How McCarthy works" className="bg-canvas pb-[var(--section-py)]">
      <div className="grid px-2 lg:grid-cols-2">
        <div className="bg-surface-warm flex items-center p-8 lg:min-h-[21.25rem] lg:p-14">
          <p className="text-h2-soft text-ember-text max-w-[18ch]">{RECOGNITION_SPLIT.accent}</p>
        </div>

        <div className="bg-surface-slate flex flex-col justify-center gap-6 p-8 lg:min-h-[21.25rem] lg:p-14">
          <p className="text-card text-ink-inverse max-w-[26ch]">{RECOGNITION_SPLIT.dark.body}</p>

          <ArrowLink href={RECOGNITION_SPLIT.dark.link.href} tone="inverse">
            {RECOGNITION_SPLIT.dark.link.label}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
