'use client';

import { useCallback, type KeyboardEvent } from 'react';

import { HeroBackdrop } from '@/components/sections/hero/hero-backdrop';
import { HeroControls } from '@/components/sections/hero/hero-controls';
import { HeroSlide } from '@/components/sections/hero/hero-slide';
import { HERO_SLIDES } from '@/content/hero-slides';
import { useHeroCarousel } from '@/hooks/use-hero-carousel';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

const CAROUSEL_VIEWPORT_ID = 'hero-carousel-viewport';

/**
 * Homepage hero.
 *
 * Measured against the reference at 1440x900: 804px tall (~89svh), copy
 * bottom-anchored with a 146px gap down to the dots and 22px from the dots to
 * the hero's bottom edge. The floating header sits over the top of it.
 *
 * Drag, dot selection and left/right arrows all move the carousel; autoplay
 * pauses on hover and focus, and never starts under reduced motion.
 */
export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const {
    carouselRef,
    selectedIndex,
    isPlaying,
    progress,
    scrollTo,
    scrollNext,
    scrollPrev,
    togglePlay,
  } = useHeroCarousel(HERO_SLIDES.length, prefersReducedMotion);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollNext, scrollPrev],
  );

  const activeSlide = HERO_SLIDES[selectedIndex] ?? HERO_SLIDES[0];

  return (
    <section
      id="hero"
      data-accent={activeSlide?.accent}
      role="region"
      aria-roledescription="carousel"
      aria-label="McCarthy highlights"
      onKeyDown={handleKeyDown}
      className="group/hero relative isolate flex h-[var(--hero-height)] min-h-[34rem] w-full flex-col justify-end overflow-hidden"
    >
      <HeroBackdrop />

      <div
        ref={carouselRef}
        id={CAROUSEL_VIEWPORT_ID}
        className="relative z-10 overflow-hidden pb-[var(--hero-content-gap)]"
      >
        <div className="flex touch-pan-y">
          {HERO_SLIDES.map((slide, index) => (
            <HeroSlide
              key={slide.id}
              slide={slide}
              index={index}
              total={HERO_SLIDES.length}
              isActive={index === selectedIndex}
            />
          ))}
        </div>
      </div>

      <HeroControls
        slides={HERO_SLIDES}
        selectedIndex={selectedIndex}
        isPlaying={isPlaying}
        progress={progress}
        onSelect={scrollTo}
        onTogglePlay={togglePlay}
        controlsId={CAROUSEL_VIEWPORT_ID}
      />

      {/* Embla moves slides with a transform rather than changing the DOM, so a
          live region on the viewport would announce nothing. This announcer
          reports the change, and stays silent while the carousel auto-rotates. */}
      <p className="sr-only" aria-live={isPlaying ? 'off' : 'polite'}>
        {`Slide ${selectedIndex + 1} of ${HERO_SLIDES.length}: ${activeSlide?.eyebrow ?? ''}`}
      </p>
    </section>
  );
}
