'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchablePages } from '@/lib/data';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filtered = query
    ? searchablePages.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchablePages;

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      router.push(filtered[selectedIndex].href);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 top-[20%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[600px] bg-[var(--bg-primary)] rounded-xl shadow-xl border border-[var(--border-color)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 border-b border-[var(--border-color)]">
              <Search size={20} className="text-[var(--text-tertiary)]" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search pages, services..."
                className="flex-1 h-12 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] font-[family-name:var(--font-noto)] text-base focus:outline-none"
              />
              <button onClick={onClose} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)]" aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[320px] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="text-[var(--text-tertiary)] text-sm text-center py-8">No pages found. Try different keywords.</p>
              ) : (
                filtered.slice(0, 8).map((page, i) => (
                  <button
                    key={page.href}
                    onClick={() => { router.push(page.href); onClose(); }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                      i === selectedIndex ? 'bg-cyan/10 text-cyan' : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    <span className="text-sm font-medium">{page.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      page.category === 'Services' ? 'bg-cyan/15 text-cyan' : 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]'
                    }`}>
                      {page.category}
                    </span>
                  </button>
                ))
              )}
            </div>

            <div className="px-4 py-2 border-t border-[var(--border-color)] flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
              <span>↑↓ Navigate</span>
              <span>↵ Open</span>
              <span>Esc Close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
