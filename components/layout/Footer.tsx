'use client';

import Link from 'next/link';
import { Send, Linkedin, Github, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] border-t border-[var(--border-color)] pb-[70px] lg:pb-0">
      <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-8">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-[family-name:var(--font-noto)] text-xl uppercase tracking-wider text-cyan">
              STREAMLY
            </Link>
            <p className="text-[var(--text-tertiary)] text-sm mt-4 leading-relaxed">
              Smart technology for ambitious teams
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#adtech" className="text-[var(--text-tertiary)] text-sm hover:text-cyan transition-colors">Ad Tech & Programmatic</Link></li>
              <li><Link href="/services#software" className="text-[var(--text-tertiary)] text-sm hover:text-cyan transition-colors">Software Development</Link></li>
              <li><Link href="/services#ai" className="text-[var(--text-tertiary)] text-sm hover:text-cyan transition-colors">AI Integration</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-[var(--text-tertiary)] text-sm hover:text-cyan transition-colors">Blog</Link></li>
              <li><Link href="/about#team" className="text-[var(--text-tertiary)] text-sm hover:text-cyan transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4">Contact</h3>
            <a href="mailto:hello@streamly.io" className="text-[var(--text-tertiary)] text-sm hover:text-cyan transition-colors block mb-4">
              hello@streamly.io
            </a>
            <p className="text-[var(--text-tertiary)] text-xs mb-2">Get updates</p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white border border-[var(--border-gray)] rounded-l-[var(--radius-md)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-cyan focus:outline-none"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-cyan flex items-center justify-center rounded-r-[var(--radius-md)] hover:bg-cyan-a11y transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} className="text-navy" />
              </button>
            </form>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[var(--text-tertiary)] hover:text-cyan hover:scale-110 transition-all" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="text-[var(--text-tertiary)] hover:text-cyan hover:scale-110 transition-all" aria-label="GitHub"><Github size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-tertiary)] text-xs">&copy; 2026 Streamly. All rights reserved.</p>
          <button
            onClick={toggleTheme}
            className="text-[var(--text-tertiary)] hover:text-cyan transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </footer>
  );
}
