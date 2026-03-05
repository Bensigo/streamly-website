import Link from 'next/link';
import { ArrowRight, Check, Compass, BrainCircuit, Handshake } from 'lucide-react';
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A8A8A] mb-4">What We Do</p>
              <h2 className="display-heading-lg text-[var(--text-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Three Ways We Help
              </h2>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#8A8A8A] hover:text-cyan transition-colors">
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
                icon: Compass,
                bullets: [
                  'Monetization audit & gap analysis',
                  'Ad stack architecture & implementation',
                  'Demand partner evaluation & onboarding',
                  'Ongoing strategic advisory & leadership',
                ],
              },
              {
                number: '02',
                title: 'AI-Augmented Ad Ops & Yield',
                tagline: 'Fully managed, AI-powered yield optimization and ad operations — without building an internal team.',
                icon: BrainCircuit,
                bullets: [
                  'Real-time yield optimization',
                  'Campaign trafficking & QA',
                  'Floor price & inventory management',
                  'Performance reporting & insights',
                ],
              },
              {
                number: '03',
                title: 'Supply Partnerships & Market Entry',
                tagline: 'Grow your publisher footprint in MEA with market intelligence and active partnership development.',
                icon: Handshake,
                bullets: [
                  'MEA market intelligence & mapping',
                  'Publisher outreach & relationship building',
                  'Partnership negotiation & onboarding',
                  'Comprehensive market entry programs',
                ],
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
              <FadeIn key={service.number} delay={i * 0.1} className="flex flex-shrink-0">
                <Link
                  href="/services"
                  className="group flex flex-col w-[340px] md:w-[380px] rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#0A0A0A] transition-all duration-300 overflow-hidden"
                >
                  {/* Header with icon */}
                  <div className="px-8 pt-8 pb-6 bg-[#FAFAFA]">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center mb-5">
                      <Icon size={20} className="text-cyan" />
                    </div>
                    <h3 className="display-heading-lg text-[#0A0A0A] text-lg mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#737373] leading-relaxed font-light">
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
                          <span className="text-sm text-[#404040] leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-5 border-t border-[#E5E5E5]">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] group-hover:text-cyan group-hover:gap-3 transition-all duration-200">
                        Explore service <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Mobile: View All link */}
        <div className="md:hidden px-6 mt-6">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[#8A8A8A] hover:text-cyan transition-colors">
            View All Services <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ===== WHAT WE DO — dark section, sticky left / scrolling right ===== */}
      <section className="relative py-32 px-6 bg-[#0A0A0A] overflow-hidden rounded-[2rem]  mx-4 my-4">
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — sticky on desktop */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <FadeIn>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                    alt="Team collaborating on CTV strategy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#737373] mb-4">What We Do</p>
                <h2 className="display-heading-lg text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  CTV Monetization, End to End
                </h2>
              </FadeIn>
            </div>

            {/* Right — scrolls on desktop */}
            <div className="flex flex-col justify-center gap-8">
              <FadeIn delay={0.1}>
                <p className="text-neutral-300 text-lg leading-relaxed font-light">
                  The streaming landscape in MEA is at an exciting inflection point. CTV publishers are launching and scaling ad-supported tiers. Audiences are growing. And the programmatic infrastructure that turns that audience into sustainable revenue is rapidly maturing across the region.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-neutral-300 text-lg leading-relaxed font-light">
                  Streamly exists to help publishers and adtech vendors make the most of this moment.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="w-12 h-[1.5px] bg-[#404040]" />
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="text-neutral-400 text-base leading-relaxed font-light">
                  We bring hands-on CTV monetization and adtech expertise to the businesses shaping streaming in MEA — combining strategic advisory, practical implementation, and AI-augmented managed services to help our clients build revenue operations that are built to last and built to grow.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 h-12 px-8 bg-cyan text-[#0A0A0A] font-semibold text-sm uppercase tracking-[0.12em] rounded-sm hover:bg-cyan-a11y transition-colors w-fit"
                >
                  Explore Our Services <ArrowRight size={14} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS — light section ===== */}
      <section className="py-32 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 pb-7 border-b border-[var(--border-color)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A8A8A] mb-4">How It Works</p>
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
                    <div className="w-7 h-[1.5px] bg-[#D4D4D4] mb-7" />
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A8A8A] mb-4">From the Blog</p>
              <h2 className="display-heading-lg text-[var(--text-primary)]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Latest Insights
              </h2>
            </div>
            <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[var(--text-tertiary)] hover:text-cyan transition-colors">
              View All <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
                <FadeIn key={post.id} delay={i * 0.1}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col border border-[#E5E5E5] rounded-xl overflow-hidden hover:border-[#0A0A0A] hover:shadow-sm transition-all duration-300 bg-white h-full"
                  >
                    <div className="relative overflow-hidden flex-shrink-0 aspect-video">
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out" />
                      ) : (
                        <div className="w-full h-full bg-[#F0F0F0]" />
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-sm mb-4 w-fit bg-[#F0F0F0] text-[#737373]">
                        {post.category}
                      </span>
                      <h3
                        className="display-heading-lg text-[#0A0A0A] mb-3 group-hover:text-cyan transition-colors duration-200 flex-1"
                        style={{ fontSize: '1.05rem' }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#737373] mb-4 line-clamp-2 leading-relaxed font-light">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-[#8A8A8A] mt-auto pt-4 border-t border-[#E5E5E5] font-medium">
                        <span>{post.readTime}</span>
                        <span className="text-[#D4D4D4]">·</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-36 px-6 bg-[#0A0A0A] rounded-[2rem] mx-4 my-4">
        <FadeIn>
          <div className="max-w-[680px] mx-auto text-center">
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
          </div>
        </FadeIn>
      </section>
    </>
  );
}
