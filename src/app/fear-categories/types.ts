export type FearCategory = {
  id: string;
  name: string;
  description: string;
  severityRange: [number, number];
  recurrencePatterns: string[];
  mediaAmplificationScore: number;
  cognitiveImpact: number;
  relatedCategories: string[];
  mitigationStrategies: {
    immediate: string[];
    shortTerm: string[];
    longTerm: string[];
  };
};

export const fearCategories: Record<string, FearCategory> = {
  'economic-volatility': {
    id: 'economic-volatility',
    name: 'Economic Volatility',
    description: 'Market fluctuations, inflation fears, and financial instability patterns',
    severityRange: [5, 9],
    recurrencePatterns: ['Quarterly cycles', 'Policy changes', 'Market shocks'],
    mediaAmplificationScore: 7,
    cognitiveImpact: 8,
    relatedCategories: ['job-security', 'retirement-uncertainty'],
    mitigationStrategies: {
      immediate: ['Activate financial reserves', 'Communicate stability plans'],
      shortTerm: ['Diversify revenue streams', 'Hedge exposures'],
      longTerm: ['Build resilient business models', 'Develop contingency funding']
    }
  },
  'geopolitical-risk': {
    id: 'geopolitical-risk',
    name: 'Geopolitical Risk',
    description: 'International tensions, trade conflicts, and regional instability',
    severityRange: [6, 10],
    recurrencePatterns: ['Election cycles', 'Diplomatic tensions', 'Conflict zones'],
    mediaAmplificationScore: 9,
    cognitiveImpact: 7,
    relatedCategories: ['supply-chain', 'market-access'],
    mitigationStrategies: {
      immediate: ['Activate crisis team', 'Assess exposure levels'],
      shortTerm: ['Diversify supply chains', 'Monitor intelligence'],
      longTerm: ['Build geopolitical intelligence', 'Develop regional expertise']
    }
  }
  // Additional categories can be added here
};
