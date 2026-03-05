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

const accentMap: Record<string, { tag: string; border: string; packageBorder: string }> = {
  cyan: {
    tag: 'bg-cyan/10 text-[#0A0A0A]',
    border: 'border-cyan/30',
    packageBorder: 'hover:border-[#0A0A0A]',
  },
  purple: {
    tag: 'bg-purple-500/10 text-[#0A0A0A]',
    border: 'border-purple-500/30',
    packageBorder: 'hover:border-[#0A0A0A]',
  },
  amber: {
    tag: 'bg-amber-500/10 text-[#0A0A0A]',
    border: 'border-amber-500/30',
    packageBorder: 'hover:border-[#0A0A0A]',
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
      className={`relative py-28 lg:py-36 px-6 ${index % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-secondary)]'}`}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section header — matches home page pattern */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 pb-7 border-b border-[var(--border-color)]"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A8A8A] mb-4">
            Service {service.number} — {service.label}
          </p>
          <h2
            className="display-heading-lg text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {service.headline}
          </h2>
        </motion.div>

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
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ direction: 'ltr' }}
          >
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 font-light">
              {service.intro}
            </p>
            {service.body.map((para, pi) => (
              <p key={pi} className="text-[var(--text-tertiary)] text-base leading-relaxed mb-6 font-light">
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A8A8A] mb-6">Our Packages</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-6 rounded-2xl border border-[#E5E5E5] bg-white ${colors.packageBorder} transition-all duration-300`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded-sm bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-cyan" strokeWidth={3} />
                  </div>
                  <h4 className="text-[#0A0A0A] font-semibold text-[0.95rem]">{pkg.name}</h4>
                </div>
                <p className="text-sm text-[#737373] leading-relaxed font-light pl-8">{pkg.desc}</p>
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
            className="inline-flex items-center gap-2.5 h-12 px-8 bg-cyan text-[#0A0A0A] font-semibold text-sm uppercase tracking-[0.12em] rounded-sm hover:bg-cyan-a11y hover:gap-3.5 transition-all duration-200"
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="relative z-10 text-center px-6 max-w-[780px] mx-auto py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#737373] mb-6 flex items-center justify-center gap-4">
              <span className="w-10 h-px bg-[#D4D4D4]" />
              Our Services
              <span className="w-10 h-px bg-[#D4D4D4]" />
            </p>
            <h1
              className="display-serif text-[#0A0A0A] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            >
              Three ways we help you grow
            </h1>
            <p className="text-lg text-[#737373] max-w-[580px] mx-auto mb-10 leading-relaxed font-light">
              Whether you&apos;re a CTV publisher building your monetization infrastructure or an adtech vendor growing your regional footprint, Streamly has a service designed around your specific needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="h-12 px-8 bg-cyan text-[#0A0A0A] font-semibold text-sm uppercase tracking-[0.12em] rounded-sm hover:bg-cyan-a11y transition-colors inline-flex items-center gap-2"
              >
                Book a Free Call <ArrowRight size={14} />
              </Link>
              <a
                href="#strategic-advisory"
                className="h-12 px-8 border border-[#D4D4D4] text-[#404040] font-medium text-sm uppercase tracking-[0.12em] rounded-sm hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-all inline-flex items-center"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Blocks */}
      {serviceLines.map((service, i) => (
        <ServiceBlock key={service.id} service={service} index={i} />
      ))}

      {/* Bottom CTA — floating dark rounded section (matches home page) */}
      <section className="py-36 px-6 bg-[#0A0A0A] rounded-[2rem] mx-4 my-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[680px] mx-auto text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#737373] mb-8 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-[#404040]" />
            Let&apos;s Talk
            <span className="w-8 h-px bg-[#404040]" />
          </p>
          <h2 className="display-serif text-white mb-7" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
            Ready to unlock the revenue your inventory deserves?
          </h2>
          <p className="text-[#8A8A8A] text-lg mb-12 leading-relaxed font-light max-w-[520px] mx-auto">
            Whether you&apos;re a publisher building your CTV ad stack or a vendor looking to grow in MEA, we&apos;d love to hear about your goals.
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
        </motion.div>
      </section>
    </div>
  );
}
