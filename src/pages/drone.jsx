import React from 'react'
import drones from "../assets/images/drones.png"
import drone from "../assets/images/drone.jpg"

const Drone = () => {
  return (
    <div className='space-y-3'>
      <h1 className=' text-6xl flex justify-center items-center  font-bold text-black'>DRONE </h1>

      <div className='flex w-[38vw] ml-[10rem] mt-[3rem] space-x-6'>
        <img src={drones} alt="img" />
        <img src={drone} alt="img" />
      </div>

      <div className='flex flex-col justify-center text-center items-center space-y-4 '>

        <div>
          <h1 className='text-4xl '>Function</h1>
          <p className='w-[50vw]'>A quadcopter drone capable of delivering a Kilogram(kg) payload over a distance of 5 kilometers(km). Purposely for construction sites and farms.</p>
        </div>

        <div>
          <h1 className='text-4xl '>Design</h1>
          <p>It was designed using solid works</p>
        </div>

        <div>
          <h1 className='text-4xl'>Tools</h1>
          <p>3D printed using PLA filament on a Qidi x-plus printer.</p>
        </div>
      </div>


    </div>
  )
}

export default Drone