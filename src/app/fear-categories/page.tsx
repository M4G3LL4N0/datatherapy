import { fearCategories } from './types';
import { MarketingShell } from '@/components/MarketingShell';
import Link from 'next/link';

export default function FearCategoriesPage() {
  const categories = Object.values(fearCategories);
  
  return (
    <MarketingShell
      title="Fear Pattern Library"
      subtitle="Catalog of recurring threat categories"
      description="DataTherapy's comprehensive collection of systematically analyzed fear patterns and their mitigation frameworks."
      tag="DataTherapy • Fear Categories"
    >
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(category => (
          <Link
            key={category.id}
            href={`/fear-categories/${category.id}`}
            className="rounded-lg border border-white/15 p-6 hover:bg-white/5 transition-colors"
          >
            <h3 className="text-lg font-medium">{category.name}</h3>
            <p className="mt-2 text-sm text-white/70">{category.description}</p>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="rounded-full bg-red-500/10 px-2 py-1 text-red-400">
                Severity: {category.severityRange[0]}-{category.severityRange[1]}/10
              </span>
              <span className="text-white/50">
                {category.recurrencePatterns.length} patterns
              </span>
            </div>
          </Link>
        ))}
      </div>
    </MarketingShell>
  );
}
