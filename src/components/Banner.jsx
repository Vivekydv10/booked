import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-blue-500 rounded-lg px-6 sm:px-10 md:px-14 lg:px-20 my-20 md:mx-10">
      {/* Left Side */}
      <div className="flex-1 py-10 md:py-16 lg:py-24">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white leading-snug">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => {
            navigate('/login');
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-700 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
        >
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md object-contain"
          src={assets.appointment_img}
          alt="Doctor Appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
