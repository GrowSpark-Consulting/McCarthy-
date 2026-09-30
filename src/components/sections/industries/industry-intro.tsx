import type { IndustryIntro as IndustryIntroContent } from '@/types/industry';

interface IndustryIntroProps {
  readonly id?: string;
  readonly content: IndustryIntroContent;
}

/**
 * The overview band directly under the hero: a narrow label column beside a
 * short stack of lede paragraphs. Mirrors the label + paragraphs rhythm the
 * reference brief itself uses for this slot, translated into this design's
 * own type scale.
 */
export function IndustryIntro({ id, content }: IndustryIntroProps) {
  return (
    <section id={id} className="bg-canvas scroll-mt-32 py-14 lg:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,180fr)_minmax(0,1160fr)] lg:gap-16">
        <p className="text-eyebrow text-ink-muted uppercase">{content.label}</p>

        <div className="flex flex-col gap-6">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-ink-muted max-w-[70ch]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
