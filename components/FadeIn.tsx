'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const computedDelay = Math.max(0, delay) * 0.12;
  const classes = ['fade-in', delay ? `fade-in--delay-${delay}` : '', className].filter(Boolean).join(' ');

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: computedDelay }}
    >
      {children}
    </motion.div>
  );
}
