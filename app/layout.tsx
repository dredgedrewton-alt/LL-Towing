import type { Metadata, Viewport } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCallBar } from '@/components/layout/MobileStickyCallBar';
import { AnalyticsTracker } from '@/components/analytics/AnalyticsTracker';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateLocalBusinessSchema } from '@/lib/seo/schema';
import { businessConfig } from '@/lib/config/business';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#C62828',
  width: 'device-width',
  initialScale: 1,
};

const baseUrl = process.env.APP_URL || 'https://lltowing.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'LL Towing & Auto Repair | 24/7 Roadside Assistance & Auto Services',
    template: '%s | LL Towing & Auto Repair',
  },
  description:
    'Reliable 24/7 towing, roadside assistance, and automotive repair serving Maryland, Washington DC, and Northern Virginia.',
  keywords: [
    'towing Maryland',
    'towing Beltsville MD',
    'flatbed towing Laurel MD',
    'roadside assistance Washington DC',
    'auto repair Beltsville',
    'jump start service',
    'vehicle lockout assistance',
    'private property impounds',
  ],
  authors: [{ name: businessConfig.name }],
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  openGraph: {
    title: 'LL Towing & Auto Repair | 24/7 Roadside Assistance & Auto Services',
    description:
      'Reliable 24/7 towing, roadside assistance, and automotive repair serving Maryland, Washington DC, and Northern Virginia.',
    type: 'website',
    locale: 'en_US',
    siteName: businessConfig.name,
    url: baseUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LL Towing & Auto Repair | 24/7 Roadside Assistance & Auto Services',
    description:
      'Reliable 24/7 towing, roadside assistance, and automotive repair serving Maryland, Washington DC, and Northern Virginia.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body
        className="min-h-screen bg-white text-[#17191D] antialiased flex flex-col selection:bg-[#FFEBEE] selection:text-[#C62828]"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#C62828] focus:text-white focus:rounded-lg focus:shadow-xl focus:font-bold focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <JsonLd data={localBusinessSchema} />
        <GoogleAnalytics />
        <AnalyticsTracker />
        <Header />
        <main id="main-content" className="flex-1 pb-16 md:pb-0" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileStickyCallBar />
      </body>
    </html>
  );
}
