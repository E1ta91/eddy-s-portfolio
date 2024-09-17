
import React, { useState, useEffect } from 'react';

const About = () => {
    const [count5, setCount5] = useState(0);
  const [count10, setCount10] = useState(0);
  const [count20, setCount20] = useState(0);

  useEffect(() => {
    if (count5 < 5) {
      const interval5 = setInterval(() => {
        setCount5(prevCount => prevCount + 1);
      }, 50); // 1-second interval for 5
      return () => clearInterval(interval5);
    }
  }, [count5]);

  useEffect(() => {
    if (count10 < 10) {
      const interval10 = setInterval(() => {
        setCount10(prevCount => prevCount + 1);
      }, 50); // 1-second interval for 10
      return () => clearInterval(interval10);
    }
  }, [count10]);

  useEffect(() => {
    if (count20 < 20) {
      const interval20 = setInterval(() => {
        setCount20(prevCount => prevCount + 1);
      }, 50); // 1-second interval for 20
      return () => clearInterval(interval20);
    }
  }, [count20]);

    return (
     <div  className='flex flex-col space-y-9'>
            
      <div className='space-y-3'>
        <h1 className='text-6xl text-[#FFFFFF] uppercase font-bold'>Design Innovation </h1>
        <h1 className='text-6xl text-[#353334] uppercase font-bold'>  Engineer</h1>
        <p className='text-[#8d8082]'>A mechanical engineer with over 5 years of experience in makerspaces,  specializing in CAD design, digital fabrication, and R&D. Certified in SolidWorks  and Digital Fabrication from FAB Academy, with experience as a Senior CAD Engineer  in innovative product designs. Currently focused on exploring new  ideas in the consumer goods and bicycle markets, applying  advanced technologies to solve practical challenges. Based in Accra, Ghana.</p>
      </div>

      <div className=' flex space-x-10' >
        <div className='space-y-2'>
        <h1 className='text-6xl font-bold text-white'> {count5} </h1>
        <p className='text-[#998F8F]'>YEARS OF EXPERIENCE</p>
        </div>

        <div className='space-y-2'>
        <h1 className='text-6xl font-bold text-white'> {count10} </h1>
        <p  className='text-[#998F8F]' >PROJECTS COMPLETED</p>
        </div>

        <div className='space-y-2'>
        <h1 className='text-6xl font-bold text-white'> {count20} </h1>
        <p  className='text-[#998F8F]' >WORLDWIDE CLIENTS</p>
        </div>
      
     
    </div>

        
    </div>
       

    )
}

export default About