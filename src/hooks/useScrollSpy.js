import { useEffect, useState } from 'react';

export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    // Whichever section's top edge is closest above this line (30% down
    // the viewport) is "active" — a plain getBoundingClientRect scan run
    // on scroll, not IntersectionObserver ratios. Ratios tie constantly
    // (two sections both at 0, or both partially visible by the same
    // amount) and on a tie the observer's Map iteration order wins, which
    // silently favored whichever id happened to be listed first — not
    // whichever section the user was actually looking at.
    function update() {
      const line = window.innerHeight * 0.3;
      let closestId = null;
      let closestDist = Infinity;
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > 0) {
          const dist = line - rect.top;
          if (dist < closestDist) {
            closestDist = dist;
            closestId = el.id;
          }
        }
      }
      if (closestId) setActiveId(closestId);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|')]);

  return activeId;
}
