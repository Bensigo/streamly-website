'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy px-6">
      <div className="text-center max-w-[500px]">
        {/* Animated 404 */}
        <motion.div
          className="w-[200px] h-[200px] mx-auto mb-8 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-cyan/30" />
          <div className="absolute inset-4 rounded-full border-2 border-cyan/20" />
          <div className="absolute inset-8 rounded-full border-2 border-cyan/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-[family-name:var(--font-noto)] text-5xl text-cyan">404</span>
          </div>
        </motion.div>

        <h1 className="font-[family-name:var(--font-noto)] text-4xl lg:text-[56px] text-white mb-4">Page Not Found</h1>
        <p className="text-lg text-cyan mb-12">Sorry, we couldn&apos;t find what you&apos;re looking for.</p>

        {/* Search */}
        <div className="relative max-w-[400px] mx-auto mb-8">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-5" />
          <input
            type="text"
            placeholder="Search or try a keyword..."
            className="w-full pl-10 pr-4 py-3 border border-cyan rounded-xl bg-transparent text-white text-sm placeholder:text-neutral-5 focus:outline-none focus:ring-2 focus:ring-cyan/30"
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="ghost" size="sm">Go Home</Button>
          <Button href="/services" variant="ghost" size="sm">View Services</Button>
          <Button href="/case-studies" variant="ghost" size="sm">Browse Case Studies</Button>
          <Button href="/contact" variant="ghost" size="sm">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
