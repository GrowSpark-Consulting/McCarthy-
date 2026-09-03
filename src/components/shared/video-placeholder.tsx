import Image from 'next/image';
import { Play } from 'lucide-react';

import { cn } from '@/lib/utils';

interface VideoPlaceholderProps {
  readonly imageSrc: string;
  readonly caption: string;
  /** e.g. "0:00 / [runtime]" — kept as supplied, not a real duration. */
  readonly duration: string;
  readonly className?: string;
}

/**
 * A video slot with no real video behind it yet: a still frame, a play
 * affordance, and a duration readout — visually a media player, but not an
 * interactive control, since a button that plays nothing on click is worse
 * than an honestly-decorative preview. Swap for a real `<video>` once
 * footage exists; the layout won't need to change.
 */
export function VideoPlaceholder({ imageSrc, caption, duration, className }: VideoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Video placeholder: ${caption}`}
      className={cn('relative overflow-hidden rounded-[var(--radius-panel)]', className)}
    >
      <Image src={imageSrc} alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />

      <div aria-hidden="true" className="from-abyss-deep/70 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span className="bg-ink-inverse/90 flex size-16 items-center justify-center rounded-full shadow-lg lg:size-20">
          <Play aria-hidden="true" strokeWidth={1.5} className="text-ink-strong ml-1 size-6 fill-current lg:size-7" />
        </span>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5 lg:p-6">
        <p className="text-body text-ink-inverse">{caption}</p>
        <p className="text-legal text-ink-inverse/80 shrink-0">{duration}</p>
      </div>
    </div>
  );
}
