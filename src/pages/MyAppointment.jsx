import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <p className="pb-3 mt-6 text-lg font-semibold text-zinc-700 border-b">
        My Appointments
      </p>

      <div className="space-y-6 mt-4">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b pb-4"
          >
            <div className="w-28 h-28 bg-indigo-50 rounded overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 space-y-1 text-sm text-zinc-600">
              <p className="text-lg font-semibold text-zinc-800">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-500">Address: {item.address?.line1}, {item.address?.line2}</p>
              <p className="text-blue-600">
                <span className="font-medium">Date & Time:</span> 25 July 2024 | 8:30 PM
              </p>

              <div className="flex gap-3 mt-2">
                <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition">
                  Pay Online
                </button>
                <button className="bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500 transition">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
