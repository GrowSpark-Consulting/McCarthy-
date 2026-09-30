import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export type AbstractTileTone = 'ember' | 'verde' | 'abyss' | 'mist';

interface AbstractTileProps {
  readonly icon: LucideIcon;
  readonly tone?: AbstractTileTone;
  readonly className?: string;
}

const BASE_COLOR: Record<AbstractTileTone, string> = {
  ember: 'var(--color-surface-warm)',
  verde: 'var(--color-surface-mint)',
  abyss: 'var(--color-abyss)',
  mist: 'var(--color-surface-cool)',
};

const GLOW_PRIMARY: Record<AbstractTileTone, string> = {
  ember: 'var(--color-ember)',
  verde: 'var(--color-verde)',
  abyss: 'var(--color-verde-bright)',
  mist: 'var(--color-ember)',
};

const GLOW_SECONDARY: Record<AbstractTileTone, string> = {
  ember: 'var(--color-ember-deep)',
  verde: 'var(--color-verde-deep)',
  abyss: 'var(--color-ember)',
  mist: 'var(--color-verde)',
};

const DOT_COLOR: Record<AbstractTileTone, string> = {
  ember: 'var(--color-ink)',
  verde: 'var(--color-ink)',
  abyss: 'var(--color-ink-inverse)',
  mist: 'var(--color-ink)',
};

const ICON_CLASS: Record<AbstractTileTone, string> = {
  ember: 'text-ink-strong/55',
  verde: 'text-ink-strong/50',
  abyss: 'text-ink-inverse/70',
  mist: 'text-ink-strong/50',
};

/**
 * A self-authored abstract visual: two soft radial glows in McCarthy's own
 * palette, a faint dot-grid texture, and a centred line-art icon.
 *
 * Used wherever a page needs imagery McCarthy has no verified, on-brand
 * photography for yet — a deliberate, polished stand-in rather than a bare
 * gray placeholder box or stock/generated photography of people. Every value
 * here reads from an existing design token, so a new tone is never a new
 * hard-coded colour.
 */
export function AbstractTile({ icon: Icon, tone = 'ember', className }: AbstractTileProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('relative isolate flex w-full items-center justify-center overflow-hidden', className)}
      style={{ backgroundColor: BASE_COLOR[tone] }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(120% 120% at 18% 15%, ${GLOW_PRIMARY[tone]} 0%, transparent 48%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-45"
        style={{
          background: `radial-gradient(110% 110% at 88% 90%, ${GLOW_SECONDARY[tone]} 0%, transparent 55%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(${DOT_COLOR[tone]} 1px, transparent 1px)`,
          backgroundSize: '18px 18px',
        }}
      />

      <Icon strokeWidth={1} className={cn('relative size-14 sm:size-16 lg:size-20', ICON_CLASS[tone])} />
    </div>
  );
}
