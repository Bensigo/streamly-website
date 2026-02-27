import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  heroGradient: string;
  imageUrl: string;
}

export interface BlogPostWithContent extends BlogPost {
  contentHtml: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
    const { data } = matter(raw);

    return {
      slug: data.slug || slug,
      title: data.title || '',
      metaDescription: data.metaDescription || '',
      category: data.category || 'General',
      author: data.author || 'Streamly Team',
      readTime: data.readTime || '5 min read',
      date: data.date || '',
      heroGradient: data.heroGradient || 'from-cyan/30 to-navy',
      imageUrl: data.imageUrl || '',
    } as BlogPost;
  });

  // Sort newest first
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPostWithContent | null> {
  // Try to find the file by slug (filename or frontmatter slug)
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

  for (const filename of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
    const { data, content } = matter(raw);
    const fileSlug = data.slug || filename.replace(/\.md$/, '');

    if (fileSlug === slug) {
      const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);
      const contentHtml = processed.toString();

      return {
        slug: fileSlug,
        title: data.title || '',
        metaDescription: data.metaDescription || '',
        category: data.category || 'General',
        author: data.author || 'Streamly Team',
        readTime: data.readTime || '5 min read',
        date: data.date || '',
        heroGradient: data.heroGradient || 'from-cyan/30 to-navy',
        imageUrl: data.imageUrl || '',
        contentHtml,
      };
    }
  }

  return null;
}
