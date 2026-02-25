import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { detectBrowserLanguage, defaultLanguage, supportedLanguages } from './translations';

export default function LanguageRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only redirect on root path
    if (location.pathname !== '/') return;

    const saved = localStorage.getItem('camcal-lang');
    const lang = saved && supportedLanguages.includes(saved) ? saved : detectBrowserLanguage();

    if (lang !== defaultLanguage) {
      navigate(`/${lang}`, { replace: true });
    }
  }, []);

  return null;
}
