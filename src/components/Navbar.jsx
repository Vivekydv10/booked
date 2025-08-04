import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // Change to false to simulate logged-out state

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-4 border-b border-gray-300'>
      <img
        onClick={() => navigate('/')}
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt='Logo'
      />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>
            HOME
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto' />
          </li>
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>
            ALL DOCTORS
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto' />
          </li>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>
            ABOUT
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto' />
          </li>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>
            CONTACT
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto' />
          </li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt='Profile' />
            <img className='w-2.5' src={assets.dropdown_icon} alt='Dropdown' />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block z-10'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-md'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>
                  My Profile
                </p>
                <p onClick={() => navigate('/my-appointment')} className='hover:text-black cursor-pointer'>
                  My Appointment
                </p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='text-white bg-blue-500 px-6 py-2 rounded font-light'
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
