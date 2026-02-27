'use client';

import dynamic from 'next/dynamic';

const LazyWhoWeServeAccordion = dynamic(() => import('../WhoWeServeAccordion'), {
  ssr: false,
  loading: () => <div className="section-loading" aria-hidden="true" />,
});

export default LazyWhoWeServeAccordion;
