'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, User, Clock } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import FilterChips from '@/components/ui/FilterChips';
import type { BlogPost } from '@/lib/blog';

const categoryColors: Record<string, string> = {
  'Monetization Strategy': 'bg-[#F0F0F0] text-[#737373]',
  'Ad Ops & Yield': 'bg-[#F0F0F0] text-[#737373]',
  'Market Entry': 'bg-[#F0F0F0] text-[#737373]',
};

interface Props {
  posts: BlogPost[];
}

export default function BlogPageClient({ posts }: Props) {
  const [active, setActive] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];

  const filtered = posts
    .filter(p => active === 'All' || p.category === active)
    .filter(p => !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const featured = posts[0];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="relative z-10 text-center px-6 py-20">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#737373] mb-6 flex items-center justify-center gap-4">
              <span className="w-10 h-px bg-[#D4D4D4]" />
              Insights &amp; Guides
              <span className="w-10 h-px bg-[#D4D4D4]" />
            </p>
            <h1
              className="display-serif text-[#0A0A0A] mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            >
              CTV Monetization<br />Insights
            </h1>
            <p className="text-lg text-[#737373] max-w-[480px] mx-auto font-light leading-relaxed">
              Practical guides on CTV ad monetization, yield optimization, and adtech market strategy for the MEA streaming ecosystem.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-14 px-6 border-b border-[var(--border-color)]">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                {/* Image */}
                <div className="aspect-[16/9] rounded-2xl overflow-hidden relative">
                  {featured.imageUrl ? (
                    <img
                      src={featured.imageUrl}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan/25 via-navy/60 to-navy" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <span className={`text-xs font-semibold uppercase px-3 py-1 rounded-sm ${categoryColors[featured.category] || 'bg-cyan/15 text-cyan'}`}>
                      {featured.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8A8A8A] mb-3">
                    Featured Article
                  </span>
                  <h2
                    className="display-heading-lg text-[var(--text-primary)] mb-4 group-hover:text-cyan transition-colors"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-[var(--text-tertiary)] mb-6 leading-relaxed">
                    {featured.metaDescription}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)] mb-6">
                    <span className="flex items-center gap-1.5">
                      <User size={13} />
                      {featured.author}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] group-hover:text-cyan group-hover:gap-3 transition-all duration-200">
                    Read Article <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Filter & Search */}
      <section className="pt-10 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <FilterChips categories={categories} active={active} onChange={setActive} />
          <div className="relative w-full md:w-64">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
            <input
              type="text"
              placeholder="Search articles…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-[var(--border-gray)] rounded-xl text-sm bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-cyan focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-[1200px] mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-[var(--text-tertiary)] py-16">No articles found. Try a different search.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.07}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col border border-[#E5E5E5] rounded-xl overflow-hidden hover:border-[#0A0A0A] hover:shadow-sm transition-all duration-300 bg-white h-full"
                  >
                    {/* Card image area */}
                    <div className="relative overflow-hidden flex-shrink-0 aspect-video">
                      {post.imageUrl ? (
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#F0F0F0]" />
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className={`inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-sm mb-4 w-fit ${categoryColors[post.category] || 'bg-[#F0F0F0] text-[#737373]'}`}>
                        {post.category}
                      </span>
                      <h3 className="display-heading-lg text-[#0A0A0A] mb-3 group-hover:text-cyan transition-colors duration-200 flex-1" style={{ fontSize: '1.05rem' }}>
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#737373] mb-4 line-clamp-2 leading-relaxed font-light">
                        {post.metaDescription}
                      </p>
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
          )}
        </div>
      </section>
    </>
  );
}
