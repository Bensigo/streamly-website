'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';
import FadeIn from '@/components/animations/FadeIn';

export default function HomeTestimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <section className="py-32 px-6 bg-[#0A0A0A] rounded-[2rem] mx-4 my-4">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#737373] mb-20">What Clients Say</p>

          <div className="relative min-h-[200px]">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="display-serif text-white/10 leading-none select-none text-left mb-4" style={{ fontSize: '8rem', lineHeight: 0.7 }}>&ldquo;</div>
              <p className="display-serif text-white/90 leading-relaxed mb-12 -mt-4"
                 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600 }}>
                {currentTestimonial.quote}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/60 font-semibold text-xs border border-white/10">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm text-white/90">{currentTestimonial.name}</p>
                  <p className="text-xs text-[#737373] font-light">{currentTestimonial.role}, {currentTestimonial.company}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center items-center gap-5 mt-14">
            <button
              onClick={() => setTestimonialIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#737373] hover:border-white/30 hover:text-white transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={15} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`transition-all rounded-full cursor-pointer ${i === testimonialIndex ? 'w-6 h-1 bg-white' : 'w-1 h-1 bg-[#404040]'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setTestimonialIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#737373] hover:border-white/30 hover:text-white transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
