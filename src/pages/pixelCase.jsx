import { Suspense, lazy } from 'react';
import ProjectShell from '../components/ProjectShell';

const PixelCaseHeroCanvas = lazy(() => import('../components/engine/PixelCaseHeroCanvas'));

const PixelCase = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-6 flex max-w-3xl flex-col items-center gap-4 text-center">
        <div className="text-panel w-full max-w-2xl">
          <p className="section-label mb-3">Case study</p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Pixel 6 Phone Case
          </h1>
        </div>
        <div className="text-panel w-full max-w-xl">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            A protective case designed around the Pixel 6 silhouette — phone and shell assemble on
            load, then open into a live 3D model you can inspect from every angle.
          </p>
        </div>
      </div>

      <div className="relative mb-14 min-h-[min(62svh,640px)] overflow-hidden border border-line bg-[var(--surface-elevated)]/40">
        <Suspense
          fallback={
            <div className="flex h-full min-h-[min(62svh,640px)] w-full items-center justify-center">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Loading assembly…
              </p>
            </div>
          }
        >
          <PixelCaseHeroCanvas />
        </Suspense>
      </div>

      <div className="mx-auto max-w-5xl">
        <p className="section-label mb-6 text-center">Technical specifications</p>
        <div className="border border-line bg-[var(--surface-elevated)] p-5 sm:p-7">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent md:col-span-1">
              Design approach
            </h2>
            <div className="md:col-span-3">
              <p className="mb-4 text-muted">
                Modeled as separate phone and case bodies that seat together in a short assembly
                sequence, then hand off to a finished assembly for interactive review — useful for
                checking fit, camera cutouts, and edge protection.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ['Parts', 'pixel6.glb phone body + case1.glb shell'],
                  ['Assembly', '8s timed join of phone and case bodies'],
                  ['Handoff', 'Crossfade into interactive pixel_6.1.glb'],
                  ['Tools', 'SolidWorks CAD exported to GLB for web review'],
                ].map(([title, body]) => (
                  <div key={title} className="border border-line bg-canvas p-4">
                    <h3 className="mb-1 font-display font-semibold text-accent">{title}</h3>
                    <p className="text-sm text-muted">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectShell>
  );
};

export default PixelCase;
