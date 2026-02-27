'use client';

import { Mail, Calendar, Linkedin } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import { faqs } from '@/lib/data';

const inputClass = 'w-full px-4 py-3.5 border border-[var(--border-gray)] rounded-lg text-sm bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-colors';
const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-[#0D0D1A]">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 60%, rgba(104,210,223,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 text-center px-6 py-24">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan/60 mb-6">Get In Touch</p>
            <h1 className="display-serif text-white mb-5" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              Let&apos;s talk.
            </h1>
            <p className="text-base text-neutral-400 max-w-[380px] mx-auto font-light leading-relaxed">
              Tell us about your business. We&apos;ll respond within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Form — wider column */}
          <FadeIn direction="left" className="lg:col-span-3">
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Work Email</label>
                  <input type="email" placeholder="you@company.com" className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Company</label>
                <input type="text" placeholder="Company or project name" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>What are you interested in?</label>
                <select className={inputClass}>
                  <option value="">Select a service…</option>
                  <option>Performance Ads &amp; Management</option>
                  <option>AI Team</option>
                  <option>Both services</option>
                  <option>Not sure yet — I need advice</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Budget Range</label>
                <select className={inputClass}>
                  <option value="">Select a range…</option>
                  <option>Under $10,000</option>
                  <option>$10,000 – $25,000</option>
                  <option>$25,000 – $50,000</option>
                  <option>$50,000 – $100,000</option>
                  <option>$100,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Tell us about your project</label>
                <textarea
                  rows={5}
                  placeholder="What are you building? What problem does it solve? Any timeline or constraints we should know about?"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input type="checkbox" id="consent" className="accent-cyan w-4 h-4 mt-0.5 flex-shrink-0" />
                <label htmlFor="consent" className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                  I agree to receive project-related communications from Streamly. We don&apos;t spam — ever.
                </label>
              </div>

              <Button type="submit" className="w-full h-12 text-sm">
                Send Message
              </Button>

              <p className="text-xs text-center text-[var(--text-tertiary)]">
                Typical response time: within 1 business day
              </p>
            </form>
          </FadeIn>

          {/* Contact Info — narrower column */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  title: 'Email Us',
                  text: 'hello@streamlydigital.com',
                  sub: 'For quick questions and project inquiries',
                  href: 'mailto:hello@streamlydigital.com',
                },
                {
                  icon: Calendar,
                  title: 'Schedule a Call',
                  text: 'Book a 30-min discovery call',
                  sub: 'We&apos;ll scope your project together',
                  href: '#',
                },
                {
                  icon: Linkedin,
                  title: 'LinkedIn',
                  text: 'Follow @streamly',
                  sub: 'Insights, projects, and team updates',
                  href: '#',
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <a
                    key={i}
                    href={card.href}
                    className="flex items-start gap-5 p-6 border border-[var(--border-gray)] rounded-xl hover:border-cyan transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                      <Icon size={20} className="text-cyan" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-[var(--text-primary)] group-hover:text-cyan transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-cyan mt-0.5">{card.text}</p>
                      <p className="text-xs text-[var(--text-tertiary)] mt-1">{card.sub}</p>
                    </div>
                  </a>
                );
              })}

              {/* Trust indicators */}
              <div className="mt-8 p-6 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-4">
                  Why teams choose Streamly
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { value: '50+', label: 'Clients' },
                    { value: '98%', label: 'Satisfaction' },
                    { value: '10+', label: 'Yrs Exp' },
                  ].map(stat => (
                    <div key={stat.label}>
                      <span className="font-[family-name:var(--font-inter)] font-900 text-2xl text-[var(--text-primary)] block">{stat.value}</span>
                      <span className="text-xs text-[var(--text-tertiary)]">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader title="Frequently Asked Questions" />
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
