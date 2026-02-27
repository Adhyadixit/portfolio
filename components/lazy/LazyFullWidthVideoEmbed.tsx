'use client';

import dynamic from 'next/dynamic';

const LazyFullWidthVideoEmbed = dynamic(() => import('../FullWidthVideoEmbed'), {
  ssr: false,
  loading: () => <div className="section-loading" aria-hidden="true" />,
});

export default LazyFullWidthVideoEmbed;
