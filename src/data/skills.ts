export interface Skill {
  name: string;
  icon: string; // emoji or short label fallback
  category: "frontend" | "backend" | "mobile" | "tools" | "design";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "TypeScript", icon: "TS", category: "frontend" },
  { name: "JavaScript", icon: "JS", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "HTML5", icon: "🌐", category: "frontend" },
  { name: "CSS3", icon: "🎯", category: "frontend" },
  { name: "Framer Motion", icon: "🎬", category: "frontend" },

  // Mobile
  { name: "React Native", icon: "📱", category: "mobile" },
  { name: "Expo", icon: "📦", category: "mobile" },

  // Backend
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Express", icon: "🚂", category: "backend" },
  { name: "PostgreSQL", icon: "🐘", category: "backend" },
  { name: "REST API", icon: "🔗", category: "backend" },
  { name: "GraphQL", icon: "◈", category: "backend" },

  // Tools
  { name: "Git", icon: "🔀", category: "tools" },
  { name: "Docker", icon: "🐳", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
  { name: "Webpack", icon: "📦", category: "tools" },
  { name: "Vite", icon: "⚡", category: "tools" },

  // Design
  { name: "Figma", icon: "🖼️", category: "design" },
  { name: "Adobe XD", icon: "🎨", category: "design" },
];

export const toolStack = skills.filter((s) => s.category === "tools" || s.category === "design");
