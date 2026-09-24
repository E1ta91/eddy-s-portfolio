import { Suspense, lazy } from 'react';
import untitled51 from '../assets/images/untitled.51.png';
import untitled52 from '../assets/images/untitled.52.png';
import untitled54 from '../assets/images/untitled.54.png';
import untitled55 from '../assets/images/untitled.55.png';
import untitled56 from '../assets/images/untitled.56.png';
import untitled57 from '../assets/images/untitled.57.png';
import untitled59 from '../assets/images/untitled.59.png';
import untitled60 from '../assets/images/untitled.60.png';
import ProjectShell from '../components/ProjectShell';
import ProjectImageCarousel from '../components/ProjectImageCarousel';

const DeliveryBikeHeroCanvas = lazy(
  () => import('../components/engine/DeliveryBikeHeroCanvas')
);

const images = [
  { src: untitled51, alt: 'Electric delivery bike isometric overview' },
  { src: untitled52, alt: 'Electric delivery bike side profile' },
  { src: untitled54, alt: 'Cargo frame and rear rack layout' },
  { src: untitled55, alt: 'Electric delivery bike three-quarter view' },
  { src: untitled56, alt: 'Battery and drivetrain packaging' },
  { src: untitled57, alt: 'Front fork and steering assembly' },
  { src: untitled59, alt: 'Electric delivery bike cutaway study' },
  { src: untitled60, alt: 'Electric delivery bike final design' },
];

const DeliveryBike = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-6 flex max-w-3xl flex-col items-center gap-4 text-center">
        <div className="text-panel w-full max-w-2xl">
          <p className="section-label mb-3">Case study</p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Electric Delivery Bike
          </h1>
        </div>
        <div className="text-panel w-full max-w-xl">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            A cargo-ready electric bike built for Ghana&apos;s last-mile economy — weaving through
            Accra and Kumasi traffic to move market goods, parcels, and food without the fuel cost or
            fumes of a motorcycle.
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
          <DeliveryBikeHeroCanvas />
        </Suspense>
        <p className="pointer-events-none absolute bottom-4 left-1/2 z-10 w-max -translate-x-1/2 text-panel text-center font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
          Move to tilt · Drag to rotate · Scroll to zoom
        </p>
      </div>

      <p className="section-label mb-6 text-center">Design process</p>

      <ProjectImageCarousel images={images} />

      <div className="mx-auto max-w-5xl">
        <p className="section-label mb-6 text-center">Technical specifications</p>
        <div className="border border-line bg-[var(--surface-elevated)] p-5 sm:p-7">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent md:col-span-1">
              Design approach
            </h2>
            <div className="md:col-span-3">
              <p className="mb-4 text-muted">
                Shaped around the realities of Ghanaian city delivery: crowded intersections, patched
                asphalt, midday heat, and riders who need stable cargo space as much as range. The
                electric assist cuts operating cost for vendors and couriers while keeping the bike
                serviceable in local workshops.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  [
                    'Cargo',
                    'Rear rack and frame geometry sized for crates, parcels, and market loads',
                  ],
                  ['Power', 'Electric assist tuned for stop-start city runs and short hills'],
                  ['Terrain', 'Stable stance and durable build for uneven urban roads'],
                  ['Maintenance', 'Modular layout so batteries and drivetrain parts swap locally'],
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

export default DeliveryBike;
