import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — CTV Monetization & Adtech Expertise | Streamly',
  description: 'Strategic monetization advisory, AI-augmented ad ops & yield management, and supply partnerships for CTV publishers and adtech vendors in MEA.',
  openGraph: {
    title: 'Services — CTV Monetization & Adtech Expertise | Streamly',
    description: 'Strategic advisory, AI-augmented ad ops, and supply partnerships for CTV publishers in MEA.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
