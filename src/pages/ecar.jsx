import React from 'react'
import carfront from '../assets/images/carfront.jpg'
import carrear from '../assets/images/carrear.jpg'
import carside from '../assets/images/carside.jpg'
import carskin from '../assets/images/carskin.jpg'
import carskin2 from '../assets/images/carskin2.jpg'
import Carcut from '../assets/images/Carcut.png'
import Carfront from '../assets/images/Carfront.png'
import Carcut2 from '../assets/images/Carcut2.png'
import Carrear from '../assets/images/Carrear.png'
import skatboard from '../assets/images/skatboard.png'
import Cariso from '../assets/images/Cariso.png'
import mecar from '../assets/images/mecar.jpg'
import skateboard from '../assets/images/skateboard.png'

const Ecar = () => {
  const images = [
    { src: Cariso, alt: "Isometric view of EMPV" },
    { src: Carrear, alt: "Rear view of EMPV" },
    { src: Carcut, alt: "Cutaway view of EMPV" },
    { src: Carcut2, alt: "Detailed cutaway view" },
    { src: Carfront, alt: "Front view of EMPV" },
    { src: skateboard, alt: "Skateboard chassis design" },
    { src: carskin, alt: "Vehicle skin design", fullWidth: true },
    { src: carskin2, alt: "Alternative skin design" },
    { src: carfront, alt: "Final front view" }
  ]

  return (
    <div className='bg-[#030105] text-white min-h-screen py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12'>
      {/* Header Section */}
      <div className='text-center mb-8 sm:mb-12'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
          Electric Multi-Purpose Vehicle (EMPV)
        </h1>
        
        <div className='max-w-3xl mx-auto text-sm sm:text-base md:text-lg'>
          <p className='text-gray-300 leading-relaxed'>
            As Lead Senior CAD Engineer, I designed an electric Multi-Purpose Vehicle specifically for Ghanaian roads and markets, 
            providing sustainable and affordable mobility solutions.
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
                  <p className='text-gray-300 text-sm'>Robust design optimized for rough terrains</p>
                </div>
                <div className='bg-[#252525] p-4 rounded-lg'>
                  <h3 className='text-orange-500 font-medium mb-2'>Powertrain</h3>
                  <p className='text-gray-300 text-sm'>40-80 kWh battery with regenerative braking</p>
                </div>
                <div className='bg-[#252525] p-4 rounded-lg'>
                  <h3 className='text-orange-500 font-medium mb-2'>Interior</h3>
                  <p className='text-gray-300 text-sm'>Modular space for passengers or cargo</p>
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
      <div className='max-w-4xl mx-auto'>
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
      </div>
    </div>
  )
}

export default Ecar