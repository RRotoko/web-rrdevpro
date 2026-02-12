import Card from "@/components/ui/Card";

interface Step {
  title: string;
  description: string;
}

interface StepsRowProps {
  steps: Step[];
}

export default function StepsRow({ steps }: StepsRowProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <Card key={step.title} hover className="relative">
          {/* Step number */}
          <span className="bg-accent/10 text-accent mb-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-text-primary mb-1 text-base font-semibold">{step.title}</h3>
          <p className="text-text-secondary text-sm">{step.description}</p>
        </Card>
      ))}
    </div>
  );
}
