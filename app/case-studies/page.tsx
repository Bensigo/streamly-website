'use client';

import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import FilterChips from '@/components/ui/FilterChips';
import Button from '@/components/ui/Button';
import { caseStudies } from '@/lib/data';

export default function CaseStudiesPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? caseStudies : caseStudies.filter(cs => cs.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-cyan/10" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-noto)] text-4xl lg:text-[56px] text-white leading-tight mb-4">Case Studies</h1>
            <p className="text-lg text-cyan">Results-driven solutions across ad tech, software, and AI</p>
          </FadeIn>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FilterChips categories={['All', 'Ad Tech', 'Software', 'AI']} active={active} onChange={setActive} />
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((cs, i) => (
              <FadeIn key={cs.id} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid bg-gradient-to-br from-cyan/20 to-navy aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <span className="font-[family-name:var(--font-noto)] text-4xl text-cyan">{cs.metric}</span>
                    <span className="text-sm text-cyan mt-1">{cs.metricLabel}</span>
                    <p className="text-xs text-neutral-4 mt-2 leading-relaxed">{cs.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 to-transparent">
                    <p className="text-xs text-cyan font-medium">{cs.client} · {cs.category}</p>
                    <h3 className="font-[family-name:var(--font-noto)] text-xl text-white mt-1">{cs.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-navy text-center">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-noto)] text-3xl text-white mb-4">Ready to transform your business?</h2>
          <Button href="/contact">Start a Project</Button>
        </FadeIn>
      </section>
    </>
  );
}
