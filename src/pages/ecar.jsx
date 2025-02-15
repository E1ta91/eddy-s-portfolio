import React from 'react'
import carfront from '../assets/images/carfront.jpg'
import carrear from '../assets/images/carrear.jpg'
import carside from '../assets/images/carside.jpg'
import carskin from '../assets/images/carskin.jpg'
import carskin2 from '../assets/images/carskin2.jpg'
import car3dprint from '../assets/images/car3dprint.jpg'
import Carcut from '../assets/images/Carcut.png'
import Carfront from '../assets/images/Carfront.png'
import Carcut2 from'../assets/images/Carcut2.png'
import Carrear from '../assets/images/Carrear.png'
import skatboard from '../assets/images/skatboard.png'
import Cariso from '../assets/images/Cariso.png'
import mecar from '../assets/images/mecar.jpg'
import skateboard from '../assets/images/skateboard.png'


const ecar = () => {
  return (
    <div className='space-y-5 bg-[#030105] text-white min-h-screen'>
            
            <h1 className='text-7xl flex justify-center items-center pt-9 font-bold'>Electric Multi Purpose Vehicle-EMPV</h1>
            
                  <div className='flex justify-center text-center items-center text-xl w-[90vw] md:w-[40vw] mx-auto'>
                    <p>
            
                    As the Lead Senior CAD Engineer, I led the design of Cariso, an electric multi-purpose vehicle (MPV) engineered specifically for Ghanaian roads and markets. This project aims to tackle transportation challenges, providing a sustainable and affordable mobility solution to help reduce poverty and enhance economic opportunities. Designed with durability, efficiency, and local adaptability in mind, Cariso is a step toward a greener and more inclusive future.
                    </p>
                  </div>
            <div className='flex md:pl-44 space-x-4'>
                <h1 className='text 4xl flex justify-start items-center pt-4 font-semibold'> Design and Build Process in pictures </h1>
            </div>
                  <div className='md:flex flex-grow w-[65vw]  md:w-[40vw] ml-30 md:m-[9rem] mt-[5rem] space-y-6 md:space-x-6'>
                    <img className='rounded-3xl   shadow-black' src={Cariso}  />
                    <img className='rounded-3xl  shadow-black' src={Carrear}  />
                  
                  </div>

              <div className='flex justify-center space-x-7 items-center '>
                <img src={Carcut} className='w-[505px] rounded-2xl' alt='img'/>
                <img className='w-[555px] rounded-2xl' src={Carcut2} alt='img'/>
                <img className='w-[510px] rounded-2xl' src={Carfront} alt='img'/>

              </div>

              <div className='flex justify-center space-x-7 items-center '>
                <img src={skateboard} className='w-[505px] rounded-2xl' alt='img'/>
                <img className='w-[555px] rounded-2xl' src={skatboard} alt='img'/>

              </div>

                  <div className='md:flex flex-grow w-[65vw] md:w[40vw] ml-30 md:m-[9rem] mt-[5rem] space-y-6 md:space-x-6'>

                  <img className='w-[800px] h-[400px] rounded-3xl   shadow-black' src={carskin}  />
                  <img className='w-[800px] h-[400px] rounded-3xl  shadow-black' src={carskin2 }  />
                  </div>
                  <div className='md:flex flex-grow w-[65vw]  md:w-[40vw] ml-20 md:m-[9rem] mt-[5rem] space-y-6 md:space-x-6'> 
                    <img className='w-[800px] h-[400px] rounded-3x1  shadow-black' src={carfront}  />
                    <img className='w-[800px] h-[400px] rounded-3x1 shadow-black' src={carside}/>
                  </div>
                  <div className='flex flex-col text-center md:m-0 m-5 space-y-4'>
                    <h1 className='border w-[30vw] text-center md:w-[10vw] md:text-center text-xl pt-2 h-[8vh] rounded-full md:ml-44 bg-[#1C1C1C] text-white shadow-2xl'>Details</h1>
            </div>

                    <div className='flex md:pl-44 space-x-2'>
                      <h1 className='text-xl'>Design:</h1>
                      <p className='text-[1rem] pt-[0.2rem] '>
                    
    
    As the Lead Senior CAD Engineer, I led the design of WeCAr, an electric multi-purpose vehicle (E-MPV) built for Ghanaian roads and markets. Engineered for durability, efficiency, and affordability, Cariso addresses transportation challenges while promoting sustainable mobility.
</p>
</div>
<div className='space-y-6'>
  <div className='flex mx-20 space-x-4'>
    <h1 className='text-lg w-[30vw]'>Key Design Highlights:</h1>
      
        
      
    
<p className='space-y-3'>
✔ Robust Chassis & Suspension – Optimized for rough terrains. <br/>
✔ Efficient Electric Powertrain – 40-80 kWh battery with regenerative braking. <br/>
✔ Spacious & Modular Interior – Configurable for passengers or cargo.<br/>
✔ Locally Adaptable & Cost-Effective – Designed for easy maintenance and production. <br/>
WeCar is more than just a vehicle—it’s a solution for mobility and economic empowerment in Ghana. 🚗⚡
         </p>                                        
        </div>
   </div>  
  <div>
    <section className="py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">WeCar in Action-first test</h2>
      <p className="text-gray-600 mb-6 text-center">
        Watch how our ideas are brought to life.
      </p>
      <div className="w-full max-w-3xl">
        <video
          controls
          className="w-full rounded-lg shadow-lg"
        >
          <source src="/videos/CAR_Test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
                     </div>
          </div>
  )
}

export default ecar
