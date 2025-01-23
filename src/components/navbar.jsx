import { Briefcase, Contact, Folder, HomeIcon, Phone, UserCog2Icon, Wrench } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = ({ onNavClick }) => {
    const [hoveredIcon, setHoveredIcon] = useState('');

    return (
        <div className=' flex justify-center items-center pt-0 md:pt-10'>

            <div className='fixed z-10   hidden md:hidden lg:flex justify-evenly space-x-40 items-center  bg-[#666262] w-[70vw] h-[9vh] rounded-lg '>
                <h1 className='text-xl'>FAAKO</h1>
                <div >
                    <nav>
                        <ul className='flex justify-center items-center space-x-8'>
                            <li><button onClick={() => onNavClick('/')}>Home</button></li>
                            <li><button onClick={() => onNavClick('skills')}>Skills</button></li>
                            <li><button onClick={() => onNavClick('experience')}>Experience</button></li>
                            <li><button onClick={() => onNavClick('projects')}>Projects</button></li>
                            <li><button onClick={() => onNavClick('contact')}>Contact</button></li>
                        </ul>
                    </nav>

                </div>
            </div>

            <div className="">
                <nav>
                    <ul className="flex lg:hidden md:hidden text-white bg-[#666262] w-[100vw] h-[9vh] justify-evenly items-center">
                        <li
                            className="relative"
                            onMouseEnter={() => setHoveredIcon('Home')}
                            onMouseLeave={() => setHoveredIcon('')}
                        >
                            <button className="text-white" onClick={() => onNavClick('/')}>
                                <HomeIcon />
                            </button>
                            {hoveredIcon === 'Home' && (
                                <span className="absolute top-12 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded">
                                    Home
                                </span>
                            )}
                        </li>
                        <li
                            className="relative"
                            onMouseEnter={() => setHoveredIcon('About')}
                            onMouseLeave={() => setHoveredIcon('')}
                        >
                            <button className="text-white" onClick={() => onNavClick('about')}>
                                <UserCog2Icon />
                            </button>
                            {hoveredIcon === 'About' && (
                                <span className="absolute top-12 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded">
                                    About
                                </span>
                            )}
                        </li>
                        <li
                            className="relative"
                            onMouseEnter={() => setHoveredIcon('Skills')}
                            onMouseLeave={() => setHoveredIcon('')}
                        >
                            <button className="text-white" onClick={() => onNavClick('skills')}>
                                <Wrench />
                            </button>
                            {hoveredIcon === 'Skills' && (
                                <span className="absolute top-12 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded">
                                    Skills
                                </span>
                            )}
                        </li>
                        <li
                            className="relative"
                            onMouseEnter={() => setHoveredIcon('Experience')}
                            onMouseLeave={() => setHoveredIcon('')}
                        >
                            <button className="text-white" onClick={() => onNavClick('experience')}>
                                <Briefcase />
                            </button>
                            {hoveredIcon === 'Experience' && (
                                <span className="absolute top-12 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded">
                                    Experience
                                </span>
                            )}
                        </li>
                        <li
                            className="relative"
                            onMouseEnter={() => setHoveredIcon('Projects')}
                            onMouseLeave={() => setHoveredIcon('')}
                        >
                            <button className="text-white" onClick={() => onNavClick('projects')}>
                                <Folder />
                            </button>
                            {hoveredIcon === 'Projects' && (
                                <span className="absolute top-12 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded">
                                    Projects
                                </span>
                            )}
                        </li>
                        <li
                            className="relative"
                            onMouseEnter={() => setHoveredIcon('Contact')}
                            onMouseLeave={() => setHoveredIcon('')}
                        >
                            <button className="text-white" onClick={() => onNavClick('contact')}>
                                <Phone />
                            </button>
                            {hoveredIcon === 'Contact' && (
                                <span className="absolute top-12 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded">
                                    Contact
                                </span>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar