export type ComponentCategory = 'Buttons' | 'Cards' | 'Loaders' | 'Navbars';

export interface ComponentData {
  id: string;
  title: string;
  category: ComponentCategory;
  tags: string[];
  code: {
    react: string;
    html: string;
  };
  componentPath: string; // The path to dynamically load the React component
}

export const componentsData: ComponentData[] = [
  {
    id: "btn-glass",
    title: "Glassmorphism Button",
    category: "Buttons",
    tags: ["glass", "animated", "hover"],
    componentPath: "Buttons/GlassButton",
    code: {
      react: `export default function GlassButton() {\n  return (\n    <button className="px-6 py-2 rounded-lg glass hover:glass-dark transition-all duration-300 text-foreground font-medium">\n      Glass Button\n    </button>\n  );\n}`,
      html: `<button class="px-6 py-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-black/20 text-white font-medium transition-all">\n  Glass Button\n</button>`
    }
  },
  {
    id: "btn-gradient",
    title: "Gradient Glow Button",
    category: "Buttons",
    tags: ["gradient", "glow", "animated"],
    componentPath: "Buttons/GradientButton",
    code: {
      react: `export default function GradientButton() {\n  return (\n    <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">\n      Hover Me\n    </button>\n  );\n}`,
      html: `<button class="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">\n  Hover Me\n</button>`
    }
  },
  {
    id: "card-profile",
    title: "Animated Profile Card",
    category: "Cards",
    tags: ["profile", "card", "glass"],
    componentPath: "Cards/ProfileCard",
    code: {
      react: `export default function ProfileCard() {\n  return (\n    <div className="p-6 rounded-2xl glass w-72 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">\n      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 p-1">\n        <img src="https://i.pravatar.cc/150?img=68" alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-background" />\n      </div>\n      <div className="text-center">\n        <h3 className="text-lg font-bold text-foreground">John Doe</h3>\n        <p className="text-sm text-muted-foreground">Software Engineer</p>\n      </div>\n      <button className="w-full py-2 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">\n        Follow\n      </button>\n    </div>\n  );\n}`,
      html: `<!-- HTML equivalent for Profile Card -->`
    }
  },
  {
    id: "loader-spin",
    title: "Neon Spinner",
    category: "Loaders",
    tags: ["spinner", "neon", "animated"],
    componentPath: "Loaders/NeonSpinner",
    code: {
      react: `export default function NeonSpinner() {\n  return (\n    <div className="w-12 h-12 rounded-full border-4 border-muted border-t-primary animate-spin drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>\n  );\n}`,
      html: `<div class="w-12 h-12 rounded-full border-4 border-zinc-200 dark:border-zinc-800 border-t-blue-500 animate-spin shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>`
    }
  },
  {
    id: "nav-floating",
    title: "Floating Navbar",
    category: "Navbars",
    tags: ["navbar", "floating", "glass"],
    componentPath: "Navbars/FloatingNav",
    code: {
      react: `export default function FloatingNav() {\n  return (\n    <nav className="glass px-6 py-3 rounded-full flex items-center gap-6">\n      <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>\n      <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>\n      <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>\n      <button className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium ml-4">Contact</button>\n    </nav>\n  );\n}`,
      html: `<!-- HTML equivalent for Floating Nav -->`
    }
  }
];
