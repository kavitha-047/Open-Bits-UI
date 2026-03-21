import * as React from "react"
import { ComponentData } from "@/data/components"

interface ComponentPreviewProps {
  component: ComponentData;
  PreviewComponent: React.ElementType | undefined;
}

export function ComponentPreview({ component, PreviewComponent }: ComponentPreviewProps) {
  return (
    <div className="relative w-full rounded-2xl border bg-card overflow-hidden flex flex-col items-center justify-center min-h-[400px] shadow-[0_0_15px_rgba(255,255,255,0.02)] transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]">
      {/* Top Left ID Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-2 py-1 rounded bg-muted/60 text-muted-foreground text-xs font-mono font-medium backdrop-blur-md border border-white/10 uppercase tracking-wider">
          #{component.numericId}
        </span>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Component Wrapper with subtle glow behind it */}
      <div className="relative z-10 p-8 w-full h-full flex items-center justify-center group">
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none w-1/2 h-1/2 m-auto"></div>
        <div className="relative z-10 w-full flex items-center justify-center">
          {PreviewComponent ? <PreviewComponent /> : <p className="text-muted-foreground">Component Not Found</p>}
        </div>
      </div>
    </div>
  );
}
