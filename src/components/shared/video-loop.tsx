'use client';

import { useState } from 'react';

import Image from 'next/image';

import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { cn } from '@/lib/utils';
import type { HeroMedia } from '@/types/hero';

interface VideoLoopProps {
  readonly media: HeroMedia;
  /** Sizing utilities for the video element. */
  readonly className?: string;
}

/**
 * A silent, looping background video.
 *
 * Decisions that matter here:
 * - The poster frame carries the first paint and the video only fades in once
 *   the browser reports `canplay`, so a slot never shows a black or
 *   half-decoded frame — and the paint cost is a small JPEG, not megabytes of
 *   video.
 * - `preload="metadata"` keeps the payload off the critical path.
 * - Muted + `playsInline` + `autoPlay` is the exact combination mobile browsers
 *   require before they will allow inline autoplay at all.
 * - Under `prefers-reduced-motion` it never plays: the poster is rendered
 *   through `next/image` instead, which is the accessible equivalent.
 *
 * The footage is decorative and silent, so it is hidden from assistive
 * technology and cannot take focus.
 */
export function VideoLoop({ media, className }: VideoLoopProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isReady, setIsReady] = useState(false);

  if (prefersReducedMotion) {
    return media.posterSrc ? (
      <Image
        src={media.posterSrc}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className={cn('object-cover', className)}
      />
    ) : null;
  }

  return (
    <video
      aria-hidden="true"
      tabIndex={-1}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      poster={media.posterSrc}
      onCanPlay={() => setIsReady(true)}
      className={cn(
        'size-full object-cover',
        'transition-opacity duration-[var(--duration-slow)] ease-[var(--ease-out-expo)]',
        isReady ? 'opacity-100' : 'opacity-0',
        className,
      )}
    >
      <source src={media.videoSrc} type={media.videoType ?? 'video/mp4'} />
    </video>
  );
}
