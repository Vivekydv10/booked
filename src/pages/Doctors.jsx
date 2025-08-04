import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const SPECIALTIES = [
    "Gynecologist",
    "Dermatologist",
    "General Physicians",
    "Pediatricians",
    "Gastrologist"
  ];

  useEffect(() => {
    if (speciality) {
      const filtered = doctors.filter(
        (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  }, [doctors, speciality]);

  const handleSpecialtyClick = (spec) => {
    if (spec.toLowerCase() === speciality?.toLowerCase()) {
      navigate('/doctors');
    } else {
      navigate(`/doctors/${spec}`);
    }
  };

  return (
    <div className='px-4'>
      <p className='text-gray-600'>Browse through the doctors by specialty.</p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        {/* Sidebar filter */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          {SPECIALTIES.map((spec) => (
            <p
              key={spec}
              onClick={() => handleSpecialtyClick(spec)}
              className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality?.toLowerCase() === spec.toLowerCase()
                  ? 'bg-indigo-100 text-black'
                  : ''
              }`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctors list */}
        <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 gap-y-6'>
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor._id}
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              className='flex flex-col items-center border-blue-200 border overflow-hidden bg-white rounded-lg shadow-md p-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer'
            >
              <img
                className='bg-blue-50 w-full max-h-48 object-cover rounded'
                src={doctor.image}
                alt={doctor.name}
              />
              <div className='p-2 text-center'>
                <div className='flex items-center justify-center gap-2 text-sm text-green-600 font-medium'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  <span>Available</span>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{doctor.name}</p>
                <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
              </div>
            </div>
          ))}
          {filteredDoctors.length === 0 && (
            <p className='text-gray-500 text-sm mt-4'>No doctors found for this specialty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
