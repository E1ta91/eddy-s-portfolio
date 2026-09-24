import { Suspense, lazy, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import K from '../constants';
import { useEngineDock } from '../context/EngineDockContext';

const AssembledEnginePreview = lazy(() => import('../components/engine/AssembledEnginePreview'));

const ENGINE_HOLD_MS = 10000;
const OTHER_HOLD_MS = 5000;

const ENGINE_SLIDE = {
  id: 'v6-engine',
  type: 'engine',
  title: 'V6 Internal Combustion Engine',
  subtitle:
    'A full CAD assembly of a V6 engine — modeled part by part in SolidWorks, from block and heads to crank, pistons, and valvetrain.',
  path: '/v6-engine',
};

const Projects = () => {
  const projects = [
    ENGINE_SLIDE,
    ...K.PROJECTS.filter((project) => project.path !== ENGINE_SLIDE.path),
  ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { focusedSection } = useEngineDock();

  const holdMs = index === 0 ? ENGINE_HOLD_MS : OTHER_HOLD_MS;

  useEffect(() => {
    if (focusedSection === 'projects') {
      setIndex(0);
    }
  }, [focusedSection]);

  useEffect(() => {
    if (paused || projects.length <= 1 || focusedSection !== 'projects') return undefined;
    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, holdMs);
    return () => clearTimeout(id);
  }, [paused, projects.length, focusedSection, holdMs, index]);

  const go = (dir) => {
    setIndex((prev) => (prev + dir + projects.length) % projects.length);
  };

  const project = projects[index];
  const isEngine = project.type === 'engine';
  const isExternal = !isEngine && project.path.startsWith('http');

  return (
    <div className="section-shell">
      <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="text-panel max-w-2xl">
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
          <div className="relative aspect-[16/11] overflow-hidden bg-[#0c1014] lg:aspect-auto lg:min-h-[420px]">
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                isEngine ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {isEngine && (
                <Suspense fallback={<div className="h-full w-full bg-[#0c1014]" />}>
                  <AssembledEnginePreview />
                </Suspense>
              )}
            </div>

            {projects.map((item, i) => {
              if (item.type === 'engine') return null;
              return (
                <img
                  key={item.id || item.title}
                  src={item.image}
                  alt={item.title.trim()}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              );
            })}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--canvas)]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[var(--surface-elevated)]/30" />
          </div>

          <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {project.title.trim()}
              </h3>
              {project.subtitle && <p className="mt-3 text-muted">{project.subtitle}</p>}

              {isEngine ? (
                <Link to={project.path} className="btn-ghost mt-6 inline-flex">
                  View case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : isExternal ? (
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
                    key={item.id || item.title}
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

            <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden bg-line">
              <div
                key={`${index}-${holdMs}-${focusedSection}`}
                className="h-full origin-left bg-accent"
                style={{
                  animation:
                    focusedSection === 'projects'
                      ? `carousel-progress ${holdMs}ms linear forwards`
                      : 'none',
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
