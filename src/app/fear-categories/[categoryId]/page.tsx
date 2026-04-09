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
      title: "Category Overview",
      items: [
        {
          type: "insight",
          content: category.description,
          severity: category.severityRange[1],
          mediaImpact: category.mediaAmplificationScore,
          cognitiveLoad: category.cognitiveImpact
        }
      ]
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
