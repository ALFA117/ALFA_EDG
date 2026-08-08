import React from 'react';

/**
 * Signature mark: the lowercase Greek letter alpha (α) — the uppercase form
 * is visually identical to a plain Latin "A", so lowercase is what actually
 * reads as "the Greek symbol".
 * "badge" is a filled, colored monogram (nav, project rows).
 * "ghost" is a bare oversized glyph used as a soft background watermark.
 */
function AlfaMark({ variant = 'badge', className = '', size, title }) {
  const style = size ? { '--alfa-size': `${size}px` } : undefined;
  return (
    <span
      className={`alfa-mark alfa-mark--${variant} ${className}`}
      style={style}
      title={title}
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      aria-label={title}
    >
      α
    </span>
  );
}

export default AlfaMark;
