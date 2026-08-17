import React, { useEffect, useRef, useState } from 'react';

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Counts up from 0 to `value` once the element scrolls into view. Fires once. */
function CountUp({ value, duration = 900, as: Tag = 'span', className }) {
  const [display, setDisplay] = useState(prefersReducedMotion() ? value : 0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          function frame(now) {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - (1 - progress) * (1 - progress);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}

export default CountUp;
