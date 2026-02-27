'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, BookOpen, Mail } from 'lucide-react';

const tabs = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Services', href: '/services', icon: Layers },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
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
    </nav>
  );
}
