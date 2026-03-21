"use client"

import * as React from "react"
import { ComponentData } from "@/data/components"
import { ComponentActions } from "./ComponentActions"
import { CodeSection } from "./CodeSection"

interface DetailLayoutProps {
  component: ComponentData;
  previewNode: React.ReactNode;
}

export function DetailLayout({ component, previewNode }: DetailLayoutProps) {
  const [activeCode, setActiveCode] = React.useState(component.code.react || '');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* LEFT COLUMN */}
      <div className="flex flex-col h-full gap-4">
        {previewNode}
        <ComponentActions code={activeCode} />
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col h-full">
        <CodeSection component={component} onCodeChange={setActiveCode} />
      </div>
    </div>
  );
}
