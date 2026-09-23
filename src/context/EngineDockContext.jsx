import { createContext, useContext, useMemo, useState } from 'react';

const EngineDockContext = createContext(null);

export const EngineDockProvider = ({ children }) => {
  const [dockEl, setDockEl] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  /** 'projects' | 'contact' | null — which section currently owns the engine */
  const [focusedSection, setFocusedSection] = useState(null);

  const value = useMemo(
    () => ({
      dockEl,
      setDockEl,
      carouselIndex,
      setCarouselIndex,
      focusedSection,
      setFocusedSection,
      // Back-compat aliases used by Projects carousel timing
      projectsVisible: focusedSection === 'projects',
      contactVisible: focusedSection === 'contact',
    }),
    [dockEl, carouselIndex, focusedSection]
  );

  return (
    <EngineDockContext.Provider value={value}>{children}</EngineDockContext.Provider>
  );
};

export const useEngineDock = () => {
  const ctx = useContext(EngineDockContext);
  if (!ctx) throw new Error('useEngineDock must be used within EngineDockProvider');
  return ctx;
};
