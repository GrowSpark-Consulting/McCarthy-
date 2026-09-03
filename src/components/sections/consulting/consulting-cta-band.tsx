import { ArrowRight } from 'lucide-react';

import { ButtonLink } from '@/components/ui/button';
import type { LinkRef } from '@/content/homepage';

interface ConsultingCtaBandProps {
  readonly id?: string;
  readonly heading: string;
  readonly body?: string;
  readonly actions: readonly LinkRef[];
}

/**
 * A full-width call-to-action band.
 *
 * Set on the mint surface the site already uses for its connect band, so a
 * page can carry more than one call to action without either reading as the
 * page's ending. The first action is the primary; the rest are outlined.
 */
export function ConsultingCtaBand({ id, heading, body, actions }: ConsultingCtaBandProps) {
  const headingId = id ? `${id}-heading` : 'cta-heading';

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-surface-mint scroll-mt-32 py-[clamp(3.5rem,2.5rem+4vw,6rem)]"
    >
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div>
          <h2 id={headingId} className="text-h2-soft text-ink max-w-[28ch]">
            {heading}
          </h2>

          {body ? <p className="text-body-lg text-ink mt-5 max-w-[52ch]">{body}</p> : null}
        </div>

        <div className="flex flex-wrap gap-4">
          {actions.map((action, index) => (
            <ButtonLink
              key={action.href + action.label}
              href={action.href}
              variant={index === 0 ? 'ember' : 'outline'}
              shape="control"
              size="control"
            >
              {action.label}
              <ArrowRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
