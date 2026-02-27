import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getAllSeoPages, getSeoPageBySlug } from '@/lib/programmatic-seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSeoPages().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: {
      title: page.h1,
      description: page.metaDescription,
    },
  };
}

export default async function SeoPage({ params }: Props) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#0D0D1A]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(104,210,223,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 text-center px-6 py-28 max-w-[780px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan/60 mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-cyan/30" />
            {page.location}
            <span className="w-8 h-px bg-cyan/30" />
          </p>
          <h1
            className="display-serif text-white mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            {page.h1}
          </h1>
          <p className="text-lg text-neutral-400 max-w-[560px] mx-auto leading-relaxed font-light">
            {page.metaDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10">
            {page.intro}
          </p>

          <h2 className="display-heading-lg text-[var(--text-primary)] mb-6" style={{ fontSize: '1.5rem' }}>
            What we deliver
          </h2>
          <ul className="space-y-4 mb-12">
            {page.bullets.map(bullet => (
              <li key={bullet} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-sm bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-cyan" strokeWidth={3} />
                </div>
                <span className="text-[var(--text-secondary)] text-base">{bullet}</span>
              </li>
            ))}
          </ul>

          <h2 className="display-heading-lg text-[var(--text-primary)] mb-4" style={{ fontSize: '1.5rem' }}>
            Why Streamly
          </h2>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
            Streamly was founded specifically to serve the CTV and adtech ecosystem in the Middle East and North Africa. Our founder has over a decade of experience across publisher monetization, programmatic strategy, and CTV ad operations — at companies including Google, Criteo, and Epsilon/Publicis.
          </p>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-12">
            We combine that hands-on expertise with AI-augmented workflows to deliver services that are practical, results-driven, and built for the realities of the {page.location} market.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 h-12 px-8 bg-cyan text-navy font-semibold text-sm uppercase tracking-[0.12em] rounded-sm hover:bg-cyan-a11y transition-colors"
          >
            {page.cta} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 px-6 bg-[#0D0D1A]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan/70 mb-4">Explore More</p>
          <h2 className="display-heading-lg text-white mb-8" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Our services in {page.location}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {getAllSeoPages()
              .filter(p => p.locationSlug === page.locationSlug && p.serviceSlug !== page.serviceSlug)
              .slice(0, 4)
              .map(related => (
                <Link
                  key={related.slug}
                  href={`/s/${related.slug}`}
                  className="text-sm px-4 py-2 rounded-full border border-white/10 text-neutral-400 hover:border-cyan/40 hover:text-white transition-all bg-white/[0.03]"
                >
                  {related.service}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
