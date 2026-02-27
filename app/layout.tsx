import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/layout/ClientLayout';

export const metadata: Metadata = {
  title: 'Streamly — CTV Ad Monetization & Adtech Expertise for MEA',
  description: 'Streamly helps CTV publishers and adtech vendors in the Middle East & North Africa build, optimize, and scale their ad monetization. From strategy to yield management — built for the streaming opportunity in MEA.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Streamly — CTV Ad Monetization & Adtech Expertise for MEA',
    description: 'Streamly helps CTV publishers and adtech vendors in the Middle East & North Africa build, optimize, and scale their ad monetization.',
    siteName: 'Streamly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Streamly — CTV Ad Monetization for MEA',
    description: 'Streamly helps CTV publishers and adtech vendors in MEA build, optimize, and scale their ad monetization.',
  },
  metadataBase: new URL('https://streamlydigital.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
