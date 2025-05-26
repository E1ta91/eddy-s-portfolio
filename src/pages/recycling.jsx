import React from 'react'
import plasticr1 from '../assets/images/plasticr1.jpg'
import plasticr2 from '../assets/images/plasticr2.jpg'
import plasticr3 from '../assets/images/plasticr3.jpg'
import plasticr4 from '../assets/images/plasticr4.jpg'

const Recycling = () => {
  return (
    <div className='bg-[#111111] text-white min-h-screen py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white'>
          Plastic Shredding & Pelletizing System
        </h1>
        
        <div className='max-w-4xl mx-auto'>
          <p className='text-lg sm:text-xl text-gray-300 leading-relaxed'>
            Revolutionizing plastic recycling with a cutting-edge LDPE and HDPE system — 
            designed for efficiency, sustainability, and a cleaner future.
          </p>
        </div>
      </div>

      {/* Image Gallery with Consistent Aspect Ratio */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto'>
        {/* Each image card now has fixed aspect ratio container */}
        <div className='relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='aspect-w-16 aspect-h-9 bg-black'>
            <img 
              className='object-contain w-full h-full p-4 transform group-hover:scale-105 transition-transform duration-500' 
              src={plasticr1} 
              alt="Plastic recycling system overview" 
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        
        <div className='relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='aspect-w-16 aspect-h-9 bg-black'>
            <img 
              className='object-contain w-full h-full p-4 transform group-hover:scale-105 transition-transform duration-500' 
              src={plasticr2} 
              alt="Shredding unit detail" 
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>

        <div className='relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='aspect-w-16 aspect-h-9 bg-black'>
            <img 
              className='object-contain w-full h-full p-4 transform group-hover:scale-105 transition-transform duration-500' 
              src={plasticr3} 
              alt="Pelletizing system" 
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        
        <div className='relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='aspect-w-16 aspect-h-9 bg-black'>
            <img 
              className='object-contain w-full h-full p-4 transform group-hover:scale-105 transition-transform duration-500' 
              src={plasticr4} 
              alt="Control housing detail" 
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
      </div>

      {/* Details Section */}
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-center mb-8'>
          <div className='px-8 py-3 bg-[#1C1C1C] text-white text-xl font-medium rounded-full shadow-lg border border-gray-800 hover:bg-orange-500 hover:text-black transition-colors duration-300'>
            System Details
          </div>
        </div>
        
        <div className='space-y-8 bg-[#1A1A1A] p-6 sm:p-8 rounded-xl border border-gray-800'>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
            <div className='sm:w-1/4'>
              <h2 className='text-xl sm:text-2xl font-semibold text-orange-500'>Design:</h2>
            </div>
            <div className='sm:w-3/4'>
              <p className='text-gray-300'>
                This CAD design illustrates a comprehensive production line for shredding and pelletizing low-density polyethylene (LDPE)
                and high-density polyethylene (HDPE). The system is meticulously engineered to optimize the recycling process,
                converting plastic waste into reusable pellets.
              </p>
              <div className='mt-4 space-y-4'>
                <div>
                  <h3 className='text-lg font-medium text-gray-200'>Key Components:</h3>
                  <ul className='mt-2 space-y-2 pl-5 list-disc text-gray-400'>
                    <li><strong>Input Conveyor System:</strong> Facilitates smooth transport of plastic materials to the shredder</li>
                    <li><strong>Shredding Unit:</strong> Robust design handles both LDPE and HDPE materials</li>
                    <li><strong>Transfer Mechanism:</strong> Chute and conveyor arrangement for seamless material transfer</li>
                    <li><strong>Pelletizing System:</strong> Transforms shredded plastic into uniform pellets</li>
                    <li><strong>Control Housing:</strong> Centralized monitoring and operation</li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-lg font-medium text-gray-200'>Features:</h3>
                  <ul className='mt-2 space-y-2 pl-5 list-disc text-gray-400'>
                    <li><strong>Modular Design:</strong> Scalable and easy maintenance</li>
                    <li><strong>High Efficiency:</strong> Optimized throughput with minimal energy</li>
                    <li><strong>Versatile:</strong> Handles wide range of polyethylene materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
            <div className='sm:w-1/4'>
              <h2 className='text-xl sm:text-2xl font-semibold text-orange-500'>Tools:</h2>
            </div>
            <div className='sm:w-3/4'>
              <p className='text-gray-300'>
                The entire system was designed using <strong>SolidWorks</strong>, showcasing advanced CAD modeling, 
                system integration, and sustainable design principles that align with modern recycling practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recycling