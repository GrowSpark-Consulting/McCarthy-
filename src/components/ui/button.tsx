import { forwardRef, type ButtonHTMLAttributes, type ComponentPropsWithoutRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';

import { cn } from '@/lib/utils';

/**
 * Button styling contract, shared by `<Button>` and `<ButtonLink>`.
 *
 * Two shapes exist in the reference and both are reproduced exactly: the
 * navigation pill (44px tall, fully rounded) and the content button (50px tall,
 * 4px radius, 1px border, 12px/16px padding, 16px label).
 */
export const buttonVariants = cva(
  [
    'group/button relative inline-flex select-none items-center justify-center gap-2',
    'text-center leading-normal font-medium text-balance',
    'transition-[background-color,border-color,color,box-shadow,transform]',
    'duration-[var(--duration-base)] ease-[var(--ease-out-quint)]',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember',
  ],
  {
    variants: {
      variant: {
        /** Header CTA — the bright green pill. */
        verde: 'bg-verde-bright text-verde-ink hover:bg-verde',
        /** Ember fill, for dark surfaces. */
        ember: 'bg-ember text-ink-inverse hover:bg-ember-deep',
        /** Content button on a light surface. */
        outline: 'border border-ink text-ink hover:bg-ink hover:text-ink-inverse',
        /** Content button over imagery or a dark panel. */
        'outline-inverse':
          'border border-ink-inverse text-ink-inverse hover:bg-ink-inverse hover:text-ink',
        /** Quiet action. */
        ghost: 'text-ink hover:bg-ink/6',
      },
      shape: {
        pill: 'rounded-full',
        control: 'rounded-[var(--radius-control)]',
      },
      size: {
        /** Nav pill: 44px tall, 14px label. */
        nav: 'min-h-11 py-3 pr-1.5 pl-4 text-nav',
        /** Content button: 50px tall, 16px label, 12px/16px padding. */
        control: 'min-h-[3.125rem] px-4 py-3 text-body',
        /** Compact control used inside dense panels. */
        compact: 'min-h-11 px-4 py-2.5 text-body',
      },
      block: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'outline',
      shape: 'control',
      size: 'control',
      block: false,
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, shape, size, block, type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, shape, size, block }), className)}
      {...props}
    />
  );
});

/** Accepts every `next/link` prop on top of the shared visual variants. */
export interface ButtonLinkProps
  extends ComponentPropsWithoutRef<typeof Link>, ButtonVariantProps {}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { className, variant, shape, size, block, href, ...props },
  ref,
) {
  return (
    <Link
      ref={ref}
      href={href}
      className={cn(buttonVariants({ variant, shape, size, block }), className)}
      {...props}
    />
  );
});
