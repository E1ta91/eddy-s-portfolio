import React from 'react'
import plasticr1 from '../assets/images/plasticr1.jpg'
import plasticr2 from '../assets/images/plasticr2.jpg'
import plasticr3 from '../assets/images/plasticr3.jpg'
import plasticr4 from '../assets/images/plasticr4.jpg'

const Recycling = () => {
  return (
    <div className='space-y-5 bg-[#111111] text-white min-h-screen'>
        
        <h1 className='text-7xl flex justify-center items-center pt-9 font-bold'>Plastic Shredding and Pelletizing</h1>
        
              <div className='flex justify-center text-center items-center text-xl w-[90vw] md:w-[40vw] mx-auto'>
                <p>
        
                Revolutionizing plastic recycling with a cutting-edge LDPE and HDPE shredding and pelletizing system—designed for efficiency, sustainability, and a cleaner future

       
                </p>
              </div>
        
              <div className='md:flex flex-grow w-[65vw]  md:w-[40vw] ml-20 md:m-[11rem] mt-[3rem] space-y-6 md:space-x-6'>
                <img className='rounded-2xl   shadow-black' src={plasticr1} alt="Drone 1" />
                <img className='rounded-2xl  shadow-black' src={plasticr2} alt="Drone 2" />
              
              </div>
              <div className='md:flex flex-grow w-[65vw]  md:w-[40vw] ml-20 md:m-[11rem] mt-[3rem] space-y-6 md:space-x-6'> 
                <img className='rounded-2x1  shadow-black' src={plasticr3} alt="Recycle 2" />
                <img className='rounded-2x1 shadow-black' src={plasticr4}/>
              </div>
              <div className='flex flex-col text-center md:m-0 m-5 space-y-4'>
                <h1 className='border w-[30vw] text-center md:w-[10vw] md:text-center text-xl pt-2 h-[8vh] rounded-full md:ml-44 bg-[#1C1C1C] text-white shadow-2xl'>Details</h1>
        
                <div className='flex md:pl-44 space-x-2'>
                  <h1 className='text-xl'>Design:</h1>
                  <p className='text-[1rem] pt-[0.2rem] '> This CAD design illustrates a comprehensive production line for shredding and pelletizing low-density polyethylene (LDPE)
        and high-density polyethylene (HDPE). The system is meticulously engineered to optimize the recycling process,
        converting plastic waste into reusable pellets.
Key Components:
Input Conveyor System
The conveyor system facilitates the smooth transport of plastic materials to the shredder, ensuring efficiency and reducing manual handling.
Shredding Unit:
The robust shredder is designed to handle both LDPE and HDPE materials, breaking them down into smaller, uniform pieces for further processing.
Intermediate Transfer Mechanism
A chute and conveyor arrangement ensure a seamless transfer of shredded material to the pelletizing unit, minimizing waste and operational delays.
Pelletizing System
The pelletizer transforms shredded plastic into uniform pellets, ready for reuse in various industrial applications.
Control Housing:
The centralized control unit ensures streamlined monitoring and operation of the entire production line.
Features:
Modular Design: The system is designed for scalability and easy maintenance.
Efficiency: Optimized for high throughput with minimal energy consumption.
Versatility: Capable of handling a wide range of polyethylene materials.
This project showcases my expertise in CAD modeling, system integration, and sustainable design, aligning with the goals of promoting efficient recycling practices..</p>
                </div>
        
                <div className='flex  md:pl-44  space-x-2'>
                  <h1 className='text-xl'>Tools:</h1>
                  <p className='text-[1rem]  pt-[0.2rem]'>SolidWorks.</p>
                </div>
              </div>
        
        
        
        
        
        
        
        
        
        </div>

  )
}

export default Recycling