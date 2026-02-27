import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Book a Free Call | Streamly',
  description: 'Get in touch with Streamly to discuss your CTV monetization goals. Book a free 30-minute discovery call — we respond within one business day.',
  openGraph: {
    title: 'Contact — Book a Free Call | Streamly',
    description: 'Get in touch with Streamly to discuss your CTV monetization goals.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
