import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/images/logos.png';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ['hero', ...NAV_LINKS.map((l) => l.id)];
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-[var(--nav-bg)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:h-[4.25rem] sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => goTo('hero')}
          aria-label="Edward Faako Yakubu — Home"
          className="group flex items-center gap-2.5 transition hover:opacity-90"
        >
          <img
            src={logo}
            alt=""
            className="h-9 w-9 rounded-md object-cover sm:h-10 sm:w-10"
          />
          <span className="hidden font-display text-sm font-semibold tracking-tight text-ink sm:inline">
            Edward Faako
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goTo(link.id)}
              className={`rounded-full px-3.5 py-2 font-sans text-sm transition ${
                active === link.id ? 'text-accent' : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle className="ml-2 !rounded-full" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="!rounded-full" />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-[var(--nav-bg)] backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => goTo(link.id)}
                  className={`w-full rounded-xl px-3 py-3 text-left font-sans text-sm ${
                    active === link.id ? 'bg-accent-soft text-accent' : 'text-ink'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
