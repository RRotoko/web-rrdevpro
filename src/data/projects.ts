export interface Project {
  slug: string;
  title: string;
  type: "Web" | "Mobile" | "Desktop";
  thumbnail: string;
  year: number;
  role: string;
  services: string[];
  tags: string[];
  subtitle: string;
  description: string;
  goals: string[];
  challenges: string[];
  solutions: string[];
  steps: { title: string; description: string }[];
}

export const projects: Project[] = [
  {
    slug: "fintrack-dashboard",
    title: "FinTrack Dashboard",
    type: "Web",
    thumbnail: "/projects/fintrack.svg",
    year: 2025,
    role: "Lead Frontend Developer",
    services: ["UI/UX Design", "Frontend Development", "API Integration"],
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    subtitle: "A modern financial analytics dashboard for tracking investments and expenses",
    description:
      "FinTrack is a comprehensive financial dashboard that helps users monitor their investments, track spending patterns, and make data-driven financial decisions.",
    goals: [
      "Provide real-time financial data visualization",
      "Simplify portfolio tracking across multiple accounts",
      "Enable custom report generation and export",
    ],
    challenges: [
      "Handling large datasets with smooth UI performance",
      "Real-time data synchronization across devices",
      "Complex charting requirements with interactive filters",
    ],
    solutions: [
      "Implemented virtualized lists and memoized chart components",
      "Used WebSocket connections with optimistic UI updates",
      "Built a modular charting system with composable filter hooks",
    ],
    steps: [
      {
        title: "Research",
        description: "User interviews, competitor analysis, requirements gathering",
      },
      { title: "Design", description: "Wireframes, high-fidelity mockups, interactive prototypes" },
      { title: "Development", description: "Component architecture, API integration, testing" },
      { title: "Launch", description: "Performance optimization, deployment, monitoring setup" },
    ],
  },
  {
    slug: "medconnect-app",
    title: "MedConnect App",
    type: "Mobile",
    thumbnail: "/projects/medconnect.svg",
    year: 2025,
    role: "Full-Stack Developer",
    services: ["Mobile Development", "Backend API", "UI/UX Design"],
    tags: ["React Native", "Node.js", "PostgreSQL", "Expo"],
    subtitle: "Telemedicine platform connecting patients with healthcare providers",
    description:
      "MedConnect bridges the gap between patients and doctors through seamless video consultations, prescription management, and health record tracking.",
    goals: [
      "Enable seamless video consultations on mobile",
      "Secure health data storage compliant with regulations",
      "Intuitive appointment scheduling and reminders",
    ],
    challenges: [
      "Ensuring HIPAA-compliant data handling",
      "Low-latency video streaming on varied network conditions",
      "Cross-platform consistency between iOS and Android",
    ],
    solutions: [
      "End-to-end encryption with secure cloud storage",
      "Adaptive bitrate streaming with fallback to audio-only",
      "Shared codebase with platform-specific optimizations via Expo",
    ],
    steps: [
      {
        title: "Discovery",
        description: "Stakeholder workshops, regulatory research, user persona mapping",
      },
      { title: "Prototype", description: "Clickable prototypes, usability testing, iteration" },
      { title: "Build", description: "React Native development, backend API, CI/CD pipeline" },
      { title: "Deploy", description: "App Store submission, beta testing, launch campaign" },
    ],
  },
  {
    slug: "taskflow-desktop",
    title: "TaskFlow Desktop",
    type: "Desktop",
    thumbnail: "/projects/taskflow.svg",
    year: 2024,
    role: "Frontend Developer",
    services: ["Desktop Development", "UI Design", "Performance Optimization"],
    tags: ["Electron", "React", "TypeScript", "SQLite"],
    subtitle: "Offline-first project management tool for development teams",
    description:
      "TaskFlow is a desktop application designed for dev teams who need reliable project management that works offline, syncing automatically when connectivity is restored.",
    goals: [
      "Full offline functionality with smart sync",
      "Kanban, timeline, and list views for flexibility",
      "Integrations with GitHub, GitLab, and Jira",
    ],
    challenges: [
      "Conflict resolution during offline-to-online sync",
      "Native-feeling performance in Electron",
      "Complex drag-and-drop across multiple board views",
    ],
    solutions: [
      "CRDT-based data model for conflict-free merging",
      "Optimized rendering pipeline with virtual scrolling",
      "Custom drag-and-drop engine with smooth animations",
    ],
    steps: [
      {
        title: "Planning",
        description: "Architecture design, tech stack selection, roadmap creation",
      },
      { title: "Design", description: "Component library, theme system, accessibility audit" },
      { title: "Implementation", description: "Core features, offline sync, integrations" },
      { title: "Release", description: "Auto-update system, documentation, user onboarding" },
    ],
  },
  {
    slug: "shopease-ecommerce",
    title: "ShopEase E-Commerce",
    type: "Web",
    thumbnail: "/projects/shopease.svg",
    year: 2024,
    role: "Frontend Developer",
    services: ["Frontend Development", "E-Commerce", "Performance"],
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    subtitle: "High-performance e-commerce platform with modern UX",
    description:
      "ShopEase is a lightning-fast e-commerce platform built with Next.js, offering a seamless shopping experience with instant search, smart filters, and one-click checkout.",
    goals: [
      "Sub-second page loads for better conversion rates",
      "Intuitive product discovery with smart filters",
      "Seamless checkout experience with multiple payment methods",
    ],
    challenges: [
      "Optimizing for Core Web Vitals with dynamic content",
      "Real-time inventory synchronization",
      "Complex product variant management",
    ],
    solutions: [
      "ISR with on-demand revalidation for product pages",
      "Event-driven inventory system with optimistic UI",
      "Recursive variant selector with URL-based state",
    ],
    steps: [
      { title: "Analysis", description: "Market research, user flow mapping, tech feasibility" },
      { title: "Design", description: "Design system, responsive layouts, micro-interactions" },
      { title: "Development", description: "Frontend build, payment integration, CMS setup" },
      { title: "Launch", description: "Load testing, SEO optimization, analytics integration" },
    ],
  },
  {
    slug: "fitpulse-mobile",
    title: "FitPulse Tracker",
    type: "Mobile",
    thumbnail: "/projects/fitpulse.svg",
    year: 2024,
    role: "Mobile Developer",
    services: ["Mobile Development", "UI/UX Design", "Health API"],
    tags: ["React Native", "TypeScript", "HealthKit", "Firebase"],
    subtitle: "AI-powered fitness companion with personalized workout plans",
    description:
      "FitPulse combines AI-driven workout recommendations with real-time health tracking, providing users with a personalized fitness journey.",
    goals: [
      "Personalized workout plans based on user goals and fitness level",
      "Integration with wearable devices for real-time tracking",
      "Social features for motivation and accountability",
    ],
    challenges: [
      "Accurate calorie and exercise tracking across devices",
      "AI model optimization for on-device inference",
      "Battery-efficient background health monitoring",
    ],
    solutions: [
      "HealthKit/Google Fit integration with data normalization layer",
      "TensorFlow Lite models optimized for mobile inference",
      "Efficient background task scheduling with minimal wake-ups",
    ],
    steps: [
      {
        title: "Research",
        description: "Fitness market analysis, user surveys, feature prioritization",
      },
      {
        title: "Design",
        description: "Gamification UX, motion design, accessibility considerations",
      },
      { title: "Build", description: "Core tracking, AI integration, social features" },
      { title: "Release", description: "Beta program, App Store optimization, launch marketing" },
    ],
  },
  {
    slug: "devtools-suite",
    title: "DevTools Suite",
    type: "Desktop",
    thumbnail: "/projects/devtools.svg",
    year: 2023,
    role: "Lead Developer",
    services: ["Desktop Development", "DevTools", "Open Source"],
    tags: ["Electron", "React", "TypeScript", "Node.js"],
    subtitle: "Unified developer toolkit for API testing, DB management, and code generation",
    description:
      "DevTools Suite is an all-in-one desktop application that combines API testing, database management, and code scaffolding tools into a single, beautiful interface.",
    goals: [
      "Replace multiple dev tools with one unified app",
      "Support multiple database engines and API protocols",
      "Extensible plugin system for custom tools",
    ],
    challenges: [
      "Managing multiple concurrent database connections",
      "Plugin sandboxing for security",
      "Consistent theming across diverse tool interfaces",
    ],
    solutions: [
      "Connection pooling with worker threads for isolation",
      "V8 isolate-based plugin runtime with controlled API surface",
      "Token-based design system with runtime theme switching",
    ],
    steps: [
      {
        title: "Architecture",
        description: "Plugin system design, module boundaries, API contracts",
      },
      { title: "Core", description: "Shell app, plugin loader, theme engine, settings" },
      { title: "Tools", description: "API client, DB browser, code generator, diff viewer" },
      {
        title: "Community",
        description: "Documentation, plugin marketplace, contributor guidelines",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByType(type: string): Project[] {
  if (type === "All") return projects;
  return projects.filter((p) => p.type === type);
}
