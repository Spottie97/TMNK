import React from 'react';
import ServiceList from '../components/ServiceList';
import Calendar from '../components/Calendar';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  return (
    <div>
      <ServiceList />
      <Calendar />
      <BookingForm />
    </div>
  );
};

export default BookingPage;
