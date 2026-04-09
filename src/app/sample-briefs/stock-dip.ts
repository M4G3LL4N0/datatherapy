import { BriefItem } from '@/components/StructuredBrief'

export const stockDipBrief: BriefItem[] = [
  {
    type: "event",
    content: "Major stock indices dropped 5% in morning trading due to unexpected inflation data",
    metadata: {
      firstObserved: "2023-03-10",
      lastObserved: "2023-03-10"
    }
  },
  {
    type: "commonFear",
    content: "This is the start of a prolonged market crash and economic downturn",
    severity: {
      level: 8,
      rationale: "People often catastrophize single-day market movements"
    }
  },
  // ... rest of the brief structure
];
