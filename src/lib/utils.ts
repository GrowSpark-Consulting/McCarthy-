import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Design-system font sizes (`--text-*` in `globals.css`).
 *
 * tailwind-merge has to be told about these: without it, `text-body` and
 * `text-ink-inverse` look like the same `text-*` group and the colour gets
 * silently dropped from the merged output.
 */
const FONT_SIZES = [
  'hero',
  'break',
  'h2',
  'h2-soft',
  'h3-xl',
  'h3-lg',
  'h3',
  'h3-solid',
  'h4',
  'card',
  'faq',
  'body',
  'body-lg',
  'eyebrow',
  'nav',
  'legal',
] as const;

/** Design-system text colours (`--color-*` in `globals.css`). */
const TEXT_COLORS = [
  'ink',
  'ink-strong',
  'ink-muted',
  'ink-soft',
  'ink-inverse',
  'canvas',
  'ember',
  'ember-text',
  'ember-deep',
  'link',
  'verde',
  'verde-mid',
  'verde-deep',
  'verde-dark',
  'verde-bright',
  'verde-ink',
  'abyss',
  'abyss-deep',
  'hairline',
  'surface-warm',
  'surface-cool',
  'surface-mist',
  'surface-mint',
  'surface-slate',
] as const;

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: [...FONT_SIZES] }],
      'text-color': [{ text: [...TEXT_COLORS] }],
    },
  },
});

/**
 * Merges conditional class names and resolves Tailwind conflicts so the last
 * utility wins. The single class-composition helper used by every component.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Clamps `value` into the inclusive `[min, max]` range. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
