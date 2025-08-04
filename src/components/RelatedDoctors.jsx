import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctordData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctordData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className='flex flex-col items-center gap-4 py-6 my-16 text-gray-800 md:mx-10'>
      <h1 className='text-3xl font-media'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Browse through our list of top-rated doctors and book your appointment today!
      </p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 '>
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={item._id}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className='items-center flex flex-col border-blue-200 border overflow-hidden gap-4 bg-white rounded-lg shadow-md p-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer'
          >
            <img className='bg-blue-50 max-w-2xs' src={item.image} alt={item.name} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-600 font-medium'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('/doctors');
          scrollTo(0, 0);
        }}
        className='bg-blue-400 text-gray-600 px-12 py-3 rounded-full mt-10'
      >
        See All Doctors
      </button>
    </div>
  );
};

export default RelatedDoctors;
