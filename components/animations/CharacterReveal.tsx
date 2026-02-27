'use client';

import { motion } from 'framer-motion';

interface CharacterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

export default function CharacterReveal({ text, className = '', delay = 0, charDelay = 0.03 }: CharacterRevealProps) {
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={className}
      aria-label={text}
      style={{ display: 'inline', lineHeight: 1.2 }}
    >
      {words.map((word, wi) => {
        const startIndex = charIndex;
        charIndex += word.length + 1;
        return (
          <span key={wi} style={{ whiteSpace: 'nowrap', display: 'inline-block', marginRight: wi < words.length - 1 ? '0.27em' : undefined }}>
            {word.split('').map((char, ci) => (
              <motion.span
                key={ci}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.4,
                  delay: delay + (startIndex + ci) * charDelay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
}
