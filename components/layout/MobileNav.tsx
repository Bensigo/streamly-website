'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, BookOpen, Mail, MoreHorizontal, X, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Services', href: '/services', icon: Layers },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Contact', href: '/contact', icon: Mail },
];

const moreLinks = [
  { section: 'About', items: [
    { label: 'Our Story', href: '/about' },
    { label: 'Team', href: '/about#team' },
    { label: 'Philosophy', href: '/about#philosophy' },
  ]},
  { section: 'Careers', items: [
    { label: 'Culture', href: '/careers' },
    { label: 'Open Positions', href: '/careers#positions' },
  ]},
  { section: 'Legal', items: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ]},
];

export default function MobileNav() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 h-[70px] bg-[var(--bg-primary)] border-t border-[var(--border-color)] flex items-center justify-around lg:hidden">
        {tabs.map(tab => {
          const isActive = tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-1 min-w-[48px] min-h-[48px] justify-center ${
                isActive ? 'text-cyan' : 'text-[var(--text-tertiary)]'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
              {isActive && (
                <span className="font-[family-name:var(--font-noto)] text-[10px] uppercase tracking-wider">
                  {tab.label}
                </span>
              )}
            </Link>
          );
        })}
        <button
          onClick={() => setShowMore(true)}
          className="flex flex-col items-center gap-1 min-w-[48px] min-h-[48px] justify-center text-[var(--text-tertiary)]"
          aria-label="More"
        >
          <MoreHorizontal size={24} strokeWidth={1.5} />
        </button>
      </nav>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setShowMore(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-primary)] rounded-t-xl max-h-[70vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-[family-name:var(--font-noto)] text-lg uppercase text-[var(--text-primary)]">More</span>
                  <button onClick={() => setShowMore(false)} className="p-2 text-[var(--text-tertiary)] hover:text-cyan" aria-label="Close">
                    <X size={20} />
                  </button>
                </div>

                {moreLinks.map((group, gi) => (
                  <div key={gi} className="mb-6">
                    <h3 className="font-[family-name:var(--font-noto)] text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                      {group.section}
                    </h3>
                    {group.items.map((item, ii) => (
                      <Link
                        key={ii}
                        href={item.href}
                        onClick={() => setShowMore(false)}
                        className="block py-3 font-[family-name:var(--font-noto)] text-sm text-[var(--text-primary)] hover:text-cyan transition-colors border-b border-[var(--border-color)] last:border-0"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  <a href="#" className="text-[var(--text-tertiary)] hover:text-cyan transition-colors"><Linkedin size={20} /></a>
                  <a href="#" className="text-[var(--text-tertiary)] hover:text-cyan transition-colors"><Github size={20} /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
