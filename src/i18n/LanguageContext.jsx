import React, { createContext, useContext, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { translations, defaultLanguage, supportedLanguages } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const { lang } = useParams();
  const currentLang = supportedLanguages.includes(lang) ? lang : defaultLanguage;
  const t = translations[currentLang];
  const navigate = useNavigate();

  const value = useMemo(() => ({
    lang: currentLang,
    t,
    supportedLanguages,
    setLanguage: (newLang) => {
      if (newLang === defaultLanguage) {
        navigate('/');
      } else {
        navigate(`/${newLang}`);
      }
    },
  }), [currentLang, t, navigate]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
