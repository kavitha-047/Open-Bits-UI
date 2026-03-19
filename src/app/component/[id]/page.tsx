import { componentsData } from "@/data/components";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Eye, User } from "lucide-react";
import { DetailLayout } from "@/components/component-page/DetailLayout";
import { ComponentPreview } from "@/components/component-page/ComponentPreview";

import GlassButton from "@/components/previews/Buttons/GlassButton"
import GradientButton from "@/components/previews/Buttons/GradientButton"
import ProfileCard from "@/components/previews/Cards/ProfileCard"
import NeonSpinner from "@/components/previews/Loaders/NeonSpinner"
import FloatingNav from "@/components/previews/Navbars/FloatingNav"
import LiquidLoopAnimation from "@/components/previews/Animations/LiquidLoopAnimation"

const componentMap: Record<string, React.ElementType> = {
  "Buttons/GlassButton": GlassButton,
  "Buttons/GradientButton": GradientButton,
  "Cards/ProfileCard": ProfileCard,
  "Loaders/NeonSpinner": NeonSpinner,
  "Navbars/FloatingNav": FloatingNav,
  "Animations/LiquidLoopAnimation": LiquidLoopAnimation,
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
      <Link href="/#components" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors group">
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to components
      </Link>
      
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">{component.title}</h1>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
              {component.category}
            </span>
            {component.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground text-xs font-medium border border-border">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground shrink-0 border border-border/50 rounded-xl px-4 py-2 bg-card/50 backdrop-blur-sm shadow-sm">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            <span className="font-medium text-foreground">{component.author}</span>
          </div>
          <div className="w-px h-5 bg-border"></div>
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>{component.views.toLocaleString()} views</span>
          </div>
        </div>
      </div>

      <DetailLayout 
        component={component} 
        previewNode={<ComponentPreview component={component} PreviewComponent={PreviewComponent} />} 
      />
    </div>
  );
}
