'use client';

import { Mail, Calendar, Linkedin } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import { faqs } from '@/lib/data';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[30vh] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-cyan/10" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-noto)] text-4xl lg:text-5xl text-white leading-tight mb-4">Let&apos;s talk</h1>
            <p className="text-lg text-cyan">We&apos;re here to discuss your growth strategy</p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <FadeIn direction="left">
            <form className="max-w-[500px] space-y-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-2">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-[var(--border-gray)] rounded-[var(--radius-md)] text-sm bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-2">Email Address</label>
                <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border border-[var(--border-gray)] rounded-[var(--radius-md)] text-sm bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-2">Company</label>
                <input type="text" placeholder="Company name" className="w-full px-4 py-3 border border-[var(--border-gray)] rounded-[var(--radius-md)] text-sm bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-2">What&apos;s your inquiry about?</label>
                <select className="w-full px-4 py-3 border border-[var(--border-gray)] rounded-[var(--radius-md)] text-sm bg-[var(--bg-primary)] text-[var(--text-primary)] focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20">
                  <option>Select an option</option>
                  <option>Ad Tech Consultation</option>
                  <option>Software Development</option>
                  <option>AI Strategy</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-primary)] mb-2">Tell us about your project</label>
                <textarea rows={5} placeholder="Share details about your goals, timeline, and budget..." className="w-full px-4 py-3 border border-[var(--border-gray)] rounded-[var(--radius-md)] text-sm bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 resize-y" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="consent" className="accent-cyan w-4 h-4" />
                <label htmlFor="consent" className="text-xs text-[var(--text-tertiary)]">I agree to receive updates and communications from Streamly</label>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="right">
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Us', text: 'hello@streamly.io', href: 'mailto:hello@streamly.io' },
                { icon: Calendar, title: 'Schedule a Call', text: 'Book a time that works', href: '#' },
                { icon: Linkedin, title: 'Connect on LinkedIn', text: 'Follow us for insights', href: '#' },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <a key={i} href={card.href} className="block p-6 border border-[var(--border-gray)] rounded-xl hover:border-cyan transition-colors group">
                    <Icon size={32} className="text-cyan mb-3" />
                    <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-cyan transition-colors">{card.title}</h3>
                    <p className="text-sm text-[var(--text-tertiary)] mt-1">{card.text}</p>
                  </a>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-cyan/5">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader title="Frequently Asked Questions" />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 px-6 text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-8">Why partner with Streamly?</p>
          <div className="flex flex-wrap justify-center gap-16">
            {[
              { value: '50+', label: 'Clients' },
              { value: '10+', label: 'Years Experience' },
              { value: '98%', label: 'Satisfaction' },
            ].map(stat => (
              <div key={stat.label}>
                <span className="font-[family-name:var(--font-noto)] text-5xl text-[var(--text-primary)]">{stat.value}</span>
                <p className="text-sm text-[var(--text-tertiary)] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
