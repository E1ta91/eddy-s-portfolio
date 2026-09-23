import React from 'react'

import kart from '../assets/images/kart.png';
import kart2 from '../assets/images/kart2.png';
import kart3 from '../assets/images/kart3.png';
import kart4 from '../assets/images/kart4.png';
import kart5 from '../assets/images/kart5.jpg';
import kart6 from '../assets/images/kart6.jpg';
import kart7 from '../assets/images/kart7.jpg';
import kart8 from '../assets/images/kart8.jpg';
import kart9 from '../assets/images/kart9.jpg';
import v61 from '../assets/images/v61.png';
import v62 from '../assets/images/v62.png';
import v63 from '../assets/images/v63.png';

const Kart = () => {
  const images = [
    { src: kart, alt: "Isometric view of Recreational Buggy" },
    { src: kart7, alt: "Rear view of Recreational Buggy" },
    { src: kart6, alt: "Cutaway view of Recreational Buggy" },
    { src: kart5, alt: "Detailed cutaway view" },
    { src: kart8, alt: "Front view of Recreational Buggy" },
    { src: kart9, alt: "Skateboard chassis design" },
    { src: kart2, alt: "Alternative skin design" },
    { src: kart3, alt: "Chassis design with suspension" },
  ]

  return (
    <div className='bg-[#030105] text-white min-h-screen py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12'>
      {/* Header Section */}
      <div className='text-center mb-8 sm:mb-12'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
          Recreational Buggy Design for Ghanaian Roads
        </h1>
        
        <div className='max-w-3xl mx-auto text-sm sm:text-base md:text-lg'>
          <p className='text-gray-300 leading-relaxed'>
            I designed a recreational buggy tailored for the unique conditions of Ghanaian roads.
          </p>
        </div>
      </div>

      {/* Design Process Header */}
      <div className='flex justify-center mb-6 sm:mb-10'>
        <div className='px-6 py-2 sm:px-8 sm:py-3 bg-[#1C1C1C] text-white text-lg sm:text-xl font-medium rounded-full border border-gray-800 hover:bg-orange-500 hover:text-black transition-colors duration-300'>
          Design Process
        </div>
      </div>

      {/* Responsive Image Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-7xl mx-auto'>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
              image.fullWidth ? 'sm:col-span-2 lg:col-span-3' : ''
            }`}
          >
            <div className='aspect-w-16 aspect-h-9 bg-black'>
              <img 
                className='object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500'
                src={image.src} 
                alt={image.alt} 
                loading='lazy'
              />
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>
        ))}
      </div>

      {/* Technical Details */}
      <div className='max-w-5xl mx-auto mb-12 sm:mb-16'>
        <div className='flex justify-center mb-6 sm:mb-8'>
          <div className='px-6 py-2 sm:px-8 sm:py-3 bg-[#1C1C1C] text-white text-lg sm:text-xl font-medium rounded-full border border-gray-800 hover:bg-orange-500 hover:text-black transition-colors duration-300'>
            Technical Specifications
          </div>
        </div>
        
        <div className='bg-[#1A1A1A] p-5 sm:p-7 rounded-xl border border-gray-800'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='md:col-span-1'>
              <h2 className='text-xl sm:text-2xl font-semibold text-orange-500'>Design Approach</h2>
            </div>
            <div className='md:col-span-3'>
              <p className='text-gray-300 text-sm sm:text-base mb-4'>
                Engineered for durability, efficiency, and affordability to address transportation challenges while promoting sustainable mobility in Ghana.
              </p>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='bg-[#252525] p-4 rounded-lg'>
                  <h3 className='text-orange-500 font-medium mb-2'>Chassis</h3>
                  <p className='text-gray-300 text-sm'>Robust tubular design optimized for rough terrains</p>
                </div>
                <div className='bg-[#252525] p-4 rounded-lg'>
                  <h3 className='text-orange-500 font-medium mb-2'>Powertrain</h3>
                  <p className='text-gray-300 text-sm'>200cc 4 stroke engine</p>
                </div>
                <div className='bg-[#252525] p-4 rounded-lg'>
                  <h3 className='text-orange-500 font-medium mb-2'>Interior</h3>
                  <p className='text-gray-300 text-sm'>Single Seat driver focused design</p>
                </div>
                <div className='bg-[#252525] p-4 rounded-lg'>
                  <h3 className='text-orange-500 font-medium mb-2'>Maintenance</h3>
                  <p className='text-gray-300 text-sm'>Designed for easy local repair and production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      {/* <div className='max-w-4xl mx-auto'>
        <div className='flex justify-center mb-6 sm:mb-8'>
          <div className='px-6 py-2 sm:px-8 sm:py-3 bg-[#1C1C1C] text-white text-lg sm:text-xl font-medium rounded-full border border-gray-800 hover:bg-orange-500 hover:text-black transition-colors duration-300'>
            Prototype Testing
          </div>
        </div>
        
        <div className='aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-xl'>
          <video
            controls
            className='w-full h-full object-cover'
            
          >
            <source src="/videos/CAR_Test.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div> */}
    </div>
  )
}

export default Kart