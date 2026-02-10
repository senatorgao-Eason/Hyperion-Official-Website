
import React from 'react';
import { useLanguage } from '../App';
import { Search, BarChart3, PieChart, Globe2 } from 'lucide-react';

const MacroAdvantage: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="py-32 bg-slate-950 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block mb-4">Our Competitive Edge</span>
          <h2 className="text-4xl md:text-5xl font-bold serif leading-tight">
            {t.macroAdvantageTitle}
          </h2>
        </div>

        <div className="lg:flex items-center justify-between gap-20">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <p className="text-xl text-slate-400 leading-relaxed mb-12 font-light">
              {t.macroAdvantageDesc}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Search, title: lang === 'en' ? 'Policy Intelligence' : '政策情报', text: lang === 'en' ? 'Proprietary monitoring of global legislative trends.' : '对全球立法趋势的专有监测。' },
                { icon: BarChart3, title: lang === 'en' ? 'Economic Modeling' : '经济建模', text: lang === 'en' ? 'Quantifying the impact of macro shifts on valuations.' : '量化宏观转变对估值的影响。' },
                { icon: Globe2, title: lang === 'en' ? 'Global Footprint' : '全球视野', text: lang === 'en' ? 'Expertise spanning developed and emerging markets.' : '跨越发达市场和新兴市场的专业知识。' },
                { icon: PieChart, title: lang === 'en' ? 'Strategic Alpha' : '战略超额收益', text: lang === 'en' ? 'Leveraging policy gaps before market consensus.' : '在市场共识达成前利用政策真空期。' },
              ].map((item, idx) => (
                <div key={idx} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="bg-amber-600/20 p-3 rounded-xl w-fit mb-4 group-hover:bg-amber-600 transition-colors">
                    <item.icon className="w-5 h-5 text-amber-500 group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative h-[500px]">
            <div className="grid grid-cols-12 gap-6 h-full items-stretch">
              {/* Left visual block */}
              <div className="col-span-7 relative group overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt="Analysis" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 border-l-2 border-amber-500 pl-4">
                  <p className="text-white font-bold text-sm uppercase tracking-widest">{lang === 'cn' ? '深度研究' : 'DEEP RESEARCH'}</p>
                </div>
              </div>
              
              {/* Right visual block */}
              <div className="col-span-5 flex flex-col gap-6">
                <div className="flex-grow relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1454165833767-027ffea70288?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                    alt="Charts" 
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="bg-slate-900 border border-white/5 p-8 rounded-3xl flex items-center justify-center text-center">
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed">
                    {lang === 'cn' ? '智库级宏观洞察' : 'Think-tank Level Macro Insights'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroAdvantage;
