import React, { useState } from 'react';
import Navbar from '../components/navbar';
import eds from '../assets/images/eds.jpg';
import { InstagramIcon, Linkedin, Mail, Twitter } from 'lucide-react';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

const Home = () => {
  const [activeSection, setActiveSection] = useState('/');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-[#151312] min-h-screen w-full">
      <Navbar onNavClick={handleNavClick} />

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:flex min-h-[calc(100vh-9vh)] pt-[9vh] lg:px-8 xl:px-16 2xl:px-32">
        {/* Sidebar - Fixed width */}
        <aside className="w-[300px] lg:w-[350px] xl:w-[400px] p-4 sticky top-[9vh] h-[calc(100vh-9vh)] overflow-y-auto">
          <div className="bg-white rounded-lg shadow-2xl flex flex-col items-center space-y-6 p-6 h-full">
            <img
              className="w-[180px] lg:w-[200px] rounded-lg"
              src={eds}
              alt="Yakubu Edward Faako"
            />

            <div className="text-black text-center space-y-3">
              <h1 className="text-lg lg:text-xl font-semibold">YAKUBU EDWARD FAAKO</h1>

              <p className="text-[#6A6B81] text-sm lg:text-base">
                Mechanical Engineer specializing in digital fabrication,
                3D design, and product development.
              </p>

              <div className="flex justify-center space-x-4 pt-2">
                <SocialIcon
                  href="https://www.linkedin.com/in/yakubu-edward-faako-9a374612b"
                  icon={<Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500" />}
                />
                <SocialIcon
                  href="https://x.com/edwardfaako"
                  icon={<Twitter className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500" />}
                />
                <SocialIcon
                  href="mailto:email@example.com"
                  icon={<Mail className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500" />}
                />
                <SocialIcon
                  href="https://www.instagram.com/phaako?utm_source=qr&igsh=MWkwdzluNThxdmRsbw=="
                  icon={<InstagramIcon className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500" />}
                />
              </div>
            </div>

            <button
              className="relative h-8 w-full max-w-[250px] bg-black border border-orange-500 text-white rounded-lg flex items-center justify-center space-x-2 mt-auto"
              onClick={() => handleNavClick('contact')}
            >
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              Available for work
            </button>
          </div>
        </aside>

        {/* Main Content - Flexible width */}
        <main className="flex-1 p-6 lg:p-8 xl:p-10">
          {activeSection === '/' && <About />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden pt-[9vh] px-4 pb-10">
        {activeSection === '/' && (
          <header className="bg-white rounded-lg shadow-2xl flex flex-col items-center space-y-4 p-6 mb-8">
            <img
              className="w-[160px] rounded-lg"
              src={eds}
              alt="Yakubu Edward Faako"
            />

            <div className="text-black text-center space-y-2">
              <h1 className="text-lg font-semibold">YAKUBU EDWARD FAAKO</h1>

              <p className="text-[#6A6B81] text-sm">
                Mechanical Engineer specializing in digital fabrication,
                3D design, and product development.
              </p>

              <div className="flex justify-center space-x-4 pt-2">
                <SocialIcon
                  href="https://www.linkedin.com/in/yakubu-edward-faako-9a374612b"
                  icon={<Linkedin className="w-5 h-5 text-orange-500" />}
                />
                <SocialIcon
                  href="https://x.com/edwardfaako"
                  icon={<Twitter className="w-5 h-5 text-orange-500" />}
                />
                <SocialIcon
                  href="mailto:email@example.com"
                  icon={<Mail className="w-5 h-5 text-orange-500" />}
                />
                <SocialIcon
                  href="https://www.instagram.com/phaako?utm_source=qr&igsh=MWkwdzluNThxdmRsbw=="
                  icon={<InstagramIcon className="w-5 h-5 text-orange-500" />}
                />
              </div>
            </div>

            <button
              className="relative h-8 w-full bg-black border border-orange-500 text-white rounded-lg flex items-center justify-center space-x-2 mt-2"
              onClick={() => handleNavClick('contact')}
            >
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              Available for work
            </button>
          </header>
        )}

        <main className="space-y-8">
          {activeSection === 'about' && <About />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>
    </div>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    {icon}
  </a>
);

export default Home;