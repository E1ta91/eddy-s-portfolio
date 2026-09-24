import babytub1 from '../assets/images/babytub.1.png';
import babytub2 from '../assets/images/babytub.2.png';
import babytub3 from '../assets/images/babytub.3.png';
import babytub4 from '../assets/images/babytub.4.png';
import babytub5 from '../assets/images/babytub.5.png';
import babytub6 from '../assets/images/babytub.6.png';
import babytub7 from '../assets/images/babytub.7.png';
import babytub8 from '../assets/images/babytub.8.png';
import babytub11 from '../assets/images/babytub.11.png';
import ProjectShell from '../components/ProjectShell';
import ProjectImageCarousel from '../components/ProjectImageCarousel';

const images = [
  { src: babytub1, alt: 'Infant emergency carrier isometric overview' },
  { src: babytub2, alt: 'Infant emergency carrier front view' },
  { src: babytub3, alt: 'Infant emergency carrier side profile' },
  { src: babytub4, alt: 'Adjustable bed rest detail' },
  { src: babytub5, alt: 'Oxygen tank carrier mounting' },
  { src: babytub6, alt: 'Drip stand and frame assembly' },
  { src: babytub7, alt: 'Fabric strap carriage system' },
  { src: babytub8, alt: 'Infant emergency carrier full assembly' },
  { src: babytub11, alt: 'Infant emergency carrier final design' },
];

const InfantCarrier = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="section-label mb-3">Case study</p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Infant Emergency Carrier
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          A portable neonatal transport unit built for first response — keeping infants secure,
          supported, and connected to oxygen and IV care when every minute matters.
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
                Engineered for rough-terrain clinics and roadside emergencies — a single carrier that
                cradles the infant, holds life-support gear, and moves with the caregiver without
                slowing them down.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ['Bed rest', 'Adjustable support for safe infant positioning in transit'],
                  ['Oxygen mount', 'Integrated carrier for oxygen tanks during transport'],
                  ['Drip stand', 'Built-in IV drip stand for continuous fluid delivery'],
                  ['Carriage', 'Fabric straps for secure, hands-ready carrying'],
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

export default InfantCarrier;
