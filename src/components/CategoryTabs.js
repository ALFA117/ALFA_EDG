import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

function CategoryTabs({ categories, activeCategory, onCategoryChange }) {
  const { categories: labels } = useLanguage();
  const items = [
    { value: null, label: labels.all },
    ...categories.map((category) => ({ value: category, label: labels[category] || category })),
  ];

  return (
    <div className="category-tabs" role="group" aria-label={labels.all}>
      {items.map((item) => {
        const isActive = activeCategory === item.value;
        return (
          <button
            key={item.value ?? 'all'}
            type="button"
            className="category-tabs__tab"
            onClick={() => onCategoryChange(item.value)}
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.span
                layoutId="category-tabs-highlight"
                className="category-tabs__highlight"
                transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
              />
            )}
            <span className={'category-tabs__label' + (isActive ? ' is-active' : '')}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryTabs;
