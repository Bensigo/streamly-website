'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 40,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const shapes = [
    { size: 120, x: '15%', y: '20%', opacity: 0.15, damping: 0.6, type: 'circle' },
    { size: 80, x: '75%', y: '30%', opacity: 0.1, damping: 0.4, type: 'circle' },
    { size: 60, x: '60%', y: '70%', opacity: 0.2, damping: 0.8, type: 'hexagon' },
    { size: 100, x: '25%', y: '75%', opacity: 0.12, damping: 0.5, type: 'circle' },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-cyan/30"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            opacity: shape.opacity,
            filter: 'blur(2px)',
          }}
          animate={{
            x: mouse.x * shape.damping,
            y: mouse.y * shape.damping,
            scale: [1, 1.08, 1],
          }}
          transition={{
            x: { type: 'spring', stiffness: 50, damping: 30 },
            y: { type: 'spring', stiffness: 50, damping: 30 },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}
    </div>
  );
}
