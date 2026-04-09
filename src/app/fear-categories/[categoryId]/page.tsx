import { notFound } from 'next/navigation';
import { fearCategories } from '../types';
import { MarketingShell } from '@/components/MarketingShell';
import { StructuredBrief } from '@/components/StructuredBrief';

export default function FearCategoryPage({ params }: { params: { categoryId: string } }) {
  const category = fearCategories[params.categoryId];
  
  if (!category) {
    return notFound();
  }

  const briefSections = [
    {
      title: "Pattern Definition",
      items: [
        {
          type: "insight",
          content: category.description,
          severity: category.severityRange[1],
          mediaImpact: category.mediaAmplification.score,
          cognitiveLoad: category.cognitiveProfile.impactScore,
          metadata: {
            firstObserved: "2023-Q1",
            lastObserved: "2024-Q1",
            peakIntensity: category.severityRange[1],
            analysisFramework: "DT-PatternMatrix v2.1"
          }
        }
      ]
    },
    {
      title: "Recurrence Profile",
      items: category.recurrencePatterns.map(pattern => ({
        type: "pattern" as const,
        content: `${pattern.name} (${pattern.frequency})`,
        recurrencePattern: pattern.triggers.join(', '),
        recurrenceFrequency: pattern.frequency === 'daily' ? 9 : 
                          pattern.frequency === 'weekly' ? 7 :
                          pattern.frequency === 'monthly' ? 5 : 3
      }))
    },
    {
      title: "Pattern Characteristics",
      items: [
        {
          type: "list",
          content: category.recurrencePatterns.join('\n'),
          severity: Math.round((category.severityRange[0] + category.severityRange[1]) / 2)
        }
      ]
    },
    {
      title: "Recommended Mitigation",
      items: [
        {
          type: "action",
          content: "Immediate Actions",
          priority: "high",
          url: `/response-framework/immediate?category=${category.id}`
        },
        ...category.mitigationStrategies.immediate.map(action => ({
          type: "text" as const,
          content: action
        }))
      ]
    }
  ];

  return (
    <MarketingShell
      title={category.name}
      subtitle="Structured fear pattern analysis"
      description={`DataTherapy's comprehensive framework for understanding and responding to ${category.name.toLowerCase()}`}
      tag={`DataTherapy • ${category.name}`}
    >
      <div className="mt-8">
        <StructuredBrief sections={briefSections} />
      </div>
    </MarketingShell>
  );
}
