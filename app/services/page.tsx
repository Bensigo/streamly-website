'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

/* ── Service data ───────────────────────────────────────────────────────── */

const serviceLines = [
  {
    id: 'strategic-advisory',
    number: '01',
    label: 'Strategic Monetization Advisory',
    headline: 'Build your ad stack right, the first time',
    intro: 'For CTV publishers in MEA who are launching, scaling, or professionalizing their ad monetization — Streamly provides the strategic and technical expertise to do it properly.',
    body: [
      'We start with a clear-eyed assessment of where you are today, identify the revenue you\u2019re leaving on the table, and build a practical roadmap to close the gap.',
      'For publishers who need more than a plan, we implement the full stack ourselves — ad server configuration, SSP integrations, deal structures, and yield strategy. And for those who want ongoing strategic leadership, our Fractional Monetization Director retainer gives you senior expertise embedded in your business on a flexible basis.',
    ],
    packages: [
      { name: 'Monetization Health Check', desc: 'A focused 2-week assessment of your current setup with prioritised recommendations. The fastest way to understand where your revenue opportunity lies.' },
      { name: 'Stack Audit & Roadmap', desc: 'A comprehensive diagnostic and 90-day strategic roadmap across your entire monetization infrastructure.' },
      { name: 'Revenue Stack Build', desc: 'Full design and implementation of your CTV ad stack, from ad server to SSP integrations to deal structure.' },
      { name: 'Fractional Monetization Director', desc: 'Ongoing senior monetization leadership on a monthly retainer. Your strategic partner for the long term.' },
    ],
    cta: 'Talk to us about your monetization goals',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    imageAlt: 'Monetization strategy and analytics dashboard',
    accent: 'cyan',
  },
  {
    id: 'yield-engine',
    number: '02',
    label: 'AI-Augmented Ad Ops & Yield Management',
    headline: 'Your revenue engine, running 24/7',
    intro: 'For CTV publishers who want a fully managed, expert-led ad operations and yield management function — without the cost and complexity of building one in-house.',
    body: [
      'Streamly\u2019s Yield Engine service combines senior ad ops expertise with AI-powered workflows to deliver continuous yield optimization, proactive deal management, and automated performance monitoring. We run your revenue operation so your team can focus on content, product, and growth.',
      'Building an ad ops function takes time, resource, and specialist knowledge that is still developing across the region. Streamly gives publishers a way to move quickly and confidently — accessing senior expertise and AI tooling from day one, so the focus stays on content, audience, and growth.',
    ],
    packages: [
      { name: 'Yield Engine Core', desc: 'Monthly yield analysis, floor price optimization, anomaly detection, and performance reporting. The essential managed service for growing publishers.' },
      { name: 'Yield Engine Pro', desc: 'AI-augmented yield optimization running continuously, SSP relationship management, deal structure optimization, and automated reporting. Active management, not just monitoring.' },
      { name: 'Yield Engine Complete', desc: 'Your entire ad ops function, fully managed. Custom AI workflows, SSP MCP integration, proactive demand development, and a dedicated Streamly workspace. The complete solution for publishers without an internal ad ops team.' },
    ],
    cta: 'Find out which Yield Engine tier is right for you',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    imageAlt: 'AI-powered yield optimization and performance metrics',
    accent: 'purple',
  },
  {
    id: 'supply-partnerships',
    number: '03',
    label: 'Supply Partnerships & Market Entry',
    headline: 'The right partners, in the right markets, faster',
    intro: 'For SSPs, DSPs, and adtech vendors looking to grow their publisher footprint in MEA — Streamly provides the market intelligence, relationships, and active partnership development to accelerate your regional strategy.',
    body: [
      'MEA is a market with real momentum and genuine long-term potential. Getting the right publisher partnerships in place early, and approaching the market with the right local understanding, makes all the difference.',
      'Streamly\u2019s founder has spent years building relationships across both sides of the ecosystem in the region — and that network and knowledge is what we put to work for our vendor clients.',
    ],
    packages: [
      { name: 'Publisher Landscape Report', desc: 'A comprehensive map of the MEA CTV and digital publisher landscape, with partnership opportunity assessment and prioritised target recommendations.' },
      { name: 'Partnership Development', desc: 'Active publisher outreach and relationship development on your behalf, with monthly pipeline reporting and success fees tied to live partnerships.' },
      { name: 'MEA Market Entry Program', desc: 'A comprehensive 4\u20136 month program covering market strategy, publisher landscape mapping, active partnership development, internal enablement, and a 12-month go-to-market playbook.' },
    ],
    cta: 'Explore your MEA market opportunity',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80',
    imageAlt: 'Partnership development and business meeting',
    accent: 'amber',
  },
];

/* ── Accent color helpers ───────────────────────────────────────────────── */

const accentMap: Record<string, { tag: string; border: string; glow: string; packageBorder: string }> = {
  cyan: {
    tag: 'bg-cyan/10 text-cyan',
    border: 'border-cyan/30',
    glow: 'rgba(104,210,223,0.06)',
    packageBorder: 'hover:border-cyan/40',
  },
  purple: {
    tag: 'bg-purple-500/10 text-purple-400',
    border: 'border-purple-500/30',
    glow: 'rgba(124,58,237,0.06)',
    packageBorder: 'hover:border-purple-500/40',
  },
  amber: {
    tag: 'bg-amber-500/10 text-amber-400',
    border: 'border-amber-500/30',
    glow: 'rgba(245,158,11,0.06)',
    packageBorder: 'hover:border-amber-500/40',
  },
};

/* ── Service Block component ────────────────────────────────────────────── */

function ServiceBlock({ service, index }: { service: typeof serviceLines[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isReversed = index % 2 !== 0;
  const colors = accentMap[service.accent];

  return (
    <section
      ref={ref}
      id={service.id}
      className="relative py-28 lg:py-36 px-6 border-b border-white/6"
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 40% at ${isReversed ? '20%' : '80%'} 50%, ${colors.glow} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Service label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className={`inline-block text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-sm ${colors.tag}`}>
            Service {service.number} — {service.label}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="display-serif text-white mb-16"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
        >
          {service.headline}
        </motion.h2>

        {/* Image + Body text */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 ${isReversed ? 'lg:[direction:rtl]' : ''}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            style={{ direction: 'ltr' }}
          >
            <img
              src={service.image}
              alt={service.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/50 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ direction: 'ltr' }}
          >
            <p className="text-neutral-300 text-lg leading-relaxed mb-6 font-light">
              {service.intro}
            </p>
            {service.body.map((para, pi) => (
              <p key={pi} className="text-neutral-400 text-base leading-relaxed mb-6 font-light">
                {para}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500 mb-6">Our Packages</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-6 rounded-xl border border-white/8 bg-white/[0.02] ${colors.packageBorder} transition-all duration-300`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded-sm bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-cyan" strokeWidth={3} />
                  </div>
                  <h4 className="text-white font-semibold text-[0.95rem]">{pkg.name}</h4>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-light pl-8">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 h-12 px-8 bg-cyan text-navy font-semibold text-sm uppercase tracking-[0.12em] rounded-sm hover:bg-cyan-a11y hover:gap-3.5 transition-all duration-200"
          >
            {service.cta} <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Main Page ──────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0D0D1A]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(104,210,223,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 text-center px-6 max-w-[780px] mx-auto py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan/60 mb-6 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-cyan/30" />
              Our Services
              <span className="w-8 h-px bg-cyan/30" />
            </p>
            <h1
              className="display-serif text-white mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            >
              Three ways we help you grow
            </h1>
            <p className="text-lg text-neutral-400 max-w-[580px] mx-auto mb-10 leading-relaxed font-light">
              Whether you&apos;re a CTV publisher building your monetization infrastructure or an adtech vendor growing your regional footprint, Streamly has a service designed around your specific needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="h-12 px-8 bg-cyan text-navy font-semibold text-sm uppercase tracking-[0.12em] rounded-sm hover:bg-cyan-a11y transition-colors inline-flex items-center gap-2"
              >
                Book a Free Call <ArrowRight size={14} />
              </Link>
              <a
                href="#strategic-advisory"
                className="h-12 px-8 border border-white/15 text-white/80 font-medium text-sm uppercase tracking-[0.12em] rounded-sm hover:border-cyan/60 hover:text-white transition-all inline-flex items-center"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Blocks — all on dark bg */}
      <div className="bg-[#0D0D1A]">
        {serviceLines.map((service, i) => (
          <ServiceBlock key={service.id} service={service} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="relative py-32 px-6 bg-[#0D0D1A] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(104,210,223,0.06) 0%, transparent 70%)' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[680px] mx-auto text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan/60 mb-8 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-cyan/30" />
            Let&apos;s Talk
            <span className="w-8 h-px bg-cyan/30" />
          </p>
          <h2 className="display-serif text-white mb-7" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
            Ready to unlock the revenue your inventory deserves?
          </h2>
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed font-light max-w-[520px] mx-auto">
            Whether you&apos;re a publisher building your CTV ad stack or a vendor looking to grow in MEA, we&apos;d love to hear about your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 h-12 px-10 bg-cyan text-navy font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-cyan-a11y transition-colors"
          >
            Book a Free Call <ArrowRight size={15} />
          </Link>
          <p className="text-neutral-600 text-xs mt-9 tracking-[0.2em] uppercase font-light">
            No commitment &middot; Response within 1 business day
          </p>
        </motion.div>
      </section>
    </div>
  );
}
