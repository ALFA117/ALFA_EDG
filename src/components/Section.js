// src/components/Section.js
import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h3>{title}</h3>
      <hr />
      {children}
    </section>
  );
};

export default Section;
