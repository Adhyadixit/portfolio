'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
  priority?: boolean;
  sizes?: string;
  intensity?: number; // Kept for prop typing, but unused
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
  // Parallax tracking removed to fix severe scroll jank
  return (
    <motion.div
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
