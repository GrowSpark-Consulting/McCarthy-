import { ImageResponse } from 'next/og';

import { siteConfig } from '@/lib/site-config';

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Open Graph / Twitter card, rendered from the design tokens rather than
 * maintained as a binary asset — so the card can never drift from the brand.
 *
 * Satori (the renderer behind `ImageResponse`) only understands inline styles
 * and a small flexbox subset; that is the API's constraint, not the project's
 * styling convention.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px',
        backgroundColor: '#05070a',
        backgroundImage:
          'radial-gradient(900px 620px at 88% 8%, #00c78c55, transparent), radial-gradient(700px 500px at 4% 100%, #04312ccc, transparent)',
        color: '#e6eaee',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 40, fontWeight: 600 }}>
        <span style={{ letterSpacing: '-0.045em' }}>{siteConfig.wordmark.toLowerCase()}</span>
        <span style={{ color: '#ff4b12' }}>.</span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        }}
      >
        <div
          style={{
            fontSize: 78,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            maxWidth: '900px',
            color: '#f5f7f9',
          }}
        >
          AI transformation for the enterprise.
        </div>

        <div style={{ fontSize: 30, color: '#98a2ae', maxWidth: '860px' }}>
          Strategy, agents, automation and workforce transformation.
        </div>
      </div>

      <div style={{ display: 'flex', fontSize: 24, color: '#6b7684', letterSpacing: '0.16em' }}>
        {siteConfig.locations.join('  ·  ').toUpperCase()}
      </div>
    </div>,
    size,
  );
}
