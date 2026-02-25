'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, Zap, Layers, Brain, ArrowRight } from 'lucide-react';
import CharacterReveal from '@/components/animations/CharacterReveal';
import FloatingShapes from '@/components/animations/FloatingShapes';
import FadeIn from '@/components/animations/FadeIn';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import FilterChips from '@/components/ui/FilterChips';
import { services, caseStudies, blogPosts, testimonials, processSteps } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = { Zap, Layers, Brain };

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeFilter);

  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center bg-[var(--bg-primary)] overflow-hidden">
        <FloatingShapes />
        <div className="relative z-10 text-center px-6 max-w-[800px]">
          <h1 className="font-[family-name:var(--font-noto)] font-black text-[26px] md:text-[38px] lg:text-[62px] text-[var(--text-primary)] leading-[1.5] mb-6">
            <CharacterReveal text="Streamline your growth with " delay={0} />
            <motion.span
              className="brush-highlight"
              initial={{ color: 'var(--text-primary)' }}
              animate={{ color: '#FFFFFF' }}
              transition={{ delay: 1.32, duration: 0.4, ease: 'easeOut' }}
            >
              <motion.svg
                viewBox="0 0 520 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="none"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.32, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              >
                <path d="M8 45c2-18 20-30 45-34 30-6 70-8 110-7 50 1 100 3 150 6 40 3 85 5 120 10 25 4 55 10 65 22 8 10 2 22-12 28-20 8-50 12-80 13-55 2-110 0-165-2-50-2-100-4-150-3-35 1-70 3-80-6-4-4-5-10-4-16 1-5 3-9 6-11z" fill="url(#brush-grad)" />
                <defs>
                  <linearGradient id="brush-grad" x1="0" y1="45" x2="520" y2="45" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00b4d8" />
                    <stop offset="1" stopColor="#90e0ef" />
                  </linearGradient>
                </defs>
              </motion.svg>
              <CharacterReveal text="smart technology" delay={0.84} />
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-[var(--text-secondary)] text-lg md:text-xl mb-12 tracking-wide"
          >
            Ad tech, AI, and software architecture for ambitious teams
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/contact" size="lg">Book a Call</Button>
            <Button href="/case-studies" variant="secondary" size="lg">See Our Work</Button>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan animate-bounce-gentle"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ===== SOCIAL PROOF BAR ===== */}
      <section className="bg-[rgba(255,255,255,0.02)] border-t border-cyan/20 py-8 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-widest text-[var(--text-gray)] mb-6">
          Trusted by leading brands
        </p>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-12 mx-6">
              {['VaultPay', 'NexaMedia', 'ContentFlow', 'ShopWave', 'DataBridge', 'InsightPro', 'TechVenture', 'Axiom'].map(name => (
                <span key={name} className="font-[family-name:var(--font-noto)] text-lg uppercase tracking-wider text-[var(--text-tertiary)] opacity-50 hover:opacity-100 transition-opacity cursor-default">
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES BENTO GRID ===== */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="Our Services" subtitle="End-to-end solutions for modern growth" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = iconMap[svc.icon];
              return (
                <FadeIn key={svc.id} delay={i * 0.1}>
                  <div className="group block p-8 rounded-xl border border-[var(--border-gray)] bg-white hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(104,210,223,0.3)] hover:border-cyan/30 transition-all duration-300 h-full min-h-[240px]">
                    {Icon && <Icon size={48} className="text-cyan mb-4" />}
                    <h3 className="font-[family-name:var(--font-noto)] font-bold text-2xl text-[var(--text-primary)] mb-3">{svc.title}</h3>
                    <p className="text-sm text-[var(--text-tertiary)] mb-4 leading-relaxed">{svc.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="py-24 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="Featured Work" subtitle="Real results from real clients" />
          <FilterChips
            categories={['All', 'Ad Tech', 'Software', 'AI']}
            active={activeFilter}
            onChange={setActiveFilter}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.slice(0, 6).map((cs, i) => {
              const bgColors = [
                'bg-[#e0f7fa]',
                'bg-[#b2ebf2]',
                'bg-[#caf0f8]',
                'bg-[#d4f1f9]',
                'bg-[#b2f7ef]',
                'bg-[#e0fcff]',
              ];
              return (
                <FadeIn key={cs.id} delay={i * 0.08} className={i === 0 ? 'md:col-span-2' : ''}>
                  <div className={`group relative overflow-hidden rounded-2xl cursor-pointer ${bgColors[i % bgColors.length]} p-8 h-full ${i === 0 ? 'min-h-[300px]' : 'min-h-[240px]'} flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                    <div>
                      <p className="text-xs text-navy/60 font-medium mb-2">{cs.client} · {cs.category}</p>
                      <h3 className="font-[family-name:var(--font-noto)] font-bold text-xl text-navy mb-3">{cs.title}</h3>
                      <p className="text-sm text-navy/70 leading-relaxed line-clamp-2">{cs.description}</p>
                    </div>
                    <div className="mt-6">
                      <span className="font-[family-name:var(--font-noto)] font-bold text-4xl text-navy">{cs.metric}</span>
                      <span className="text-sm text-navy/60 ml-2">{cs.metricLabel}</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROCESS / HOW WE WORK ===== */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader title="How We Work" subtitle="A proven process for measurable results" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="relative">
                  <span className="font-[family-name:var(--font-noto)] text-7xl text-navy/10">{step.number}</span>
                  <h3 className="font-[family-name:var(--font-noto)] font-bold text-2xl text-navy mt-2 mb-3">{step.title}</h3>
                  <p className="text-sm text-navy/70 leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader title="Loved by our clients" />
          <FadeIn>
            <div className="relative">
              <div className="p-8 md:p-12 rounded-xl border border-[var(--border-gray)] bg-white min-h-[280px] flex flex-col justify-between">
                <p className="text-lg text-[var(--text-secondary)] italic leading-relaxed mb-8">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan font-semibold text-sm">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">{currentTestimonial.name}</p>
                    <p className="text-sm text-[var(--text-tertiary)]">{currentTestimonial.role}, {currentTestimonial.company}</p>
                  </div>
                </div>
              </div>

              {/* Nav */}
              <button
                onClick={() => setTestimonialIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg-primary)] border border-cyan flex items-center justify-center text-cyan hover:bg-cyan hover:text-white transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setTestimonialIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg-primary)] border border-cyan flex items-center justify-center text-cyan hover:bg-cyan hover:text-white transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === testimonialIndex ? 'bg-cyan scale-125' : 'bg-[var(--text-tertiary)]'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="py-24 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            title="Latest Insights"
            align="left"
            action={
              <Link href="/blog" className="text-sm font-semibold text-cyan hover:underline inline-flex items-center gap-1">
                View All <ArrowRight size={14} />
              </Link>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => {
              const cardGradients = [
                'bg-gradient-to-br from-[#00b4d8] via-[#0077b6] to-[#03045e]',
                'bg-gradient-to-br from-[#90e0ef] via-[#00b4d8] to-[#0077b6]',
                'bg-gradient-to-br from-[#48cae4] via-[#023e8a] to-[#03045e]',
              ];
              return (
              <FadeIn key={post.id} delay={i * 0.1}>
                <article className="group border border-[var(--border-gray)] rounded-xl overflow-hidden hover:border-cyan hover:shadow-md transition-all duration-300">
                  <div className={`aspect-video ${cardGradients[i % cardGradients.length]}`} />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase bg-cyan/15 text-cyan rounded-[var(--radius-sm)] mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-noto)] font-bold text-xl text-[var(--text-primary)] mb-2 leading-tight group-hover:text-cyan transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--text-tertiary)] mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                </article>
              </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 px-6  text-center">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-noto)] font-bold text-4xl lg:text-[56px] text-navy leading-tight mb-4">
            Ready to streamline your growth?
          </h2>
          <p className="text-lg text-navy/70 mb-12">Let&apos;s chat about your next project</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button href="/contact" size="lg">Schedule a Call</Button>
            <Button href="mailto:hello@streamly.io" variant="secondary" size="lg">Send an Email</Button>
          </div>
          <a href="mailto:hello@streamly.io" className="text-navy hover:text-cyan transition-colors">
            hello@streamly.io
          </a>
        </FadeIn>
      </section>
    </>
  );
}
