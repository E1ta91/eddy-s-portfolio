import React from 'react'
import shredder1 from '../assets/images/shredder1.jpg'
import shredder2 from '../assets/images/shredder2.jpg'
import shredder3 from '../assets/images/shredder3.jpg'
import shredder4 from '../assets/images/shredder4.jpg'
import shreder from '../assets/images/shreder.png'
import shreder2 from '../assets/images/shreder2.png'
import shreder3 from '../assets/images/shreder3.png'

const Shredder = () => {
  return (
    <div className='bg-[#030105] text-white min-h-screen py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
          Turning Waste into <br className='hidden sm:block' /> Sustainable Solutions
        </h1>
        
        <div className='max-w-4xl mx-auto'>
          <p className='text-lg text-gray-300 leading-relaxed'>
            Revolutionizing plastic recycling with a cutting-edge LDPE and HDPE shredding and pelletizing system designed for efficiency, sustainability, and a cleaner future.
          </p>
          <p className='text-lg text-gray-300 leading-relaxed mt-4'>
            In a world drowning in plastic waste, innovation must lead the way toward sustainability. This HDPE shredder, crafted entirely from scrap metals, is a testament to responsible engineering transforming discarded materials into a powerful solution for recycling.
          </p>
        </div>
      </div>

      {/* Image Gallery with rounded-lg */}
      <div className='flex flex-wrap justify-center gap-6 mb-16'>
        {[shreder, shreder2, shredder1, shredder3].map((imgSrc, index) => (
          <div key={index} className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[45%] md:w-[30%] lg:w-[22%]'>
            <div className='aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden'>
              <img 
                className='object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 rounded-lg' 
                src={imgSrc} 
                alt={`Shredder component ${index + 1}`} 
              />
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
          </div>
        ))}
      </div>

      {/* Details Section */}
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-center md:justify-start mb-8'>
          <div className='px-8 py-3 bg-[#1C1C1C] text-white text-xl font-medium rounded-full shadow-lg border border-gray-800 hover:bg-orange-500 hover:text-black transition-colors duration-300'>
            Project Details
          </div>
        </div>
        
        <div className='space-y-8'>
          {/* Design Section */}
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='md:w-1/4'>
              <h2 className='text-2xl font-semibold text-orange-500'>Design:</h2>
            </div>
            <div className='md:w-3/4 bg-[#1A1A1A] p-6 rounded-lg border border-gray-800'>
              <p className='text-gray-300'>
                Built from Waste, Designed for Impact. Instead of relying on expensive, industrial-grade materials, this shredder was built using scrap metal, proving that sustainability and innovation can go hand in hand. The use of reclaimed materials not only minimizes manufacturing costs but also reduces the carbon footprint associated with producing new components.
              </p>
            </div>
          </div>
          
          {/* Features Section */}
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='md:w-1/4'>
              <h2 className='text-2xl font-semibold text-orange-500'>Features:</h2>
            </div>
            <div className='md:w-3/4 bg-[#1A1A1A] p-6 rounded-lg border border-gray-800'>
              <ul className='space-y-4 text-gray-300'>
                <li className='flex items-start'>
                  <span className='text-orange-500 mr-2'>✔</span>
                  <span><strong>Waste-to-Resource Conversion</strong> – Turns HDPE waste into reusable raw material for 3D printing, injection molding, or other recycling applications.</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-orange-500 mr-2'>✔</span>
                  <span><strong>Upcycled Construction</strong> – Built entirely from discarded metal parts, breathing new life into scrap materials.</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-orange-500 mr-2'>✔</span>
                  <span><strong>Low-Cost, High-Impact</strong> – An affordable solution that empowers small communities and makerspaces to take control of their plastic waste.</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-orange-500 mr-2'>✔</span>
                  <span><strong>Supports a Circular Economy</strong> – Reduces landfill waste and promotes sustainable material.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Conclusion */}
          <div className='bg-[#1A1A1A] p-6 rounded-lg border border-gray-800 text-center italic text-gray-300'>
            This project is more than just a shredder—it's a statement on the power of resourcefulness, engineering, and eco-conscious design. By repurposing what others discard, we can create sustainable solutions that benefit both people and the planet.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shredder