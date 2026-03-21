"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-md overflow-hidden bg-[#1e1e1e] h-full">
      <div className="absolute right-4 top-4 z-10">
        <button
          onClick={onCopy}
          className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          fontSize: '0.875rem',
          background: 'transparent',
        }}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
