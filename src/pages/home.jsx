import React, { useState } from 'react'
import Navbar from '../components/navbar'
import eds from '../assets/images/eds.jpg'
import { InstagramIcon, Linkedin, Mail, Twitter } from 'lucide-react'
import About from './about'
import Experience from './experience'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

const Home = () => {
    const [activeSection, setActiveSection] = useState('/');
    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <div className='bg-[#151312] flex-col justify-center items-center '>
                <Navbar onNavClick={handleNavClick} />
                <div className=' hidden sm:block  space-x-[25rem] pt-16 p-28 '>
                    <header className='  w-2/5 h-screen fixed'>
                        <div className='bg-white pt-5 w-[23vw] h-[75vh]  rounded-lg shadow-2xl flex flex-col items-center space-y-6'>
                            <div>
                                <img className='w-[200px] rounded-lg' src={eds} alt="img" />
                            </div>

                            <div className='text-black flex justify-center items-center flex-col space-y-3 '>
                                <h1 className=''>YAKUBU EDWAED FAAKO</h1>

                                <p className='text-center text-[#6A6B81]'>
                                    Mechanical Engineer specializing in digital <br />
                                    fabrication, 3D design, and <br />
                                    product development.
                                </p>

                                <div className='flex space-x-4 '>
                                    <a href="https://www.linkedin.com/in/yakubu-edward-faako-9a374612b" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className=' w-10 h-6 text-orange-500' />
                                    </a>
                                    <a href="https://x.com/edwardfaako" target="_blank" rel="noopener noreferrer">
                                        <Twitter className=' w-10 h-6  text-orange-500' />
                                    </a>
                                    <a href="mailto:email@example.com" target="_blank" rel="noopener noreferrer">
                                        <Mail className=' w-10 h-6  text-orange-500' />
                                    </a>
                                    <a href="https://www.instagram.com/phaako?utm_source=qr&igsh=MWkwdzluNThxdmRsbw==" target="_blank" rel="noopener noreferrer">
                                        <InstagramIcon className='w-10 h-6 text-orange-500' />
                                    </a>
                                </div>
                            </div>

                            <div className="relative inline-block">
                                <button
                                    className="relative z-10 h-8 w-[14vw] bg-black border border-orange-500 text-white rounded-lg flex items-center justify-center space-x-2"
                                    onClick={() => handleNavClick('contact')} // Update section on button click
                                >
                                    {/* Ping indicator positioned to the left of the text */}
                                    <span className="relative flex h-3 w-3 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                                    </span>
                                    Available for work
                                </button>
                            </div>
                        </div>
                    </header>

                    <main className='space-y-20 flex-1 w-3/5 '>
                        {activeSection === '/' && <About />}
                        {activeSection === 'experience' && <Experience />}
                        {activeSection === 'skills' && <Skills />}
                        {activeSection === 'projects' && <Projects />}
                        {activeSection === 'contact' && <Contact />}
                    </main>
                </div>
            </div>

            <div className="bg-[#151312] min-h-screen w-full lg:hidden md:hidden overflow-y-auto">
    {/* Mobile Screen */}
    {activeSection === '/' ? (
        <div className="flex flex-col space-y-6">
            {/* Mobile Header */}
            <header className="h-screen flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-2xl flex flex-col items-center space-y-6 p-4">
                    <div>
                        <img className="w-[180px] rounded-lg" src={eds} alt="img" />
                    </div>

                    <div className="text-black flex justify-center items-center flex-col space-y-3">
                        <h1 className="text-center">YAKUBU EDWARD FAAKO</h1>

                        <p className="text-center text-[#6A6B81]">
                            Mechanical Engineer specializing in digital <br />
                            fabrication, 3D design, and <br />
                            product development.
                        </p>

                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/yakubu-edward-faako-9a374612b"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-10 h-6 text-orange-500" />
                            </a>
                            <a
                                href="https://x.com/edwardfaako"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-10 h-6 text-orange-500" />
                            </a>
                            <a
                                href="mailto:email@example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Mail className="w-10 h-6 text-orange-500" />
                            </a>
                            <a
                                href="https://www.instagram.com/phaako?utm_source=qr&igsh=MWkwdzluNThxdmRsbw=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramIcon className="w-10 h-6 text-orange-500" />
                            </a>
                        </div>
                    </div>

                    <div className="relative inline-block">
                        <button
                            className="relative z-10 h-8 w-[50vw] bg-black border border-orange-500 text-white rounded-lg flex items-center justify-center space-x-2"
                            onClick={() => handleNavClick('contact')}
                        >
                            <span className="relative flex h-3 w-3 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                            </span>
                            Available for work
                        </button>
                    </div>
                </div>
            </header>
        </div>
    ) : (
        // Show selected section content
        <main className="flex flex-col space-y-12 p-6">
            {activeSection === 'about' && <About />}
            {activeSection === 'experience' && <Experience />}
            {activeSection === 'skills' && <Skills />}
            {activeSection === 'projects' && <Projects />}
            {activeSection === 'contact' && <Contact />}
        </main>
    )}
</div>



        </div>

    )
}

export default Home;