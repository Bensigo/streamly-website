'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { navLinks } from '@/lib/data';

interface NavbarProps {
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      if (currentY > 200) {
        setVisible(currentY < lastScrollY);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 h-[70px] transition-transform duration-300 ease-in-out hidden lg:flex items-center ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)]' : 'bg-transparent'}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Streamly" width={200} height={120} className="h-14 w-auto" priority />
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-noto)] text-[13px] uppercase tracking-[0.05em] transition-colors duration-150 relative ${
                  isActive
                    ? 'text-cyan'
                    : scrolled
                    ? 'text-[var(--text-primary)] hover:text-cyan'
                    : 'text-white/90 hover:text-cyan'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenSearch}
            className={`p-2 transition-colors hover:text-cyan ${scrolled ? 'text-[var(--text-primary)]' : 'text-white/90'}`}
            title="Press Cmd+K"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Link
            href="/contact"
            className="h-10 px-6 bg-cyan text-navy font-[family-name:var(--font-noto)] text-sm uppercase tracking-wider rounded-[var(--radius-sm)] hover:bg-cyan-a11y hover:shadow-lg transition-all duration-200 flex items-center"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
