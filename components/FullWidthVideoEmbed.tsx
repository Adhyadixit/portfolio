'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type FullWidthVideoEmbedProps = {
  eyebrow: string;
  title: string;
  videoSrc: string;
};

export default function FullWidthVideoEmbed({
  eyebrow,
  title,
  videoSrc,
}: FullWidthVideoEmbedProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [close, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const video = modalVideoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = false;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // ignore autoplay restrictions
      });
    }
  }, [isOpen]);

  return (
    <section className="full-width-video-embed" aria-label={`${eyebrow} ${title}`}>
      <div className="full-width-video-embed__mobile-heading">
        <div className="full-width-video-embed__eyebrow">{eyebrow}</div>
        <h2 className="full-width-video-embed__title">{title}</h2>
      </div>

      <div className="full-width-video-embed__frame">
        <div className="full-width-video-embed__media" aria-hidden>
          <video autoPlay loop muted playsInline preload="auto">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <div className="full-width-video-embed__overlay">
          <div className="full-width-video-embed__text-content">
            <div className="full-width-video-embed__desktop-heading">
              <div className="full-width-video-embed__eyebrow full-width-video-embed__eyebrow--on-video">
                {eyebrow}
              </div>
              <h2 className="full-width-video-embed__title full-width-video-embed__title--on-video">
                {title}
              </h2>
            </div>

            <div className="full-width-video-embed__play-wrap">
              <button
                aria-label="open video modal"
                className="full-width-video-embed__play-button full-width-video-embed__play-button--sm"
                type="button"
                onClick={open}
              >
                <svg
                  className="full-width-video-embed__play-icon"
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M0 15V0L12 8.11141L0 15Z" fill="white"></path>
                </svg>
              </button>

              <button
                aria-label="open video modal"
                className="full-width-video-embed__play-button full-width-video-embed__play-button--md"
                type="button"
                onClick={open}
              >
                <svg
                  className="full-width-video-embed__play-icon"
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M0 15V0L12 8.11141L0 15Z" fill="white"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen ? (
          <div
            className="full-width-video-embed__modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} video`}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <button
              className="full-width-video-embed__close"
              type="button"
              aria-label="close video modal"
              onClick={close}
            >
              ×
            </button>
            <div className="full-width-video-embed__modal-content">
              <video ref={modalVideoRef} controls playsInline>
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
