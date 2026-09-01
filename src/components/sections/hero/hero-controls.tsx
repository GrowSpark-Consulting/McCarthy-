'use client';

import type { MotionValue } from 'framer-motion';
import { Pause, Play } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { HeroSlide } from '@/types/hero';

interface HeroControlsProps {
  readonly slides: readonly HeroSlide[];
  readonly selectedIndex: number;
  readonly isPlaying: boolean;
  /** Reserved for the countdown affordance; unused while dots match the reference. */
  readonly progress: MotionValue<number>;
  readonly onSelect: (index: number) => void;
  readonly onTogglePlay: () => void;
  readonly controlsId: string;
}

/**
 * Slide indicators.
 *
 * Three 15px grey dots, centred, 22.5px apart — exactly as the reference draws
 * them, inside a 32px hit area so the target still meets WCAG 2.5.8.
 *
 * The reference ships no pause control, but auto-rotating content needs one
 * (WCAG 2.2.2). Ours is always present and focusable, and fades in on
 * hover/focus so the default composition stays identical to the reference.
 */
export function HeroControls({
  slides,
  selectedIndex,
  isPlaying,
  onSelect,
  onTogglePlay,
  controlsId,
}: HeroControlsProps) {
  return (
    <div className="relative z-20 pb-[var(--hero-dots-inset)]">
      <div className="container-page relative flex items-center justify-center">
        <div
          role="tablist"
          aria-label="Choose a hero slide"
          className="flex items-center justify-center"
        >
          {slides.map((slide, index) => {
            const isSelected = index === selectedIndex;

            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={controlsId}
                aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.eyebrow}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => onSelect(index)}
                className="group/dot focus-visible:outline-ink-inverse relative flex size-8 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-0 [&:not(:first-child)]:-ml-[0.59375rem]"
              >
                <span
                  className={cn(
                    'relative block size-[0.9375rem] rounded-full transition-colors',
                    'duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
                    isSelected ? 'bg-[#717171]' : 'group-hover/dot:bg-ink-inverse bg-[#bbbbbb]',
                  )}
                />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={
            isPlaying ? 'Pause automatic slide rotation' : 'Resume automatic slide rotation'
          }
          aria-pressed={!isPlaying}
          onClick={onTogglePlay}
          className={cn(
            'absolute right-[var(--page-gutter)] flex size-9 items-center justify-center rounded-full',
            'border-ink-inverse/35 text-ink-inverse border opacity-0',
            'transition-opacity duration-[var(--duration-base)]',
            'hover:bg-ink-inverse/10 group-hover/hero:opacity-100 focus-visible:opacity-100',
          )}
        >
          {isPlaying ? (
            <Pause aria-hidden="true" className="size-3.5 fill-current" />
          ) : (
            <Play aria-hidden="true" className="size-3.5 fill-current" />
          )}
        </button>
      </div>
    </div>
  );
}
