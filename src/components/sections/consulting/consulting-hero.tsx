import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { VideoLoop } from '@/components/shared/video-loop';
import { ButtonLink } from '@/components/ui/button';
import { PREFETCH_SITE_ROUTES } from '@/lib/navigation';
import type { ConsultingHeroContent } from '@/types/consulting';

interface ConsultingHeroProps {
  readonly content: ConsultingHeroContent;
}

/**
 * The masthead shared by the consulting pages.
 *
 * Full-bleed and image-led: the project's own footage under a single
 * left-to-right scrim that carries the copy and releases to nothing by 70%, so
 * the right of the frame stays bright. Below `lg` the copy spans the full
 * width, so the gradient runs top-down there instead — same idea, rotated, and
 * a little stronger because the type crosses the middle of the frame.
 *
 * The breadcrumb — any number of steps, the last one current — is pinned near
 * the top; the headline sits at optical centre so it lands above the fold
 * rather than at the bottom of an 80vh band. Body copy, a primary action and
 * a short note beneath are each rendered only when the deck supplies one.
 *
 * The footage is silent and decorative, poster-first, and resolves to a still
 * under `prefers-reduced-motion` — all handled by `VideoLoop`.
 */
export function ConsultingHero({ content }: ConsultingHeroProps) {
  const { breadcrumb, eyebrow, headline, body, cta, note, media } = content;

  return (
    <section
      data-accent="verde"
      className="bg-abyss relative flex min-h-[76svh] items-center overflow-hidden pt-[calc(var(--header-band)+4.5rem)] pb-16 lg:min-h-[82svh] lg:pb-24"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <VideoLoop media={media} className="absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.50)_0%,rgba(0,0,0,0.38)_42%,rgba(0,0,0,0.22)_74%,rgba(0,0,0,0.06)_100%)] lg:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.20)_38%,rgba(0,0,0,0.04)_70%,rgba(0,0,0,0)_100%)] lg:block" />
      </div>

      {breadcrumb?.length ? (
        <div className="absolute inset-x-0 top-[calc(var(--header-band)+1rem)] z-10">
          <div className="container-page">
            <nav aria-label="Breadcrumb">
              <ol className="text-legal text-ink-inverse/70 flex flex-wrap items-center gap-1.5">
                {breadcrumb.map((step, index) => (
                  <li key={step.label} className="flex items-center gap-1.5">
                    {index > 0 ? <span aria-hidden="true">/</span> : null}
                    {step.href ? (
                      <Link
                        href={step.href}
                        prefetch={PREFETCH_SITE_ROUTES}
                        className="hover:text-ink-inverse focus-visible:outline-ember transition-colors duration-[var(--duration-base)] focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        {step.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-ink-inverse">
                        {step.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      ) : null}

      <div className="container-page relative">
        <p className="eyebrow-rule text-eyebrow text-ink-inverse uppercase">{eyebrow}</p>

        <h1 className="text-hero text-ink-inverse mt-8 max-w-[18ch]">
          {headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        {body ? (
          <p className="text-body-lg text-ink-inverse/85 mt-8 max-w-[52ch]">{body}</p>
        ) : null}

        {cta ? (
          <div className="mt-10">
            <ButtonLink href={cta.href} variant="outline-inverse" shape="control" size="control">
              {cta.label}
              <ArrowRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
            </ButtonLink>
          </div>
        ) : null}

        {note ? (
          <p className="text-body text-ink-inverse/80 mt-10 flex flex-wrap items-center gap-2">
            {note.text}
            <Link
              href={note.link.href}
              prefetch={PREFETCH_SITE_ROUTES}
              className="text-ink-inverse focus-visible:outline-ember font-medium underline underline-offset-4 transition-opacity duration-[var(--duration-base)] hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {note.link.label}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
