import { ArrowRight } from 'lucide-react';

import { ArrowLink } from '@/components/shared/arrow-link';
import { ButtonLink } from '@/components/ui/button';
import { CONNECT, type LinkRef } from '@/content/homepage';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import { cn } from '@/lib/utils';

/** Sawtooth line art, drawn once and repeated across the band's right half. */
const SAWTOOTH_TEETH = 16;

export type ConnectTone = 'mint' | 'dark';

interface ConnectProps {
  /** Anchor id for local page nav (e.g. a subpage's "Connect with Us" jump link). */
  readonly id?: string;
  readonly heading?: string;
  readonly body?: string;
  readonly primary?: LinkRef;
  /** Omit to render a single-CTA band instead of the homepage's two links. */
  readonly secondary?: LinkRef;
  /**
   * Visual surface. `mint` (default) is the homepage's own pale band with a
   * bare text link; `dark` reproduces the reference's deep surface with a
   * solid pill button — reusing the header CTA's own verde-pill treatment
   * rather than a one-off button style.
   */
  readonly tone?: ConnectTone;
}

const TONE = {
  mint: {
    section: 'bg-surface-mint',
    heading: 'text-ember-text',
    body: 'text-ink',
    sawtooth: 'var(--color-ember)',
  },
  dark: {
    section: 'bg-abyss',
    heading: 'text-verde-bright',
    body: 'text-ink-inverse/85',
    sawtooth: 'var(--color-verde-bright)',
  },
} as const satisfies Record<ConnectTone, { section: string; heading: string; body: string; sawtooth: string }>;

/**
 * Section 22 — the connect band.
 *
 * Measured from the reference: the pale mint `#e4f4f1` surface, a 40px/46px
 * ember heading, body copy, and two 20px links — with a field of thin ember
 * sawtooth strokes filling the right-hand side.
 *
 * The newsletter link points at the contact page rather than a form, because
 * no mailing infrastructure exists yet and a dead-end form is worse than a
 * working link.
 *
 * Content defaults to the homepage's own `CONNECT` copy, so the existing bare
 * `<Connect />` call sites (homepage, Insights) are unaffected — including
 * the newsletter `secondary` link, which only defaults in when *no* props are
 * passed at all. A page that passes its own `heading`/`body`/`primary` gets a
 * single-CTA band unless it explicitly passes `secondary` too — otherwise a
 * page-specific override would silently inherit the homepage's unrelated
 * newsletter link.
 */
export function Connect(props: ConnectProps = {}) {
  const isBareCall = Object.keys(props).length === 0;
  const {
    id,
    heading = CONNECT.heading,
    body = CONNECT.body,
    primary = CONNECT.primary,
    tone = 'mint',
  } = props;
  const secondary = props.secondary ?? (isBareCall ? CONNECT.secondary : undefined);
  const palette = TONE[tone];

  return (
    <section
      id={id}
      aria-labelledby="connect-heading"
      className={cn('scroll-mt-32 relative overflow-hidden', palette.section)}
     >
      <svg
        aria-hidden="true"
        viewBox="0 0 600 320"
        preserveAspectRatio="none"
        className="absolute inset-y-0 right-0 hidden h-full w-1/2 md:block"
      >
        {Array.from({ length: SAWTOOTH_TEETH }, (_, index) => {
          const x = index * 38;
          return (
            <path
              key={index}
              d={`M ${x} 320 L ${x + 20} 0 L ${x + 20} 320`}
              fill="none"
              stroke={palette.sawtooth}
              strokeWidth={1}
              opacity={0.9}
            />
          );
        })}
      </svg>

      <div className="container-page relative py-[var(--section-py)]">
        {/*
          The sawtooth SVG is positioned against the full-bleed `<section>`
          (`right-0 w-1/2`, i.e. its left edge sits at 50vw), not against this
          `container-page` box — so bounding this content column as a plain
          percentage of its own width drifts out of sync with the graphic.
          `50vw` keeps the two in the same coordinate space below the page's
          max-width, but `container-page` itself stops growing and centers
          past `--page-max-width` (1440px) while `50vw` keeps climbing — so
          on wide monitors the vw-based cap alone re-opens the overlap it was
          meant to prevent. `min()` with a second, percentage-based cap
          (relative to this already-centered container) holds the line past
          that point too. Both offsets were tuned empirically against the
          actual rendered gap, not derived from the box model alone.
        */}
        <div className="md:max-w-[min(calc(50vw-5rem),calc(50%-2.5rem))]">
          <h2 id="connect-heading" className={cn('text-h2-soft', palette.heading)}>
            {heading}
          </h2>

          {body ? <p className={cn('text-body mt-5 max-w-[46ch]', palette.body)}>{body}</p> : null}

          <div className="mt-8 flex flex-col items-start gap-4">
            {tone === 'dark' ? (
              <ButtonLink
                href={primary.href}
                prefetch={PREFETCH_SITE_ROUTES}
                variant="verde"
                shape="pill"
                size="nav"
              >
                {primary.label}
                <span
                  aria-hidden="true"
                  className="bg-verde-ink/12 flex size-7 items-center justify-center rounded-full transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover/button:translate-x-0.5"
                >
                  <ArrowRight strokeWidth={1.75} className="size-4" />
                </span>
              </ButtonLink>
            ) : (
              <ArrowLink href={primary.href} tone="ember" className="text-body-lg">
                {primary.label}
              </ArrowLink>
            )}

            {secondary ? (
              <ArrowLink
                href={secondary.href}
                tone={tone === 'dark' ? 'inverse' : 'ink'}
                className="text-body-lg"
              >
                {secondary.label}
              </ArrowLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
