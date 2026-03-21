import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container px-4 md:px-6">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-8 animate-fade-in-up">
          <Sparkles className="mr-2 h-4 w-4" />
          <span className="font-medium">100+ Free Reusable Components</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto mb-6">
          Build Modern Interfaces <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Faster Than Ever</span>
        </h1>
        
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mx-auto mb-10">
          Open Bits UI is a premium open-source collection of beautiful, responsive, and highly customizable React components built with Tailwind CSS and Framer Motion.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#components"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Explore Components
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/yourusername/open-bits-ui"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Star on GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
