import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  const { categories: labels } = useLanguage();

  return (
    <div className="category-filter" role="group" aria-label={labels.all}>
      <button
        type="button"
        className={'category-filter__chip' + (activeCategory === null ? ' is-active' : '')}
        onClick={() => onCategoryChange(null)}
        aria-pressed={activeCategory === null}
      >
        {labels.all}
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
          {labels[category] || category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
