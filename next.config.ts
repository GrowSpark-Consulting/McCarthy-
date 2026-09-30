import type { NextConfig } from 'next';

/**
 * Next.js configuration.
 *
 * - `reactStrictMode` surfaces unsafe lifecycle/effect patterns in development.
 * - `images` is pre-configured with modern formats and the breakpoints used by
 *   the design system so that every future `next/image` gets optimal variants.
 * - Security headers are set at the edge; they cost nothing and are part of the
 *   Lighthouse "Best Practices" score.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Required to render the platform logos, which ship as SVG. Paired with the
    // CSP below so an SVG can never execute script.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [320, 375, 425, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async redirects() {
    return [
      // The Labs page lives at the route the navigation has always used.
      { source: '/mccarthy-labs', destination: '/ai-lab', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
