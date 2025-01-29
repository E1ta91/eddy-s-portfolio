import React from 'react'
import shredder1 from '../assets/images/shredder1.jpg'
import shredder2 from '../assets/images/shredder2.jpg'
import shredder3 from '../assets/images/shredder3.jpg'
import shredder4 from '../assets/images/shredder4.jpg'
import shreder from '../assets/images/shreder.png'
import shreder2 from '../assets/images/shreder2.png'
import shreder3 from '../assets/images/shreder3.png'



const shredder = () => {
  return (
    <div className='space-y-5 bg-[#030105] text-white min-h-screen'>
        
        <h1 className='text-7xl flex justify-center items-center pt-9 font-bold'>Turning Waste into Sustainable Solutions</h1>
        
              <div className='flex justify-center text-center items-center text-xl w-[90vw] md:w-[40vw] mx-auto'>
                <p>
        
                Revolutionizing plastic recycling with a cutting-edge LDPE and HDPE shredding and pelletizing system—designed for efficiency, sustainability, and a cleaner future
                In a world drowning in plastic waste, innovation must lead the way toward sustainability. This HDPE shredder, crafted entirely from scrap metals, is a testament to responsible engineering—transforming discarded materials into a powerful solution for recycling.
       
                </p>
              </div>
        
              <div className='md:flex flex-grow w-[65vw]  md:w-[40vw] ml-30 md:m-[9rem] mt-[5rem] space-y-6 md:space-x-6'>
                <img className='rounded-3xl   shadow-black' src={shreder}  />
                <img className='rounded-3xl  shadow-black' src={shreder2}  />
              
              </div>
              <div className='md:flex flex-grow w-[65vw]  md:w-[40vw] ml-20 md:m-[9rem] mt-[5rem] space-y-6 md:space-x-6'> 
                <img className='rounded-3x1  shadow-black' src={shredder1}  />
                <img className='rounded-3x1 shadow-black' src={shredder3}/>
              </div>
              <div className='flex flex-col text-center md:m-0 m-5 space-y-4'>
                <h1 className='border w-[30vw] text-center md:w-[10vw] md:text-center text-xl pt-2 h-[8vh] rounded-full md:ml-44 bg-[#1C1C1C] text-white shadow-2xl'>Details</h1>
        </div>
                <div className='flex md:pl-44 space-x-2'>
                  <h1 className='text-xl'>Design:</h1>
                  <p className='text-[1rem] pt-[0.2rem] '>
                  Built from Waste, Designed for Impact
Instead of relying on expensive, industrial-grade materials, this shredder was built using scrap metal, proving that sustainability and innovation can go hand in hand. The use of reclaimed materials not only minimizes manufacturing costs but also reduces the carbon footprint associated with producing new components.

Key Features & Environmental Benefits
✔ Waste-to-Resource Conversion – Turns HDPE waste into reusable raw material for 3D printing, injection molding, or other recycling applications.
✔ Upcycled Construction – Built entirely from discarded metal parts, breathing new life into scrap materials.
✔ Low-Cost, High-Impact – An affordable solution that empowers small communities and makerspaces to take control of their plastic waste.
✔ Supports a Circular Economy – Reduces landfill waste and promotes sustainable material reuse.

This project is more than just a shredder—it's a statement on the power of resourcefulness, engineering, and eco-conscious design. By repurposing what others discard, we can create sustainable solutions that benefit both people and the planet.
                 </p> 
                 </div>  
      </div>
  )
}

export default shredder