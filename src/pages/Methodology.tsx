const rules = [
  {
    title: 'General Fund only',
    body: 'We focus exclusively on the General Fund \u2014 the core operating budget funded by local taxes (property tax, sales tax, utility users tax). Enterprise funds (Redding Electric Utility, water, wastewater, airport) are excluded. These operate as self-funded businesses paid by ratepayers, not taxpayers. Including them would inflate the total and obscure where your tax dollars go.',
  },
  {
    title: 'Actual expenditures only',
    body: 'We show only amounts actually paid out during the fiscal year. Budget appropriations \u2014 money approved but not yet spent \u2014 are not counted. This gives a more accurate picture of what the city truly spent, not just planned to spend.',
  },
  {
    title: 'Pass-through funds excluded',
    body: 'Some funds flow through the city but are legally designated for other purposes \u2014 such as state or federal grants passed to specific programs. These are excluded because they do not represent discretionary city spending.',
  },
  {
    title: 'Debt refinancing excluded',
    body: 'When the city refinances existing debt, the gross transaction appears large but creates no new spending \u2014 it replaces one obligation with another. The real cost of debt is the interest paid, which is included under Debt Service.',
  },
];

export default function Methodology() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
        Methodology
      </h1>

      <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed mb-12">
        Redding Open Budget focuses on amounts actually spent by the City of Redding from its
        General Fund. Our goal is a practical, accessible view of where public money was truly
        used &mdash; avoiding technicalities that often distort the picture for regular residents.
        Totals shown here may differ from the officially adopted budget; the reasons are explained below.
      </p>

      <div className="space-y-8 mb-16">
        {rules.map((rule) => (
          <div key={rule.title}>
            <h3 className="font-heading text-lg text-navy mb-2">{rule.title}</h3>
            <p className="font-body text-ink/70 leading-relaxed">{rule.body}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-paper-dark pt-10 mb-12">
        <h2 className="font-heading text-2xl text-navy mb-4">
          About the Spending Summary
        </h2>
        <p className="font-body text-ink/70 leading-relaxed">
          The home page groups expenditures into broad categories for readability. Some
          reclassifications were made &mdash; for example, pension costs for police are shown
          under Public Safety rather than a separate pension line, because they are part of the
          cost of running that department. We are always open to revising these rules. If you
          find an error or have a suggestion, please reach out.
        </p>
      </div>

      <div className="bg-white border border-paper-dark rounded-lg p-6 sm:p-8">
        <p className="font-body text-ink/60 italic leading-relaxed text-sm sm:text-base">
          A note on transparency in Redding: In June 2025, Councilwoman Tenessa Audette voted
          against the biennial budget, stating that a 300-page document was reduced to a single
          page with no actual expenditure numbers for council review. This site exists to fill
          that gap for residents.
        </p>
      </div>
    </div>
  );
}
