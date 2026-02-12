"use client";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Pill({ label, active = false, onClick }: PillProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-primary text-white shadow-sm"
          : "bg-surface text-text-secondary border-border hover:bg-surface-secondary hover:text-text-primary border"
      }`}
    >
      {label}
    </button>
  );
}
