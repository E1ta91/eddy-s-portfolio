import React from 'react';
import drones from "../assets/images/drones.png";
import drone from "../assets/images/drone.jpg";

const Drone = () => {
  return (
    <div className='bg-[#111111] text-white min-h-screen py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white'>
          DRONE PROJECT
        </h1>
        
        <div className='max-w-3xl mx-auto'>
          <p className='text-lg sm:text-xl md:text-xl text-gray-300 leading-relaxed'>
            A quadcopter drone capable of delivering a kilogram (kg) payload over a distance of 5 kilometers (km), 
            designed specifically for construction sites and agricultural applications.
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 mb-16'>
        <div className='w-full md:w-1/2 lg:w-2/5 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <img 
            className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500' 
            src={drones} 
            alt="Drone overview" 
          />
        </div>
        
        <div className='w-full md:w-1/2 lg:w-2/5 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <img 
            className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500' 
            src={drone} 
            alt="Drone close-up" 
          />
        </div>
      </div>

      {/* Details Section */}
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-center mb-8'>
          <div className='px-8 py-3 bg-[#1C1C1C] text-white text-xl font-medium rounded-full shadow-lg border border-gray-800 hover:bg-orange-500 hover:text-black transition-colors duration-300'>
            Project Details
          </div>
        </div>
        
        <div className='space-y-6 bg-[#1A1A1A] p-6 sm:p-8 rounded-xl border border-gray-800'>
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
            <h2 className='text-xl font-semibold min-w-[80px] sm:min-w-[100px]'>Design:</h2>
            <p className='text-gray-300 flex-1'>
              The drone was meticulously designed using SolidWorks, with careful attention to aerodynamics and payload capacity.
            </p>
          </div>
          
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
            <h2 className='text-xl font-semibold min-w-[80px] sm:min-w-[100px]'>Tools:</h2>
            <p className='text-gray-300 flex-1'>
              Prototype components were 3D printed using high-quality PLA filament on a Qidi X-Plus 3D printer, 
              ensuring precision and durability for flight testing.
            </p>
          </div>
          
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
            <h2 className='text-xl font-semibold min-w-[80px] sm:min-w-[100px]'>Features:</h2>
            <p className='text-gray-300 flex-1'>
              Capable of 5km range with 1kg payload, equipped with advanced flight stabilization, 
              and designed for rugged construction and farm environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drone;