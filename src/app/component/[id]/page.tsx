import { componentsData } from "@/data/components";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/gallery/CodeBlock";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

export default async function ComponentPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const component = componentsData.find(c => c.id === params.id);
  
  if (!component) {
    notFound();
  }

  const PreviewComponent = componentMap[component.componentPath];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:px-8">
      <Link href="/#components" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to components
      </Link>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">{component.title}</h1>
        <div className="flex items-center gap-2 mt-4">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
            {component.category}
          </span>
          {component.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Live Preview</h2>
          <div className="flex-1 rounded-xl border bg-card overflow-hidden flex items-center justify-center min-h-[400px] p-8 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            {PreviewComponent ? <PreviewComponent /> : <p className="text-muted-foreground">Component Not Found</p>}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Code</h2>
          <div className="flex-1 rounded-xl overflow-hidden border custom-scrollbar h-full min-h-[400px]">
             <div className="h-full">
                <CodeBlock code={component.code.react} language="tsx" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return componentsData.map((component) => ({
    id: component.id,
  }));
}
