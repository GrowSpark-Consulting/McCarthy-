import { cn } from '@/lib/utils';

interface EyebrowProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  /** Inverts the label colour for dark surfaces; the rule stays ember. */
  readonly tone?: 'ink' | 'inverse';
}

/**
 * Section eyebrow: a small uppercase label with the reference's 28x2 ember rule
 * beneath it. The rule is drawn by `.eyebrow-rule::after`, so it never enters
 * the accessibility tree.
 */
export function Eyebrow({ children, className, tone = 'ink' }: EyebrowProps) {
  return (
    <p
      className={cn(
        'eyebrow-rule text-eyebrow uppercase',
        tone === 'inverse' ? 'text-ink-inverse' : 'text-ink',
        className,
      )}
    >
      {children}
    </p>
  );
}
