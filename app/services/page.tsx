'use client';

import { Zap, Layers, Brain, Check, Briefcase, Calendar, Users, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = { Zap, Layers, Brain };

const engagementModels = [
  { icon: Briefcase, title: 'Project-Based', description: 'Fixed scope and timeline with dedicated project lead. Ideal for well-defined initiatives.', features: ['Fixed scope & timeline', 'Dedicated project lead', 'Milestone-based delivery', 'Clear deliverables'] },
  { icon: Calendar, title: 'Retainer', description: 'Ongoing partnership with reserved capacity. Perfect for continuous optimization and support.', features: ['Monthly reserved hours', 'Priority scheduling', 'Flexible scope', 'Strategic advisory'] },
  { icon: Users, title: 'Staff Augmentation', description: 'Embedded team members who integrate with your workflows. Scale up or down as needed.', features: ['Embedded engineers', 'Your tools & processes', 'Flexible duration', 'Knowledge transfer'] },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-cyan/10" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-noto)] text-4xl lg:text-[56px] text-white leading-tight mb-4">Services</h1>
            <p className="text-lg text-cyan">End-to-end growth acceleration for ambitious brands</p>
          </FadeIn>
        </div>
      </section>

      {/* Service Pillars */}
      {services.map((svc, i) => {
        const Icon = iconMap[svc.icon];
        const isReversed = i % 2 !== 0;
        return (
          <section key={svc.id} id={svc.id} className="py-24 px-6">
            <div className={`max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
              {/* Image placeholder */}
              <FadeIn direction={isReversed ? 'right' : 'left'} className={isReversed ? 'lg:order-2' : ''}>
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-cyan/20 via-navy/40 to-navy flex items-center justify-center">
                  {Icon && <Icon size={80} className="text-cyan/40" />}
                </div>
              </FadeIn>

              {/* Content */}
              <FadeIn direction={isReversed ? 'left' : 'right'} className={isReversed ? 'lg:order-1' : ''}>
                <div>
                  <h2 className="font-[family-name:var(--font-noto)] text-3xl lg:text-5xl text-[var(--text-primary)] mb-2">{svc.title}</h2>
                  <p className="text-[var(--text-tertiary)] mb-6">{svc.tagline}</p>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-8">{svc.description}</p>

                  {/* Capabilities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {svc.capabilities.map(cap => (
                      <div key={cap} className="flex items-center gap-3">
                        <Check size={20} className="text-cyan flex-shrink-0" />
                        <span className="text-sm font-semibold text-[var(--text-primary)]">{cap}</span>
                      </div>
                    ))}
                  </div>

                  <Button href="/contact">
                    Explore {svc.title.split(' ')[0]} Services <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* Engagement Models */}
      <section className="py-24 px-6 bg-cyan/5">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="How We Work Together" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, i) => {
              const Icon = model.icon;
              return (
                <FadeIn key={model.title} delay={i * 0.1}>
                  <div className="bg-[var(--bg-primary)] p-10 rounded-xl border border-[var(--border-gray)] hover:border-cyan hover:-translate-y-1 transition-all duration-300">
                    <Icon size={64} className="text-cyan mb-4" />
                    <h3 className="font-[family-name:var(--font-noto)] text-2xl text-[var(--text-primary)] mb-3">{model.title}</h3>
                    <p className="text-sm text-[var(--text-tertiary)] mb-6 leading-relaxed">{model.description}</p>
                    <ul className="space-y-2">
                      {model.features.map(f => (
                        <li key={f} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                          <Check size={14} className="text-cyan" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 px-6 bg-navy text-center">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-noto)] text-3xl lg:text-4xl text-white mb-2">Custom pricing for your needs</h2>
          <p className="text-cyan mb-8">Let&apos;s discuss your project budget and timeline</p>
          <Button href="/contact">Request Pricing</Button>
        </FadeIn>
      </section>
    </>
  );
}
