import plasticr1 from '../assets/images/plasticr1.jpg';
import plasticr2 from '../assets/images/plasticr2.jpg';
import plasticr3 from '../assets/images/plasticr3.jpg';
import plasticr4 from '../assets/images/plasticr4.jpg';
import ProjectShell from '../components/ProjectShell';

const images = [
  { src: plasticr1, alt: 'Plastic recycling system overview' },
  { src: plasticr2, alt: 'Shredding unit detail' },
  { src: plasticr3, alt: 'Pelletizing system' },
  { src: plasticr4, alt: 'Control housing detail' },
];

const Recycling = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <p className="section-label mb-3">Case study</p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Plastic Shredding &amp; Pelletizing System
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          An LDPE and HDPE recycling line designed for efficiency, sustainability, and cleaner
          material loops.
        </p>
      </div>

      <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {images.map((image) => (
          <div key={image.alt} className="overflow-hidden border border-line bg-surface">
            <img
              className="h-full w-full object-contain p-4 transition duration-500 hover:scale-[1.03]"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl">
        <p className="section-label mb-6">System details</p>
        <div className="space-y-8 border border-line bg-[var(--surface-elevated)] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent sm:w-1/4">
              Design
            </h2>
            <div className="sm:w-3/4">
              <p className="text-muted">
                CAD design for a full shredding and pelletizing line for LDPE and HDPE — engineered
                to convert plastic waste into reusable pellets.
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">Key components</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-muted">
                    <li>
                      <strong className="text-ink">Input conveyor:</strong> transports material to
                      the shredder
                    </li>
                    <li>
                      <strong className="text-ink">Shredding unit:</strong> handles LDPE and HDPE
                    </li>
                    <li>
                      <strong className="text-ink">Transfer mechanism:</strong> chute and conveyor
                      handoff
                    </li>
                    <li>
                      <strong className="text-ink">Pelletizing system:</strong> uniform pellet output
                    </li>
                    <li>
                      <strong className="text-ink">Control housing:</strong> centralized monitoring
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">Features</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-muted">
                    <li>
                      <strong className="text-ink">Modular:</strong> scalable, maintainable layout
                    </li>
                    <li>
                      <strong className="text-ink">Efficient:</strong> optimized throughput
                    </li>
                    <li>
                      <strong className="text-ink">Versatile:</strong> wide polyethylene range
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent sm:w-1/4">
              Tools
            </h2>
            <p className="text-muted sm:w-3/4">
              Designed entirely in <strong className="text-ink">SolidWorks</strong>, combining CAD
              modeling, system integration, and sustainable design practice.
            </p>
          </div>
        </div>
      </div>
    </ProjectShell>
  );
};

export default Recycling;
