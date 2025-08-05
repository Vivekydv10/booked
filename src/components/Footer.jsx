// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white mt-20 px-4 sm:px-8 md:px-10 py-10 text-sm text-gray-600">
      <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 mb-10">
        {/* Left: Logo & Description */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Healthcare logo" />
          <p className="max-w-sm leading-6">
            We aim to provide easy access to trusted healthcare professionals,
            ensuring that your well‑being is always a priority.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div>
          <h3 className="text-xl font-medium mb-5">Company</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-blue-500">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="text-xl font-medium mb-5">Get In Touch</h3>
          <ul className="flex flex-col gap-2">
            <li>+91 63636 36363</li>
            <li>support@healthcareapp.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Bottom Note */}
      <p className="text-center py-5 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} HealthCare App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
