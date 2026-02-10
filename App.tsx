
import React, { useState, createContext, useContext, useEffect } from 'react';
import { translations } from './translations';
import { Language, Translation } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MacroAdvantage from './components/MacroAdvantage';
import InvestmentCases from './components/InvestmentCases';
import NewsSection from './components/NewsSection';
import GeminiAdvisor from './components/GeminiAdvisor';
import Footer from './components/Footer';
import DetailView from './components/DetailView';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export type ViewState = {
  type: 'home' | 'service' | 'case' | 'news';
  id?: string | number;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('cn');
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const t = translations[lang];

  // 切换视图时滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view.type, view.id]);

  const handleNavigateToHome = (sectionId?: string) => {
    setView({ type: 'home' });
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const renderContent = () => {
    if (view.type !== 'home') {
      return (
        <div className="animate-fade-in-up">
          <DetailView view={view} onBack={() => setView({ type: 'home' })} />
        </div>
      );
    }

    return (
      <div className="animate-fade-in">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services">
          <Services onNavigate={(id) => setView({ type: 'service', id })} />
        </section>

        <section id="advantage">
          <MacroAdvantage />
        </section>

        <section id="portfolio">
          <InvestmentCases onNavigate={(id) => setView({ type: 'case', id })} />
        </section>

        <section id="insights">
          <NewsSection onNavigate={(id) => setView({ type: 'news', id })} />
        </section>

        <section id="ai" className="bg-slate-900 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <GeminiAdvisor />
          </div>
        </section>
      </div>
    );
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen bg-slate-950 selection:bg-amber-500/30">
        <Navbar onHomeClick={handleNavigateToHome} />
        <main>
          {renderContent()}
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
