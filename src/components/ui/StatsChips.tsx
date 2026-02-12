interface Stat {
  label: string;
  value: string;
}

interface StatsChipsProps {
  stats: Stat[];
  className?: string;
}

export default function StatsChips({ stats, className = "" }: StatsChipsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border-border bg-surface flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm"
        >
          <span className="text-accent text-sm font-semibold">{stat.value}</span>
          <span className="text-text-secondary text-sm">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
