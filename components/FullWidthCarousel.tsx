'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';

type Slide = {
  image: string;
  alt: string;
  headline: string;
  subhead: string;
  copy: string;
  ctaHref: string;
  ctaLabel?: string;
};

type FullWidthCarouselProps = {
  slides: Slide[];
};

export default function FullWidthCarousel({ slides }: FullWidthCarouselProps) {
  const safeSlides = useMemo<Slide[]>(() => {
    if (slides.length === 0) {
      return [
        {
          image: '/images/hero-energy.png',
          alt: 'Institutional capital powering energy infrastructure',
          headline: 'Powering Industries That Drive Economies',
          subhead: 'Value & Impact',
          copy:
            'Rewiring global systems—from supply chains to energy grids—requires bold investment. Our platform is foundational in driving that change and delivering value along the way.',
          ctaHref: '/what-we-do',
          ctaLabel: 'Learn More',
        },
      ];
    }
    return slides;
  }, [slides]);

  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = safeSlides.length;
  const hasMultiple = slideCount > 1;
  const currentSlide = safeSlides[activeIndex];

  const goToIndex = useCallback(
    (nextIndex: number) => {
      if (!hasMultiple) return;
      setActiveIndex((nextIndex + slideCount) % slideCount);
    },
    [hasMultiple, slideCount]
  );

  const handleDot = useCallback(
    (index: number) => {
      if (!hasMultiple) return;
      setActiveIndex(index);
    },
    [hasMultiple]
  );

  const progressWidth = ((activeIndex + 1) / slideCount) * 100;

  return (
    <section className="full-width-carousel">
      <div className="full-width-carousel__image-wrap">
        {safeSlides.map((slide, idx) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            fill
            style={{
              objectFit: 'cover',
              opacity: idx === activeIndex ? 1 : 0,
              visibility: idx === activeIndex ? 'visible' : 'hidden',
              transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in-out',
              zIndex: idx === activeIndex ? 1 : 0,
              transform: 'translateZ(0)'
            }}
            priority={idx === 0}
          />
        ))}
      </div>
      <div className="slide__scrim">
        <div className="fluid-container-narrow">
          <div className="full-width-carousel__btn-wrap">
            <button
              className="slide__nav-btn slide__prev-btn"
              aria-label="Previous slide"
              tabIndex={hasMultiple ? 0 : -1}
              onClick={() => goToIndex(activeIndex - 1)}
              disabled={!hasMultiple}
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.11688 6.82524C0.00360102 6.99708 0.0223175 7.23056 0.173503 7.38181L6.61688 13.8252C6.78968 13.9978 7.06957 13.9976 7.2425 13.8252C7.41539 13.6523 7.41597 13.3718 7.24319 13.1989L1.11263 7.06831L7.2425 0.938436C7.41545 0.765486 7.41545 0.485761 7.2425 0.312812C7.06954 0.139932 6.7898 0.139886 6.61688 0.312812L0.173503 6.75618L0.11688 6.82524Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className="full-width-carousel__dots" aria-hidden={!hasMultiple}>
              {safeSlides.map((_, dotIdx) => (
                <button
                  key={`dot-${dotIdx}`}
                  className={`dots__dot ${dotIdx === activeIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  data-index={dotIdx}
                  tabIndex={hasMultiple ? 0 : -1}
                  onClick={() => handleDot(dotIdx)}
                  disabled={!hasMultiple}
                >
                  <div className="dot__inner" />
                </button>
              ))}
            </div>
            <button
              className="slide__nav-btn slide__next-btn"
              aria-label="Next slide"
              tabIndex={hasMultiple ? 0 : -1}
              onClick={() => goToIndex(activeIndex + 1)}
              disabled={!hasMultiple}
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.88312 6.82524C7.9964 6.99708 7.97768 7.23056 7.8265 7.38181L1.38312 13.8252C1.21032 13.9978 0.930431 13.9976 0.757501 13.8252C0.58461 13.6523 0.584034 13.3718 0.75681 13.1989L6.88737 7.06831L0.757501 0.938436C0.584551 0.765486 0.584551 0.485761 0.757501 0.312812C0.930455 0.139932 1.2102 0.139886 1.38312 0.312812L7.8265 6.75618L7.88312 6.82524Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="slide__progress-bar">
          <div className="slide__progress" style={{ width: `${progressWidth}%` }}></div>
        </div>
        <div className="fluid-container-narrow">
          <div className="slide__content">
            <h2 className="slide__headline">{currentSlide.headline}</h2>
            <div className="slide-text-content">
              <div>
                <div className="slide__subhead">{currentSlide.subhead}</div>
                <div className="slide__copy">
                  <p>{currentSlide.copy}</p>
                </div>
              </div>
              <div className="slide__cta">
                <Link href={currentSlide.ctaHref} className="primary-button primary-button--ghost">
                  <span>{currentSlide.ctaLabel ?? 'Learn More'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
