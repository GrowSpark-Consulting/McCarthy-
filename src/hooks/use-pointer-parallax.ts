'use client';

import { useEffect, type RefObject } from 'react';

import { HERO_PARALLAX_STRENGTH_PX } from '@/lib/constants';
import { clamp } from '@/lib/utils';

interface PointerParallaxOptions {
  /** Maximum displacement in px at the edge of the element. */
  readonly strength?: number;
  /** Disable entirely (reduced motion, touch devices). */
  readonly disabled?: boolean;
}

/**
 * Drives a subtle pointer parallax on the hero artwork.
 *
 * The handler only ever writes two CSS custom properties (`--parallax-x/y`) on
 * the container; the actual movement is a compositor-only `translate3d` defined
 * in `.parallax-layer`, with each layer scaling the offset by its own
 * `--parallax-depth`. That keeps the effect off the main thread, avoids React
 * re-renders and holds 60 fps.
 *
 * Fine-pointer only: it is bound to `pointermove` from a mouse, never touch.
 *
 * @param containerRef Element that receives the custom properties.
 * @param options Strength and disable switch.
 */
export function usePointerParallax(
  containerRef: RefObject<HTMLElement | null>,
  options: PointerParallaxOptions = {},
): void {
  const { strength = HERO_PARALLAX_STRENGTH_PX, disabled = false } = options;

  useEffect(() => {
    const container = containerRef.current;

    if (disabled || !container || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    let frame: number | null = null;
    let targetX = 0;
    let targetY = 0;

    const applyOffset = () => {
      frame = null;
      container.style.setProperty('--parallax-x', `${targetX.toFixed(2)}px`);
      container.style.setProperty('--parallax-y', `${targetY.toFixed(2)}px`);
    };

    const scheduleUpdate = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(applyOffset);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        return;
      }

      const bounds = container.getBoundingClientRect();

      if (bounds.width === 0 || bounds.height === 0) {
        return;
      }

      // Normalise the pointer to [-1, 1] around the element's centre.
      const relativeX = clamp((event.clientX - bounds.left) / bounds.width, 0, 1) * 2 - 1;
      const relativeY = clamp((event.clientY - bounds.top) / bounds.height, 0, 1) * 2 - 1;

      targetX = -relativeX * strength;
      targetY = -relativeY * strength;

      scheduleUpdate();
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      scheduleUpdate();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }

      container.style.removeProperty('--parallax-x');
      container.style.removeProperty('--parallax-y');
    };
  }, [containerRef, strength, disabled]);
}
