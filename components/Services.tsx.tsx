
import React from 'react';
import { useLanguage } from '../App';
import { TrendingUp, Rocket, ArrowRight, Plus } from 'lucide-react';

interface ServicesProps {
  onNavigate: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const { t, lang } = useLanguage();

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold serif text-slate-900">{lang === 'cn' ? '核心业务板块' : 'Core Business Segments'}</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto italic">
            {lang === 'cn' ? '点击下方板块，探索 Hyperion 的投资哲学与市场策略' : 'Click the segments below to explore Hyperion\'s investment philosophy and market strategies.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Primary Market */}
          <div 
            onClick={() => onNavigate('primary')}
            className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus className="text-amber-500 w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 text-amber-600 transform group-hover:rotate-12">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 serif">{t.primaryMarketTitle}</h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              {t.primaryMarketDesc}
            </p>
            <div className="flex items-center text-amber-600 font-bold text-sm uppercase tracking-widest">
              <span className="border-b-2 border-amber-200 group-hover:border-amber-600 transition-colors pb-1">
                {lang === 'cn' ? '进入业务详情' : 'View Strategy'}
              </span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Secondary Market */}
          <div 
            onClick={() => onNavigate('secondary')}
            className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus className="text-blue-500 w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-600 transform group-hover:rotate-12">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 serif">{t.secondaryMarketTitle}</h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              {t.secondaryMarketDesc}
            </p>
            <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-widest">
              <span className="border-b-2 border-blue-200 group-hover:border-blue-600 transition-colors pb-1">
                {lang === 'cn' ? '进入业务详情' : 'View Strategy'}
              </span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
