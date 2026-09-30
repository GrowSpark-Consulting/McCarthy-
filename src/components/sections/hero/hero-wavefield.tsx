import { cn } from '@/lib/utils';

/** Tight, bright lines that form the wave ridge. */
const CREST_COUNT = 18;

/** Wider, fainter lines fanning down and to the right beneath the crest. */
const FAN_COUNT = 46;

const VIEW_W = 1440;
const VIEW_H = 812;

interface WaveLine {
  readonly d: string;
  readonly opacity: number;
  readonly width: number;
}

/**
 * Both bundles are generated deterministically, so server and client render
 * byte-identical markup (no hydration mismatch, no randomness).
 */
function buildCrest(): WaveLine[] {
  const lines: WaveLine[] = [];

  for (let index = 0; index < CREST_COUNT; index += 1) {
    const t = index / (CREST_COUNT - 1);
    // The ridge rises from the left edge, peaks around a third across, then
    // rolls away to the right — the silhouette of a breaking wave.
    const base = 214 + t * 96;
    const peak = base - 74 + t * 30;
    const tail = base + 96 + t * 210;

    const d = `M -80 ${base.toFixed(1)} C 250 ${peak.toFixed(1)}, 470 ${(peak - 16).toFixed(1)}, 720 ${(base + 34).toFixed(1)} C 990 ${(base + 92).toFixed(1)}, 1230 ${(tail - 40).toFixed(1)}, 1520 ${tail.toFixed(1)}`;

    // Brightest through the middle of the bundle, feathering at both edges.
    const centre = 1 - Math.abs(t - 0.42) * 2;
    const opacity = 0.24 + Math.max(0, centre) * 0.72;
    const width = 0.9 + Math.max(0, centre) * 1.5;

    lines.push({ d, opacity: Number(opacity.toFixed(3)), width: Number(width.toFixed(2)) });
  }

  return lines;
}

function buildFan(): WaveLine[] {
  const lines: WaveLine[] = [];

  for (let index = 0; index < FAN_COUNT; index += 1) {
    const t = index / (FAN_COUNT - 1);
    const startY = 330 + t * 150;
    const endY = 40 + t * 1500;
    const c1 = startY + (endY - startY) * 0.18;
    const c2 = startY + (endY - startY) * 0.56;

    const d = `M -80 ${startY.toFixed(1)} C 320 ${c1.toFixed(1)}, 780 ${c2.toFixed(1)}, 1520 ${endY.toFixed(1)}`;

    const opacity = 0.46 - t * 0.26;
    const width = 0.85 - t * 0.3;

    lines.push({ d, opacity: Number(opacity.toFixed(3)), width: Number(width.toFixed(2)) });
  }

  return lines;
}

const CREST_LINES = buildCrest();
const FAN_LINES = buildFan();

interface HeroWavefieldProps {
  readonly className?: string;
  /**
   * Namespace for the gradient ids. Two wavefields in one document would
   * otherwise both resolve `url(#mc-crest)` to whichever rendered first, and
   * the second would silently paint in the first one's accent.
   */
  readonly idPrefix?: string;
}

/**
 * The hero's artwork: an original wave field of 64 vector lines — a bright
 * ridge over a fan of finer lines, the same read as the reference's rendered
 * wave surface.
 *
 * Colour is inherited from the `--hero-accent*` custom properties, so it
 * re-tints with the active slide. Vector rather than bitmap: ~4 KB, razor sharp
 * at every DPR, zero image requests, and animation limited to two
 * compositor-only transforms.
 */
export function HeroWavefield({ className, idPrefix = 'mc' }: HeroWavefieldProps) {
  const crestId = `${idPrefix}-crest`;
  const fanId = `${idPrefix}-fan`;
  const glowId = `${idPrefix}-glow`;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn('absolute inset-0 size-full', className)}
    >
      <defs>
        <linearGradient id={crestId} x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="var(--hero-accent)" stopOpacity="0.08" />
          <stop offset="26%" stopColor="var(--hero-accent)" stopOpacity="1" />
          <stop offset="66%" stopColor="var(--hero-accent-soft)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--hero-accent-soft)" stopOpacity="0.12" />
        </linearGradient>

        <linearGradient id={fanId} x1="0" y1="0" x2="1" y2="0.8">
          <stop offset="0%" stopColor="var(--hero-accent-soft)" stopOpacity="0.05" />
          <stop offset="45%" stopColor="var(--hero-accent)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--hero-accent)" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id={glowId} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="var(--hero-accent)" stopOpacity="0" />
          <stop offset="38%" stopColor="var(--hero-accent)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--hero-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Halo along the ridge. */}
      <g className="animate-drift-slower blur-[60px]">
        <path
          d={CREST_LINES[8]?.d ?? ''}
          fill="none"
          stroke={`url(#${glowId})`}
          strokeWidth={120}
          strokeLinecap="round"
          opacity={0.75}
        />
      </g>

      {/* Fine fan beneath the ridge. */}
      <g className="animate-drift-slow">
        {FAN_LINES.map((line, index) => (
          <path
            key={`fan-${index}`}
            d={line.d}
            fill="none"
            stroke={`url(#${fanId})`}
            strokeWidth={line.width}
            strokeLinecap="round"
            opacity={line.opacity}
          />
        ))}
      </g>

      {/* The ridge itself. */}
      <g className="animate-drift-slower">
        {CREST_LINES.map((line, index) => (
          <path
            key={`crest-${index}`}
            d={line.d}
            fill="none"
            stroke={`url(#${crestId})`}
            strokeWidth={line.width}
            strokeLinecap="round"
            opacity={line.opacity}
          />
        ))}
      </g>
    </svg>
  );
}
