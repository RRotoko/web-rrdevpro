import Card from "@/components/ui/Card";

interface OverviewItem {
  title: string;
  items: string[];
}

interface OverviewCardsProps {
  goals: string[];
  challenges: string[];
  solutions: string[];
}

export default function OverviewCards({ goals, challenges, solutions }: OverviewCardsProps) {
  const sections: OverviewItem[] = [
    { title: "🎯 User Goals", items: goals },
    { title: "⚡ Key Challenges", items: challenges },
    { title: "✅ Solutions", items: solutions },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {sections.map((section) => (
        <Card key={section.title} hover>
          <h3 className="text-text-primary mb-4 text-lg font-semibold">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item} className="text-text-secondary flex items-start gap-2 text-sm">
                <span className="bg-accent mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
