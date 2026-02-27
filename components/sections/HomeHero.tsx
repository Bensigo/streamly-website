'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import CharacterReveal from '@/components/animations/CharacterReveal';

export default function HomeHero() {
  return (
    <section className="relative min-h-screen bg-[#0D0D1A] overflow-hidden flex items-center">
      {/* Subtle ambient light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 15% 60%, rgba(104,210,223,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 85% 20%, rgba(104,210,223,0.05) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-20 items-center">

          {/* Left: Headline + CTA */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan/70 mb-10 flex items-center gap-4"
            >
              <span className="w-10 h-px bg-cyan/40 inline-block" />
              CTV Ad Monetization
            </motion.p>

            <h1
              className="display-serif text-white mb-8"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 4rem)' }}
            >
              <CharacterReveal text="We help CTV publishers " delay={0} />
              <br className="hidden lg:block" />
              <motion.span
                className="brush-highlight"
                initial={{ color: '#FFFFFF' }}
                animate={{ color: '#FFFFFF' }}
              >
                <motion.svg
                  viewBox="0 0 520 90" fill="none" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true" preserveAspectRatio="none"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1.32, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                >
                  <path d="M8 45c2-18 20-30 45-34 30-6 70-8 110-7 50 1 100 3 150 6 40 3 85 5 120 10 25 4 55 10 65 22 8 10 2 22-12 28-20 8-50 12-80 13-55 2-110 0-165-2-50-2-100-4-150-3-35 1-70 3-80-6-4-4-5-10-4-16 1-5 3-9 6-11z" fill="url(#brush-grad)" />
                  <defs>
                    <linearGradient id="brush-grad" x1="0" y1="45" x2="520" y2="45" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#68D2DF" /><stop offset="1" stopColor="#90e0ef" />
                    </linearGradient>
                  </defs>
                </motion.svg>
                <CharacterReveal text="build, optimize, and scale" delay={0.84} />
              </motion.span>
              {' '}
              <CharacterReveal text="their ad monetization" delay={1.4} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.7 }}
              className="text-neutral-400 text-lg max-w-[480px] leading-relaxed mb-12 font-light"
            >
              From launch to yield optimization, we help you build a monetization stack that performs today and scales tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="h-12 px-8 bg-cyan text-navy font-semibold text-sm uppercase tracking-[0.12em] rounded-sm hover:bg-cyan-a11y transition-colors inline-flex items-center gap-2.5"
              >
                Book a Free Call <ArrowRight size={14} />
              </Link>
              <Link
                href="/services"
                className="h-12 px-8 border border-white/15 text-white/80 font-medium text-sm uppercase tracking-[0.12em] rounded-sm hover:border-cyan/60 hover:text-white transition-all inline-flex items-center"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Right: Stat cluster (desktop only) */}
          <div className="hidden lg:flex flex-col gap-3">
            {[
              { value: '5.4x', label: 'Average ROAS', delay: 2.5 },
              { value: '50+', label: 'Clients Grown', delay: 2.7 },
              { value: '98%', label: 'Retention Rate', delay: 2.9 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: stat.delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-lg border border-white/8 bg-white/[0.03] p-5"
              >
                <span className="display-serif text-cyan block leading-none mb-2" style={{ fontSize: '2.5rem' }}>
                  {stat.value}
                </span>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan/60 animate-bounce-gentle"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
