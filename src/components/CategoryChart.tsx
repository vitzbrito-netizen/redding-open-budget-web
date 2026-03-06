import { BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer, LabelList } from 'recharts';
import { categories } from '../data/budget';

const COLORS = [
  '#1a3a5c',
  '#2a5a8c',
  '#e8531a',
  '#c44515',
  '#3a7ab8',
  '#5a94c8',
  '#8ab0d8',
];

interface ChartRow {
  name: string;
  percentage: number;
  label: string;
  amount: string;
}

const data: ChartRow[] = categories.map((c) => ({
  name: c.name,
  percentage: c.percentage,
  label: `${c.percentage}%`,
  amount: c.label,
}));

export default function CategoryChart() {
  return (
    <div className="w-full">
      <div className="space-y-5">
        {data.map((row, i) => (
          <div key={row.name} className="group">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                />
                <span className="font-body font-semibold text-ink text-sm sm:text-base truncate">
                  {row.name}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-3">
                <span className="font-body font-semibold text-ink/70 text-sm">
                  {row.amount}
                </span>
                <span className="font-body font-bold text-navy text-sm w-12 text-right">
                  {row.label}
                </span>
              </div>
            </div>
            <div className="w-full bg-paper-dark rounded-full h-3 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${row.percentage}%`,
                  backgroundColor: COLORS[i % COLORS.length],
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="sr-only">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="vertical">
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis type="category" dataKey="name" hide />
            <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
              <LabelList dataKey="label" position="right" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
