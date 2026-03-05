import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: 'About Streamly — CTV Monetization Experts for MEA',
  description: 'Streamly helps CTV publishers and adtech vendors unlock the full potential of ad monetization across the Middle East and North Africa. Founded by Sonel Ajayi.',
  openGraph: {
    title: 'About Streamly — CTV Monetization Experts for MEA',
    description: 'Helping CTV publishers and adtech vendors unlock the full potential of ad monetization across MEA.',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#737373] mb-6 flex items-center justify-center gap-4">
              <span className="w-10 h-px bg-[#D4D4D4]" />
              About Streamly
              <span className="w-10 h-px bg-[#D4D4D4]" />
            </p>
            <h1 className="display-serif text-[#0A0A0A] mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Built for the streaming<br />opportunity in MEA
            </h1>
            <p className="text-base font-light tracking-wide text-[#737373] max-w-[560px] mx-auto">
              Helping CTV publishers and adtech vendors unlock the full potential of ad monetization across the Middle East and North Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn>
            <div className="mb-12 pb-7 border-b border-[var(--border-color)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A8A8A] mb-4">Our Story</p>
              <h2 className="display-heading-lg text-[var(--text-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                The MEA Streaming Moment
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              The Middle East and North Africa is one of the most exciting streaming markets in the world right now. CTV publishers are launching and growing ad-supported tiers, programmatic ecosystems are developing at pace, and global adtech vendors are increasingly recognising the region&apos;s potential.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              Streamly was founded to be a trusted partner in that growth — helping CTV publishers build and optimize their ad monetization infrastructure, and helping adtech vendors find and develop the right publisher partnerships in the region.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              We work alongside our clients as a strategic advisor, a practical implementation partner, and a technology-enabled managed service — bringing the kind of specialist CTV and programmatic expertise that helps ambitious businesses move faster and smarter toward their revenue goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder — floating dark rounded section */}
      <section className="relative py-28 px-6 bg-[#0A0A0A] overflow-hidden rounded-[2rem] mx-4 my-4">
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="mb-16 pb-7 border-b border-white/10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#737373] mb-4">Founder</p>
              <h2 className="display-heading-lg text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Founded on a passion for helping publishers unlock their revenue potential
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20">
            {/* Founder photo */}
            <FadeIn>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-cyan/20 via-navy/40 to-navy">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="display-serif text-white/20" style={{ fontSize: '6rem' }}>SA</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="display-heading-lg text-white text-xl mb-1">Sonel Ajayi</h3>
                    <p className="text-sm text-cyan/80 font-medium">Founder &amp; CEO</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bio */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col justify-center">
                <p className="text-neutral-300 text-lg leading-relaxed mb-6 font-light">
                  Streamly was founded by Sonel Ajayi, a senior adtech professional with over a decade of experience across publisher monetization, programmatic strategy, and CTV ad operations in MEA, EMEA, and APAC.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light">
                  Having worked across both the publisher and vendor sides of the adtech ecosystem — at companies including Google, Criteo, and Epsilon/Publicis — Sonel founded Streamly to bring that experience directly to the publishers and partners shaping the next chapter of streaming in MEA.
                </p>

                {/* Experience badges */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {['Google', 'Criteo', 'Epsilon/Publicis'].map(company => (
                    <span
                      key={company}
                      className="text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-white/10 text-neutral-400 bg-white/[0.03]"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA — floating dark rounded section */}
      <section className="py-36 px-6 bg-[#0A0A0A] rounded-[2rem] mx-4 my-4">
        <FadeIn>
          <div className="max-w-[680px] mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#737373] mb-8 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-[#404040]" />
              Let&apos;s Talk
              <span className="w-8 h-px bg-[#404040]" />
            </p>
            <h2 className="display-serif text-white mb-7" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
              Ready to work together?
            </h2>
            <p className="text-[#8A8A8A] text-lg mb-12 leading-relaxed font-light max-w-[480px] mx-auto">
              Whether you&apos;re a CTV publisher or an adtech vendor, we&apos;d love to hear about your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 h-13 px-10 bg-cyan text-[#0A0A0A] font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-cyan-a11y transition-colors"
              style={{ height: '3.25rem' }}
            >
              Book a Free Call <ArrowRight size={15} />
            </Link>
            <p className="text-[#404040] text-xs mt-9 tracking-[0.2em] uppercase font-light">
              No commitment &middot; Response within 1 business day
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
