'use client';

import dynamic from 'next/dynamic';

const LazyFullWidthCarousel = dynamic(() => import('../FullWidthCarousel'), {
  ssr: false,
  loading: () => <div className="section-loading" aria-hidden="true" />,
});

export default LazyFullWidthCarousel;
