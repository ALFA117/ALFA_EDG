import React from 'react';

/**
 * Signature mark: the Greek letter Alpha, the first letter of ALFA-EDG.
 * "badge" is a filled, colored monogram (nav, project rows).
 * "ghost" is a bare oversized glyph used as a soft background watermark.
 */
function AlfaMark({ variant = 'badge', className = '', size }) {
  const style = size ? { '--alfa-size': `${size}px` } : undefined;
  return (
    <span
      className={`alfa-mark alfa-mark--${variant} ${className}`}
      style={style}
      aria-hidden="true"
    >
      Α
    </span>
  );
}

export default AlfaMark;
