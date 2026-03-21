export default function FloatingNav() {
  return (
    <nav className="glass px-6 py-3 rounded-full flex items-center gap-6">
      <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>
      <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
      <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
      <button className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium ml-4">Contact</button>
    </nav>
  );
}
