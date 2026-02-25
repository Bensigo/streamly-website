'use client';

interface FilterChipsProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function FilterChips({ categories, active, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-[var(--radius-lg)] transition-all duration-200 cursor-pointer ${
            active === cat
              ? 'bg-cyan text-navy'
              : 'bg-white dark:bg-dark-2 text-[var(--text-tertiary)] border border-[var(--border-gray)] hover:border-cyan'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
