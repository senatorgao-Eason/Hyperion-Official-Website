
import React from 'react';
import { useLanguage } from '../App';
import { Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo className="invert-icon" size="md" />
              {/* Force the text to be dark in footer */}
              <style>{`
                .invert-icon span { color: #0f172a !important; }
              `}</style>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              {lang === 'en' 
                ? "Pioneering the intersection of macro intelligence and disciplined capital allocation. Empowering investors to lead in a changing world."
                : "开拓宏观智慧与严谨资本配置的交汇点。赋能投资者在变革中的世界里保持领先地位。"}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">{lang === 'en' ? 'Explore' : '探索'}</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#services" className="hover:text-amber-600 transition-colors">{t.navServices}</a></li>
              <li><a href="#portfolio" className="hover:text-amber-600 transition-colors">{t.navPortfolio}</a></li>
              <li><a href="#insights" className="hover:text-amber-600 transition-colors">{t.navInsights}</a></li>
              <li><a href="#ai" className="hover:text-amber-600 transition-colors">{t.navAI}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">{lang === 'en' ? 'Contact' : '联系我们'}</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" />
                <a href="mailto:contact@hyperionfund.net" className="hover:text-amber-600 transition-colors">
                  contact@hyperionfund.net
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 text-center md:text-left md:flex justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            {t.footerRights}
          </p>
          <div className="flex justify-center space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-amber-600 transition-colors">{lang === 'en' ? 'Privacy Policy' : '隐私政策'}</a>
            <a href="#" className="hover:text-amber-600 transition-colors">{lang === 'en' ? 'Terms of Use' : '使用条款'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
