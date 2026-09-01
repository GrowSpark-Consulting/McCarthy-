import { forwardRef, type ButtonHTMLAttributes } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/** Square-ish icon affordances: header search, menu toggle, carousel controls. */
const iconButtonVariants = cva(
  [
    'inline-flex items-center justify-center rounded-full',
    'transition-[background-color,border-color,color,transform]',
    'duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
    'active:scale-95 disabled:pointer-events-none disabled:opacity-40',
    'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ember',
  ],
  {
    variants: {
      variant: {
        ghost: 'text-ink hover:bg-ink/8 hover:text-ink',
        outline: 'border border-ink/20 text-ink hover:border-ink/60 hover:text-ink',
      },
      size: {
        sm: 'size-9',
        md: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'md',
    },
  },
);

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
  /**
   * Required: icon-only controls have no text, so they must carry an
   * accessible name (WCAG 4.1.2).
   */
  readonly 'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { className, variant, size, type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    />
  );
});
