import React from 'react';
import { doctors } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const TopDoctors = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 py-6 my-16 text-gray-800 md:mx-10">
      <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Browse through our list of top-rated doctors and book your appointment today!
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item) => (
          <div
            key={item._id}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col items-center border border-blue-200 bg-white rounded-lg shadow-md p-4 gap-3 hover:scale-105 transition-transform cursor-pointer"
          >
            <img className="bg-blue-50 w-full h-40 object-contain" src={item.image} alt={item.name} />
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 text-sm text-green-600 font-medium mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available</span>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="bg-blue-500 text-white px-10 py-3 rounded-full mt-10 hover:bg-blue-600 transition"
      >
        See All Doctors
      </button>
    </div>
  );
};

export default TopDoctors;
