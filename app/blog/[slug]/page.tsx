import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Streamly`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

const categoryColors: Record<string, string> = {
  'Monetization Strategy': 'bg-cyan/15 text-cyan',
  'Ad Ops & Yield': 'bg-purple-500/15 text-purple-400',
  'Market Entry': 'bg-amber-500/15 text-amber-400',
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter(p => p.slug !== post.slug).slice(0, 2);
  const categoryColor = categoryColors[post.category] || 'bg-cyan/15 text-cyan';

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-[70px]">
        <div className="absolute inset-0 section-dark" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 py-20 lg:py-28">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-cyan transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="mb-5">
            <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase rounded-sm ${categoryColor}`}>
              {post.category}
            </span>
          </div>

          <h1
            className="display-heading text-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            {post.title}
          </h1>

          <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
            {post.metaDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-tertiary)] border-t border-white/10 pt-6">
            <span className="flex items-center gap-2">
              <User size={15} className="text-cyan" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={15} className="text-cyan" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-cyan" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-[800px] mx-auto">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-navy">
        <div className="max-w-[800px] mx-auto">
          <div className="rounded-2xl p-8 lg:p-12 section-dark border border-white/10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">
              Let&apos;s Talk
            </p>
            <h2
              className="display-heading-lg text-white mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Ready to unlock your CTV revenue potential?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-[480px] mx-auto">
              Whether you&apos;re a publisher building your ad stack or a vendor growing in MEA, we&apos;d love to hear about your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 bg-cyan text-navy font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-cyan-a11y transition-colors"
            >
              Book a Call <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-[family-name:var(--font-inter)] font-800 text-xl text-[var(--text-primary)] mb-8">
              More from Streamly
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map(rel => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group block border border-[var(--border-gray)] rounded-xl p-6 hover:border-cyan hover:shadow-md transition-all duration-300 bg-[var(--bg-primary)]"
                >
                  <span className={`inline-block px-2.5 py-0.5 text-[10px] font-semibold uppercase rounded-sm mb-3 ${categoryColors[rel.category] || 'bg-cyan/15 text-cyan'}`}>
                    {rel.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-inter)] font-700 text-base text-[var(--text-primary)] leading-snug mb-2 group-hover:text-cyan transition-colors">
                    {rel.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)]">
                    <span>{rel.readTime}</span>
                    <span>·</span>
                    <span>{rel.author}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
