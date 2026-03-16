import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Partners from '@/pages/Partners';
import { LanguageProvider } from '@/i18n/LanguageContext';
import LanguageRedirect from '@/i18n/LanguageRedirect';
import { ScrollToTop } from '@/components/ScrollToTop';

function LanguageHome() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

function LanguagePartners() {
  return (
    <LanguageProvider>
      <Partners />
    </LanguageProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <LanguageRedirect />
        <Routes>
          <Route path="/" element={<LanguageHome />} />
          <Route path="/partners" element={<LanguagePartners />} />
          <Route path="/:lang" element={<LanguageHome />} />
          <Route path="/:lang/partners" element={<LanguagePartners />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
