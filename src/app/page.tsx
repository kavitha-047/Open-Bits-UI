import { Hero } from "@/components/layout/Hero";
import { Gallery } from "@/components/gallery/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Gallery />
    </div>
  );
}
