import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <section className='px-4'>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          CONTACT <span className='text-gray-700 font-semibold'>US</span>
        </p>
      </div>

      <div className='my-16 flex flex-col md:flex-row gap-10 items-center md:items-start text-sm max-w-6xl mx-auto'>
        <img
          className='w-full max-w-[360px] rounded-xl shadow-md'
          src={assets.contact_image}
          alt='Contact office'
        />

        <div className='flex flex-col justify-center items-start gap-6'>
          <div>
            <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500 mt-1 leading-relaxed'>
              54709 Willms Station<br />
              Suite 350, Washington, USA
            </p>
            <p className='text-gray-500 mt-2'>
              Tel: (415) 555-0132<br />
              Email: abc@job.com
            </p>
          </div>

          <div>
            <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
            <p className='text-gray-500 mt-1'>Learn more about teams and job openings.</p>
            <button className='border border-black px-8 py-3 mt-2 text-sm hover:bg-black hover:text-white transition-all duration-500'>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
