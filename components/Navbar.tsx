
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';
import { Menu, X, Globe, Share2, Check } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onHomeClick: (sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const navLinks = [
    { name: t.navHome, section: "home" },
    { name: t.navServices, section: "services" },
    { name: t.navPortfolio, section: "portfolio" },
    { name: t.navInsights, section: "insights" },
    { name: t.navAI, section: "ai" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={() => onHomeClick('home')} 
              className="hover:opacity-80 transition-opacity"
            >
              <Logo size="sm" />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => onHomeClick(link.section)}
                className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-300 hover:text-amber-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
            
            <div className="flex items-center space-x-4 ml-6 border-l border-white/10 pl-6">
              <button 
                onClick={() => setLang(lang === 'en' ? 'cn' : 'en')}
                className="flex items-center space-x-2 text-[10px] font-black px-3 py-1.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                <Globe className="w-3 h-3" />
                <span>{lang === 'en' ? '中文' : 'EN'}</span>
              </button>

              <button 
                onClick={handleShare}
                className="flex items-center space-x-2 text-[10px] font-black px-4 py-1.5 rounded-full bg-amber-600 text-white hover:bg-amber-500 transition-all shadow-lg shadow-amber-900/20"
              >
                {isCopied ? <Check className="w-3 h-3" /> : <Share2 className="w-3 h-3" />}
                <span>{isCopied ? (lang === 'en' ? 'COPIED' : '已复制') : (lang === 'en' ? 'SHARE' : '分享')}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-slate-950 z-40 transition-transform duration-500 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8 space-y-8 text-center">
          <div className="flex justify-center mb-4">
            <Logo size="lg" />
          </div>
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => { onHomeClick(link.section); setIsOpen(false); }}
              className="text-3xl font-bold text-white serif border-b border-white/5 pb-4"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-8 space-y-4">
            <button 
              onClick={() => { setLang(lang === 'en' ? 'cn' : 'en'); setIsOpen(false); }}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl flex items-center justify-center space-x-3 font-bold"
            >
              <Globe size={20} />
              <span>{lang === 'en' ? 'Switch to Chinese' : '切换至英文'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
