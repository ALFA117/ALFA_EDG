import React, { createContext, useContext, useEffect, useState } from 'react';
import { strings, categoryLabels } from './translations';

const STORAGE_KEY = 'alfa-edg-lang';
const LanguageContext = createContext(null);

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'es' || stored === 'en' ? stored : 'en';
  } catch {
    return 'en';
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readStoredLanguage);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage failures (private mode, etc.)
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = strings[language].meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', strings[language].meta.description);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: strings[language],
    categories: categoryLabels[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
