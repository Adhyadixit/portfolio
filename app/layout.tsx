import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Nabrel | Private Capital & Strategic Investments',
    template: '%s | Nabrel',
  },
  description:
    'Nabrel is a private capital and finance platform focused on essential real assets, strategic industries, and structured investment solutions designed for long-term capital preservation and generational growth.',
  keywords: [
    'Private Capital',
    'Real Assets Investment',
    'Infrastructure Investment',
    'Structured Finance',
    'Family Office Investment',
    'Strategic Investments',
    'Capital Preservation',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Nabrel',
    title: 'Nabrel | Private Capital & Strategic Investments',
    description:
      'Enduring capital, structured for generations. Nabrel operates across real assets, strategic industries, and structured finance.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
