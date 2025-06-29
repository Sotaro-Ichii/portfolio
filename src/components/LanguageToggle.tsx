'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 hover-lift"
      aria-label={`Switch to ${language === 'en' ? 'Japanese' : 'English'}`}
    >
      <span className="text-lg">
        {language === 'en' ? '🇯🇵' : '🇺🇸'}
      </span>
      <span className="hidden sm:inline">
        {language === 'en' ? '日本語' : 'English'}
      </span>
    </button>
  );
}; 