export default function Footer() {
  return (
    <footer className="border-t border-paper-dark bg-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-ink/50 font-body leading-relaxed text-center">
          Redding Open Budget is an independent civic project. Not affiliated with the City of Redding.
          {' | '}
          Data: City of Redding FY 2024-25 Budget
          {' | '}
          <a
            href="#"
            className="underline hover:text-ink/70 transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
