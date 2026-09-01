import { SiteFooter } from '@/components/layout/site-footer';
import { AiLab } from '@/components/sections/ai-lab';
import { AiNativePromo } from '@/components/sections/ai-native-promo';
import { Careers } from '@/components/sections/careers';
import { Connect } from '@/components/sections/connect';
import { Expertise } from '@/components/sections/expertise';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { Hero } from '@/components/sections/hero/hero';
import { HowWeHelp } from '@/components/sections/how-we-help';
import { InsightsGrid } from '@/components/sections/insights-grid';
import { NewsStrip } from '@/components/sections/news-strip';
import { Partners } from '@/components/sections/partners';
import { RecognitionSplit } from '@/components/sections/recognition-split';
import { SectionTabs } from '@/components/sections/section-tabs';
import { TrustPanels } from '@/components/sections/trust-panels';
import { WhoWeAre } from '@/components/sections/who-we-are';

/**
 * McCarthy homepage.
 *
 * Section order follows the reference homepage exactly:
 * hero → news strip → in-page tabs → who we are → trust band → type break →
 * AI Lab feature → type break → capabilities → promo split → insight grid →
 * recognition split → type break → expertise → partners → type break →
 * careers → FAQ → connect → footer.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsStrip />
      <SectionTabs />
      <WhoWeAre />
      <TrustPanels />
      <AiLab />
      <HowWeHelp />
      <AiNativePromo />
      <InsightsGrid />
      <RecognitionSplit />
      <Expertise />
      <Partners />
      <Careers />
      <FaqAccordion />
      <Connect />
      <SiteFooter />
    </>
  );
}
