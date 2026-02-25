'use client';

import { Linkedin, Lightbulb, Users, Eye } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { teamMembers } from '@/lib/data';

const timeline = [
  { year: '2021', title: 'Founded', description: 'Streamly launches with a focus on ad tech consulting' },
  { year: '2022', title: 'Expansion', description: 'Added software architecture and 20+ enterprise clients' },
  { year: '2023', title: 'AI Practice', description: 'Launched AI integration practice with LLM expertise' },
  { year: '2024', title: 'Global Reach', description: '50+ clients across 3 continents, team of 30+' },
];

const values = [
  { icon: Users, title: 'Client-First', description: 'Every decision starts with what is best for our clients. We measure our success by their outcomes.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of the curve, adopting emerging technologies before they become mainstream.' },
  { icon: Eye, title: 'Transparency', description: 'No black boxes. We share our process, our thinking, and our metrics openly.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-cyan/10" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-noto)] text-4xl lg:text-[56px] text-white leading-tight mb-4">About Streamly</h1>
            <p className="text-lg text-cyan">Experts in growth technology and strategy</p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              Streamly was born from a simple observation: the gap between cutting-edge technology and practical business outcomes was growing wider every year. Our founders—veterans of ad tech platforms, AI research labs, and enterprise engineering—came together to bridge that gap.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Today, we partner with ambitious companies to design, build, and optimize the systems that drive growth. Whether it is a real-time bidding platform handling millions of impressions, a cloud-native architecture that scales globally, or an AI integration that transforms customer experiences—we bring the expertise to make it happen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.15}>
                <div className="md:border-l-2 md:border-cyan md:pl-6">
                  <span className="font-[family-name:var(--font-noto)] text-3xl text-cyan">{item.year}</span>
                  <h3 className="font-semibold text-lg text-[var(--text-primary)] mt-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-tertiary)] mt-1">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-24 px-6 bg-cyan/5">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="Our Philosophy" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <FadeIn key={val.title} delay={i * 0.1}>
                  <div className="bg-[var(--bg-primary)] p-8 rounded-xl border border-[var(--border-gray)] hover:border-cyan hover:-translate-y-1 transition-all duration-300 min-h-[280px]">
                    <Icon size={48} className="text-cyan mb-4" />
                    <h3 className="font-[family-name:var(--font-noto)] text-2xl text-[var(--text-primary)] mb-3">{val.title}</h3>
                    <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">{val.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="Meet the Team" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.08}>
                <div className="text-center group">
                  <div className="w-[200px] h-[200px] mx-auto rounded-full bg-gradient-to-br from-cyan/30 to-navy/60 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300">
                    <span className="font-[family-name:var(--font-noto)] text-3xl text-white">{member.initials}</span>
                  </div>
                  <h4 className="font-semibold text-lg text-[var(--text-primary)]">{member.name}</h4>
                  <p className="text-sm text-[var(--text-tertiary)]">{member.role}</p>
                  <a href="#" className="inline-block mt-2 text-cyan hover:scale-110 transition-transform"><Linkedin size={20} /></a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-navy text-center">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-noto)] text-3xl lg:text-4xl text-white mb-4">Join the team or let&apos;s talk growth</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button href="/careers" variant="secondary">View Careers</Button>
            <Button href="/contact">Schedule Call</Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
