import { Suspense, lazy } from 'react';
import es1 from '../assets/images/es1.png';
import es2 from '../assets/images/es2.png';
import es3 from '../assets/images/es3.png';
import es4 from '../assets/images/es4.png';
import es5 from '../assets/images/es5.png';
import ProjectShell from '../components/ProjectShell';
import ProjectImageCarousel from '../components/ProjectImageCarousel';

const EcoStoveHeroCanvas = lazy(() => import('../components/engine/EcoStoveHeroCanvas'));

const images = [
  { src: es1, alt: 'Eco-fuel stove concept one — compact explore design' },
  { src: es2, alt: 'Indoor kitchen eco-fuel stove concept overview' },
  { src: es3, alt: 'Outdoor African cooking stove concept overview' },
  { src: es4, alt: 'Outdoor African cooking stove concept detail' },
  { src: es5, alt: 'Indoor kitchen eco-fuel stove concept detail' },
];

const CONCEPTS = [
  {
    label: 'Concept 01',
    title: 'Compact explore',
    body: 'The first sketch was a single, self-contained burner — a portable unit for households that need clean heat without committing to a permanent kitchen fixture. It tests how far a small chamber, careful airflow, and eco-fuel pellets can go when every kilogram and every cedi counts.',
  },
  {
    label: 'Concept 02',
    title: 'Indoor kitchen companion',
    body: 'Concepts two and five grow that idea into a calm indoor cooker: stable footprint, controlled flame, and a form that sits beside everyday pots rather than fighting for space. Built for enclosed kitchens where smoke must stay low and meals move from morning porridge to evening stew without fuss.',
  },
  {
    label: 'Concept 03',
    title: 'Outdoor African hearth',
    body: 'Concepts three and four take the fire outside — a wider, more rugged stance for courtyard and compound cooking. Designed around large pots, open air, and the rhythm of African outdoor kitchens, it keeps the eco-fuel efficiency while inviting family-scale meals under the sky.',
  },
];

const EcoStove = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-6 flex max-w-3xl flex-col items-center gap-4 text-center">
        <div className="text-panel w-full max-w-2xl">
          <p className="section-label mb-3">Case study</p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Eco-fuel Cooking Stove
          </h1>
        </div>
        <div className="text-panel w-full max-w-xl">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Three stove concepts exploring cleaner heat for Ghanaian homes — from a compact first
            study to indoor kitchen and outdoor courtyard cookers powered by eco-fuel.
          </p>
        </div>
      </div>

      <div className="relative mb-14 min-h-[min(62svh,640px)] overflow-hidden border border-line bg-[var(--surface-elevated)]/40">
        <Suspense
          fallback={
            <div className="flex h-full min-h-[min(62svh,640px)] w-full items-center justify-center">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Loading model…
              </p>
            </div>
          }
        >
          <EcoStoveHeroCanvas />
        </Suspense>
        <p className="pointer-events-none absolute bottom-4 left-1/2 z-10 w-max -translate-x-1/2 text-panel text-center font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
          Move to tilt · Drag to rotate · Scroll to zoom
        </p>
      </div>

      <p className="section-label mb-6 text-center">Design process</p>

      <ProjectImageCarousel images={images} />

      <div className="mx-auto mb-14 max-w-5xl">
        <p className="section-label mb-6 text-center">Design concepts</p>
        <div className="space-y-4">
          {CONCEPTS.map((concept) => (
            <div
              key={concept.label}
              className="border border-line bg-[var(--surface-elevated)] p-5 sm:p-7"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
                <div className="md:col-span-1">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    {concept.label}
                  </p>
                  <h2 className="mt-2 font-display text-lg font-semibold text-ink sm:text-xl">
                    {concept.title}
                  </h2>
                </div>
                <p className="text-muted md:col-span-3">{concept.body}</p>
              </div>
            </div>
          ))}
        </div>
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
                Each concept trades form against the same goals: cleaner burn, less charcoal smoke,
                and a stove that fits how people actually cook — indoors at the counter or outdoors
                with a wide pot over an open fire.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ['Fuel', 'Eco-fuel pellets sized for steady, controllable burn'],
                  ['Indoor', 'Low-smoke kitchen form for daily household cooking'],
                  ['Outdoor', 'Wider stance for courtyard pots and open-air meals'],
                  ['Tools', 'Modeled in SolidWorks across three competing concepts'],
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

export default EcoStove;
