import { cn } from '@/app/lib/utils'

interface BriefItem {
  type?: 'text' | 'list' | 'action' | 'insight';
  content: string;
  severity?: number;
}

interface BriefSection {
  title: string;
  items: BriefItem[];
}

export function StructuredBrief({ sections }: { sections: BriefSection[] }) {
  return (
    <div className="mt-6 space-y-6">
      {sections.map((section, index) => (
        <div key={index} className="rounded-lg border border-white/15 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{section.title}</h3>
            {section.items.some(item => item.severity) && (
              <div className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
                Math.max(...section.items.map(item => item.severity || 0)) >= 7 ? "bg-red-500/10 text-red-400 hover:bg-red-500/15" :
                Math.max(...section.items.map(item => item.severity || 0)) >= 4 ? "bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/15" :
                "bg-green-500/10 text-green-400 hover:bg-green-500/15"
              )}>
                Peak Severity: {Math.max(...section.items.map(item => item.severity || 0))}/10
              </div>
            )}
          </div>
          <div className="mt-4 space-y-4">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className={cn(
                "p-3 rounded-md",
                item.type === 'action' ? "bg-blue-500/10 border border-blue-500/20" :
                item.type === 'insight' ? "bg-purple-500/10 border border-purple-500/20" : ""
              )}>
                {item.type === 'list' ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {item.content.split('\n').map((point, i) => (
                      <li key={i} className="text-sm text-white/80">{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-white/80">{item.content}</p>
                )}
                {item.severity && (
                  <div className="mt-2 text-xs text-white/60">
                    Concern Level: <span className={cn(
                      item.severity >= 7 ? "text-red-400" :
                      item.severity >= 4 ? "text-yellow-400" :
                      "text-green-400"
                    )}>{item.severity}/10</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
