import carfront from '../assets/images/carfront.jpg';
import carskin from '../assets/images/carskin.jpg';
import carskin2 from '../assets/images/carskin2.jpg';
import Carcut from '../assets/images/Carcut.png';
import Carfront from '../assets/images/Carfront.png';
import Carcut2 from '../assets/images/Carcut2.png';
import Carrear from '../assets/images/Carrear.png';
import Cariso from '../assets/images/Cariso.png';
import skateboard from '../assets/images/skateboard.png';
import ProjectShell from '../components/ProjectShell';
import ProjectImageCarousel from '../components/ProjectImageCarousel';

const images = [
  { src: Cariso, alt: 'Isometric view of EMPV' },
  { src: Carrear, alt: 'Rear view of EMPV' },
  { src: Carcut, alt: 'Cutaway view of EMPV' },
  { src: Carcut2, alt: 'Detailed cutaway view' },
  { src: Carfront, alt: 'Front view of EMPV' },
  { src: skateboard, alt: 'Skateboard chassis design' },
  { src: carskin, alt: 'Vehicle skin design' },
  { src: carskin2, alt: 'Alternative skin design' },
  { src: carfront, alt: 'Final front view' },
];

const Ecar = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="section-label mb-3">Case study</p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Electric Multi-Purpose Vehicle
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          As Lead Senior CAD Engineer, designed an EMPV for Ghanaian roads and markets — sustainable,
          affordable mobility.
        </p>
      </div>

      <p className="section-label mb-6 text-center">Design process</p>

      <ProjectImageCarousel images={images} />

      <div className="mx-auto mb-14 max-w-5xl">
        <p className="section-label mb-6 text-center">Technical specifications</p>
        <div className="border border-line bg-[var(--surface-elevated)] p-5 sm:p-7">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent md:col-span-1">
              Design approach
            </h2>
            <div className="md:col-span-3">
              <p className="mb-4 text-muted">
                Engineered for durability, efficiency, and affordability — addressing transport needs
                while promoting sustainable mobility in Ghana.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ['Chassis', 'Robust design optimized for rough terrains'],
                  ['Powertrain', '40–80 kWh battery with regenerative braking'],
                  ['Interior', 'Modular space for passengers or cargo'],
                  ['Maintenance', 'Designed for easy local repair and production'],
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

      <div className="mx-auto max-w-4xl">
        <p className="section-label mb-6 text-center">Prototype testing</p>
        <div className="overflow-hidden border border-line bg-surface">
          <video controls className="h-full w-full object-cover">
            <source src="/videos/CAR_Test.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </ProjectShell>
  );
};

export default Ecar;
