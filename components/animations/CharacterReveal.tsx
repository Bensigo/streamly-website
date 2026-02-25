'use client';

import { motion } from 'framer-motion';

interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

export default function CharacterReveal({ text, className = '', delay = 0, charDelay = 0.03 }: CharacterRevealProps) {
  const characters = text.split('');

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={className}
      aria-label={text}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.4,
            delay: delay + i * charDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
