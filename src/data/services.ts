export interface Service {
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Modern, performant web applications built with React and Next.js. From landing pages to complex SPAs with server-side rendering.",
    icon: "🌐",
    deliverables: [
      "Responsive Single Page Applications",
      "Server-Side Rendered websites",
      "Progressive Web Apps",
      "Landing pages & marketing sites",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with React Native and Expo. Native feel, single codebase, faster time-to-market.",
    icon: "📱",
    deliverables: [
      "iOS & Android apps from one codebase",
      "Expo managed workflow",
      "Push notifications & deep linking",
      "App Store & Play Store submission",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design with a focus on usability and aesthetics. From wireframes to high-fidelity prototypes in Figma.",
    icon: "🎨",
    deliverables: [
      "Wireframes & user flows",
      "High-fidelity Figma mockups",
      "Interactive prototypes",
      "Design system & component library",
    ],
  },
  {
    title: "Frontend Architecture",
    description:
      "Scalable frontend architecture, design systems, and component libraries. Code reviews, mentoring, and best practices consulting.",
    icon: "🏗️",
    deliverables: [
      "Component library & design system",
      "State management strategy",
      "Performance optimization",
      "CI/CD pipeline setup",
    ],
  },
  {
    title: "API Integration",
    description:
      "Seamless integration with REST and GraphQL APIs. Data fetching strategies, caching, and real-time updates.",
    icon: "🔗",
    deliverables: [
      "REST & GraphQL integration",
      "Real-time data with WebSockets",
      "Authentication & authorization",
      "Third-party service integrations",
    ],
  },
  {
    title: "Consulting & Code Review",
    description:
      "Expert advice on frontend technologies, architecture decisions, and code quality. Help your team level up.",
    icon: "💡",
    deliverables: [
      "Architecture review & recommendations",
      "Code quality audits",
      "Performance profiling",
      "Team mentoring & workshops",
    ],
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your goals, audience, and requirements through focused workshops.",
  },
  {
    title: "Design",
    description:
      "Creating wireframes, prototypes, and visual designs for approval before development.",
  },
  {
    title: "Development",
    description: "Building the solution with clean, tested, production-ready code.",
  },
  {
    title: "Launch & Support",
    description: "Deploying, monitoring, and providing ongoing support and iterations.",
  },
];
