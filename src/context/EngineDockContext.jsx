import { createContext, useContext, useMemo, useState } from 'react';

const EngineDockContext = createContext(null);

export const EngineDockProvider = ({ children }) => {
  /** Desktop Contact dock target under the email link */
  const [contactDockEl, setContactDockEl] = useState(null);
  /** 'about' | 'experience' | 'skills' | 'projects' | 'contact' | null */
  const [focusedSection, setFocusedSection] = useState(null);

  const value = useMemo(
    () => ({
      contactDockEl,
      setContactDockEl,
      focusedSection,
      setFocusedSection,
      projectsVisible: focusedSection === 'projects',
      contactVisible: focusedSection === 'contact',
    }),
    [contactDockEl, focusedSection]
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
