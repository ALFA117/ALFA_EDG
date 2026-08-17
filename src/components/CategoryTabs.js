import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

function CategoryTabs({ categories, counts = {}, activeCategory, onCategoryChange }) {
  const { categories: labels } = useLanguage();
  const items = [
    { value: null, label: labels.all, count: counts.all },
    ...categories.map((category) => ({ value: category, label: labels[category] || category, count: counts[category] })),
  ];

  return (
    <div className="category-tabs" role="group" aria-label={labels.all}>
      {items.map((item) => {
        const isActive = activeCategory === item.value;
        return (
          <motion.button
            key={item.value ?? 'all'}
            type="button"
            className="category-tabs__tab"
            onClick={() => onCategoryChange(item.value)}
            aria-pressed={isActive}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
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
              {typeof item.count === 'number' && (
                <span className="category-tabs__count">{item.count}</span>
              )}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

export default CategoryTabs;
