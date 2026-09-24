import bike12 from '../assets/images/bike2.12.png';
import bike13 from '../assets/images/bike2.13.png';
import bike14 from '../assets/images/bike2.14.png';
import bike15 from '../assets/images/bike2.15.png';
import bike16 from '../assets/images/bike2.16.png';
import bike17 from '../assets/images/bike2.17.png';
import bike18 from '../assets/images/bike2.18.png';
import bike19 from '../assets/images/bike2.19.png';
import bike20 from '../assets/images/bike2.20.png';
import bike21 from '../assets/images/bike2.21.png';
import ProjectShell from '../components/ProjectShell';
import ProjectImageCarousel from '../components/ProjectImageCarousel';

const images = [
  { src: bike12, alt: 'Electric scooter isometric overview' },
  { src: bike13, alt: 'Electric scooter side profile' },
  { src: bike14, alt: 'Electric scooter front three-quarter view' },
  { src: bike15, alt: 'Electric scooter rear three-quarter view' },
  { src: bike16, alt: 'Recycled EV battery pack packaging' },
  { src: bike17, alt: 'Chassis and deck structural layout' },
  { src: bike18, alt: 'Motor hub and drivetrain detail' },
  { src: bike19, alt: 'Handlebar and rider controls' },
  { src: bike20, alt: 'Electric scooter cutaway assembly' },
  { src: bike21, alt: 'Electric scooter final city-ready design' },
];

const ElectricBike = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="section-label mb-3">Case study</p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Urban Electric Scooter
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          A compact electric scooter shaped for Ghanaian city streets — powered by recycled EV
          batteries so daily commuting stays clean, affordable, and built for local roads.
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
                Designed for Accra&apos;s stop-start traffic, uneven asphalt, and short urban hops —
                giving second life to retired EV battery modules while keeping ownership and repair
                within reach of local riders and workshops.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ['Battery', 'Repurposed EV modules packaged for scooter range and safety'],
                  ['City fit', 'Narrow footprint and stable stance for crowded streets'],
                  ['Drivetrain', 'Electric hub drive tuned for city speeds and hills'],
                  ['Serviceability', 'Modular layout for local repair and battery swap'],
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

export default ElectricBike;
