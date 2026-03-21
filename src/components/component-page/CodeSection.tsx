"use client"

import * as React from "react"
import { CodeBlock } from "@/components/gallery/CodeBlock"
import { ComponentData } from "@/data/components"
import { cn } from "@/lib/utils"

interface CodeSectionProps {
  component: ComponentData;
  onCodeChange?: (code: string) => void;
}

type TabType = 'react' | 'html' | 'tailwind';

export function CodeSection({ component, onCodeChange }: CodeSectionProps) {
  const [activeTab, setActiveTab] = React.useState<TabType>('react');

  React.useEffect(() => {
    if (onCodeChange) {
      onCodeChange(component.code[activeTab] || '');
    }
  }, [activeTab, component, onCodeChange]);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'react', label: 'React' },
    { id: 'html', label: 'HTML' },
    { id: 'tailwind', label: 'Tailwind CSS' },
  ];

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] rounded-2xl border border-white/10 overflow-hidden shadow-xl lg:max-h-[600px]">
      <div className="flex flex-wrap items-center gap-2 p-3 border-b border-white/5 bg-[#252526]">
        {tabs.map((tab) => {
          if (!component.code[tab.id]) return null;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 text-xs font-semibold rounded-lg transition-all",
                activeTab === tab.id 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-white/50 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      <div className="overflow-auto flex-1 h-full min-h-[400px] custom-scrollbar">
        <CodeBlock 
          code={component.code[activeTab] || '/* No code provided */'} 
          language={activeTab === 'react' ? 'tsx' : activeTab === 'html' ? 'html' : 'css'} 
        />
      </div>
    </div>
  );
}
