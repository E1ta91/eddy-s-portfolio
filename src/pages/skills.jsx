const SKILL_GROUPS = [
  {
    title: 'Design & CAD',
    items: ['SolidWorks', 'AutoCAD', 'Mechanical Design', 'GD&T', 'DFM', 'DFA', 'CAD'],
  },
  {
    title: 'Fabrication',
    items: ['3D Printing', 'CNC Machining', 'Laser Cutting', 'Arc Welding', 'Power Tools', 'CAM'],
  },
  {
    title: 'Electronics',
    items: ['PCB Design', 'PCB Milling', 'Soldering', 'Arduino', 'KiCAD', 'FlatCAM'],
  },
  {
    title: 'Software',
    items: ['MATLAB', 'RD Works', 'Lightburn'],
  },
];

const Skills = () => {
  return (
    <div className="section-shell">
      <div className="text-panel mb-12 max-w-2xl">
        <p className="section-label mb-3">Capabilities</p>
        <h2 className="section-title">Tools of the trade</h2>
        <div className="spec-rule mt-5 max-w-[8rem]" />
        <p className="mt-4 text-muted">
          From parametric modeling to CAM and shop practices — a full stack for mechanical design.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="text-panel">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="border border-line bg-[var(--surface-elevated)] px-3 py-2 font-sans text-sm text-ink transition hover:border-accent hover:text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
