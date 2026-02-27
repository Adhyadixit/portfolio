'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type AudienceCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

type WhoWeServeAccordionProps = {
  title: string;
  cards: AudienceCard[];
  defaultActiveIndex?: number | null;
};

export default function WhoWeServeAccordion({
  title,
  cards,
  defaultActiveIndex = null,
}: WhoWeServeAccordionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hoverTimerRef = useRef<number | null>(null);

  const safeDefaultIndex = useMemo((): number | null => {
    if (defaultActiveIndex === null) return null;
    if (cards.length === 0) return null;
    return Math.min(Math.max(defaultActiveIndex, 0), cards.length - 1);
  }, [cards.length, defaultActiveIndex]);

  const [activeIndex, setActiveIndex] = useState<number | null>(safeDefaultIndex);

  const clearHoverTimer = useCallback(() => {
    if (hoverTimerRef.current !== null) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  const setActiveWithLatency = useCallback(
    (index: number) => {
      clearHoverTimer();
      hoverTimerRef.current = window.setTimeout(() => {
        setActiveIndex(index);
      }, 220);
    },
    [clearHoverTimer]
  );

  const setActiveImmediately = useCallback((index: number) => {
    clearHoverTimer();
    setActiveIndex(index);
  }, [clearHoverTimer]);

  const collapseAll = useCallback(() => {
    clearHoverTimer();
    setActiveIndex(null);
  }, [clearHoverTimer]);

  const resetActive = useCallback(() => {
    clearHoverTimer();
    setActiveIndex(safeDefaultIndex);
  }, [clearHoverTimer, safeDefaultIndex]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          collapseAll();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [collapseAll]);

  return (
    <section className="who-we-serve" aria-label={title} ref={(node) => {
      sectionRef.current = node;
    }}>
      <div className="who-we-serve__outer">
        <div className="fluid-container-narrow">
          <h2 className="who-we-serve__headline">{title}</h2>

          <div className="who-we-serve__list" onMouseLeave={resetActive}>
            {cards.map((card, index) => {
              const isActive = index === activeIndex;
              return (
                <article
                  key={card.title}
                  className={`who-we-serve__row ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveWithLatency(index)}
                  onFocusCapture={() => setActiveImmediately(index)}
                  onClick={() => setActiveImmediately(index)}
                  onBlurCapture={(e) => {
                    const nextTarget = e.relatedTarget as Node | null;
                    if (!nextTarget || !e.currentTarget.contains(nextTarget)) {
                      resetActive();
                    }
                  }}
                >
                  <div className="who-we-serve__row-inner">
                    <div className="who-we-serve__media" aria-hidden>
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'left center' }}
                        sizes="(min-width: 1024px) 680px, 100vw"
                      />
                    </div>

                    <div className="who-we-serve__content">
                      <h3 className="who-we-serve__title">
                        <button
                          className="who-we-serve__title-btn"
                          type="button"
                          aria-expanded={isActive}
                          onClick={() => setActiveImmediately(index)}
                        >
                          {card.title}
                        </button>
                      </h3>

                      <div className="who-we-serve__hidden">
                        <p className="who-we-serve__description">{card.description}</p>
                        <Link href={card.href} className="primary-button who-we-serve__cta">
                          <span>Learn More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
