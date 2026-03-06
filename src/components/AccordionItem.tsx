import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { SpendingCategory } from '../types';
import { TOTAL_BUDGET } from '../data/budget';

interface Props {
  category: SpendingCategory;
  index: number;
}

const COLORS = [
  '#1a3a5c',
  '#2a5a8c',
  '#e8531a',
  '#c44515',
  '#3a7ab8',
  '#5a94c8',
  '#8ab0d8',
];

export default function AccordionItem({ category, index }: Props) {
  const [open, setOpen] = useState(false);
  const hasChildren = category.subCategories && category.subCategories.length > 0;
  const color = COLORS[index % COLORS.length];
  const pct = (category.amount / TOTAL_BUDGET) * 100;

  return (
    <div className="border-b border-paper-dark last:border-b-0">
      <button
        onClick={() => hasChildren && setOpen(!open)}
        className={`w-full text-left py-4 sm:py-5 flex items-center gap-3 group ${
          hasChildren ? 'cursor-pointer' : 'cursor-default'
        }`}
        aria-expanded={hasChildren ? open : undefined}
      >
        <span
          className="w-3 h-3 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-body font-semibold text-ink text-sm sm:text-base truncate pr-2">
              {category.name}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-body font-bold text-navy text-sm sm:text-base">
                {category.label}
              </span>
              {hasChildren && (
                <ChevronDown
                  size={18}
                  className={`text-ink/30 transition-transform duration-300 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              )}
            </div>
          </div>
          <div className="w-full bg-paper-dark rounded-full h-2.5 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%`, backgroundColor: color }}
            />
          </div>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {hasChildren && (
          <div className="pl-8 sm:pl-10 pb-4 space-y-3">
            {category.subCategories!.map((sub) => {
              const subPct = (sub.amount / TOTAL_BUDGET) * 100;
              return (
                <div key={sub.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-body text-ink/70 text-sm truncate pr-2">
                      {sub.name}
                    </span>
                    <span className="font-body font-semibold text-ink/70 text-sm shrink-0">
                      {sub.label}
                    </span>
                  </div>
                  <div className="w-full bg-paper-dark rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${subPct}%`,
                        backgroundColor: color,
                        opacity: 0.6,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
