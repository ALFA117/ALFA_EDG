import React from 'react';

function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="category-filter" role="group" aria-label="Filtrar por categoría">
      <button
        type="button"
        className={'category-filter__chip' + (activeCategory === null ? ' is-active' : '')}
        onClick={() => onCategoryChange(null)}
        aria-pressed={activeCategory === null}
      >
        Todo
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            'category-filter__chip' + (activeCategory === category ? ' is-active' : '')
          }
          onClick={() => onCategoryChange(category)}
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
