import React from 'react';

type FullWidthVideoEmbedProps = {
  videoSrc: string;
};

export default function FullWidthVideoEmbed({
  videoSrc,
}: FullWidthVideoEmbedProps) {

  return (
    <section className="full-width-video-embed">
      <div className="full-width-video-embed__frame">
        <div className="full-width-video-embed__media" aria-hidden>
          <video autoPlay loop muted playsInline preload="auto">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
