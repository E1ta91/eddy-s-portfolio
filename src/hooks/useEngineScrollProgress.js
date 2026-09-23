import { useEffect, useState } from 'react';

const clamp01 = (n) => Math.min(1, Math.max(0, n));

const absoluteTop = (el) => {
  if (!el) return null;
  return el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
};

/**
 * Linear scroll → assemble progress (no easing).
 * Starts when About enters view; finishes as Contact settles. Hero stays at 0.
 */
export const computeEngineScrollProgress = () => {
  if (typeof window === 'undefined') return 0;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 1;

  const about = document.getElementById('about');
  const contact = document.getElementById('contact');
  if (!about || !contact) return 0;

  const docTop = window.scrollY || window.pageYOffset;
  const vh = window.innerHeight;

  const aboutAt = absoluteTop(about);
  const contactAt = absoluteTop(contact);

  // Begin as About approaches the upper viewport; stay 0 through Hero
  const start = Math.max(aboutAt - vh * 0.85, 0);
  // Fully assembled once Contact has settled near the nav
  const finishAt = Math.max(contactAt - 120, start + 1);

  if (docTop < start) return 0;
  return clamp01((docTop - start) / (finishAt - start));
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
