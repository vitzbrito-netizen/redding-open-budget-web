import CategoryChart from '../components/CategoryChart';
import { FISCAL_YEAR, TOTAL_BUDGET } from '../data/budget';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <section className="mb-16 sm:mb-20">
        <p className="font-body text-sm sm:text-base font-semibold tracking-wide uppercase text-accent mb-3">
          City of Redding General Fund — {FISCAL_YEAR}
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-navy mb-4 tracking-tight">
          ${TOTAL_BUDGET} Million
        </h1>
        <p className="font-body text-lg sm:text-xl text-ink/60 max-w-xl">
          This is how your tax dollars were spent.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl sm:text-3xl text-navy mb-8">
          Spending by Category
        </h2>

        <CategoryChart />

        <p className="mt-8 text-sm text-ink/45 font-body leading-relaxed max-w-2xl">
          Source: City of Redding Biennial Budget {FISCAL_YEAR}. General Fund only.
          See <a href="/methodology" className="underline hover:text-ink/60 transition-colors">Methodology</a> for
          what is and isn't included.
        </p>
      </section>
    </div>
  );
}
