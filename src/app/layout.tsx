import type { Metadata, Viewport } from 'next';
import { Inter_Tight, Roboto } from 'next/font/google';

import { SiteHeader } from '@/components/layout/site-header';
import { SkipLink } from '@/components/layout/skip-link';
import { AppProviders } from '@/components/providers/app-providers';
import { AppLoader } from '@/components/shared/app-loader';
import { StructuredData } from '@/components/shared/structured-data';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

/**
 * Type system.
 *
 * The reference pairs a geometric grotesque for display with Roboto for body
 * copy. Its display face is licensed, so Inter Tight stands in for it — the
 * closest open equivalent in width, weight range and the light (300) cut the
 * headline scale depends on. Both faces are self-hosted by `next/font`: no
 * third-party request, and generated fallback metrics mean no layout shift.
 */
const displayFace = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display-face',
  display: 'swap',
});

const bodyFace = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body-face',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
  themeColor: '#ffffff',
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

/**
 * Root layout.
 *
 * Stays a server component: metadata, fonts and JSON-LD are rendered on the
 * server, and only the interactive shell (`AppProviders`, header, loader) opts
 * into the client.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(displayFace.variable, bodyFace.variable)}
      suppressHydrationWarning
    >
      <body className="bg-canvas min-h-svh antialiased">
        <AppProviders>
          <SkipLink />
          <AppLoader />
          <SiteHeader />

          <main id="main-content" tabIndex={-1} className="relative">
            {children}
          </main>
        </AppProviders>

        <StructuredData />
      </body>
    </html>
  );
}
