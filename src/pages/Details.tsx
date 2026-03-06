import AccordionItem from '../components/AccordionItem';
import { categories, TOTAL_BUDGET, FISCAL_YEAR } from '../data/budget';

export default function Details() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="font-heading text-3xl sm:text-4xl text-navy mb-3">
        Spending by Department
      </h1>
      <p className="font-body text-ink/50 text-base mb-10">
        General Fund — {FISCAL_YEAR} — ${TOTAL_BUDGET}M total
      </p>

      <div className="bg-white rounded-lg border border-paper-dark shadow-sm">
        <div className="px-4 sm:px-6">
          {categories.map((cat, i) => (
            <AccordionItem key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </div>

      <p className="mt-8 text-sm text-ink/45 font-body leading-relaxed">
        Click a department to see sub-category breakdowns.
        Departments without sub-categories listed do not have published sub-breakdowns.
      </p>
    </div>
  );
}
