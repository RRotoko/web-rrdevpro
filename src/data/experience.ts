export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Freelance / Self-Employed",
    location: "Remote (EU / CET)",
    period: "2023 — Present",
    description:
      "Working with international clients on complex web and mobile applications. Leading frontend architecture decisions and mentoring junior developers.",
    highlights: [
      "Delivered 15+ projects for clients across EU and US",
      "Specialized in React, Next.js, and React Native",
      "Established reusable component libraries and design systems",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "TechCorp Solutions",
    location: "Berlin, Germany",
    period: "2021 — 2023",
    description:
      "Built and maintained large-scale SPA applications for enterprise clients. Collaborated with design and backend teams in an agile environment.",
    highlights: [
      "Led migration from Angular to React for flagship product",
      "Reduced bundle size by 40% through code splitting and lazy loading",
      "Implemented comprehensive E2E testing with Cypress",
    ],
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Digital Agency XYZ",
    location: "Prague, Czech Republic",
    period: "2019 — 2021",
    description:
      "Started career building websites and web applications for small-to-medium businesses. Learned fundamentals of modern web development.",
    highlights: [
      "Built 20+ responsive websites using React and Vue",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Introduced Tailwind CSS to the team's workflow",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor of Computer Science",
  institution: "Czech Technical University in Prague",
  period: "2015 — 2019",
  description:
    "Focused on software engineering and human-computer interaction. Completed thesis on responsive design patterns for complex data visualizations.",
};
