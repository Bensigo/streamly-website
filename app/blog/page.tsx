'use client';

import { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import FilterChips from '@/components/ui/FilterChips';
import Button from '@/components/ui/Button';
import { blogPosts } from '@/lib/data';

const allPosts = [
  ...blogPosts,
  { id: 'privacy-first-ads', title: 'Privacy-First Advertising in a Cookieless World', excerpt: 'With third-party cookies on the way out, here is how to build effective ad strategies using first-party data and contextual signals.', category: 'Ad Tech', readTime: '7 min read', date: 'Jan 20, 2026', author: 'Marcus Rivera' },
  { id: 'next-js-performance', title: 'Next.js 15 Performance Optimization Guide', excerpt: 'Deep dive into server components, streaming, and partial prerendering for blazing-fast web applications.', category: 'Software', readTime: '12 min read', date: 'Jan 15, 2026', author: 'Alex Chen' },
  { id: 'llm-production', title: 'Taking LLMs from Prototype to Production', excerpt: 'Lessons learned from deploying large language models at scale—monitoring, guardrails, and cost optimization.', category: 'AI', readTime: '9 min read', date: 'Jan 8, 2026', author: 'Priya Sharma' },
];

export default function BlogPage() {
  const [active, setActive] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = allPosts
    .filter(p => active === 'All' || p.category === active)
    .filter(p => !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const featured = allPosts[0];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-cyan/10" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <h1 className="font-[family-name:var(--font-noto)] text-4xl lg:text-[56px] text-white leading-tight mb-4">Insights</h1>
            <p className="text-lg text-cyan">Thoughts on growth, technology, and strategy</p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-cyan/30 to-navy" />
              <div className="py-4">
                <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase bg-cyan/15 text-cyan rounded-[var(--radius-sm)] mb-3">Featured</span>
                <h2 className="font-[family-name:var(--font-noto)] text-3xl text-[var(--text-primary)] mb-3 leading-tight">{featured.title}</h2>
                <p className="text-sm text-[var(--text-tertiary)] mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)] mb-6">
                  <span>{featured.readTime}</span><span>·</span><span>{featured.author}</span>
                </div>
                <span className="text-sm font-semibold text-cyan inline-flex items-center gap-1 cursor-pointer hover:underline">
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <FilterChips categories={['All', 'Ad Tech', 'Software', 'AI']} active={active} onChange={setActive} />
          <div className="relative w-full md:w-60">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
            <input
              type="text"
              placeholder="Search articles"
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
                <FadeIn key={post.id} delay={i * 0.08}>
                  <article className="group border border-[var(--border-gray)] rounded-xl overflow-hidden hover:border-cyan hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-cyan/20 to-navy" />
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase bg-cyan/15 text-cyan rounded-[var(--radius-sm)] mb-3">{post.category}</span>
                      <h3 className="font-[family-name:var(--font-noto)] text-xl text-[var(--text-primary)] mb-2 leading-tight group-hover:text-cyan transition-colors">{post.title}</h3>
                      <p className="text-sm text-[var(--text-tertiary)] mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
                        <span>{post.readTime}</span><span>·</span><span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
