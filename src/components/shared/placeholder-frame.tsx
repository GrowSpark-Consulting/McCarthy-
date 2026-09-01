import { ImageIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface PlaceholderFrameProps {
  /** What belongs here once real photography exists. */
  readonly label: string;
  /**
   * Sizing utilities for this slot — pass the reference's crop, e.g.
   * `aspect-[16/9]` or `h-full`.
   */
  readonly className?: string;
  readonly tone?: 'light' | 'dark';
}

/**
 * A deliberately empty image slot.
 *
 * Everywhere the reference uses photography of people, McCarthy has no verified
 * asset — so the slot is built at the correct crop and rhythm and marked as a
 * placeholder rather than filled with stock or generated people. Dropping in a
 * real photograph later changes no layout.
 */
export function PlaceholderFrame({ label, className, tone = 'light' }: PlaceholderFrameProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={cn(
        'flex w-full flex-col items-center justify-center gap-3 border border-dashed',
        tone === 'dark'
          ? 'border-ink-inverse/25 bg-ink-inverse/5 text-ink-inverse/70'
          : 'border-ink/15 bg-surface-cool text-ink-muted',
        className,
      )}
    >
      <ImageIcon aria-hidden="true" strokeWidth={1.25} className="size-7 opacity-70" />
      <span className="text-eyebrow max-w-[24ch] px-4 text-center uppercase">{label}</span>
    </div>
  );
}
