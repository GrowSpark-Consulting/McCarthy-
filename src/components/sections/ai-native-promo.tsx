import { ArrowLink } from '@/components/shared/arrow-link';
import { VideoLoop } from '@/components/shared/video-loop';
import { AI_NATIVE_PROMO } from '@/content/homepage';

/**
 * Section 12 — the AI-native promo split.
 *
 * Measured from the reference: a 437x247 (16:9) media slot on the left at x=32,
 * a 34px/40px ember heading on the right, body copy capped around 820px, and an
 * arrow link. Sits on the pale `#f9f9f9` band.
 *
 * The slot holds a silent 16:9 loop rather than a still, matching the crop the
 * reference uses for its photograph.
 */
export function AiNativePromo() {
  return (
    <section aria-labelledby="ai-native-heading" className="bg-surface-mist py-[var(--section-py)]">
      <div className="container-page grid items-center gap-8 lg:grid-cols-[minmax(0,437fr)_minmax(0,875fr)] lg:gap-16">
        <div className="bg-surface-cool relative aspect-[16/9] w-full overflow-hidden">
          <VideoLoop media={AI_NATIVE_PROMO.media} />
        </div>

        <div className="flex flex-col">
          <h2 id="ai-native-heading" className="text-h3-lg text-ember-text">
            {AI_NATIVE_PROMO.heading}
          </h2>

          <p className="text-body text-ink mt-4 max-w-[62ch]">{AI_NATIVE_PROMO.body}</p>

          <div className="mt-7">
            <ArrowLink href={AI_NATIVE_PROMO.link.href}>{AI_NATIVE_PROMO.link.label}</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
