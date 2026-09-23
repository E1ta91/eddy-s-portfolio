const ROLES = [
  {
    title: 'Senior CAD Engineer',
    dates: 'Aug 2023 — Nov 2024',
    org: 'Wahu Mobility, Accra — Ghana',
    body: 'Used SolidWorks to create 3D models, 2D drawings, and technical documentation for mechanical and electrical components, conducting simulations and FEA to evaluate functionality and cost-effectiveness. Collaborated with cross-functional teams to meet customer and regulatory requirements, updated designs for performance and cost, managed documentation and version control, and stayed current with CAD and engineering practices.',
  },
  {
    title: 'EnergyLab Manager',
    dates: 'Feb 2022 — Aug 2023',
    org: 'Energy-Generation, Lomé — Togo',
    body: "Managed the EnergyLab's operations and inventory, ensured machines stayed functional, supervised daily activities, assisted entrepreneurs with prototype development, oversaw contractor prototype accuracy, led technical training, and reported expenses and budget to the Technical Director.",
  },
  {
    title: 'Freelance',
    dates: 'Sep 2020 — Dec 2021',
    org: 'University of Energy and Natural Resources, Sunyani — Ghana',
    body: 'Provided CAD drafting for students and lecturers, worked as an arc welder for the Mechanical Engineering department, and assisted as a lab technician.',
  },
  {
    title: 'Teaching Assistant',
    dates: 'Sep 2019 — Aug 2020',
    org: 'University of Energy and Natural Resources, Sunyani — Ghana',
    body: 'Assisted a senior lecturer with marking and recording assessments, organized tutorials, and collaborated with final-year students to develop project prototypes.',
  },
];

const Experience = () => {
  return (
    <div className="section-shell">
      <div className="mb-12 max-w-2xl">
        <p className="section-label mb-3">Experience</p>
        <h2 className="section-title">6+ years shaping products &amp; labs</h2>
        <div className="spec-rule mt-5 max-w-[8rem]" />
      </div>

      <ol className="relative space-y-0 border-l border-line pl-6 sm:pl-8">
        {ROLES.map((role, index) => (
          <li
            key={role.title}
            className="group relative grid gap-3 border-b border-line py-8 first:pt-0 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <div className="absolute -left-[calc(0.375rem+5px)] top-10 hidden h-2.5 w-2.5 rounded-full border-2 border-accent bg-canvas sm:block sm:-left-[calc(2rem+5px)]" />
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted sm:pt-1">
              {role.dates}
            </p>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  {role.title}
                </h3>
                <span className="font-mono text-[0.65rem] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">{role.org}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {role.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
