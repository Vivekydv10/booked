import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(1);
  const [slotTime, setSlotTime] = useState('');

  useEffect(() => {
    const doc = doctors.find(doc => doc._id === docId);
    setDocInfo(doc);
  }, [doctors, docId]);

  useEffect(() => {
    if (!docInfo) return;

    const generateSlots = () => {
      const today = new Date();
      const allSlots = [];

      for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        let endTime = new Date(today);
        endTime.setDate(today.getDate() + i);
        endTime.setHours(21, 0, 0, 0); // 9:00 PM

        if (today.getDate() === currentDate.getDate()) {
          currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10, 0, 0, 0); // 10:00 AM
        }

        let timeSlots = [];
        while (currentDate < endTime) {
          const formattedTime = currentDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });

          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }

        allSlots.push(timeSlots);
      }

      setDocSlots(allSlots);
    };

    generateSlots();
  }, [docInfo]);

  if (!docInfo) return null;

  return (
    <div>
      {/* Doctor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-blue-800 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="verified" />
          </p>

          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900'>
              About <img src={assets.info_icon} alt="info" />
            </p>
            <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>

          <p className='text-gray-600 mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p className='mb-2'>Booking Slots</p>

        {/* Date Chips */}
        <div className='flex gap-3 items-center w-full mt-4'>
          {docSlots.length > 0 && docSlots.map((item, index) => (
            <div
              onClick={() => setSlotIndex(index)}
              key={index}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer px-4 ${
                slotIndex === index ? 'bg-blue-600 text-white' : 'border border-gray-200'
              }`}
            >
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Time Slots */}
        <div className='flex gap-3 w-full overflow-x-auto mt-4 pb-4'>
          {docSlots.length > 0 && docSlots[slotIndex]?.map((item, index) => (
            <p
              onClick={() => setSlotTime(item.time)}
              key={index}
              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                item.time === slotTime ? 'bg-blue-400 text-white' : 'border text-gray-300 border-gray-100'
              }`}
            >
              {item.time}
            </p>
          ))}
        </div>

        <button
          onClick={() => alert(`Booked ${slotTime} on ${daysOfWeek[slotIndex]} with ${docInfo.name}`)}
          disabled={!slotTime}
          className='bg-blue-700 text-white text-sm font-light px-4 py-3 rounded-full my-6 disabled:opacity-50'
        >
          Book Appointment
        </button>
      </div>

      {/* Related Doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;
