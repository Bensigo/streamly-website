import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog — CTV Monetization Insights | Streamly',
  description: 'Expert insights on CTV ad monetization, yield optimization, and adtech partnerships in the Middle East and North Africa.',
  openGraph: {
    title: 'Blog — CTV Monetization Insights | Streamly',
    description: 'Expert insights on CTV ad monetization, yield optimization, and adtech partnerships in MEA.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogPageClient posts={posts} />;
}
