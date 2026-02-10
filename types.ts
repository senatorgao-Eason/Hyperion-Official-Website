
export type Language = 'en' | 'cn';

export interface Translation {
  navHome: string;
  navServices: string;
  navPortfolio: string;
  navInsights: string;
  navAI: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  primaryMarketTitle: string;
  primaryMarketDesc: string;
  secondaryMarketTitle: string;
  secondaryMarketDesc: string;
  macroAdvantageTitle: string;
  macroAdvantageDesc: string;
  casesTitle: string;
  newsTitle: string;
  aiAdvisorTitle: string;
  aiAdvisorPlaceholder: string;
  aiAdvisorIntro: string;
  footerRights: string;
}

export interface InvestmentCase {
  id: number;
  titleEn: string;
  titleCn: string;
  sectorEn: string;
  sectorCn: string;
  image: string;
}

export interface NewsInsight {
  id: number;
  date: string;
  titleEn: string;
  titleCn: string;
  excerptEn: string;
  excerptCn: string;
}
