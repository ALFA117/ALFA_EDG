import React, { useEffect, useRef, useState, useCallback } from 'react';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function PhotoReel({ photos }) {
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          const idx = Number(mostVisible.target.dataset.index);
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      { root: track, threshold: [0.6] }
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [photos]);

  const goTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(photos.length - 1, index));
    const slide = slideRefs.current[clamped];
    if (slide) {
      slide.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [photos.length]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
  };

  return (
    <div className="photo-reel">
      <div
        className="photo-reel__track"
        ref={trackRef}
        role="region"
        aria-label="Registro fotográfico"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {photos.map((photo, index) => (
          <figure
            key={photo.src}
            className="photo-reel__slide"
            style={{ '--ratio': photo.ratio }}
            ref={(el) => { slideRefs.current[index] = el; }}
            data-index={index}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading={index < 2 ? 'eager' : 'lazy'}
            />
          </figure>
        ))}
      </div>

      <div className="photo-reel__controls">
        <button
          type="button"
          className="photo-reel__nav"
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Foto anterior"
        >
          ←
        </button>
        <span className="photo-reel__counter">
          {String(activeIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
        </span>
        <button
          type="button"
          className="photo-reel__nav"
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === photos.length - 1}
          aria-label="Siguiente foto"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default PhotoReel;
