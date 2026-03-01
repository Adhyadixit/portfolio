'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
  priority?: boolean;
  sizes?: string;
  intensity?: number;
};

export default function ParallaxImage({
  src,
  alt,
  className,
  height = 900,
  width = 1400,
  priority = false,
  sizes = '100vw',
  intensity = 28,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [intensity, -intensity]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn('parallax-figure', className)}
    >
      <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} className="parallax-figure__img" />
    </motion.div>
  );
}
