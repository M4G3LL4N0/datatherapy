import { cn } from '@/app/lib/utils'
import Link from 'next/link'

interface BriefItem {
  type?: 'text' | 'list' | 'action' | 'insight' | 'threat' | 'pattern' | 'protection' | 'response';
  content: string;
  severity?: number;
  timeframe?: 'immediate' | 'short-term' | 'long-term';
  mediaImpact?: number;
  cognitiveLoad?: number;
  recurrencePattern?: string;
  recurrenceFrequency?: number;
  confidence?: number;
  mitigationLevel?: number;
  detectionMethod?: 'automated' | 'manual' | 'hybrid';
  analysisType?: 'quantitative' | 'qualitative' | 'mixed';
  responseStatus?: 'pending' | 'active' | 'completed';
  sources?: {
    name: string;
    url?: string;
    reliability?: 'high' | 'medium' | 'low';
    timestamp?: string;
  }[];
  metadata?: {
    firstObserved?: string;
    lastObserved?: string;
    peakIntensity?: number;
    relatedPatterns?: string[];
    analysisFramework?: string;
    responseEffectiveness?: number;
  };
  actions?: {
    label: string;
    url: string;
    priority: 'critical' | 'high' | 'medium' | 'low';
    status?: 'pending' | 'in-progress' | 'completed';
  }[];
}

interface BriefSection {
  title: string;
  items: BriefItem[];
}

export interface StructuredBriefData {
  sections: BriefSection[]
}

export { StructuredBrief, type BriefSection, type BriefItem }

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
                item.type === 'insight' ? "bg-purple-500/10 border border-purple-500/20" :
                item.type === 'threat' ? "bg-red-500/10 border border-red-500/20" :
                item.type === 'pattern' ? "bg-yellow-500/10 border border-yellow-500/20" :
                item.type === 'protection' ? "bg-green-500/10 border border-green-500/20" :
                item.type === 'response' ? "bg-indigo-500/10 border border-indigo-500/20" : ""
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
                {item.timeframe && (
                  <div className="mt-2 text-xs text-white/60">
                    Timeframe: <span className="text-blue-400">{item.timeframe}</span>
                  </div>
                )}
                {(item.mediaImpact || item.cognitiveLoad || item.recurrenceFrequency) && (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {item.mediaImpact && (
                      <div>
                        <div className="text-xs text-white/60 mb-1">Media Impact</div>
                        <div className="h-1.5 w-full rounded-full bg-white/10">
                          <div
                            className="h-1.5 rounded-full bg-purple-500"
                            style={{ width: `${item.mediaImpact * 10}%` }}
                          />
                        </div>
                      </div>
                    )}
                    {item.cognitiveLoad && (
                      <div>
                        <div className="text-xs text-white/60 mb-1">Cognitive Load</div>
                        <div className="h-1.5 w-full rounded-full bg-white/10">
                          <div
                            className="h-1.5 rounded-full bg-blue-500"
                            style={{ width: `${item.cognitiveLoad * 10}%` }}
                          />
                        </div>
                      </div>
                    )}
                    {item.recurrenceFrequency && (
                      <div>
                        <div className="text-xs text-white/60 mb-1">Recurrence</div>
                        <div className="h-1.5 w-full rounded-full bg-white/10">
                          <div
                            className="h-1.5 rounded-full bg-yellow-500"
                            style={{ width: `${item.recurrenceFrequency * 10}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {item.sources && item.sources.length > 0 && (
                  <div className="mt-3">
                    <div className="text-xs text-white/60 mb-2">Sources</div>
                    <div className="space-y-2">
                      {item.sources.map((source, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <span className={cn(
                            "w-2 h-2 rounded-full",
                            source.reliability === 'high' ? "bg-green-500" :
                            source.reliability === 'medium' ? "bg-yellow-500" :
                            "bg-red-500"
                          )} />
                          {source.url ? (
                            <a 
                              href={source.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-white/70 hover:text-white hover:underline"
                            >
                              {source.name}
                            </a>
                          ) : (
                            <span className="text-white/70">{source.name}</span>
                          )}
                          {source.timestamp && (
                            <span className="text-white/50 ml-auto">{source.timestamp}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {item.actions && item.actions.length > 0 && (
                  <div className="mt-3">
                    <div className="text-xs text-white/60 mb-2">Next Steps</div>
                    <div className="space-y-2">
                      {item.actions.map((action, i) => (
                        <Link
                          key={i}
                          href={action.url}
                          className={cn(
                            "flex items-center justify-between px-3 py-2 rounded-md text-sm",
                            action.priority === 'critical' ? "bg-red-500/10 hover:bg-red-500/15" :
                            action.priority === 'high' ? "bg-yellow-500/10 hover:bg-yellow-500/15" :
                            action.priority === 'medium' ? "bg-blue-500/10 hover:bg-blue-500/15" :
                            "bg-white/5 hover:bg-white/10"
                          )}
                        >
                          {action.label}
                          <span className="text-xs text-white/50">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {item.metadata && (
                  <div className="mt-3">
                    <div className="text-xs text-white/60 mb-2">Documentation Metadata</div>
                    <div className="grid grid-cols-2 gap-3 text-xs text-white/70">
                      {item.metadata.analysisFramework && (
                        <div className="col-span-2">
                          <span className="text-white/50">Analysis Framework:</span> {item.metadata.analysisFramework}
                        </div>
                      )}
                      {item.metadata.peakIntensity && (
                        <div className="col-span-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white/50">Pattern Intensity</span>
                            <span>{item.metadata.peakIntensity}/10</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-white/10">
                            <div
                              className="h-1.5 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"
                              style={{ width: `${item.metadata.peakIntensity * 10}%` }}
                            />
                          </div>
                        </div>
                      )}
                      {item.metadata.firstObserved && (
                        <div>
                          <span className="text-white/50">First Observed:</span> {item.metadata.firstObserved}
                        </div>
                      )}
                      {item.metadata.lastObserved && (
                        <div>
                          <span className="text-white/50">Last Observed:</span> {item.metadata.lastObserved}
                        </div>
                      )}
                      {item.metadata.peakIntensity && (
                        <div>
                          <span className="text-white/50">Peak Intensity:</span> {item.metadata.peakIntensity}/10
                        </div>
                      )}
                      {item.metadata.relatedPatterns && (
                        <div className="col-span-2">
                          <span className="text-white/50">Related Patterns:</span> {item.metadata.relatedPatterns.join(', ')}
                        </div>
                      )}
                    </div>
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
