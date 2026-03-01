'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface ApproachScrollSpyItem {
  id: string;
  title: string;
  eyebrow?: string;
  summary?: string;
  bullets?: string[];
}

interface ApproachScrollSpyProps {
  className?: string;
  items: ApproachScrollSpyItem[];
}

export default function ApproachScrollSpy({ className, items }: ApproachScrollSpyProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const itemIds = useMemo(() => items.map((item) => item.id), [items]);

  useEffect(() => {
    if (!itemIds.length) return;

    const elements = itemIds
      .map((id) => sectionRefs.current[id])
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (!visible.length) return;

        const id = visible[0].target.getAttribute('data-approach-section');
        if (id) setActiveId(id);
      },
      {
        threshold: [0.12, 0.2, 0.35, 0.5],
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [itemIds]);

  const scrollTo = (id: string) => {
    const target = sectionRefs.current[id];
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={cn('approach-scroll', className)}>
      <aside className="approach-scroll__nav" aria-label="Approach navigation">
        <div className="approach-scroll__nav-inner">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={cn('approach-scroll__nav-item', activeId === item.id && 'is-active')}
            >
              <span className="approach-scroll__nav-eyebrow">{item.eyebrow ?? 'Section'}</span>
              <span className="approach-scroll__nav-title">{item.title}</span>
            </button>
          ))}
        </div>
      </aside>

      <div className="approach-scroll__content">
        {items.map((item) => (
          <section
            key={item.id}
            id={item.id}
            data-approach-section={item.id}
            ref={(el) => {
              sectionRefs.current[item.id] = el;
            }}
            className="approach-scroll__section"
          >
            {item.eyebrow ? <p className="approach-scroll__eyebrow">{item.eyebrow}</p> : null}
            <h3 className="approach-scroll__title">{item.title}</h3>
            {item.summary ? <p className="approach-scroll__summary">{item.summary}</p> : null}
            {item.bullets?.length ? (
              <ul className="approach-scroll__bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
