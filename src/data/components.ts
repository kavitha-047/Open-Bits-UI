export type ComponentCategory = 'Buttons' | 'Cards' | 'Loaders' | 'Navbars' | 'Animations';

export interface ComponentData {
  id: string;
  numericId: string;
  title: string;
  category: ComponentCategory;
  tags: string[];
  author: string;
  views: number;
  code: {
    react: string;
    html: string;
    tailwind: string;
  };
  componentPath: string; // The path to dynamically load the React component
}

export const componentsData: ComponentData[] = [
  {
    id: "btn-glass",
    numericId: "131001",
    title: "Glassmorphism Button",
    category: "Buttons",
    tags: ["glass", "animated", "hover"],
    author: "Alice Developer",
    views: 12450,
    componentPath: "Buttons/GlassButton",
    code: {
      react: `export default function GlassButton() {\n  return (\n    <button className="px-6 py-2 rounded-lg glass hover:glass-dark transition-all duration-300 text-foreground font-medium">\n      Glass Button\n    </button>\n  );\n}`,
      html: `<button class="px-6 py-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:bg-black/20 text-white font-medium transition-all">\n  Glass Button\n</button>`,
      tailwind: `@utility glass {\n  background: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n@utility glass-dark {\n  background: rgba(0, 0, 0, 0.2);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}`
    }
  },
  {
    id: "btn-gradient",
    numericId: "131002",
    title: "Gradient Glow Button",
    category: "Buttons",
    tags: ["gradient", "glow", "animated"],
    author: "Bob Coder",
    views: 8932,
    componentPath: "Buttons/GradientButton",
    code: {
      react: `export default function GradientButton() {\n  return (\n    <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">\n      Hover Me\n    </button>\n  );\n}`,
      html: `<button class="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">\n  Hover Me\n</button>`,
      tailwind: `/* Uses standard Tailwind classes */`
    }
  },
  {
    id: "card-profile",
    numericId: "131003",
    title: "Animated Profile Card",
    category: "Cards",
    tags: ["profile", "card", "glass"],
    author: "Charlie Design",
    views: 24500,
    componentPath: "Cards/ProfileCard",
    code: {
      react: `export default function ProfileCard() {\n  return (\n    <div className="p-6 rounded-2xl glass w-72 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">\n      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 p-1">\n        <img src="https://i.pravatar.cc/150?img=68" alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-background" />\n      </div>\n      <div className="text-center">\n        <h3 className="text-lg font-bold text-foreground">John Doe</h3>\n        <p className="text-sm text-muted-foreground">Software Engineer</p>\n      </div>\n      <button className="w-full py-2 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">\n        Follow\n      </button>\n    </div>\n  );\n}`,
      html: `<!-- HTML equivalent for Profile Card -->`,
      tailwind: `/* Relies on .glass utility */`
    }
  },
  {
    id: "loader-spin",
    numericId: "131004",
    title: "Neon Spinner",
    category: "Loaders",
    tags: ["spinner", "neon", "animated"],
    author: "Dana Scripts",
    views: 4120,
    componentPath: "Loaders/NeonSpinner",
    code: {
      react: `export default function NeonSpinner() {\n  return (\n    <div className="w-12 h-12 rounded-full border-4 border-muted border-t-primary animate-spin drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>\n  );\n}`,
      html: `<div class="w-12 h-12 rounded-full border-4 border-zinc-200 dark:border-zinc-800 border-t-blue-500 animate-spin shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>`,
      tailwind: `/* Uses standard Tailwind classes */`
    }
  },
  {
    id: "nav-floating",
    numericId: "131005",
    title: "Floating Navbar",
    category: "Navbars",
    tags: ["navbar", "floating", "glass"],
    author: "Alice Developer",
    views: 15600,
    componentPath: "Navbars/FloatingNav",
    code: {
      react: `export default function FloatingNav() {\n  return (\n    <nav className="glass px-6 py-3 rounded-full flex items-center gap-6">\n      <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>\n      <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>\n      <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>\n      <button className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium ml-4">Contact</button>\n    </nav>\n  );\n}`,
      html: `<!-- HTML equivalent for Floating Nav -->`,
      tailwind: `/* Uses .glass utility */`
    }
  },
  {
    id: "anim-liquid-loop",
    numericId: "131006",
    title: "Liquid Loop Animation",
    category: "Animations",
    tags: ["3d", "liquid", "animated", "loop"],
    author: "User",
    views: 0,
    componentPath: "Animations/LiquidLoopAnimation",
    code: {
      react: `import React from 'react';
import { motion } from 'framer-motion';

const LiquidLoopAnimation = ({ size = "400px", rotationSpeed = 20, floatIntensity = 20 }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[600px] bg-black overflow-hidden rounded-xl">
      <div className="absolute rounded-full opacity-30 blur-[120px]" style={{ width: \`calc(\${size} * 1.5)\`, height: \`calc(\${size} * 1.5)\`, background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(0, 0, 0, 0) 70%)' }} />
      <motion.div style={{ width: size, height: size }} className="relative z-10 cursor-pointer" animate={{ y: [0, -floatIntensity, 0], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.1, rotate: 5 }}>
        <motion.div className="w-full h-full" animate={{ rotate: 360 }} transition={{ duration: rotationSpeed, repeat: Infinity, ease: "linear" }}>
          <img src="https://m.media-amazon.com/images/I/61Nl2+n1VXL._AC_UF894,1000_QL80_.jpg" alt="Liquid Loop" className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)' }} />
    </div>
  );
};
export default LiquidLoopAnimation;`,
      html: ``,
      tailwind: `/* None required */`
    }
  }
];
