import { Suspense, lazy, useEffect } from 'react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import Navbar from '../components/navbar';
import { EngineDockProvider } from '../context/EngineDockContext';
import ME from '../assets/images/ME.jpeg';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

const EngineScrollCanvas = lazy(() => import('../components/engine/EngineScrollCanvas'));

const Home = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const timer = setTimeout(() => scrollTo(hash), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <EngineDockProvider>
      <div className="relative min-h-screen bg-transparent text-ink">
        <div className="pointer-events-none fixed inset-0 -z-10 atelier-glow" aria-hidden="true" />
        <Suspense fallback={null}>
          <EngineScrollCanvas />
        </Suspense>
        <div className="relative z-10">
          <Navbar />

          <section
            id="hero"
            className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-24 sm:items-center sm:pb-0 sm:pt-20"
          >
            <div className="hero-image-fade absolute right-0 top-0 h-full w-[78vw]">
              <img
                src={ME}
                alt="Edward Faako Yakubu"
                className="portrait-focus h-full w-full animate-portrait-in"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[var(--canvas)] from-0% via-[var(--canvas)]/55 via-45% to-transparent to-100%"
              aria-hidden="true"
            />

            <div className="section-shell relative z-10 w-full">
              <div className="animate-fade-up max-w-xl">
                <p className="section-label mb-4">Mechanical Design Engineer · Accra</p>

                <h1 className="font-display text-[clamp(2.4rem,6.5vw,4.75rem)] font-semibold leading-[1.05] tracking-tight text-ink">
                  Edward Faako
                  <span className="block text-accent">Yakubu</span>
                </h1>

                <p className="mt-5 max-w-sm text-base leading-relaxed text-muted sm:text-lg">
                  CAD, digital fabrication, and product development — from SolidWorks to the shop
                  floor.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => scrollTo('projects')}
                  >
                    View projects
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => scrollTo('contact')}
                  >
                    Contact
                  </button>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/yakubu-edward-faako-9a374612b"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:faako.edward@gmail.com"
                    aria-label="Email"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <span className="ml-1 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    Available
                  </span>
                </div>
              </div>
            </div>
          </section>

          <main>
            <section
              id="about"
              className="scroll-mt-24 border-t border-line bg-[var(--canvas)]/75 py-20 backdrop-blur-[2px] sm:py-24"
            >
              <About />
            </section>
            <section
              id="experience"
              className="scroll-mt-24 border-t border-line bg-[var(--canvas)]/70 py-20 backdrop-blur-[2px] sm:py-24"
            >
              <Experience />
            </section>
            <section
              id="skills"
              className="scroll-mt-24 border-t border-line bg-transparent py-20 sm:py-24"
            >
              <Skills />
            </section>
            <section
              id="projects"
              className="scroll-mt-24 border-t border-line bg-[var(--canvas)]/90 py-20 sm:py-24"
            >
              <Projects />
            </section>
            <section
              id="contact"
              className="scroll-mt-24 border-t border-line bg-transparent py-20 sm:py-24"
            >
              <Contact />
            </section>
          </main>

          <footer className="border-t border-line py-8">
            <div className="section-shell flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                © {new Date().getFullYear()} Edward Faako Yakubu
              </p>
              <p className="text-sm text-muted">From concept to fabrication.</p>
            </div>
          </footer>
        </div>
      </div>
    </EngineDockProvider>
  );
};

export default Home;
