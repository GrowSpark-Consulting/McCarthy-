import { cn } from '@/lib/utils';

interface TypeBreakProps {
  /** The phrase, rendered at display scale. */
  readonly children: string;
  /**
   * `ghost` is the 144px/700 lowercase break that reads as a watermark of the
   * neighbouring band; `accent` is the reference's lighter, centred ember
   * break that closes the page.
   */
  readonly variant?: 'ghost' | 'accent';
  /**
   * The break reads as a ghost of the band it sits against — the reference
   * colours the type the same value as the neighbouring surface.
   */
  readonly tone?: 'warm' | 'canvas' | 'ember';
  readonly className?: string;
}

const TONE_CLASS: Record<NonNullable<TypeBreakProps['tone']>, string> = {
  warm: 'text-surface-warm',
  canvas: 'text-canvas',
  ember: 'text-ember',
};

/**
 * Oversized lowercase type used between major sections (144px/108px, weight
 * 700 at desktop in the reference). It is decorative punctuation rather than a
 * heading, so it is hidden from assistive technology — the sections it divides
 * carry their own headings.
 */
export function TypeBreak({
  children,
  tone = 'warm',
  variant = 'ghost',
  className,
}: TypeBreakProps) {
  return (
    <div aria-hidden="true" className={cn('overflow-x-clip', className)}>
      <p
        className={cn(
          'type-break',
          variant === 'ghost'
            ? 'text-break'
            : 'text-center text-[clamp(2.25rem,0.6rem+6.6vw,6rem)] leading-[1.05] font-light normal-case',
          TONE_CLASS[tone],
        )}
      >
        {children}
      </p>
    </div>
  );
}
