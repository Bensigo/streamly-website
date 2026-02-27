import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import HomeHero from '@/components/sections/HomeHero';
import HomeTestimonials from '@/components/sections/HomeTestimonials';
import { blogPosts, processSteps } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* ===== HERO (client component — animations) ===== */}
      <HomeHero />

      {/* ===== SERVICES — Horizontal Scroll Cards ===== */}
      <section className="py-32 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-end justify-between mb-16 pb-7 border-b border-[var(--border-color)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan mb-4">What We Do</p>
              <h2 className="display-heading-lg text-[var(--text-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Three Ways We Help
              </h2>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[var(--text-tertiary)] hover:text-cyan transition-colors">
              View All Services <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-stretch gap-5 px-6 lg:px-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] pb-4" style={{ minWidth: 'min-content' }}>
            {[
              {
                number: '01',
                title: 'Strategic Monetization Advisory',
                tagline: 'Build or professionalize your ad monetization infrastructure with expert strategic leadership.',
                bullets: [
                  'Monetization audit & gap analysis',
                  'Ad stack architecture & implementation',
                  'Demand partner evaluation & onboarding',
                  'Ongoing strategic advisory & leadership',
                ],
                color: 'from-cyan/20 to-cyan/5',
              },
              {
                number: '02',
                title: 'AI-Augmented Ad Ops & Yield',
                tagline: 'Fully managed, AI-powered yield optimization and ad operations — without building an internal team.',
                bullets: [
                  'Real-time yield optimization',
                  'Campaign trafficking & QA',
                  'Floor price & inventory management',
                  'Performance reporting & insights',
                ],
                color: 'from-purple-500/20 to-purple-500/5',
              },
              {
                number: '03',
                title: 'Supply Partnerships & Market Entry',
                tagline: 'Grow your publisher footprint in MEA with market intelligence and active partnership development.',
                bullets: [
                  'MEA market intelligence & mapping',
                  'Publisher outreach & relationship building',
                  'Partnership negotiation & onboarding',
                  'Comprehensive market entry programs',
                ],
                color: 'from-amber-500/20 to-amber-500/5',
              },
            ].map((service, i) => (
              <FadeIn key={service.number} delay={i * 0.1} className="flex flex-shrink-0">
                <Link
                  href="/services"
                  className="group flex flex-col w-[340px] md:w-[380px] rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-cyan/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient header */}
                  <div className={`bg-gradient-to-br ${service.color} px-8 pt-8 pb-6`}>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan/70 mb-4 block">
                      Service {service.number}
                    </span>
                    <h3 className="display-heading-lg text-[var(--text-primary)] text-lg mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--text-tertiary)] leading-relaxed font-light">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Bullets + CTA */}
                  <div className="px-8 pt-6 pb-8 flex flex-col flex-1">
                    <ul className="space-y-3 flex-1">
                      {service.bullets.map(bullet => (
                        <li key={bullet} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-sm bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={10} className="text-cyan" strokeWidth={2.5} />
                          </div>
                          <span className="text-sm text-[var(--text-secondary)] leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-5 border-t border-[var(--border-color)]">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan group-hover:gap-3 transition-all duration-200">
                        Explore service <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile: View All link */}
        <div className="md:hidden px-6 mt-6">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-tertiary)] hover:text-cyan transition-colors">
            View All Services <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ===== WHAT WE DO — premium dark section ===== */}
      <section className="relative py-32 px-6 bg-[#0D0D1A] overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 80% 30%, rgba(104,210,223,0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 10% 80%, rgba(124,58,237,0.04) 0%, transparent 60%)' }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto">
          {/* Header */}
          <FadeIn>
            <div className="mb-20 pb-7 border-b border-white/8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan/70 mb-4">What We Do</p>
              <h2 className="display-heading-lg text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                CTV Monetization, End to End
              </h2>
            </div>
          </FadeIn>

          {/* Hero image + intro text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
            <FadeIn>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                  alt="Team collaborating on CTV strategy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/60 to-transparent" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col justify-center">
                <p className="text-neutral-300 text-lg leading-relaxed mb-6 font-light">
                  The streaming landscape in MEA is at an exciting inflection point. CTV publishers are launching and scaling ad-supported tiers. Audiences are growing. And the programmatic infrastructure that turns that audience into sustainable revenue is rapidly maturing across the region.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light">
                  Streamly exists to help publishers and adtech vendors make the most of this moment.
                </p>
                <div className="w-12 h-[1.5px] bg-cyan/40 mb-8" />
                <p className="text-neutral-400 text-base leading-relaxed font-light">
                  We bring hands-on CTV monetization and adtech expertise to the businesses shaping streaming in MEA — combining strategic advisory, practical implementation, and AI-augmented managed services to help our clients build revenue operations that are built to last and built to grow.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Image mosaic — horizontal scroll on mobile, 3-col grid on desktop */}
          <div className="mb-24 -mx-6 md:mx-0">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-0 md:grid md:grid-cols-3 md:gap-4">
              {[
                { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80', alt: 'Data analytics dashboard', label: 'Strategy', desc: 'Monetization roadmaps built for your market', delay: 0 },
                { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80', alt: 'AI-powered optimization', label: 'AI-Powered', desc: 'Yield optimization that never sleeps', delay: 0.1 },
                { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80', alt: 'Partnership and growth', label: 'Partnerships', desc: 'Connect with the right publishers and vendors', delay: 0.2 },
              ].map((img) => (
                <FadeIn key={img.label} delay={img.delay} className="flex-shrink-0 w-[280px] md:w-auto">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/2] group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/80 via-[#0D0D1A]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan mb-2">{img.label}</p>
                      <p className="text-sm text-white/70 font-light leading-snug">{img.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* CTA */}
          <FadeIn delay={0.1}>
            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 h-12 px-8 bg-cyan text-navy font-semibold text-sm uppercase tracking-[0.12em] rounded-sm hover:bg-cyan-a11y transition-colors"
              >
                Explore Our Services <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== PROCESS — light section ===== */}
      <section className="py-32 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 pb-7 border-b border-[var(--border-color)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan mb-4">How It Works</p>
            <h2 className="display-heading-lg text-[var(--text-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              A proven four-step process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className={`relative py-10 pr-10 ${i < processSteps.length - 1 ? 'lg:border-r border-[var(--border-color)]' : ''} ${i > 0 ? 'lg:pl-10' : ''} border-b lg:border-b-0 border-[var(--border-color)] last:border-b-0`}>
                  <span className="display-serif text-[var(--border-color)] select-none absolute top-6 right-6 leading-none" style={{ fontSize: '5rem' }}>
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <div className="w-7 h-[1.5px] bg-cyan mb-7" />
                    <h3 className="display-heading-lg text-[var(--text-primary)] mb-3" style={{ fontSize: '1.05rem' }}>{step.title}</h3>
                    <p className="text-sm text-[var(--text-tertiary)] leading-relaxed font-light">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS (client component — interactive) ===== */}
      <HomeTestimonials />

      {/* ===== BLOG — light section ===== */}
      <section className="py-32 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-16 pb-7 border-b border-[var(--border-color)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan mb-4">From the Blog</p>
              <h2 className="display-heading-lg text-[var(--text-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Latest Insights
              </h2>
            </div>
            <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[var(--text-tertiary)] hover:text-cyan transition-colors">
              View All <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => {
              const categoryColorMap: Record<string, string> = {
                'Monetization Strategy': 'bg-cyan/10 text-cyan',
                'Ad Ops & Yield': 'bg-purple-500/10 text-purple-400',
                'Market Entry': 'bg-amber-500/10 text-amber-400',
              };
              const categoryColor = categoryColorMap[post.category] || 'bg-cyan/10 text-cyan';
              return (
                <FadeIn key={post.id} delay={i * 0.1}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col border border-[var(--border-color)] rounded-xl overflow-hidden hover:border-cyan/40 hover:shadow-sm transition-all duration-300 bg-[var(--bg-primary)] h-full"
                  >
                    <div className="relative overflow-hidden flex-shrink-0 aspect-video">
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-cyan/15 via-navy/30 to-navy" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className={`inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-sm mb-4 w-fit ${categoryColor}`}>
                        {post.category}
                      </span>
                      <h3
                        className="display-heading-lg text-[var(--text-primary)] mb-3 group-hover:text-cyan transition-colors duration-200 flex-1"
                        style={{ fontSize: '1.05rem' }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm text-[var(--text-tertiary)] mb-4 line-clamp-2 leading-relaxed font-light">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)] mt-auto pt-4 border-t border-[var(--border-color)] font-medium">
                        <span>{post.readTime}</span>
                        <span className="text-[var(--border-color)]">·</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA — dark section ===== */}
      <section className="relative py-36 px-6 bg-[#0D0D1A] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(104,210,223,0.06) 0%, transparent 70%)' }}
        />
        <FadeIn>
          <div className="relative z-10 max-w-[680px] mx-auto text-center">
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
              className="inline-flex items-center gap-3 h-13 px-10 bg-cyan text-navy font-semibold text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-cyan-a11y transition-colors"
              style={{ height: '3.25rem' }}
            >
              Book a Free Call <ArrowRight size={15} />
            </Link>
            <p className="text-neutral-600 text-xs mt-9 tracking-[0.2em] uppercase font-light">
              No commitment &middot; Response within 1 business day
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
