import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import v61 from '../assets/images/v61.png';
import v62 from '../assets/images/v62.png';
import v63 from '../assets/images/v63.png';
import ThemeToggle from '../components/ThemeToggle';
import ProjectImageCarousel from '../components/ProjectImageCarousel';

const V6HeroCanvas = lazy(() => import('../components/engine/V6HeroCanvas'));

const images = [
  { src: v61, alt: 'V6 engine isometric assembly overview' },
  { src: v62, alt: 'V6 engine three-quarter view' },
  { src: v63, alt: 'V6 engine detailed assembly study' },
];

const V6Engine = () => {
  return (
    <div className="relative min-h-screen bg-transparent text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 atelier-glow" aria-hidden="true" />

      <div className="relative z-10">
        <div className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-[var(--nav-bg)] px-5 py-3 backdrop-blur-md sm:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
          <ThemeToggle />
        </div>

        <section className="relative flex min-h-[min(92svh,920px)] flex-col border-b border-line">
          <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-5 pb-6 pt-8 text-center sm:px-8 sm:pt-10">
            <div className="text-panel w-full max-w-2xl">
              <p className="section-label mb-3">Case study</p>
              <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
                V6 Internal Combustion Engine
              </h1>
            </div>
            <div className="text-panel w-full max-w-xl">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                A complete CAD assembly of a V6 engine — modeled part by part in SolidWorks, from the
                cylinder block and heads through the crankshaft, pistons, and valvetrain.
              </p>
            </div>
          </div>

          <div className="relative min-h-[min(62svh,640px)] flex-1 overflow-hidden">
            <Suspense
              fallback={
                <div className="flex h-full min-h-[min(62svh,640px)] w-full items-center justify-center bg-[var(--canvas)]/40">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Loading engine…
                  </p>
                </div>
              }
            >
              <V6HeroCanvas />
            </Suspense>
            <p className="pointer-events-none absolute bottom-4 left-1/2 z-10 w-max -translate-x-1/2 text-panel text-center font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
              Move to tilt · Drag to rotate · Scroll to zoom
            </p>
          </div>
        </section>

        <div className="px-4 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <p className="section-label mb-6 text-center">Design process</p>

          <ProjectImageCarousel images={images} />

          <div className="mx-auto max-w-5xl">
            <p className="section-label mb-6 text-center">Technical specifications</p>
            <div className="border border-line bg-[var(--surface-elevated)]/90 p-5 backdrop-blur-sm sm:p-7">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent md:col-span-1">
                  Design approach
                </h2>
                <div className="md:col-span-3">
                  <p className="mb-4 text-muted">
                    Built as a full mechanical study to capture how a multi-cylinder engine fits
                    together — clearances, mating faces, and the path from combustion chamber to
                    rotating assembly.
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      [
                        'Block & heads',
                        'Cylinder block and head geometry with accurate deck and bore layout',
                      ],
                      [
                        'Rotating assembly',
                        'Crankshaft, pistons, and connecting rods modeled as a matched set',
                      ],
                      ['Valvetrain', 'Cam and valve components integrated into the head assembly'],
                      ['Tools', 'Designed and assembled entirely in SolidWorks'],
                    ].map(([title, body]) => (
                      <div
                        key={title}
                        className="border border-line bg-[var(--canvas)]/80 p-4 backdrop-blur-sm"
                      >
                        <h3 className="mb-1 font-display font-semibold text-accent">{title}</h3>
                        <p className="text-sm text-muted">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default V6Engine;
