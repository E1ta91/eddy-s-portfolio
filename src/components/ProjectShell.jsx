import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const ProjectShell = ({
  children,
  backTo = '/projects',
  backLabel = 'Back to projects',
}) => {
  return (
    <div className="atelier-glow min-h-screen bg-canvas text-ink">
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-[var(--nav-bg)] px-5 py-3 backdrop-blur-md sm:px-8">
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink transition hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        <ThemeToggle />
      </div>
      <div className="px-4 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-16">{children}</div>
    </div>
  );
};

export default ProjectShell;
