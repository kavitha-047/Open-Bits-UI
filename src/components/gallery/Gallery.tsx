"use client"

import * as React from "react"
import { componentsData, ComponentCategory } from "@/data/components"
import { ComponentCard } from "./ComponentCard"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

const categories: ComponentCategory[] = ['Buttons', 'Cards', 'Loaders', 'Navbars'];

export function Gallery() {
  const [activeCategory, setActiveCategory] = React.useState<ComponentCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredComponents = componentsData.filter(component => {
    const matchesCategory = activeCategory === 'All' || component.category === activeCategory;
    const matchesSearch = component.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          component.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="components" className="container mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-foreground">Explore Components</h2>
          <p className="text-muted-foreground">Beautifully designed elements that you can copy and paste into your apps.</p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search components..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full sm:w-64 rounded-md border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar">
        <button
          onClick={() => setActiveCategory('All')}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
            activeCategory === 'All' ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          )}
        >
          All Components
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
              activeCategory === category ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredComponents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map(component => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border rounded-xl border-dashed">
          <p className="text-muted-foreground">No components found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="mt-4 text-primary hover:underline text-sm font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
