'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const computedDelay = Math.max(0, delay) * 0.08;
  const classes = ['fade-in', delay ? `fade-in--delay-${delay}` : '', className].filter(Boolean).join(' ');
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: '0px 0px 800px 0px', once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className={classes}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
      animate={hasAnimated ? (shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }) : undefined}
      transition={{ duration: shouldReduceMotion ? 0.5 : 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: computedDelay }}
    >
      {children}
    </motion.div>
  );
}
