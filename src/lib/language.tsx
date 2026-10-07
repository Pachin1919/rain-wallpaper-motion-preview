import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
type Language = 'en' | 'zh';
const LanguageContext = createContext<{ language: Language; toggle: () => void }>({ language: 'en', toggle: () => {} });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  useEffect(() => { if (localStorage.getItem('rainfield-language') === 'zh') setLanguage('zh'); }, []);
  useEffect(() => { document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'; }, [language]);
  const toggle = () => setLanguage(previous => { const next = previous === 'en' ? 'zh' : 'en'; localStorage.setItem('rainfield-language', next); return next; });
  return <LanguageContext.Provider value={{ language, toggle }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const { language, toggle } = useContext(LanguageContext);
  return { language, toggle, t: (en: string, zh: string) => language === 'en' ? en : zh };
}