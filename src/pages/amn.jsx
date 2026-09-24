import amn1 from '../assets/images/amn1.png';
import amn2 from '../assets/images/amn2.png';
import amn3 from '../assets/images/amn3.png';
import amn4 from '../assets/images/amn4.png';
import amn5 from '../assets/images/amn5.png';
import amn6 from '../assets/images/amn6.png';
import amn7 from '../assets/images/amn7.png';
import amn8 from '../assets/images/amn8.png';
import ProjectShell from '../components/ProjectShell';
import ProjectImageCarousel from '../components/ProjectImageCarousel';

const images = [
  { src: amn1, alt: 'AMN drone isometric overview' },
  { src: amn2, alt: 'AMN drone close-up' },
  { src: amn3, alt: 'AMN frame and arm assembly' },
  { src: amn4, alt: 'AMN payload bay detail' },
  { src: amn5, alt: 'AMN propulsion and landing gear' },
  { src: amn6, alt: 'AMN structural layout' },
  { src: amn7, alt: 'AMN assembled flight configuration' },
  { src: amn8, alt: 'AMN component packaging' },
];

const Amn = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="section-label mb-3">Case study</p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Aerial Mobility Network
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          A quadcopter drone capable of delivering a 1&nbsp;kg payload over 5&nbsp;km, designed for
          construction sites and agricultural applications.
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
                Designed in SolidWorks with careful attention to aerodynamics and payload capacity —
                built for reliable short-haul delivery on farms and construction sites.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ['Airframe', 'Quadcopter layout optimized for stability and payload clearance'],
                  ['Performance', '5 km range with 1 kg payload capacity'],
                  ['Prototyping', 'PLA components 3D printed on a Qidi X-Plus for flight testing'],
                  ['Environment', 'Rugged construction for farm and site conditions'],
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

export default Amn;
