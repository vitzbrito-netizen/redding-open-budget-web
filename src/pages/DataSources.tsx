const sections = [
  {
    title: 'City of Redding \u2014 General Fund Budget',
    items: [
      {
        label: 'Biennial Budget Document FY 2023-24 & 2024-25',
        url: 'https://cityofredding.gov/government/departments/finance/budget',
      },
      {
        label: 'Budget in Brief (summary PDF)',
        url: 'https://cityofredding.gov/government/departments/finance/budget',
      },
    ],
  },
  {
    title: 'City of Redding \u2014 Financial Reports',
    items: [
      {
        label: 'Comprehensive Annual Financial Report (CAFR)',
        url: 'https://cityofredding.gov',
      },
      {
        label: 'Transparent California (employee salaries & pensions)',
        url: 'https://transparentcalifornia.com',
      },
    ],
  },
  {
    title: 'California State Controller',
    items: [
      {
        label: 'Government Financial Reports (cities & counties)',
        url: 'https://sco.ca.gov',
      },
      {
        label: 'Government Compensation in California',
        url: 'https://publicpay.ca.gov',
      },
    ],
  },
];

export default function DataSources() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="font-heading text-3xl sm:text-4xl text-navy mb-6">
        Where This Data Comes From
      </h1>

      <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed mb-12">
        Redding Open Budget believes transparency starts with showing our work. Below are the
        official sources behind every number on this site. Anyone can download the raw data and
        verify our figures independently.
      </p>

      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-heading text-xl text-navy mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 text-xs">&#9679;</span>
                  <span className="font-body text-ink/70">
                    {item.label}
                    {' \u2014 '}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-light underline hover:text-navy transition-colors"
                    >
                      {item.url.replace('https://', '')}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-ink/45 font-body leading-relaxed">
        All data used in this site is public information. If you find a discrepancy,
        please contact us.
      </p>
    </div>
  );
}
