import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import K from '../constants';

const INTERVAL_MS = 5000;

const Projects = () => {
  const projects = K.PROJECTS;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || projects.length <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, projects.length]);

  const go = (dir) => {
    setIndex((prev) => (prev + dir + projects.length) % projects.length);
  };

  const project = projects[index];
  const isExternal = project.path.startsWith('http');

  return (
    <div className="section-shell">
      <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="section-label mb-3">Selected work</p>
          <h2 className="section-title">Projects</h2>
          <div className="spec-rule mt-5 max-w-[8rem]" />
          <p className="mt-4 text-muted">
            Machines, vehicles, and fabrication systems — from concept CAD to working prototypes.
          </p>
        </div>
        <Link to="/projects" className="btn-primary shrink-0 self-start sm:self-auto">
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div
        className="relative overflow-hidden border border-line bg-[var(--surface-elevated)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="grid lg:grid-cols-[1.35fr_1fr]">
          <div className="relative aspect-[16/11] overflow-hidden bg-surface lg:aspect-auto lg:min-h-[420px]">
            {projects.map((item, i) => (
              <img
                key={item.title}
                src={item.image}
                alt={item.title.trim()}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas)]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[var(--surface-elevated)]/40" />
          </div>

          <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {project.title.trim()}
              </h3>
              {project.subtitle && (
                <p className="mt-3 text-muted">{project.subtitle}</p>
              )}

              {isExternal ? (
                <a
                  href={project.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-6 inline-flex"
                >
                  Open project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <Link to={project.path} className="btn-ghost mt-6 inline-flex">
                  View case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => go(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-accent hover:text-accent"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => go(1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-accent hover:text-accent"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-wrap justify-end gap-1.5">
                {projects.map((item, i) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Go to ${item.title.trim()}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? 'w-6 bg-accent' : 'w-1.5 bg-line hover:bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Progress bar for the 5s cycle */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden bg-line">
              <div
                key={index}
                className="h-full origin-left bg-accent"
                style={{
                  animation: `carousel-progress ${INTERVAL_MS}ms linear forwards`,
                  animationPlayState: paused ? 'paused' : 'running',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
