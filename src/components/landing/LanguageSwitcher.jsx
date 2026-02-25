import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const current = translations[lang];

  return (
    <div ref={ref} className="fixed top-4 right-4 z-[100]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg hover:shadow-xl transition-all text-sm font-medium"
      >
        <Globe className="w-4 h-4 text-orange-500" />
        <span>{current.flag}</span>
        <span className="hidden sm:inline text-gray-700 dark:text-gray-300">{current.langName}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-white/10 shadow-2xl overflow-hidden">
          {Object.values(translations).map((t) => (
            <button
              key={t.lang}
              onClick={() => {
                localStorage.setItem('camcal-lang', t.lang);
                setLanguage(t.lang);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                t.lang === lang
                  ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
            >
              <span className="text-lg">{t.flag}</span>
              <span>{t.langName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
