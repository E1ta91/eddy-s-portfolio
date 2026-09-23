import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectShell from '../components/ProjectShell';
import K from '../constants';

const ProjectsPage = () => {
  return (
    <ProjectShell backTo="/" backLabel="Back to home">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="section-label mb-3">Portfolio</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          All projects
        </h1>
        <div className="spec-rule mx-auto mt-5 max-w-[8rem]" />
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          Selected machines, vehicles, and fabrication systems — from concept CAD to working
          prototypes.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {K.PROJECTS.map((project, index) => {
          const isExternal = project.path.startsWith('http');
          const content = (
            <>
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  src={project.image}
                  alt={project.title.trim()}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas)] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 pt-4">
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {project.title.trim()}
                  </h2>
                  {project.subtitle && (
                    <p className="mt-1 line-clamp-2 text-sm text-muted">{project.subtitle}</p>
                  )}
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-line text-accent transition group-hover:border-accent group-hover:bg-accent group-hover:text-[var(--on-accent)]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </>
          );

          const className =
            'group block border border-line bg-[var(--surface-elevated)] p-3 transition hover:border-accent';

          if (isExternal) {
            return (
              <a
                key={project.title}
                href={project.path}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            );
          }

          return (
            <Link key={project.title} to={project.path} className={className}>
              {content}
            </Link>
          );
        })}
      </div>
    </ProjectShell>
  );
};

export default ProjectsPage;
