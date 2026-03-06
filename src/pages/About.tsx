export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="font-heading text-3xl sm:text-4xl text-navy mb-8">
        About Redding Open Budget
      </h1>

      <div className="space-y-6 mb-14">
        <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed">
          Redding Open Budget is a project created to make the City of Redding's public spending
          understandable, using official data. Budget information is technically available &mdash;
          published in biennial budget documents and financial reports &mdash; but it is distributed
          across different formats, dense with accounting terminology, and rarely presented in a way
          that regular residents can navigate or interpret.
        </p>

        <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed">
          The goal of Redding Open Budget is to organize and present this data clearly, intuitively,
          and completely &mdash; prioritizing amounts actually paid, not just budgeted or appropriated.
          The platform centralizes information today scattered across PDFs and government portals,
          and transforms raw figures into a structured view of city spending that allows for exploration,
          comparison, and real understanding.
        </p>

        <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed">
          This project uses exclusively official sources: the City of Redding's adopted budget documents,
          the California State Controller's financial reports, and Transparent California. Redding Open
          Budget does not replace these sources &mdash; it reduces the distance between official data
          and the people who need to understand it.
        </p>
      </div>

      <div className="border-t border-paper-dark pt-10">
        <h2 className="font-heading text-2xl text-navy mb-4">Open Source</h2>

        <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed mb-6">
          Redding Open Budget is an open-source project because transparency must start with the
          technology that supports it. Making the code public ensures verifiability, strengthens
          trust in the project, and allows developers, researchers, and residents to contribute
          to its improvement.
        </p>

        <ul className="space-y-2 font-body text-ink/70">
          <li>
            <span className="font-semibold text-ink/80">GitHub:</span>{' '}
            <a href="#" className="text-navy-light underline hover:text-navy transition-colors">
              Repository
            </a>
          </li>
          <li>
            <span className="font-semibold text-ink/80">Contact:</span>{' '}
            <a href="#" className="text-navy-light underline hover:text-navy transition-colors">
              Email
            </a>
          </li>
          <li>
            <span className="font-semibold text-ink/80">Inspired by:</span>{' '}
            <a
              href="https://brasiltransparente.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-light underline hover:text-navy transition-colors"
            >
              brasiltransparente.digital
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
