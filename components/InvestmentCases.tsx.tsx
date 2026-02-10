
import React from 'react';
import { useLanguage } from '../App';
import { InvestmentCase } from '../types';
import { Maximize2 } from 'lucide-react';

const cases: InvestmentCase[] = [
  { 
    id: 1, 
    titleEn: "Smart Manufacturing Hub", 
    titleCn: "供应链与先进制造", 
    sectorEn: "Supply Chain & Manufacturing", 
    sectorCn: "先进工业", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    titleEn: "Orbital Systems Alpha", 
    titleCn: "航空航天", 
    sectorEn: "Aerospace & Frontier", 
    sectorCn: "深空科技", 
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    titleEn: "Renewable Resilience", 
    titleCn: "能源韧性", 
    sectorEn: "Energy Transition", 
    sectorCn: "战略基建", 
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb5848d2c?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    titleEn: "Longevity Bio-Clinic", 
    titleCn: "医疗与长寿", 
    sectorEn: "Healthcare & Biotech", 
    sectorCn: "生命科学", 
    image: "https://images.unsplash.com/photo-1532187875605-1807469a6d46?auto=format&fit=crop&q=80&w=800" 
  },
];

interface InvestmentCasesProps {
  onNavigate: (id: number) => void;
}

const InvestmentCases: React.FC<InvestmentCasesProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">{lang === 'en' ? 'Excellence' : '卓越表现'}</span>
            <h2 className="text-4xl font-bold serif mt-2">{t.casesTitle}</h2>
          </div>
          <button className="mt-4 md:mt-0 text-slate-500 font-semibold flex items-center hover:text-amber-600 transition-colors group">
            {lang === 'en' ? 'View All Investments' : '查看所有投资'} <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onNavigate(item.id)}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 cursor-pointer aspect-[3/4] shadow-lg shadow-slate-200"
            >
              <img 
                src={item.image} 
                alt={item.titleEn} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 pointer-events-none">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full">
                    <Maximize2 className="text-white w-6 h-6" />
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-amber-400 text-[10px] font-black uppercase tracking-widest mb-2">
                  {lang === 'en' ? item.sectorEn : item.sectorCn}
                </p>
                <h4 className="text-white font-bold text-xl serif leading-tight">
                  {lang === 'en' ? item.titleEn : item.titleCn}
                </h4>
                <div className="mt-4 flex items-center text-white/60 text-[10px] font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                   {lang === 'cn' ? '点击查看深度研报' : 'CLICK TO VIEW CASE STUDY'}
                </div>
                <div className="mt-2 h-0.5 w-0 bg-amber-500 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentCases;
