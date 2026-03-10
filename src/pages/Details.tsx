import AccordionItem from '../components/AccordionItem';
import { categories, TOTAL_BUDGET, FISCAL_YEAR } from '../data/budget';

export default function Details() {

  const exportToCSV = () => {
    const headers = ["Department", "Sub-Category", "Amount (Millions USD)", "Percentage of Budget"];

    const rows = categories.flatMap(cat =>
      (cat.subCategories ?? []).map(sub => [
        cat.name,
        sub.name,
        sub.amount,
        ((sub.amount / TOTAL_BUDGET) * 100).toFixed(1)
      ])
    );

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `redding_budget_${FISCAL_YEAR}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

      <div className="flex items-center justify-between mb-3">
        <h1 className="font-heading text-3xl sm:text-4xl text-navy">
          Spending by Department
        </h1>
        <button
          onClick={exportToCSV}
          className="px-4 py-2 bg-navy text-white text-sm font-body rounded hover:bg-blue-900 transition"
        >
          ⬇ Export CSV
        </button>
      </div>

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