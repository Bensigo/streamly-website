'use client';

import { useState } from 'react';
import { Wifi, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import Button from '@/components/ui/Button';
import { positions } from '@/lib/data';

const benefits = [
  { icon: Wifi, title: 'Flexible & Remote', description: 'Work from anywhere, full flexibility. We trust our team to deliver great results on their own terms.' },
  { icon: BookOpen, title: 'Growth & Learning', description: 'Budget for courses, conferences, and tools. We invest in your professional development.' },
  { icon: TrendingUp, title: 'Equity & Rewards', description: 'Stock options, performance bonuses, and generous PTO. Your success is our success.' },
];

const departments = ['All', ...Array.from(new Set(positions.map(p => p.department)))];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('All');
  const filtered = activeDept === 'All' ? positions : positions.filter(p => p.department === activeDept);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-cyan/10" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-noto)] text-4xl lg:text-5xl text-white leading-tight mb-4">Join the Team</h1>
            <p className="text-lg text-cyan mb-8">Help ambitious brands grow with cutting-edge technology</p>
            <Button href="#positions" variant="secondary">View Open Positions</Button>
          </FadeIn>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="Our Culture" subtitle="We build technology that matters—and we have fun doing it" />
          <FadeIn>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-[800px] mx-auto text-center mb-16">
              At Streamly, we believe the best work happens when talented people have autonomy, purpose, and the right tools. We are a distributed team of engineers, strategists, and creatives who are passionate about solving hard problems at the intersection of advertising, AI, and software.
            </p>
          </FadeIn>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <FadeIn key={b.title} delay={i * 0.1}>
                  <div className="bg-[var(--bg-primary)] p-8 rounded-xl border border-[var(--border-gray)] hover:border-cyan hover:-translate-y-1 transition-all duration-300">
                    <Icon size={48} className="text-cyan mb-4" />
                    <h3 className="font-[family-name:var(--font-noto)] text-2xl text-[var(--text-primary)] mb-3">{b.title}</h3>
                    <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">{b.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 px-6 bg-cyan/5">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader title="Open Positions" />
          <FilterChips categories={departments} active={activeDept} onChange={setActiveDept} />

          <div className="divide-y divide-[var(--border-gray)]">
            {filtered.length === 0 ? (
              <p className="text-center text-[var(--text-tertiary)] py-12">No positions found in this department.</p>
            ) : (
              filtered.map((pos, i) => (
                <FadeIn key={pos.title} delay={i * 0.05}>
                  <div className="group flex items-center justify-between py-5 px-5 hover:bg-cyan/5 hover:border-l-[3px] hover:border-l-cyan transition-all duration-200 cursor-pointer rounded-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase bg-cyan/15 text-cyan rounded-[var(--radius-sm)] w-fit">
                        {pos.department}
                      </span>
                      <h3 className="font-semibold text-[var(--text-primary)]">{pos.title}</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-[var(--text-tertiary)] hidden sm:block">{pos.location}</span>
                      <span className="text-xs text-[var(--text-tertiary)] hidden sm:block">{pos.level}</span>
                      <ArrowRight size={16} className="text-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </FadeIn>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
