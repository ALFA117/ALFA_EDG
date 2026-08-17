import React, { useEffect, useState } from 'react';

/** Thin scroll-progress bar under the sticky nav — terminal-style, reads how far into the page you are. */
function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" style={{ width: `${pct}%` }} />
    </div>
  );
}

export default ScrollProgress;
