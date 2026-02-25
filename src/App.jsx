import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import { LanguageProvider } from '@/i18n/LanguageContext';
import LanguageRedirect from '@/i18n/LanguageRedirect';

function LanguageHome() {
  return (
    <LanguageProvider>
      <Home />
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
          <Route path="/:lang" element={<LanguageHome />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
