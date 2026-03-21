"use client"

import * as React from "react"
import { ComponentData } from "@/data/components"
import { CodeBlock } from "./CodeBlock"
import { Code2, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

import GlassButton from "@/components/previews/Buttons/GlassButton"
import GradientButton from "@/components/previews/Buttons/GradientButton"
import ProfileCard from "@/components/previews/Cards/ProfileCard"
import NeonSpinner from "@/components/previews/Loaders/NeonSpinner"
import FloatingNav from "@/components/previews/Navbars/FloatingNav"

const componentMap: Record<string, React.ElementType> = {
  "Buttons/GlassButton": GlassButton,
  "Buttons/GradientButton": GradientButton,
  "Cards/ProfileCard": ProfileCard,
  "Loaders/NeonSpinner": NeonSpinner,
  "Navbars/FloatingNav": FloatingNav,
}

interface ComponentCardProps {
  component: ComponentData;
}

export function ComponentCard({ component }: ComponentCardProps) {
  const [view, setView] = React.useState<'preview' | 'code'>('preview');
  const [codeType, setCodeType] = React.useState<'react' | 'html'>('react');
  
  const PreviewComponent = componentMap[component.componentPath];

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col group/card hover:border-primary/50 transition-colors">
      <div className="flex items-center justify-between p-4 border-b bg-muted/30">
        <div>
          <h3 className="font-semibold leading-none tracking-tight">
            <a href={`/component/${component.id}`} className="hover:text-primary transition-colors flex items-center gap-2">
              {component.title}
            </a>
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{component.category}</p>
        </div>
        <div className="flex border rounded-md overflow-hidden bg-background">
          <button
            onClick={() => setView('preview')}
            className={cn("px-3 py-1.5 text-xs font-medium flex items-center gap-1", view === 'preview' ? "bg-primary text-primary-foreground" : "hover:bg-muted")}
          >
            <Eye className="h-3 w-3" /> Preview
          </button>
          <button
            onClick={() => setView('code')}
            className={cn("px-3 py-1.5 text-xs font-medium flex items-center gap-1", view === 'code' ? "bg-primary text-primary-foreground" : "hover:bg-muted")}
          >
            <Code2 className="h-3 w-3" /> Code
          </button>
        </div>
      </div>
      
      <div className="p-0 flex-1 relative flex flex-col min-h-[300px]">
        {view === 'preview' ? (
          <div className="flex-1 p-8 flex items-center justify-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-b-xl overflow-hidden relative">
            {PreviewComponent ? <PreviewComponent /> : <p className="text-muted-foreground">Component Not Found</p>}
          </div>
        ) : (
          <div className="flex flex-col flex-1 bg-[#1e1e1e]">
            <div className="flex items-center gap-2 p-2 border-b border-white/10">
              <button 
                onClick={() => setCodeType('react')}
                className={cn("px-3 py-1 text-xs font-medium rounded-sm transition-colors", codeType === 'react' ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5")}
              >
                React
              </button>
              <button 
                onClick={() => setCodeType('html')}
                className={cn("px-3 py-1 text-xs font-medium rounded-sm transition-colors", codeType === 'html' ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5")}
              >
                HTML
              </button>
            </div>
            <div className="overflow-auto flex-1 h-[250px] custom-scrollbar">
              <CodeBlock 
                code={component.code[codeType]} 
                language={codeType === 'react' ? 'tsx' : 'html'} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
