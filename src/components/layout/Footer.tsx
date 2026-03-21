import Link from "next/link"
import { Layers } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 text-center md:text-left">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          <p className="text-sm leading-loose text-muted-foreground">
            Built by <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Open Bits</a>. 
            The source code is available on <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}
