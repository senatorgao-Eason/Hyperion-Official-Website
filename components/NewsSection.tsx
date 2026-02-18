
import React from 'react';
import { useLanguage } from '../App';
import { NewsInsight } from '../types';

const insights: NewsInsight[] = [
  { 
    id: 3, 
    date: "2026.02.10", 
    titleEn: "Return of Main Street: Capital Migration in the Age of Resilience", 
    titleCn: "主街的回归：安全与韧性时代的资本迁移",
    excerptEn: "Analyzing the strategic implications of the $1.5 trillion 'Security & Resilience' initiative and the shift toward institutional premiums for physical assets.",
    excerptCn: "解析1.5万亿美元安全与韧性动议的战略含义。金融巨头转向产业战略资本化，资本国家化趋势下，稀缺资产获得制度性溢价..."
  },
  { 
    id: 2, 
    date: "2026.01.25", 
    titleEn: "Victory of Scarcity: The 'Assetization' of Metals", 
    titleCn: "稀缺性的胜利：金属与矿业的“资产化”革命",
    excerptEn: "Deep analysis of the strategic resource revaluation wave. Why metals are shifting from cyclical commodities to core strategic assets.",
    excerptCn: "深度解析战略资源重估潮。金属正在从“周期品”转为“战略资产”，成为军费驱动资产与地缘博弈筹码..."
  },
  { 
    id: 1, 
    date: "2026.01.12", 
    titleEn: "Physical Resilience: Paradigm Shift 2026-2030", 
    titleCn: "软硬共生：2026-2030 投资范式的底层逻辑重构",
    excerptEn: "Reconstructing the logic of asset allocation between de-globalization and AI-driven physical constraints.",
    excerptCn: "跨越不确定性，在去全球化与技术冲击之间配置资产。从效率时代走向稀缺时代，数字世界撞上物理天花板..."
  }
];

interface NewsSectionProps {
  onNavigate: (id: number) => void;
}

const NewsSection: React.FC<NewsSectionProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold serif text-slate-900">{t.newsTitle}</h2>
          <div className="w-20 h-1 bg-amber-500 mt-4 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <div 
              key={item.id} 
              onClick={() => onNavigate(item.id)}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer group border border-slate-100 hover:border-amber-200 relative overflow-hidden"
            >
              {index === 0 && (
                <div className="absolute top-4 right-4 flex items-center space-x-1.5 px-3 py-1 bg-amber-500 rounded-full animate-pulse shadow-lg shadow-amber-500/20">
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                   <span className="text-[10px] font-black text-white uppercase tracking-widest">{lang === 'cn' ? '最新发布' : 'LATEST'}</span>
                </div>
              )}
              
              <span className="text-amber-600 font-mono text-sm font-bold mb-4 tracking-tighter">{item.date}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-4 serif leading-snug group-hover:text-amber-600 transition-colors">
                {lang === 'en' ? item.titleEn : item.titleCn}
              </h3>
              <p className="text-slate-500 flex-grow leading-relaxed font-light text-sm">
                {lang === 'en' ? item.excerptEn : item.excerptCn}
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-amber-600 transition-colors">
                  {lang === 'en' ? 'Full Report' : '查看完整报告'}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all transform group-hover:translate-x-1">
                  &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
