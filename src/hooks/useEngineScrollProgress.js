import { useEffect, useState } from 'react';

const clamp01 = (n) => Math.min(1, Math.max(0, n));

const absoluteTop = (el) => {
  if (!el) return null;
  return el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
};

/**
 * Linear scroll → assemble progress (no easing).
 * Finishes as Contact settles in view; stays at 1 through the rest of Contact / page end.
 */
export const computeEngineScrollProgress = () => {
  if (typeof window === 'undefined') return 0;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 1;

  const skills = document.getElementById('skills');
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');
  if (!skills || !projects || !contact) return 0;

  const docTop = window.scrollY || window.pageYOffset;
  const vh = window.innerHeight;

  const skillsAt = absoluteTop(skills);
  const projectsAt = absoluteTop(projects);
  const contactAt = absoluteTop(contact);
  // Fully assembled once Contact has settled near the top of the viewport
  const finishAt = Math.max(contactAt - vh * 0.05, projectsAt);

  const start = Math.max(skillsAt - vh * 0.35, 0);
  const span = Math.max(finishAt - start, 1);
  return clamp01((docTop - start) / span);
};

export const useEngineScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setProgress(computeEngineScrollProgress());
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
};
