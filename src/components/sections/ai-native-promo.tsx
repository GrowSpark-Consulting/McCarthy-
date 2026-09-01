import { ArrowLink } from '@/components/shared/arrow-link';
import { PlaceholderFrame } from '@/components/shared/placeholder-frame';
import { AI_NATIVE_PROMO } from '@/content/homepage';

/**
 * Section 12 — the AI-native promo split.
 *
 * Measured from the reference: a 437x247 (16:9) media slot on the left at x=32,
 * a 34px/40px ember heading on the right, body copy capped around 820px, and an
 * arrow link. Sits on the pale `#f9f9f9` band.
 *
 * The reference uses a photograph of colleagues here. McCarthy has no verified
 * team photography, so the slot is built at the same crop and marked as a
 * placeholder.
 */
export function AiNativePromo() {
  return (
    <section aria-labelledby="ai-native-heading" className="bg-surface-mist py-[var(--section-py)]">
      <div className="container-page grid items-center gap-8 lg:grid-cols-[minmax(0,437fr)_minmax(0,875fr)] lg:gap-16">
        <PlaceholderFrame label="Team photography" className="aspect-[16/9]" />

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
