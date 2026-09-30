import type { CSSProperties } from 'react';

import Image from 'next/image';

import { HeroWavefield } from '@/components/sections/hero/hero-wavefield';
import { cn } from '@/lib/utils';
import type { HeroAccent } from '@/types/hero';

interface ConsultingVisualProps {
  /**
   * A frame from the project's own footage, when one suits the slot. Decorative
   * in every position it is used here, so the alt text is empty by design.
   */
  readonly src?: string;
  /** `next/image` sizes hint — set it to the slot's real width. */
  readonly sizes?: string;
  /**
   * Used when no photograph suits: the hero's vector wave over a pale ground,
   * re-tinted by this accent. Original artwork, ~4 KB, sharp at every DPR.
   */
  readonly accent?: HeroAccent;
  readonly className?: string;
  readonly priority?: boolean;
}

/**
 * The hero's accents are pastels chosen to glow on the deep ground; on a pale
 * one they disappear. Each maps to its deeper sibling here so the line work
 * reads as drawn rather than as a smudge.
 */
const LIGHT_ACCENT: Record<HeroAccent, CSSProperties> = {
  verde: { '--hero-accent': 'var(--color-verde)', '--hero-accent-soft': 'var(--color-verde-dark)' },
  ember: { '--hero-accent': 'var(--color-ember)', '--hero-accent-soft': 'var(--color-ember-deep)' },
  azure: { '--hero-accent': 'var(--color-link)', '--hero-accent-soft': 'var(--color-abyss)' },
} as Record<HeroAccent, CSSProperties>;

/**
 * The image surface for the consulting pages' cards.
 *
 * Two modes, one component: real footage where the project has it, and the
 * hero's own wave artwork where it does not. The artwork sits on a pale ground
 * rather than the deep one — the page reads as light editorial throughout, and
 * a near-black tile in a card slot fights that. Both modes beat a grey
 * placeholder frame, which in a lead visual position undersells a finished
 * page.
 */
export function ConsultingVisual({
  src,
  sizes = '(min-width: 1024px) 33vw, 100vw',
  accent = 'verde',
  className,
  priority = false,
}: ConsultingVisualProps) {
  return (
    <div
      aria-hidden="true"
      style={src ? undefined : LIGHT_ACCENT[accent]}
      className={cn('bg-surface-cool relative overflow-hidden', className)}
    >
      {src ? (
        <Image src={src} alt="" fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <HeroWavefield idPrefix={`mcw-${accent}`} />
      )}
    </div>
  );
}
