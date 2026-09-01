import { cva, type VariantProps } from 'class-variance-authority';

import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

const wordmarkVariants = cva('font-display leading-none tracking-[-0.02em]', {
  variants: {
    size: {
      /** Header bar. */
      sm: 'text-[1.375rem] font-semibold',
      /** Footer. */
      md: 'text-[2rem] font-semibold sm:text-[2.5rem]',
      /** Brand panels. */
      lg: 'text-[clamp(2.5rem,1.5rem+3vw,4rem)] font-light tracking-[-0.03em]',
    },
    tone: {
      ember: 'text-ember',
      light: 'text-ink-inverse',
      ink: 'text-ink',
    },
  },
  defaultVariants: { size: 'sm', tone: 'ember' },
});

export interface BrandWordmarkProps extends VariantProps<typeof wordmarkVariants> {
  readonly className?: string;
  /** Renders the trailing full stop that closes the mark. */
  readonly withPeriod?: boolean;
}

/**
 * The McCarthy wordmark — an original type-set mark, drawn the way the
 * reference draws its own: lowercase-feeling geometric grotesque in the brand
 * accent, closed by a full stop.
 *
 * The stop is `aria-hidden` so assistive technology reads a clean company name.
 */
export function BrandWordmark({ size, tone, className, withPeriod = true }: BrandWordmarkProps) {
  return (
    <span className={cn(wordmarkVariants({ size, tone }), className)}>
      {siteConfig.wordmark}
      {withPeriod ? <span aria-hidden="true">.</span> : null}
    </span>
  );
}
