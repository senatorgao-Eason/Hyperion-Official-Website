
import React from 'react';
import { useLanguage } from '../App';
import { NewsInsight } from '../types';

const insights: NewsInsight[] = [
  { 
    id: 1, 
    date: "2025.05.14", 
    titleEn: "Macro Pivot: Analyzing the New Interest Rate Paradigm", 
    titleCn: "宏观转向：深度解读全球利率新常态",
    excerptEn: "As central banks adjust their long-term inflation targets, we explore the implications for equity valuations...",
    excerptCn: "随着全球央行调整长期通胀目标，我们探讨其对股票估值的深远影响..."
  },
  { 
    id: 2, 
    date: "2025.04.28", 
    titleEn: "Semiconductor Sovereignty: A Policy Review", 
    titleCn: "半导体主权：政策审查与产业重塑",
    excerptEn: "Recent legislation in East Asia and Europe is shifting the landscape of tech supply chains...",
    excerptCn: "东亚及欧洲近期的立法举措正在从根本上改变科技供应链的竞争格局..."
  },
  { 
    id: 3, 
    date: "2025.04.10", 
    titleEn: "Sustainable Capital: Why Green Hydrogen is the Next Frontier", 
    titleCn: "可持续资本：为什么绿氢是下一个投资风口",
    excerptEn: "A deep dive into the subsidies driving the decarbonization of heavy industries...",
    excerptCn: "深入分析推动重工业去碳化的财政补贴及其带来的投资机遇..."
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
        <h2 className="text-4xl font-bold serif mb-12 text-center">{t.newsTitle}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onNavigate(item.id)}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all flex flex-col h-full cursor-pointer group border border-transparent hover:border-amber-100"
            >
              <span className="text-amber-600 font-mono text-sm font-semibold mb-4">{item.date}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-4 serif leading-snug group-hover:text-amber-600 transition-colors">
                {lang === 'en' ? item.titleEn : item.titleCn}
              </h3>
              <p className="text-slate-600 flex-grow leading-relaxed">
                {lang === 'en' ? item.excerptEn : item.excerptCn}
              </p>
              <button className="mt-8 text-slate-900 font-bold text-sm uppercase tracking-widest border-b-2 border-amber-500 pb-1 self-start group-hover:border-amber-600 transition-colors">
                {lang === 'en' ? 'Read Analysis' : '阅读全文'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
