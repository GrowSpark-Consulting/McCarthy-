import type { FaqEntry, LinkRef } from '@/content/homepage';

/**
 * Shared shape for every "industries" page (Education, Hospitality & Travel,
 * Manufacturing, …). One consistent structure lets the three pages reuse the
 * same section components instead of forking a bespoke set per industry —
 * only `content/industries/*.ts` differs between them.
 */

export interface BreadcrumbItem {
  readonly label: string;
  readonly href?: string;
}

export interface IndustryHeroStat {
  readonly value: string;
  readonly label: string;
}

export interface IndustryHero {
  readonly eyebrow: string;
  readonly heading: string;
  readonly body: string;
  readonly primaryCta: LinkRef;
  readonly secondaryLabel: string;
  readonly secondaryHref: string;
  readonly stats: readonly IndustryHeroStat[];
}

export interface IndustryIntro {
  readonly label: string;
  readonly paragraphs: readonly string[];
}

export interface PressureCard {
  readonly index: string;
  readonly title: string;
  readonly text: string;
}

export interface PressureSection {
  readonly eyebrow: string;
  readonly heading: string;
  readonly body: string;
  readonly cards: readonly PressureCard[];
}

export type CapabilityTag = 'revenue' | 'cost' | 'risk' | 'time';

export interface CapabilityCard {
  readonly name: string;
  readonly desc: string;
  readonly tags: readonly CapabilityTag[];
}

export interface CapabilityCategory {
  readonly index: string;
  readonly title: string;
  readonly subtitle: string;
  readonly capabilities: readonly CapabilityCard[];
}

export interface CapabilitySection {
  readonly eyebrow: string;
  readonly heading: string;
  readonly body: string;
  readonly categories: readonly CapabilityCategory[];
}

export interface ImpactRow {
  readonly area: string;
  readonly desc: string;
  readonly metric: string;
}

export interface ImpactSection {
  readonly eyebrow: string;
  readonly heading: string;
  readonly body: string;
  readonly rows: readonly ImpactRow[];
  readonly note: string;
}

export interface ResourceCard {
  readonly tag: string;
  readonly title: string;
  readonly linkLabel: string;
}

export interface ResourcesSection {
  readonly eyebrow: string;
  readonly heading: string;
  readonly cards: readonly ResourceCard[];
}

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly desc: string;
}

export interface ProcessSection {
  readonly eyebrow: string;
  readonly heading: string;
  readonly body: string;
  readonly steps: readonly ProcessStep[];
}

export interface QaItem {
  readonly question: string;
  readonly answer: string;
}

export interface ExpertQaSection {
  readonly eyebrow: string;
  readonly heading: string;
  readonly expertTitle: string;
  readonly items: readonly QaItem[];
}

export interface CaseStudy {
  readonly tag: string;
  readonly title: string;
  readonly body: string;
}

export interface CaseStudySection {
  readonly eyebrow: string;
  readonly heading: string;
  readonly stories: readonly CaseStudy[];
}

export interface IndustryFaqSection {
  readonly eyebrow: string;
  readonly heading: string;
  readonly items: readonly FaqEntry[];
}

export interface InsightArticle {
  readonly meta: string;
  readonly title: string;
}

export interface InsightsSection {
  readonly eyebrow: string;
  readonly heading: string;
  readonly articles: readonly InsightArticle[];
}

export interface IndustryCta {
  readonly heading: string;
  readonly primaryLabel: string;
  readonly primaryHref: string;
}

export interface IndustryPageContent {
  readonly meta: {
    readonly title: string;
    readonly description: string;
    readonly path: string;
  };
  readonly breadcrumb: readonly BreadcrumbItem[];
  readonly localNav: readonly LinkRef[];
  readonly hero: IndustryHero;
  readonly intro: IndustryIntro;
  readonly pressures: PressureSection;
  readonly capabilities: CapabilitySection;
  readonly impact: ImpactSection;
  readonly resources: ResourcesSection;
  readonly process: ProcessSection;
  readonly expertQa: ExpertQaSection;
  readonly caseStudies: CaseStudySection;
  readonly faq: IndustryFaqSection;
  readonly insights: InsightsSection;
  readonly cta: IndustryCta;
}
