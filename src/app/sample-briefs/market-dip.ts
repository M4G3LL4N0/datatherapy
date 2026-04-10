import { BriefItem } from '@/components/StructuredBrief';

export const marketDipBrief: BriefItem[] = [
  {
    type: "event",
    content: "Stock market drops 5% in single day",
    metadata: {
      firstObserved: "2023-10-15",
      lastObserved: "2023-10-15"
    }
  },
  {
    type: "commonFear",
    content: "This is the start of a major crash and economic collapse",
    severity: {
      level: 8,
      rationale: "People often overreact to single-day market movements"
    }
  },
  {
    type: "knownFacts",
    content: "- Markets have dropped 5%+ 12 times in past 5 years\n- All previous drops recovered within 3 months\n- No fundamental economic changes detected",
    confidence: 90
  },
  {
    type: "uncertainties",
    content: "Whether this is isolated or start of trend\nPotential external triggers",
    confidence: 50
  },
  {
    type: "severity",
    content: "Moderate severity but not catastrophic",
    severity: {
      level: 6,
      rationale: "Single-day drops are common and often correct"
    }
  },
  {
    type: "relevance",
    content: "Most relevant for investors and retirement accounts",
    relevance: {
      personal: 7,
      professional: 5
    }
  },
  {
    type: "urgency",
    content: "No immediate action needed",
    urgency: "monitor"
  },
  {
    type: "overreaction",
    content: "Selling all investments immediately\nAssuming worst-case scenario"
  },
  {
    type: "betterInterpretation",
    content: "This is a normal market correction\nVolatility is expected in healthy markets"
  },
  {
    type: "actions",
    content: "Review portfolio allocation\nConsider dollar-cost averaging\nAvoid panic selling"
  },
  {
    type: "assumptions",
    content: "Don't assume this predicts long-term trends\nDon't assume all sectors are equally affected"
  },
  {
    type: "grounding",
    content: "Markets have always recovered from drops\nTime in market beats timing market"
  }
];
