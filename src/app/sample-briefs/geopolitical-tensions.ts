type BriefItem = Record<string, unknown>;

export const geopoliticalTensionsBrief: BriefItem[] = [
  {
    type: "event",
    content: "Increased military activity in Region X following diplomatic breakdown",
    metadata: {
      firstObserved: "2023-11-15",
      lastObserved: "2023-11-20"
    }
  },
  {
    type: "commonFear",
    content: "This will escalate into full-scale war and global economic disruption",
    severity: {
      level: 9,
      rationale: "People often overestimate the likelihood of worst-case scenarios"
    }
  },
  {
    type: "knownFacts",
    content: "- Troop movements are confirmed\n- Diplomatic channels remain open\n- Similar tensions occurred 18 months ago without escalation",
    confidence: 85
  },
  {
    type: "uncertainties",
    content: "Whether this is posturing or genuine preparation\nPotential third-party involvement",
    confidence: 40
  },
  {
    type: "severity",
    content: "High severity but not yet critical",
    severity: {
      level: 7,
      rationale: "Historical precedent shows most such tensions de-escalate"
    }
  },
  {
    type: "relevance",
    content: "Most relevant for businesses with regional exposure",
    relevance: {
      personal: 3,
      professional: 8
    }
  },
  {
    type: "urgency",
    content: "Monitor developments but no immediate action required",
    urgency: "short-term"
  },
  {
    type: "overreaction",
    content: "Assuming global conflict is inevitable\nMaking drastic business decisions prematurely"
  },
  {
    type: "betterInterpretation",
    content: "This is likely strategic positioning\nMost conflicts are avoided through diplomacy"
  },
  {
    type: "actions",
    content: "Review regional exposure\nIdentify contingency plans\nMonitor official advisories"
  },
  {
    type: "assumptions",
    content: "Don't assume this will directly impact all regions\nDon't assume economic effects will be immediate"
  },
  {
    type: "grounding",
    content: "Global systems are resilient to regional conflicts\nDiplomatic solutions are still most common outcome"
  }
];
