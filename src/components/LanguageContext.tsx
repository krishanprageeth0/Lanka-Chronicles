'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, BilingualText } from '../lib/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (text: BilingualText) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lanka_chronicles_lang') as Language;
    if (saved === 'en' || saved === 'si') {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('lanka_chronicles_lang', lang);
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'si' : 'en';
    handleSetLanguage(next);
  };

  const t = (text: BilingualText) => {
    if (!text) return '';
    return text[language] || text.en || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
