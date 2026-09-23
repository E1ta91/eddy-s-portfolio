import { useEffect, useState } from 'react';

const STATS = [
  { target: 7, label: 'Years of experience' },
  { target: 10, label: 'Projects completed' },
  { target: 5, label: 'Worldwide clients' },
];

const About = () => {
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    const timers = STATS.map((stat, i) => {
      let current = 0;
      return setInterval(() => {
        current += 1;
        setCounts((prev) => {
          const next = [...prev];
          next[i] = Math.min(current, stat.target);
          return next;
        });
        if (current >= stat.target) clearInterval(timers[i]);
      }, 55);
    });
    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <div className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="text-panel">
          <p className="section-label mb-3">About</p>
          <h2 className="section-title">
            Building things that
            <span className="block text-muted">move from screen to shop floor</span>
          </h2>
          <div className="spec-rule mt-5 max-w-[8rem] animate-draw-line" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            A mechanical engineer with over 5 years in makerspaces, specializing in CAD design,
            digital fabrication, and R&amp;D. Certified in SolidWorks and Digital Fabrication from
            FAB Academy, with experience as a Senior CAD Engineer on innovative product designs.
            Currently exploring consumer goods and bicycle markets — applying advanced tools to
            solve practical challenges. Based in Accra, Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="border border-line bg-[var(--surface-elevated)] px-5 py-6 transition hover:border-accent/40"
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {counts[i]}+
              </p>
              <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
