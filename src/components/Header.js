// src/components/Header.js
import React from 'react';

const Header = ({ nombre, titulo, contacto }) => {
  return (
    <header className="header">
      <h1>{nombre}</h1>
      <h2>{titulo}</h2>
      <div className="contact-info">
        <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
        <span> | </span>
        <a href={contacto.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span> | </span>
        <a href={contacto.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </header>
  );
};

export default Header;
