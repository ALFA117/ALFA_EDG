import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

const AUTOPLAY_MS = 5000;

function PhotoReel({ photos }) {
  const { t } = useLanguage();
  const orderRef = useRef(shuffle(photos));
  const order = orderRef.current;
  const keyCounter = useRef(1);

  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState({ photo: order[0], key: 0 });
  const [previous, setPrevious] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const currentRef = useRef(current);
  currentRef.current = current;
  const indexRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    if (prefersReducedMotion()) setIsPlaying(false);
  }, []);

  const goTo = useCallback(
    (nextIndex) => {
      setPrevious(currentRef.current);
      const nextEntry = { photo: order[nextIndex], key: keyCounter.current };
      keyCounter.current += 1;
      setCurrent(nextEntry);
      setIndex(nextIndex);
    },
    [order]
  );

  const step = useCallback(
    (dir) => {
      goTo((indexRef.current + dir + order.length) % order.length);
    },
    [goTo, order.length]
  );

  useEffect(() => {
    if (!isPlaying) return undefined;
    const id = setInterval(() => step(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPlaying, step]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      step(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      step(-1);
    }
  };

  return (
    <div className="photo-reel">
      <div
        className="photo-reel__frame"
        style={{ '--ratio': current.photo.ratio }}
        role="region"
        aria-label={t.photoReel.region}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {previous && (
          <img
            key={`prev-${previous.key}`}
            className="photo-reel__image photo-reel__image--out"
            src={previous.photo.src}
            alt=""
            aria-hidden="true"
            onAnimationEnd={() => setPrevious(null)}
          />
        )}
        <img
          key={`cur-${current.key}`}
          className="photo-reel__image photo-reel__image--in"
          src={current.photo.src}
          alt={`${t.photoReel.altPrefix} ${index + 1}`}
          width={current.photo.width}
          height={current.photo.height}
        />
      </div>

      <div className="photo-reel__controls">
        <button type="button" className="photo-reel__nav" onClick={() => step(-1)} aria-label={t.photoReel.prev}>
          ←
        </button>
        <button
          type="button"
          className="photo-reel__nav"
          onClick={() => setIsPlaying((p) => !p)}
          aria-label={isPlaying ? t.photoReel.pause : t.photoReel.play}
          aria-pressed={isPlaying}
        >
          {isPlaying ? '❙❙' : '▶'}
        </button>
        <span className="photo-reel__counter">
          {String(index + 1).padStart(2, '0')} / {String(order.length).padStart(2, '0')}
        </span>
        <button type="button" className="photo-reel__nav" onClick={() => step(1)} aria-label={t.photoReel.next}>
          →
        </button>
      </div>
    </div>
  );
}

export default PhotoReel;
