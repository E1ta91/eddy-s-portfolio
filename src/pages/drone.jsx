import React from 'react';
import drones from "../assets/images/drones.png";
import drone from "../assets/images/drone.jpg";

const Drone = () => {
  return (
    <div className='space-y-5 bg-[#111111] text-white min-h-screen'>

      <h1 className='text-7xl flex justify-center items-center pt-9 font-bold'>DRONE</h1>

      <div className='flex justify-center text-center items-center text-xl w-[90vw] md:w-[40vw] mx-auto'>
        <p>
          A quadcopter drone capable of delivering a Kilogram(kg) payload over a distance of 5 kilometers(km). 
          Purposely for construction sites and farms.
        </p>
      </div>

      <div className='md:flex flex-grow w-[60vw]  md:w-[35vw] ml-20 md:m-[11rem] mt-[3rem] space-y-6 md:space-x-6'>
        <img className='rounded-2xl   shadow-black' src={drones} alt="Drone 1" />
        <img className='rounded-2xl  shadow-black' src={drone} alt="Drone 2" />
      </div>

      <div className='flex flex-col text-center md:m-0 m-5 space-y-4'>
        <h1 className='border w-[30vw] text-center md:w-[10vw] md:text-center text-xl pt-2 h-[8vh] rounded-full md:ml-44 bg-[#1C1C1C] text-white shadow-2xl'>Details</h1>

        <div className='flex md:pl-44 space-x-2'>
          <h1 className='text-xl'>Design:</h1>
          <p className='text-[1rem] pt-[0.2rem] '>It was designed using solid works.</p>
        </div>

        <div className='flex  md:pl-44  space-x-2'>
          <h1 className='text-xl'>Tools:</h1>
          <p className='text-[1rem]  pt-[0.2rem]'>3D printed using PLA filament on a Qidi x-plus printer.</p>
        </div>
      </div>

    </div>
  );
};

export default Drone;
