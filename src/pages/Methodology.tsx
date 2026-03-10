export default function Methodology() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-[#fdfaf5] min-h-screen font-serif text-gray-800">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-5xl font-bold text-[#1a365d]">Methodology</h1>
        <p className="text-gray-600 mt-4 text-xl leading-relaxed italic">
          Transparency starts with explaining how the numbers were handled.
        </p>
      </header>

      <div className="space-y-10">
        <section>
          <p className="text-lg leading-relaxed">
            Redding Open Budget focuses on amounts actually spent by the City of Redding from its <strong>General Fund</strong>. 
            Our goal is a practical, accessible view of where public money was truly used — avoiding technicalities 
            that often distort the picture for regular residents. Totals shown here may differ from the officially adopted budget; 
            the reasons are explained below.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-sans font-bold uppercase tracking-wider text-sm mb-3 text-orange-600">General Fund Only</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              We focus exclusively on the core operating budget funded by local taxes (property tax, sales tax, utility users tax). 
              Enterprise funds (Electric, Water, Airport) are excluded as they operate as self-funded businesses.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-sans font-bold uppercase tracking-wider text-sm mb-3 text-orange-600">Actual expenditures only</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              We show only amounts actually paid out. Budget "appropriations" — money approved but not yet spent — are not counted, 
              giving a truer picture of current spending.
            </p>
          </section>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#1a365d]">Exclusions & Reclassifications</h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li><strong>Pass-through funds:</strong> Grants designated for specific programs are excluded as they aren't discretionary city spending.</li>
            <li><strong>Debt refinancing:</strong> Only the interest paid is counted, as refinancing doesn't create new spending.</li>
            <li><strong>Pension costs:</strong> Costs are shown within their respective departments (like Police) to show the true cost of service.</li>
          </ul>
        </section>

        <section className="bg-orange-50 p-8 rounded-xl border border-orange-100 italic shadow-inner">
          <h2 className="text-xl font-bold text-[#1a365d] mb-2 not-italic font-sans uppercase tracking-tight">Context for Redding</h2>
          <p className="text-gray-700">
            "In June 2025, Councilwoman Tenessa Audette voted against the biennial budget, stating that a 300-page 
            document was reduced to a single page with no actual expenditure numbers for council review. 
            <strong> This site exists to fill that gap for residents.</strong>"
          </p>
        </section>
      </div>
    </div>
  )
}