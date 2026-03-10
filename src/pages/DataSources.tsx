export default function DataSources() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-[#fdfaf5] min-h-screen font-serif">
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-[#1a365d]">Where This Data Comes From</h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Redding Open Budget believes transparency starts with showing our work. Below are the 
          official sources behind the <strong>FY 2025-26</strong> figures shown on this site.
        </p>
      </header>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4 border-b border-gray-200 pb-2">City of Redding — General Fund Budget</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Biennial Budget Document FY 2025-26 & 2026-27:</strong> 
              <br />
              <a href="https://www.cityofredding.org/departments/finance/city-budget" target="_blank" className="text-orange-600 hover:underline text-sm font-sans">cityofredding.gov/finance/budget</a>
            </li>
            <li>
              <strong>Data Extraction:</strong> Processed from the official PDF using Python (pdfplumber) for maximum precision.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4 border-b border-gray-200 pb-2">State & Financial Reports</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>California State Controller:</strong> Government Financial Reports — <span className="text-sm font-sans">sco.ca.gov</span></li>
            <li><strong>Transparent California:</strong> Public employee salaries and pensions — <span className="text-sm font-sans">transparentcalifornia.com</span></li>
          </ul>
        </section>
      </div>
    </div>
  )
}
