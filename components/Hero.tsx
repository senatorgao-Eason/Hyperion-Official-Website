import React from 'react';
import { useLanguage } from '../App';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20">
      {/* Background with advanced overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
          alt="Global Macro Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 animate-fade-in-up">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-5 h-5 rounded-full border-2 border-slate-950 bg-amber-500/20"></div>
              ))}
            </div>
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em]">Institutional Grade Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] serif animate-fade-in-up tracking-tight">
            {t.heroTitle.split(' ').map((word, i) => (
              <span key={i} className={i % 2 === 1 ? 'text-amber-500' : ''}>{word} </span>
            ))}
          </h1>
          
          <p className="mt-10 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            {t.heroSubtitle}
          </p>
          
          <div className="mt-14 flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#services"
              className="px-12 py-5 bg-amber-600 text-white font-black text-xs uppercase tracking-widest rounded-full flex items-center justify-center hover:bg-amber-500 transition-all shadow-2xl shadow-amber-900/40 group"
            >
              {t.heroCTA}
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#ai"
              className="px-12 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 font-black text-xs uppercase tracking-widest rounded-full flex items-center justify-center hover:bg-white/10 transition-all border-b-2 border-white/20"
            >
              {t.navAI}
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-500 to-transparent"></div>
        <ArrowDown className="text-amber-500 w-4 h-4 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;