import { ArrowLink } from '@/components/shared/arrow-link';
import { Eyebrow } from '@/components/shared/eyebrow';
import { Reveal } from '@/components/shared/reveal';
import { CAREERS_ANCHORS, CAREERS_COLUMNS } from '@/content/careers';

/**
 * Three open editorial columns — the reference's beat straight after the pill
 * nav. No containers: an eyebrow with its ember rule, a statement set at
 * heading scale, and the site's teal chevron link. Whitespace does the
 * separating. One column on phones, three from `md`.
 */
export function CareersEditorial() {
  return (
    <section
      id={CAREERS_ANCHORS.overview}
      aria-label="Careers at McCarthy"
      className="bg-canvas scroll-mt-40 pt-[clamp(3.5rem,2.5rem+4vw,6rem)] pb-[clamp(3rem,2rem+3vw,5rem)]"
    >
      <ul className="container-page grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
        {CAREERS_COLUMNS.map((column, index) => (
          <li key={column.eyebrow}>
            <Reveal delay={index * 0.08} className="flex h-full flex-col">
              <Eyebrow>{column.eyebrow}</Eyebrow>
              <h2 className="text-h3-lg text-ink mt-5 max-w-[22ch] font-light">{column.heading}</h2>
              <ArrowLink href={column.link.href} className="text-body-lg mt-6 md:mt-auto md:pt-8">
                {column.link.label}
              </ArrowLink>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
