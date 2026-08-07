import React from 'react';

const SECTIONS = [
  { id: 'proyectos', label: 'Registro' },
  { id: 'fotos', label: 'En campo' },
  { id: 'contacto', label: 'Contacto' },
];

function IndexRail({ activeSection, categories, activeCategory, onCategoryChange }) {
  return (
    <nav className="index-rail" aria-label="Índice">
      <ul className="index-rail__sections">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={
                'index-rail__section-link' +
                (activeSection === section.id ? ' is-active' : '')
              }
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="index-rail__divider" aria-hidden="true" />

      <ul className="index-rail__categories">
        <li>
          <button
            type="button"
            className={
              'index-rail__category' + (activeCategory === null ? ' is-active' : '')
            }
            onClick={() => onCategoryChange(null)}
            aria-pressed={activeCategory === null}
          >
            Todo
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              type="button"
              className={
                'index-rail__category' +
                (activeCategory === category ? ' is-active' : '')
              }
              onClick={() => onCategoryChange(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default IndexRail;
