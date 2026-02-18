
import React from 'react';
import { useLanguage, ViewState } from '../App';
// Fix: Added TrendingUp to the lucide-react imports
import { ArrowLeft, Calendar, User, Share2, ChevronRight, Download, BarChart2, Zap, ShieldAlert, Cpu, Factory, ShieldCheck, FileText, Globe, TrendingUp } from 'lucide-react';

interface DetailViewProps {
  view: ViewState;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ view, onBack }) => {
  const { lang, t } = useLanguage();

  const isReport1 = view.type === 'news' && view.id === 1;
  const isReport2 = view.type === 'news' && view.id === 2;
  const isReport3 = view.type === 'news' && view.id === 3;

  const getDetailData = () => {
    if (view.type === 'service') {
      return {
        category: lang === 'cn' ? '业务战略' : 'Strategy',
        title: view.id === 'primary' ? t.primaryMarketTitle : t.secondaryMarketTitle,
        subtitle: view.id === 'primary' 
          ? (lang === 'cn' ? '发掘未上市企业的长期成长价值' : 'Unlocking long-term value in private equity')
          : (lang === 'cn' ? '动态配置，追求跨周期的超额收益' : 'Dynamic allocation for cross-cycle alpha'),
        image: view.id === 'primary' 
          ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
          : "https://images.unsplash.com/photo-1611974717482-4828c3fc3b5e?auto=format&fit=crop&q=80&w=2000"
      };
    }
    if (view.type === 'case') {
      return {
        category: lang === 'cn' ? '投资案例' : 'Portfolio',
        title: lang === 'cn' ? '项目深度调研报告' : 'Deep Dive Project Report',
        subtitle: lang === 'cn' ? '如何通过政策前瞻锁定科技赛道领头羊' : 'Securing tech leaders through policy foresight',
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=2000"
      };
    }
    if (isReport1) {
      return {
        category: lang === 'cn' ? '深度研报' : 'Deep Report',
        title: lang === 'cn' ? '软硬共生：2026-2030 投资范式的底层逻辑重构' : 'Physical Resilience: Investment Paradigm Shift 2026-2030',
        subtitle: lang === 'cn' ? '跨越不确定性，在去全球化与技术冲击之间配置资产' : 'Navigating de-globalization and tech disruption in asset allocation',
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
      };
    }
    if (isReport2) {
      return {
        category: lang === 'cn' ? '战略资源' : 'Strategic Resources',
        title: lang === 'cn' ? '稀缺性的胜利：金属与矿业的“资产化”革命' : 'Victory of Scarcity: The "Assetization" of Metals',
        subtitle: lang === 'cn' ? '深度解析2026-2030战略资源重估潮' : 'Deep analysis of the 2026-2030 strategic resource revaluation wave',
        image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=2000"
      };
    }
    if (isReport3) {
      return {
        category: lang === 'cn' ? '主街回归' : 'Main Street',
        title: lang === 'cn' ? '主街的回归：安全与韧性时代的资本迁移' : 'Return of Main Street: Capital Migration in the Age of Resilience',
        subtitle: lang === 'cn' ? '解析1.5万亿美元安全与韧性动议的战略含义' : 'Analyzing the $1.5T Security & Resilience Initiative',
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
      };
    }
    return {
      category: lang === 'cn' ? '宏观洞察' : 'Insights',
      title: lang === 'cn' ? '全球宏观经济月度综述' : 'Monthly Global Macro Review',
      subtitle: lang === 'cn' ? '利率博弈与地缘政治下的投资契机' : 'Investment opportunities amidst rate pivots and geopolitics',
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
    };
  };

  const data = getDetailData();

  return (
    <div className="bg-white min-h-screen selection:bg-amber-100 selection:text-amber-900">
      {/* Editorial Header */}
      <div className="h-[65vh] relative overflow-hidden">
        <img src={data.image} alt="Header" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6 w-full text-white">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-white/50 hover:text-amber-500 transition-all mb-12 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{lang === 'cn' ? '返回报告列表' : 'Back to Insights'}</span>
            </button>
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-4 py-1.5 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-amber-500/30">
                {data.category}
              </span>
              <div className="flex items-center text-white/40 text-[10px] uppercase tracking-widest font-bold">
                 <Globe size={12} className="mr-2" />
                 Global Institutional Research
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold serif leading-[1.1] mb-6 max-w-4xl tracking-tight">{data.title}</h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl leading-relaxed">{data.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Academic Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 py-8 border-y border-slate-100">
          <div className="flex items-center space-x-10 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
            <div className="flex items-center space-x-3">
              <Calendar size={14} className="text-amber-600" />
              <span>{isReport3 ? '2026.02.10' : isReport2 ? '2026.01.25' : isReport1 ? '2026.01.12' : '2025.05.24'}</span>
            </div>
            <div className="flex items-center space-x-3">
              <User size={14} className="text-amber-600" />
              <span>Hyperion Research Team</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <button className="flex items-center space-x-2 px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-900 font-bold text-xs uppercase tracking-widest border border-slate-100">
              <Download size={14} />
              <span>{lang === 'cn' ? '下载 PDF' : 'Download PDF'}</span>
            </button>
            <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-400 border border-slate-100">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Content Modules */}
        {isReport3 ? (
          <div className="space-y-16 animate-fade-in-up">
             <section className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-bold serif text-slate-950 mb-8 border-l-4 border-amber-500 pl-6">
                  {lang === 'cn' ? '一、金融巨头的方向转向' : 'I. The Strategic Pivot of Financial Giants'}
                </h2>
                <div className="bg-slate-950 text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <FileText size={120} />
                  </div>
                  <h4 className="text-amber-500 font-black text-xs uppercase tracking-[0.4em] mb-4">Case Analysis: JPMorgan Chase</h4>
                  <p className="text-xl leading-relaxed text-slate-300 font-light">
                    {lang === 'cn' 
                      ? "摩根大通发起了为期10年、总额1.5万亿美元的“安全与韧性”投资动议。这标志着产业战略的全面资本化，以及华尔街与华盛顿在国家安全目标上的深度协同。"
                      : "JPMorgan Chase launched a 10-year, $1.5 trillion 'Security & Resilience' investment initiative. This signals the capitalization of industrial strategy and deep synergy between Wall Street and DC."}
                  </p>
                </div>
             </section>

             <section>
                <h2 className="text-3xl font-bold serif text-slate-950 mb-10 border-l-4 border-amber-500 pl-6">
                  {lang === 'cn' ? '二、四大战场与代表标的' : 'II. Four Battlegrounds & Core Targets'}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Factory, title: lang === 'cn' ? '供应链与先进制造' : 'Supply Chain & Manufacturing', desc: 'Rockwell Automation, MP Materials' },
                    { icon: Zap, title: lang === 'cn' ? '能源独立与电网升级' : 'Energy & Grid', desc: 'NuScale Power, Eaton' },
                    { icon: ShieldCheck, title: lang === 'cn' ? '国防与航空航天' : 'Defense & Aerospace', desc: 'Kratos, Viasat' },
                    { icon: Cpu, title: lang === 'cn' ? '前沿战略技术' : 'Frontier Strategic Tech', desc: 'Palantir, Industrial AI' },
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300">
                      <div className="bg-white p-4 rounded-2xl w-fit mb-6 shadow-sm">
                        <item.icon size={24} className="text-amber-600" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed italic">{item.desc}</p>
                    </div>
                  ))}
                </div>
             </section>

             <section className="bg-amber-50 p-12 rounded-[2rem] border border-amber-100">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">{lang === 'cn' ? '战略意义：资本的国家化趋势' : 'Strategic Meaning: Capital Nationalization'}</h3>
                <div className="grid gap-6">
                  {[
                    { t: lang === 'cn' ? '科技工业重新融合' : 'Tech-Industry Integration', d: lang === 'cn' ? '数字技术必须扎根于物理资产，而非纯虚拟。' : 'Digital tech must be rooted in physical assets.' },
                    { t: lang === 'cn' ? '金融服务国家战略' : 'Finance Serving Strategy', d: lang === 'cn' ? '资本流向由地缘政治和供应链安全主导。' : 'Capital flows dictated by geopolitics and supply chain security.' },
                    { t: lang === 'cn' ? '制度性溢价形成' : 'Institutional Premium', d: lang === 'cn' ? '稀缺实体资产将获得长期的估值重估。' : 'Scarce physical assets will undergo long-term valuation re-rating.' },
                  ].map((p, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-amber-600 rounded-full shrink-0"></div>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        <strong className="text-amber-900">{p.t}：</strong>{p.d}
                      </p>
                    </div>
                  ))}
                </div>
             </section>

             <section className="bg-slate-900 p-12 rounded-[2rem] text-white shadow-2xl">
               <div className="text-center mb-10">
                  <h3 className="text-amber-500 font-bold text-xs uppercase tracking-[0.4em] mb-2">{lang === 'cn' ? '投资范式对比' : 'Paradigm Shift'}</h3>
                  <p className="text-2xl font-serif">{lang === 'cn' ? '2026-2030 的真正主线' : '2026-2030 Core Thesis'}</p>
               </div>
               <div className="grid md:grid-cols-2 gap-8 relative">
                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-20">
                   <TrendingUp size={60} />
                 </div>
                 <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                   <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-4">{lang === 'cn' ? '过去十年 (2015-2025)' : 'Past Decade'}</p>
                   <ul className="space-y-3 font-serif text-lg italic text-slate-400">
                     <li>- {lang === 'cn' ? '轻资产模式' : 'Asset-Light Models'}</li>
                     <li>- {lang === 'cn' ? '极致全球化' : 'Peak Globalization'}</li>
                     <li>- {lang === 'cn' ? '零/低利率环境' : 'Low Interest Rates'}</li>
                   </ul>
                 </div>
                 <div className="p-8 bg-amber-500/10 rounded-2xl border border-amber-500/30">
                   <p className="text-[10px] uppercase font-black tracking-widest text-amber-500 mb-4">{lang === 'cn' ? '未来五年 (2026-2030)' : 'Next 5 Years'}</p>
                   <ul className="space-y-3 font-serif text-lg font-bold text-amber-100">
                     <li>- {lang === 'cn' ? '实体韧性资产' : 'Physical Resilient Assets'}</li>
                     <li>- {lang === 'cn' ? '主权稀缺性' : 'Sovereign Scarcity'}</li>
                     <li>- {lang === 'cn' ? '战略安全溢价' : 'Strategic Security Premium'}</li>
                   </ul>
                 </div>
               </div>
             </section>
          </div>
        ) : isReport2 ? (
          <div className="space-y-16 animate-fade-in-up">
            <section>
              <h2 className="text-3xl font-bold serif text-slate-950 mb-8 border-l-4 border-amber-500 pl-6">
                {lang === 'cn' ? '一、金属正在从“周期品”转为“战略资产”' : 'I. Metals: From Cyclical to Strategic Assets'}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: ShieldAlert, t: lang === 'cn' ? '军费驱动资产' : 'Military Driven' },
                  { icon: Zap, t: lang === 'cn' ? '能源转型核心' : 'Energy Transition' },
                  { icon: BarChart2, t: lang === 'cn' ? '地缘博弈筹码' : 'Geopolitical Chip' },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-3xl text-center group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-amber-100">
                    <item.icon className="w-10 h-10 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-slate-900">{item.t}</h4>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-slate-900 p-12 rounded-[2rem] text-white">
              <h2 className="text-2xl font-bold serif mb-10 text-amber-500">{lang === 'cn' ? '二、2030年供需缺口预测' : 'II. 2030 Supply-Demand Gap'}</h2>
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="text-2xl font-bold">{lang === 'cn' ? '铜 (Copper)' : 'Copper'}</h4>
                    <span className="text-amber-500 font-black text-2xl">45.7%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden flex">
                    <div className="bg-amber-500 h-full w-[54%]" title="Supply"></div>
                    <div className="bg-rose-500 h-full w-[46%] animate-pulse" title="Gap"></div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{lang === 'cn' ? 'AI 数据中心与电网扩容是核心驱动力' : 'AI Data Centers and Grid Expansion are core drivers'}</p>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="text-2xl font-bold">{lang === 'cn' ? '稀土 (Rare Earths)' : 'Rare Earths'}</h4>
                    <span className="text-amber-500 font-black text-2xl">34.7%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden flex">
                    <div className="bg-blue-500 h-full w-[65%]" title="Supply"></div>
                    <div className="bg-rose-500 h-full w-[35%] animate-pulse" title="Gap"></div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{lang === 'cn' ? '导弹制导与 F-35 战机的核心军工需求' : 'Critical defense demand for missiles and F-35 fighter jets'}</p>
                </div>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
               <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
                 <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-amber-600 mb-6">{lang === 'cn' ? '核心持仓/观察' : 'Core Watchlist'}</h5>
                 <div className="flex flex-wrap gap-2">
                   {['MP Materials', 'Eaton', 'Quanta Services', 'Freeport-McMoRan'].map(tag => (
                     <span key={tag} className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-700 shadow-sm">{tag}</span>
                   ))}
                 </div>
               </div>
               <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
                 <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-amber-600 mb-6">{lang === 'cn' ? '指数工具' : 'Index Instruments'}</h5>
                 <div className="space-y-4">
                    <div className="flex justify-between text-sm font-mono"><span className="text-slate-500">REMX</span><span className="font-bold">Rare Earth ETF</span></div>
                    <div className="flex justify-between text-sm font-mono"><span className="text-slate-500">CPER</span><span className="font-bold">Copper Index</span></div>
                 </div>
               </div>
            </section>
          </div>
        ) : isReport1 ? (
          <div className="space-y-16 animate-fade-in-up">
            <section className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold serif text-slate-950 mb-8 border-l-4 border-amber-500 pl-6">
                {lang === 'cn' ? '一、从“效率时代”走向“稀缺时代”' : 'I. From Efficiency to Scarcity'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: lang === 'cn' ? '地缘政治碎片化' : 'Geopolitics', d: lang === 'cn' ? '供应链回流，安全优先于效率。' : 'Reshoring; safety over efficiency.' },
                  { t: lang === 'cn' ? 'AI 算力的物理约束' : 'AI Physical Constraints', d: lang === 'cn' ? '数字世界撞上电力与资源的物理天花板。' : 'Digital world hits physical walls of power and resources.' },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <h4 className="font-bold text-amber-800 mb-2">{item.t}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-amber-600 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-6">{lang === 'cn' ? 'Hyperion 2026 战略资产配置' : 'Hyperion 2026 Asset Allocation'}</h3>
                 <div className="space-y-6">
                    {[
                      { l: lang === 'cn' ? '实体资产' : 'Physical Assets', v: '40%', c: 'bg-white' },
                      { l: lang === 'cn' ? 'AI 效率工具' : 'AI Efficiency', v: '20%', c: 'bg-amber-200' },
                      { l: lang === 'cn' ? '战略金属' : 'Strategic Metals', v: '20%', c: 'bg-amber-400' },
                      { l: lang === 'cn' ? '银发经济' : 'Silver Economy', v: '15%', c: 'bg-amber-100' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-6">
                        <span className="w-24 text-xs font-black uppercase tracking-widest opacity-80">{item.l}</span>
                        <div className="flex-grow h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className={`h-full ${item.c}`} style={{ width: item.v }}></div>
                        </div>
                        <span className="font-mono font-bold">{item.v}</span>
                      </div>
                    ))}
                 </div>
               </div>
            </section>
          </div>
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-2xl serif text-slate-400">{lang === 'cn' ? '正在加载深度研报内容...' : 'Loading deep dive content...'}</h2>
          </div>
        )}

        {/* Closing CTA */}
        <div className="mt-32 pt-20 border-t border-slate-100">
          <div className="bg-slate-900 p-12 rounded-[3rem] text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"></div>
            <h4 className="text-3xl font-bold serif mb-6 relative z-10">{lang === 'cn' ? '获取机构级策略支持' : 'Institutional Strategy Support'}</h4>
            <p className="text-white/50 mb-10 max-w-xl mx-auto font-light relative z-10">
              {lang === 'cn' ? 'Hyperion 为全球机构投资者提供深度的宏观政策对冲方案。' : 'Hyperion provides macro policy hedging for institutional investors worldwide.'}
            </p>
            <button className="px-12 py-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-[0.3em] rounded-full transition-all relative z-10 shadow-xl shadow-amber-900/40">
              {lang === 'cn' ? '联络我们的研究团队' : 'Contact Research Team'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
