'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useAnimationFrame, useMotionValue, type MotionValue } from 'framer-motion';

import { HERO_AUTOPLAY_DELAY_MS } from '@/lib/constants';
import { clamp } from '@/lib/utils';

export interface HeroCarouselApi {
  /** Ref callback for the Embla viewport element. */
  readonly carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  /** Index of the slide currently in view. */
  readonly selectedIndex: number;
  /** Whether autoplay is currently running. */
  readonly isPlaying: boolean;
  /** 0 → 1 progress towards the next automatic advance, as a MotionValue. */
  readonly progress: MotionValue<number>;
  readonly scrollTo: (index: number) => void;
  readonly scrollNext: () => void;
  readonly scrollPrev: () => void;
  readonly togglePlay: () => void;
}

/**
 * Wraps Embla + Autoplay into the exact surface the hero needs.
 *
 * Design decisions worth knowing:
 * - Autoplay is the single source of truth for timing; the progress indicator
 *   is derived from `timeUntilNext()` rather than a second, drifting timer.
 * - Progress is published as a Framer `MotionValue`, so the 60 fps indicator
 *   never triggers a React re-render.
 * - Autoplay never starts when the visitor prefers reduced motion (WCAG 2.2.2),
 *   and an explicit play/pause control is always available.
 *
 * @param slideCount Number of slides, used to bound `scrollTo`.
 * @param prefersReducedMotion Disables autoplay and instant-snaps slide changes.
 */
export function useHeroCarousel(
  slideCount: number,
  prefersReducedMotion: boolean,
): HeroCarouselApi {
  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: HERO_AUTOPLAY_DELAY_MS,
        playOnInit: !prefersReducedMotion,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    [prefersReducedMotion],
  );

  const [carouselRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      duration: prefersReducedMotion ? 0 : 34,
      containScroll: false,
      watchDrag: !prefersReducedMotion,
    },
    [autoplayPlugin],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const progress = useMotionValue(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const syncSelectedIndex = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    syncSelectedIndex();
    emblaApi.on('select', syncSelectedIndex).on('reInit', syncSelectedIndex);

    return () => {
      emblaApi.off('select', syncSelectedIndex).off('reInit', syncSelectedIndex);
    };
  }, [emblaApi]);

  // Single rAF loop: mirrors the plugin's countdown into the progress
  // MotionValue and reflects hover/focus pauses in `isPlaying`.
  useAnimationFrame(() => {
    const autoplay = emblaApi?.plugins().autoplay;

    if (!autoplay) {
      return;
    }

    const playing = autoplay.isPlaying();

    setIsPlaying((previous) => (previous === playing ? previous : playing));

    const remaining = autoplay.timeUntilNext();

    progress.set(remaining === null ? 0 : clamp(1 - remaining / HERO_AUTOPLAY_DELAY_MS, 0, 1));
  });

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(clamp(index, 0, Math.max(slideCount - 1, 0)));
    },
    [emblaApi, slideCount],
  );

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  const togglePlay = useCallback(() => {
    const autoplay = emblaApi?.plugins().autoplay;

    if (!autoplay) {
      return;
    }

    if (autoplay.isPlaying()) {
      autoplay.stop();
      setIsPlaying(false);
      progress.set(0);
      return;
    }

    autoplay.play();
    setIsPlaying(true);
  }, [emblaApi, progress]);

  return {
    carouselRef,
    selectedIndex,
    isPlaying,
    progress,
    scrollTo,
    scrollNext,
    scrollPrev,
    togglePlay,
  };
}
