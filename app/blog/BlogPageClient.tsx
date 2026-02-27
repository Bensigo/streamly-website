'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Clock, User } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import FilterChips from '@/components/ui/FilterChips';
import type { BlogPost } from '@/lib/blog';

const categoryColors: Record<string, string> = {
  'Monetization Strategy': 'bg-cyan/15 text-cyan',
  'Ad Ops & Yield': 'bg-purple-500/15 text-purple-400',
  'Market Entry': 'bg-amber-500/15 text-amber-400',
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
      <section className="relative min-h-[40vh] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 section-dark" />
        <div className="relative z-10 text-center px-6 py-20">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">Insights & Guides</p>
            <h1
              className="display-heading text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            >
              CTV Monetization<br />Insights
            </h1>
            <p className="text-lg text-neutral-400 max-w-[480px] mx-auto">
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
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan mb-3">
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
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={14} />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.07}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block border border-[var(--border-gray)] rounded-2xl overflow-hidden hover:border-cyan hover:shadow-lg transition-all duration-300 bg-[var(--bg-primary)]"
                  >
                    {/* Card image area */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      {post.imageUrl ? (
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-cyan/20 via-navy/40 to-navy" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                      <div className="absolute inset-0 flex items-end p-5">
                        <span className={`text-[10px] font-semibold uppercase px-2.5 py-1 rounded-sm ${categoryColors[post.category] || 'bg-cyan/15 text-cyan'}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-[family-name:var(--font-inter)] font-700 text-[1.05rem] leading-snug text-[var(--text-primary)] mb-2 group-hover:text-cyan transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[var(--text-tertiary)] mb-4 line-clamp-2 leading-relaxed">
                        {post.metaDescription}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[var(--text-tertiary)]">
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User size={12} />
                          {post.author}
                        </span>
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
