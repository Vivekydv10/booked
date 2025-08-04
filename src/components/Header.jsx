


import React from 'react'
import { assets } from '../assets/assets'


const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-blue-400 rounded-lg px-6 md:px-10 lg:px-12 py-8'>
        {/*-------left side-*/}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-2xl md:text-4xl font-semibold text-white leading-tight md:lg:leading-tight'>
                Book Appointment <br/> With Trusted Doctors
            </p>
        <div className='flex flex-col md:flex-row  items-center gap-3 text-white text-sm  font-lightmd:text-base'> 
        
            <img  className=" w-26" src={assets.group_profiles} alt="" />
            <p>
                Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block '/>schedule your appointment hassel-free.
            </p>        
        </div>
        <a href='#speciality' className='flex items-center gap-2 text-black bg-white px-6 py-4 rounded-full mt-5 hover:scale-105 bg-white-600 transition-all duration-300 '>
            Book appointment <img className='w-3' src={assets.arrow_icon} alt=''/>
        </a>
        </div>
        {/*======Rigth====*/}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg '  src={assets.header_img}/>
        </div>
    </div>
  )
}

export default Header