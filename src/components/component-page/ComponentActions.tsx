"use client"

import * as React from "react"
import { Heart, Download, Copy, Check } from "lucide-react"

interface ComponentActionsProps {
  code: string;
}

export function ComponentActions({ code }: ComponentActionsProps) {
  const [copied, setCopied] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 mt-6">
      <button 
        onClick={() => setFavorite(!favorite)}
        className="flex-1 sm:flex-none inline-flex h-11 items-center justify-center rounded-xl bg-card border border-border px-6 text-sm font-medium shadow-sm transition-all hover:bg-muted hover:border-primary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring group"
      >
        <Heart className={`mr-2 h-4 w-4 transition-transform group-hover:scale-110 ${favorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
        Save to Favorites
      </button>

      <div className="relative flex-1 sm:flex-none">
        <button className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-card border border-border px-6 text-sm font-medium shadow-sm transition-all hover:bg-muted hover:border-primary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring group">
          <Download className="mr-2 h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1" />
          Export
        </button>
      </div>

      <button 
        onClick={onCopy}
        className="flex-1 sm:flex-none inline-flex h-11 items-center justify-center rounded-xl bg-primary px-8 text-sm font-bold text-primary-foreground shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:-translate-y-0.5"
      >
        {copied ? (
          <><Check className="mr-2 h-4 w-4" /> Copied!</>
        ) : (
          <><Copy className="mr-2 h-4 w-4" /> Copy Code</>
        )}
      </button>
    </div>
  );
}
