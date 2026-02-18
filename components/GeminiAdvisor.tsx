
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../App';
import { GoogleGenAI } from '@google/genai';
import { Send, Bot, User, Loader2, ExternalLink, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'ai';
  content: string;
  links?: { title: string; uri: string }[];
  isError?: boolean;
}

const GeminiAdvisor: React.FC = () => {
  const { lang, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage = trimmedInput;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // 安全地获取环境变量中的 API Key
      const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;
      
      if (!apiKey) {
        throw new Error('MISSING_API_KEY');
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemPrompt = `You are the Senior Macro Policy Advisor for Hyperion Investment Fund. 
        Hyperion specializes in primary and secondary markets. Our edge is deep macro-economic research and policy interpretation.
        Respond in ${lang === 'en' ? 'English' : 'Chinese'}. 
        Use a sophisticated, institutional tone. 
        Always provide insights into how recent policy shifts or macro trends might affect investment landscapes.
        If the user asks about specific news, use the provided search tool to give up-to-date answers.`;

      // 使用更强大的 Pro 模型进行宏观分析
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userMessage,
        config: {
          systemInstruction: systemPrompt,
          tools: [{ googleSearch: {} }],
        },
      });

      const aiText = response.text || (lang === 'en' ? "I'm analyzing the markets, but couldn't formulate a specific response right now." : "我正在分析市场，但目前无法给出具体的回复。");
      
      // 提取 Google 搜索的参考来源
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const links = groundingChunks
        ?.map((chunk: any) => {
          if (chunk.web) {
            return { title: chunk.web.title || 'Source', uri: chunk.web.uri };
          }
          return null;
        })
        .filter((link: any): link is { title: string; uri: string } => !!link && !!link.uri)
        .slice(0, 3);

      setMessages(prev => [...prev, { role: 'ai', content: aiText, links }]);
    } catch (error: any) {
      console.error('Hyperion AI Advisor Error:', error);
      let errorMessage = lang === 'en' 
        ? "The AI Advisor is temporarily unavailable. Please verify your environment configuration." 
        : "AI 宏观顾问暂时不可用。请检查您的环境配置（如 API 密钥是否设置）。";
      
      if (error.message === 'MISSING_API_KEY') {
        errorMessage = lang === 'en' 
          ? "Configuration error: API Key is missing. Please set API_KEY in your deployment environment." 
          : "配置错误：缺少 API 密钥。请在部署环境中设置 API_KEY。";
      }

      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: errorMessage, 
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden flex flex-col h-[650px] shadow-2xl">
      {/* Header */}
      <div className="p-6 bg-slate-900/50 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-amber-500 p-2.5 rounded-xl shadow-lg shadow-amber-500/20">
            <Bot className="w-6 h-6 text-slate-900" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg serif tracking-wide">{t.aiAdvisorTitle}</h3>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">{t.aiAdvisorIntro}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-8 scroll-smooth">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto">
            <div className="bg-slate-700/30 p-8 rounded-full mb-6">
              <Bot className="w-16 h-16 text-amber-500/50" />
            </div>
            <h4 className="text-white font-semibold text-xl mb-2">
              {lang === 'en' ? 'How can I assist your strategy?' : '我能为您提供什么策略建议？'}
            </h4>
            <p className="text-slate-400">
              {lang === 'en' 
                ? "Inquire about global interest rates, regulatory shifts, or specific industry policy impacts."
                : "您可以询问全球利率走势、监管变化或特定行业的政策影响。"}
            </p>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                msg.role === 'user' ? 'bg-amber-600 ml-4' : msg.isError ? 'bg-rose-900 mr-4' : 'bg-slate-700 mr-4'
              }`}>
                {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
              </div>
              <div className={`p-5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-amber-600 text-white font-medium' 
                  : msg.isError 
                    ? 'bg-rose-950/50 text-rose-200 border border-rose-500/30' 
                    : 'bg-slate-700/50 text-slate-200 border border-white/5'
              }`}>
                {msg.isError && <AlertCircle className="w-4 h-4 mb-1 text-rose-400" />}
                {msg.content}
                
                {msg.links && msg.links.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Verified Sources</p>
                    {msg.links.map((link, lIdx) => (
                      <a 
                        key={lIdx} 
                        href={link.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-xs text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span className="underline underline-offset-2 truncate max-w-[200px]">{link.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="flex items-center space-x-3 bg-slate-700/30 px-5 py-3 rounded-2xl border border-white/5">
                <Loader2 className="w-4 h-4 text-amber-500 animate-spin" />
                <span className="text-slate-400 text-sm font-medium">
                  {lang === 'en' ? 'Hyperion Intelligence Processing...' : 'Hyperion 智库分析中...'}
                </span>
             </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 bg-slate-900 border-t border-white/5">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.aiAdvisorPlaceholder}
            className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 pr-16 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all shadow-inner"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-3 p-3 bg-amber-600 rounded-xl text-white hover:bg-amber-500 disabled:opacity-50 disabled:bg-slate-700 transition-all shadow-lg shadow-amber-900/20"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiAdvisor;
