import { ConsultingFeature } from '@/components/sections/consulting/consulting-feature';
import { ConsultingLogos } from '@/components/sections/consulting/consulting-logos';
import { FLOW_RESULTS } from '@/content/flow';

/**
 * Customer outcomes: the client strip and the case study beneath it.
 *
 * Both halves are the shared components — a hairlined name grid where real
 * logos will go, then the featured callout — so this file only sequences them
 * under one anchor for the jump navigation.
 */
export function FlowCaseStudy() {
  return (
    <>
      <ConsultingLogos id="results" heading={FLOW_RESULTS.heading} clients={FLOW_RESULTS.clients} />
      <ConsultingFeature eyebrow="Customer story" card={FLOW_RESULTS.caseStudy} />
    </>
  );
}
