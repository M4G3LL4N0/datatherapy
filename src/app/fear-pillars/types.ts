export type FearPillar = {
  id: string;
  name: string;
  description: string;
  categories: {
    id: string;
    name: string;
    briefs: {
      id: string;
      title: string;
      description: string;
    }[];
  }[];
};

export const fearPillars: FearPillar[] = [
  {
    id: 'economic',
    name: 'Economic',
    description: 'Financial stability, market volatility, and resource security concerns',
    categories: [
      {
        id: 'market-volatility',
        name: 'Market Volatility',
        briefs: [
          { id: 'stock-dip', title: 'Stock Market Correction', description: 'Analyzing sudden market drops' },
          { id: 'inflation-spike', title: 'Inflation Surge', description: 'Responding to rapid price increases' },
          { id: 'currency-fluctuation', title: 'Currency Fluctuations', description: 'Managing exchange rate volatility' },
          { id: 'commodity-shock', title: 'Commodity Price Shock', description: 'Addressing raw material cost spikes' },
          { id: 'bond-yield', title: 'Bond Yield Shifts', description: 'Interpreting interest rate changes' }
        ]
      },
      {
        id: 'employment',
        name: 'Employment',
        briefs: [
          { id: 'layoff-rumors', title: 'Layoff Rumors', description: 'Assessing workforce reduction risks' },
          { id: 'hiring-freeze', title: 'Hiring Freeze', description: 'Navigating recruitment pauses' },
          { id: 'skill-gap', title: 'Emerging Skill Gap', description: 'Addressing workforce capability shifts' }
        ]
      }
    ]
  },
  {
    id: 'geopolitical',
    name: 'Geopolitical',
    description: 'International relations, conflicts, and global power dynamics',
    categories: [
      {
        id: 'conflicts',
        name: 'Conflicts',
        briefs: [
          { id: 'regional-tension', title: 'Regional Tensions', description: 'Assessing localized conflicts' },
          { id: 'trade-dispute', title: 'Trade Disputes', description: 'Navigating international commerce conflicts' },
          { id: 'sanctions-impact', title: 'Sanctions Impact', description: 'Measuring economic restriction effects' }
        ]
      }
    ]
  },
  {
    id: 'technological',
    name: 'Technological',
    description: 'Disruptions, security threats, and rapid innovation impacts',
    categories: [
      {
        id: 'cybersecurity',
        name: 'Cybersecurity',
        briefs: [
          { id: 'data-breach', title: 'Data Breach', description: 'Responding to information leaks' },
          { id: 'ransomware', title: 'Ransomware Attack', description: 'Managing encryption threats' }
        ]
      }
    ]
  },
  {
    id: 'environmental',
    name: 'Environmental',
    description: 'Climate change, natural disasters, and ecological concerns',
    categories: [
      {
        id: 'climate',
        name: 'Climate',
        briefs: [
          { id: 'extreme-weather', title: 'Extreme Weather Event', description: 'Preparing for climate disruptions' }
        ]
      }
    ]
  },
  {
    id: 'health',
    name: 'Health',
    description: 'Pandemics, medical emergencies, and public health crises',
    categories: [
      {
        id: 'pandemics',
        name: 'Pandemics',
        briefs: [
          { id: 'outbreak', title: 'Disease Outbreak', description: 'Responding to spreading illnesses' }
        ]
      }
    ]
  }
];
