import { Briefcase, Contact, Folder, HomeIcon, Phone, UserCog2Icon, Wrench } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = ({ onNavClick }) => {


    return (
        <div className='pt-10 flex justify-center items-center'>

            <div className='fixed z-10 hidden md:hidden lg:flex justify-evenly space-x-40 items-center  bg-[#666262] w-[70vw] h-[9vh] rounded-lg '>
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

            <div className=''>
                <nav>
                    <ul className='flex lg:hidden md:hidden text-white bg-[#666262]  w-[100vw] h-[9vh] justify-evenly items-center'>
                        <li><button className='text-white' onClick={() => onNavClick('/')}><HomeIcon /></button></li>
                        <li><button className='text-white' onClick={() => onNavClick('about')}> <UserCog2Icon /> </button></li>
                        <li><button onClick={() => onNavClick('skills')}> <Wrench/> </button> </li>
                        <li><button onClick={() => onNavClick('experience')}><Briefcase /></button></li>
                        <li><button onClick={() => onNavClick('projects')}><Folder /></button></li>
                        <li><button onClick={() => onNavClick('contact')}><Phone /></button></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar