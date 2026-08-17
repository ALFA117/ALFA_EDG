import React, { useEffect, useRef, useState } from 'react';

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Types `text` out character by character, re-typing whenever `text` itself
 * changes (e.g. on a language toggle) rather than jump-cutting to the new
 * string. Reduced-motion users get the full text immediately — the typing
 * is a flourish, not information.
 */
function TypedText({ text, speed = 18, as: Tag = 'span', className }) {
  const [shown, setShown] = useState(prefersReducedMotion() ? text : '');
  const frameRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setShown(text);
      return undefined;
    }
    let i = 0;
    setShown('');
    function tick() {
      i += 1;
      setShown(text.slice(0, i));
      if (i < text.length) {
        frameRef.current = setTimeout(tick, speed);
      }
    }
    frameRef.current = setTimeout(tick, speed);
    return () => clearTimeout(frameRef.current);
  }, [text, speed]);

  return <Tag className={className}>{shown}</Tag>;
}

export default TypedText;
