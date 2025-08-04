import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="px-4 sm:px-10 md:px-16 lg:px-24 bg-gray-50 text-gray-700">
      
      {/* Header */}
      <div className="text-center text-3xl pt-10 pb-6 font-bold text-gray-800">
        <p>
          ABOUT <span className="text-blue-500">US</span>
        </p>
      </div>

      {/* About Section */}
      <section className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-md"
          src={assets.about_image}
          alt="Doctor consultation"
        />

        <div className="flex-1 flex flex-col gap-5 text-[15px] leading-relaxed">
          <p>
            Dr. Davis is committed to delivering comprehensive medical care,
            with a focus on preventive medicine, early diagnosis, and effective
            treatment strategies. Our approach emphasizes patient-centered
            healthcare that adapts to your unique needs.
          </p>
          <p>
            We strive to create a safe and welcoming environment for every
            patient. Our team combines expertise with compassion to ensure the
            best possible outcomes.
          </p>
          <h3 className="text-lg font-semibold text-gray-800">Our Vision</h3>
          <p>
            To be a trusted provider of healthcare solutions, empowering
            individuals to take charge of their health through accessible,
            personalized, and high-quality medical services.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <div className="text-xl font-semibold mb-6 text-gray-800">
          <p>
            WHY <span className="text-blue-500">CHOOSE US</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 pb-20">
          {/* Efficiency */}
          <div className="flex-1 rounded-xl px-8 py-10 bg-white shadow hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
            <h4 className="font-semibold text-lg mb-2">EFFICIENCY</h4>
            <p>Streamlined appointments with minimal waiting time and real-time availability updates.</p>
          </div>

          {/* Convenience */}
          <div className="flex-1 rounded-xl px-8 py-10 bg-white shadow hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
            <h4 className="font-semibold text-lg mb-2">CONVENIENCE</h4>
            <p>Access a network of trusted healthcare professionals near you with just a few clicks.</p>
          </div>

          {/* Personalization */}
          <div className="flex-1 rounded-xl px-8 py-10 bg-white shadow hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
            <h4 className="font-semibold text-lg mb-2">PERSONALIZATION</h4>
            <p>Get tailored recommendations and reminders to stay on top of your health goals.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
