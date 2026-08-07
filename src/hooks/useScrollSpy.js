import { useEffect, useState } from 'react';

export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] || null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    // IntersectionObserver callbacks only report elements whose state just
    // changed, not the full current state of every observed element. Keep
    // our own map so a section that's still intersecting (but wasn't part
    // of the latest batch) doesn't get shadowed by one that briefly
    // re-crossed a threshold.
    const state = new Map(elements.map((el) => [el, { isIntersecting: false, ratio: 0 }]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          state.set(entry.target, {
            isIntersecting: entry.isIntersecting,
            ratio: entry.intersectionRatio,
          });
        });

        let best = null;
        state.forEach((info, el) => {
          if (info.isIntersecting && (!best || info.ratio > best.ratio)) {
            best = el.id;
          }
        });
        if (best) setActiveId(best);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|')]);

  return activeId;
}
