import shredder1 from '../assets/images/shredder1.jpg';
import shredder3 from '../assets/images/shredder3.jpg';
import shreder from '../assets/images/shreder.png';
import shreder2 from '../assets/images/shreder2.png';
import ProjectShell from '../components/ProjectShell';

const gallery = [shreder, shreder2, shredder1, shredder3];

const Shredder = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <p className="section-label mb-3">Case study</p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Turning waste into sustainable solutions
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          An HDPE shredder built from scrap metals — responsible engineering that turns discarded
          material into a recycling tool for makerspaces and communities.
        </p>
      </div>

      <div className="mb-16 flex flex-wrap justify-center gap-6">
        {gallery.map((src, index) => (
          <div
            key={index}
            className="w-full overflow-hidden border border-line sm:w-[45%] md:w-[30%] lg:w-[22%]"
          >
            <img
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
              src={src}
              alt={`Shredder component ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl space-y-8">
        <p className="section-label">Project details</p>

        <div className="flex flex-col gap-6 md:flex-row">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent md:w-1/4">
            Design
          </h2>
          <p className="border border-line bg-[var(--surface-elevated)] p-6 text-muted md:w-3/4">
            Built from waste, designed for impact. Scrap metal construction lowers cost and carbon
            footprint while proving sustainability and innovation can work together.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent md:w-1/4">
            Features
          </h2>
          <ul className="space-y-4 border border-line bg-[var(--surface-elevated)] p-6 text-muted md:w-3/4">
            <li>
              <strong className="text-ink">Waste-to-resource</strong> — HDPE into reusable feedstock
              for 3D printing, molding, and recycling.
            </li>
            <li>
              <strong className="text-ink">Upcycled construction</strong> — built from discarded metal
              parts.
            </li>
            <li>
              <strong className="text-ink">Low-cost, high-impact</strong> — accessible for small
              communities and makerspaces.
            </li>
            <li>
              <strong className="text-ink">Circular economy</strong> — reduces landfill waste and
              keeps material in use.
            </li>
          </ul>
        </div>

        <p className="border border-line bg-[var(--surface-elevated)] p-6 text-center italic text-muted">
          More than a shredder — a statement on resourcefulness, engineering, and eco-conscious
          design.
        </p>
      </div>
    </ProjectShell>
  );
};

export default Shredder;
