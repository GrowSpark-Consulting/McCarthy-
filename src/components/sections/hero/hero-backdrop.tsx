'use client';

import { useRef } from 'react';

import { HeroWavefield } from '@/components/sections/hero/hero-wavefield';
import { VideoLoop } from '@/components/shared/video-loop';
import { HERO_BACKGROUND } from '@/content/hero-slides';
import { usePointerParallax } from '@/hooks/use-pointer-parallax';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

/**
 * Every non-text layer of the hero, back to front:
 *
 * 1. The deep teal ground.
 * 2. The background footage, when one is supplied (`HERO_BACKGROUND`).
 * 3. The vector wave artwork — the fallback when there is no footage, and the
 *    only moving art in that case.
 * 4. An accent glow — vector fallback only; footage is left untinted.
 * 5. The scrims that hold the headline at AA contrast.
 *
 * The whole stack is decorative — `aria-hidden` and `pointer-events-none`, so
 * it can never intercept a click meant for the CTA.
 */
export function HeroBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  usePointerParallax(containerRef, { disabled: prefersReducedMotion });

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="bg-abyss pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(150deg,var(--color-abyss-deep)_8%,var(--hero-accent-deep)_58%,var(--color-abyss-deep)_100%)] transition-[background-image] duration-[var(--duration-slow)] ease-[var(--ease-in-out-soft)]" />

      {HERO_BACKGROUND ? (
        <div className="absolute inset-0">
          <VideoLoop media={HERO_BACKGROUND} className="absolute inset-0" />
        </div>
      ) : (
        <div className="parallax-layer absolute inset-0 [--parallax-depth:1]">
          <HeroWavefield className="mix-blend-screen" />
        </div>
      )}

      {/* Accent glow, for the vector fallback only. Real footage is left
          untinted: the reference runs the same footage under every slide and
          washing teal with ember only muddies it. */}
      {HERO_BACKGROUND ? null : (
        <div className="parallax-layer absolute inset-0 [--parallax-depth:0.5]">
          <div className="animate-aurora absolute top-[-14%] left-[40%] size-[52rem] rounded-full bg-[radial-gradient(circle,var(--hero-accent-soft),transparent_64%)] opacity-40 blur-3xl" />
        </div>
      )}

      {/* Legibility scrims, localised to the copy. Pitched at the reference's
          brightness: the footage is meant to read as a lit room, not a dark
          plate, so on lg the left scrim carries the headline and then clears
          entirely by mid-frame, and the foot is a light touch for the slide
          dots. Nothing darkens the top band any more — the floating bar earns
          its own readability from glass, blur and a white tint, so the footage
          stays bright behind it. Below lg the copy spans the full width over a
          tighter crop, so it still needs a real gradient. */}
      <div className="from-abyss-deep/92 via-abyss-deep/62 to-abyss-deep/12 lg:from-abyss-deep/62 lg:via-abyss-deep/14 absolute inset-0 bg-gradient-to-r lg:to-transparent" />
      <div className="from-abyss-deep/58 via-abyss-deep/18 absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
    </div>
  );
}
