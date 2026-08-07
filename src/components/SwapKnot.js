import React from 'react';

/**
 * Signature mark: two arcs standing in for the two legs of an atomic swap,
 * crossing at a shared hash-lock (the short perpendicular tick). Rotates
 * ~10deg into a "seated" position on hover/inview via the .is-locked class
 * applied by the parent; prefers-reduced-motion neutralizes it globally.
 */
function SwapKnot({ className = '', size = 32 }) {
  return (
    <svg
      className={`swap-knot ${className}`}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="swap-knot__arc swap-knot__arc--a"
        d="M8 34C8 20 20 10 40 14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        className="swap-knot__arc swap-knot__arc--b"
        d="M40 34C40 20 28 10 8 14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line
        className="swap-knot__pin"
        x1="21.5"
        y1="19.5"
        x2="26.5"
        y2="28.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SwapKnot;
