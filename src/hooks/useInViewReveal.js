import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element once when it first enters the viewport. Used for
 * section-level scroll reveals (not per-item), so motion stays purposeful.
 *
 * threshold is a fraction of the element's own height, not the viewport's —
 * a section taller than the viewport (e.g. the project registry grid) can
 * never satisfy a threshold above roughly viewportHeight/elementHeight, so
 * this defaults to near-zero: it fires as soon as any part of the section
 * is visible, which is what "has this section started scrolling into view"
 * actually means regardless of how tall the section is.
 */
export function useInViewReveal(threshold = 0.01) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
