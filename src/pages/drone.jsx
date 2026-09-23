import drones from '../assets/images/drones.png';
import drone from '../assets/images/drone.jpg';
import ProjectShell from '../components/ProjectShell';

const Drone = () => {
  return (
    <ProjectShell>
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="section-label mb-3">Case study</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Payload Transport Drone
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          A quadcopter capable of delivering a 1&nbsp;kg payload over 5&nbsp;km — designed for
          construction sites and agricultural applications.
        </p>
      </div>

      <div className="mx-auto mb-16 flex max-w-5xl flex-col items-center justify-center gap-8 md:flex-row">
        {[drones, drone].map((src, i) => (
          <div key={i} className="w-full overflow-hidden border border-line md:w-1/2 lg:w-2/5">
            <img
              className="h-auto w-full object-cover transition duration-500 hover:scale-[1.03]"
              src={src}
              alt={i === 0 ? 'Drone overview' : 'Drone close-up'}
            />
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-4xl">
        <p className="section-label mb-6 text-center">Project details</p>
        <div className="space-y-6 border border-line bg-[var(--surface-elevated)] p-6 sm:p-8">
          <Detail label="Design">
            Designed in SolidWorks with attention to aerodynamics and payload capacity.
          </Detail>
          <Detail label="Tools">
            Prototype components 3D printed in PLA on a Qidi X-Plus for precision flight testing.
          </Detail>
          <Detail label="Features">
            5&nbsp;km range with 1&nbsp;kg payload, flight stabilization, and rugged construction for
            farm and site environments.
          </Detail>
        </div>
      </div>
    </ProjectShell>
  );
};

const Detail = ({ label, children }) => (
  <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
    <h2 className="min-w-[100px] font-mono text-xs uppercase tracking-[0.14em] text-accent">{label}</h2>
    <p className="flex-1 text-muted">{children}</p>
  </div>
);

export default Drone;
