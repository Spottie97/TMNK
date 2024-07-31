import React, { useState, useEffect } from 'react';
import ServiceList from '../components/ServiceList';
import Calendar from '../components/Calendar';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [service, setService] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (selectedDate && service) {
      fetchAvailableTimes(selectedDate, service);
    }
  }, [selectedDate, service]);

  const fetchAvailableTimes = async (date, service) => {
    try {
      const response = await fetch(`/api/booked-slots?date=${date.toISOString().split('T')[0]}&service=${service}`);
      const bookedSlots = await response.json();
      calculateAvailableTimes(bookedSlots, service);
    } catch (error) {
      console.error('Error fetching booked slots:', error);
    }
  };

  const calculateAvailableTimes = (bookedSlots, service) => {
    const sessionDuration = getSessionDuration(service);
    const startOfDay = 9; // 9 AM
    const endOfDay = 17; // 5 PM
    let times = [];

    for (let hour = startOfDay; hour < endOfDay; hour++) {
      const timeSlot = `${hour}:00`;
      const isAvailable = bookedSlots.every(slot => 
        !isOverlapping(slot, timeSlot, sessionDuration)
      );
      if (isAvailable) {
        times.push(timeSlot);
      }
    }

    setAvailableTimes(times);
  };

  const isOverlapping = (bookedSlot, timeSlot, duration) => {
    // Implement logic to check if the timeSlot overlaps with any bookedSlot
    // considering the duration
  };

  const getSessionDuration = (service) => {
    switch (service) {
      case 'Eyebrow Perfection': return 2; // hours
      case 'Eyeliner Enhancement': return 1.5; // hours
      case 'Lip Blush': return 2; // hours
      default: return 1; // default duration
    }
  };

  return (
    <div>
      <ServiceList onSelectService={setService} />
      <div className="flex flex-col md:flex-row justify-center items-center py-10 bg-lightBg">
        <div className="w-full md:w-1/2 p-4">
          <Calendar onSelectDate={setSelectedDate} />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <BookingForm availableTimes={availableTimes} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
