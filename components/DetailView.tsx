
import React from 'react';
import { useLanguage, ViewState } from '../App';
import { ArrowLeft, Calendar, User, Tag, Share2, Printer, ChevronRight, Download } from 'lucide-react';

interface DetailViewProps {
  view: ViewState;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ view, onBack }) => {
  const { lang, t } = useLanguage();

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
    return {
      category: lang === 'cn' ? '宏观洞察' : 'Insights',
      title: lang === 'cn' ? '全球宏观经济月度综述' : 'Monthly Global Macro Review',
      subtitle: lang === 'cn' ? '利率博弈与地缘政治下的投资契机' : 'Investment opportunities amidst rate pivots and geopolitics',
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
    };
  };

  const data = getDetailData();

  return (
    <div className="bg-white min-h-screen">
      {/* Cover Image Section */}
      <div className="h-[50vh] relative overflow-hidden">
        <img src={data.image} alt="Header" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-6 w-full text-white">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">{lang === 'cn' ? '返回' : 'Return'}</span>
            </button>
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-full">
                {data.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold serif leading-tight mb-4">{data.title}</h1>
            <p className="text-xl text-white/80 font-light max-w-2xl">{data.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-16 py-6 border-y border-slate-100">
          <div className="flex items-center space-x-8 text-slate-500 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar size={16} className="text-amber-600" />
              <span className="font-medium">2025.05.24</span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={16} className="text-amber-600" />
              <span className="font-medium">Hyperion Research</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-amber-600">
              <Share2 size={20} />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-amber-600">
              <Download size={20} />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <article className="space-y-10 text-slate-800">
          <section>
            <h2 className="text-2xl font-bold serif mb-6 text-slate-950 flex items-center">
              <span className="w-8 h-1 bg-amber-500 mr-4"></span>
              {lang === 'cn' ? '核心观点摘要' : 'Executive Summary'}
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 border-l-4 border-slate-100 pl-8 py-2 italic">
              {lang === 'cn' 
                ? "在全球经济格局加速重构的当下，Hyperion 认为传统的单一维度投资模型已难以应对。我们通过将宏观政策解读深度嵌入投资决策流程，力求在不确定性中捕捉确定性。"
                : "In an era of rapid global economic restructuring, Hyperion believes traditional single-dimensional models are insufficient. By embedding macro-policy interpretation deep into our process, we capture certainty amidst volatility."}
            </p>
          </section>

          <section className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold mb-6 text-slate-950">{lang === 'cn' ? '2025 战略配置矩阵' : '2025 Strategic Matrix'}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600">{lang === 'cn' ? '关注赛道' : 'Target Sectors'}</p>
                <ul className="space-y-2 text-sm font-medium text-slate-600">
                  <li className="flex items-center"><ChevronRight size={14} className="mr-2 text-amber-500" /> {lang === 'cn' ? '硬科技与半导体主权' : 'Hard-Tech & Semi Sovereignty'}</li>
                  <li className="flex items-center"><ChevronRight size={14} className="mr-2 text-amber-500" /> {lang === 'cn' ? '战略能源基建' : 'Strategic Energy Infrastructure'}</li>
                  <li className="flex items-center"><ChevronRight size={14} className="mr-2 text-amber-500" /> {lang === 'cn' ? '亚洲数字经济转型' : 'Asia Digital Transformation'}</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600">{lang === 'cn' ? '风险参数' : 'Risk Parameters'}</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{lang === 'cn' ? '政策敏感度' : 'Policy Sensitivity'}</span>
                      <span className="font-bold">High</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{lang === 'cn' ? '市场流动性' : 'Market Liquidity'}</span>
                      <span className="font-bold">Stable</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400 w-[60%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold serif mb-6 text-slate-950">{lang === 'cn' ? '深度分析' : 'In-depth Analysis'}</h2>
            <div className="space-y-6 text-slate-600 leading-loose">
              <p>
                {lang === 'cn' 
                  ? "我们的研究团队不仅关注即时的市场波动，更深入挖掘其背后的政治动能。每一个监管文件的出台，每一场多边峰会的决议，都在重塑资本的流向。在 Hyperion，我们将这种‘政策嗅觉’转化为可量化的投资因子。"
                  : "Our research team goes beyond immediate market fluctuations to uncover underlying political momentum. Every regulatory filing, every multilateral summit resolution, reshapes capital flow. At Hyperion, we translate this 'policy intuition' into quantifiable investment factors."}
              </p>
              <p>
                {lang === 'cn'
                  ? "通过与全球领先的智库和政策制定者保持对话，我们能够先于市场共识，识别出那些受政策长期红利覆盖的优质资产。这种前瞻性在一级市场的早中期投资中尤为关键。"
                  : "By maintaining dialogues with global think tanks and policymakers, we identify high-quality assets backed by long-term policy tailwinds ahead of market consensus. This foresight is critical in early-to-mid stage primary market investments."}
              </p>
            </div>
          </section>
        </article>

        {/* CTA Footer */}
        <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col items-center text-center">
          <div className="bg-slate-900 p-8 rounded-3xl w-full text-white">
            <h4 className="text-xl font-bold serif mb-4">{lang === 'cn' ? '希望了解更多投资细节？' : 'Interested in more details?'}</h4>
            <p className="text-white/60 mb-8 text-sm">{lang === 'cn' ? '联系我们的机构服务团队，获取定制化的投资简报。' : 'Contact our institutional team for customized investment briefings.'}</p>
            <button className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-[0.2em] rounded-full transition-all">
              {lang === 'cn' ? '联络专家' : 'Contact Experts'}
            </button>
          </div>
          <button 
            onClick={onBack}
            className="mt-10 text-slate-400 hover:text-amber-600 font-bold text-sm flex items-center transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> {lang === 'cn' ? '返回首页' : 'Back to Home'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
