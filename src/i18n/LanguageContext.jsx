import React, { createContext, useContext, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { translations, defaultLanguage, supportedLanguages } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const { lang } = useParams();
  const location = useLocation();
  const currentLang = supportedLanguages.includes(lang) ? lang : defaultLanguage;
  const t = translations[currentLang];
  const navigate = useNavigate();

  const value = useMemo(() => ({
    lang: currentLang,
    t,
    supportedLanguages,
    setLanguage: (newLang) => {
      // Preserve subpath (e.g., /partners)
      const currentPath = location.pathname;
      // Remove current lang prefix to get subpath
      let subPath = '';
      if (lang && currentPath.startsWith(`/${lang}`)) {
        subPath = currentPath.slice(`/${lang}`.length);
      } else {
        // Root language (pt) — path is the subpath itself
        subPath = currentPath;
      }
      
      if (newLang === defaultLanguage) {
        navigate(subPath || '/');
      } else {
        navigate(`/${newLang}${subPath}`);
      }
    },
  }), [currentLang, t, navigate, location.pathname, lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback for HMR/edge cases - return default language
    return {
      lang: defaultLanguage,
      t: translations[defaultLanguage],
      supportedLanguages,
      setLanguage: () => {},
    };
  }
  return ctx;
}
