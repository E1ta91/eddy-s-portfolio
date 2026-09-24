import kart from '../assets/images/kart.png';
import kart2 from '../assets/images/kart2.png';
import kart3 from '../assets/images/kart3.png';
import kart5 from '../assets/images/kart5.jpg';
import kart6 from '../assets/images/kart6.jpg';
import kart7 from '../assets/images/kart7.jpg';
import kart8 from '../assets/images/kart8.jpg';
import kart9 from '../assets/images/kart9.jpg';
import ProjectShell from '../components/ProjectShell';
import ProjectImageCarousel from '../components/ProjectImageCarousel';

const images = [
  { src: kart, alt: 'Isometric view of Recreational Buggy' },
  { src: kart7, alt: 'Rear view of Recreational Buggy' },
  { src: kart6, alt: 'Cutaway view of Recreational Buggy' },
  { src: kart5, alt: 'Detailed cutaway view' },
  { src: kart8, alt: 'Front view of Recreational Buggy' },
  { src: kart9, alt: 'Skateboard chassis design' },
  { src: kart2, alt: 'Alternative skin design' },
  { src: kart3, alt: 'Chassis design with suspension' },
];

const Kart = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="section-label mb-3">Case study</p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Recreational Buggy for Ghanaian Roads
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          A recreational buggy tailored for the unique conditions of Ghanaian roads.
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
                Engineered for durability, efficiency, and affordability — addressing transport needs
                while promoting sustainable mobility in Ghana.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ['Chassis', 'Robust tubular design optimized for rough terrains'],
                  ['Powertrain', '200cc 4-stroke engine'],
                  ['Interior', 'Single-seat, driver-focused layout'],
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
    </ProjectShell>
  );
};

export default Kart;
