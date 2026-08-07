import React from 'react';
import { useInViewReveal } from '../hooks/useInViewReveal';

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, isVisible] = useInViewReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
