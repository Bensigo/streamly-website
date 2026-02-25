'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/lib/theme';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import Footer from './Footer';
import CommandPalette from './CommandPalette';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <MobileNav />
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
