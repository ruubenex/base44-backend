import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { detectBrowserLanguage, defaultLanguage, supportedLanguages } from './translations';

export default function LanguageRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    
    // Check if path already has a supported language prefix
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0 && supportedLanguages.includes(segments[0])) {
      // Already has a language prefix — save it and don't redirect
      localStorage.setItem('camcal-lang', segments[0]);
      return;
    }

    // No language prefix — detect and redirect if not default
    const saved = localStorage.getItem('camcal-lang');
    const lang = saved && supportedLanguages.includes(saved) ? saved : detectBrowserLanguage();

    if (lang !== defaultLanguage) {
      // Preserve the subpath (e.g., /partners → /de/partners)
      navigate(`/${lang}${path === '/' ? '' : path}`, { replace: true });
    }
  }, [location.pathname]);

  return null;
}
