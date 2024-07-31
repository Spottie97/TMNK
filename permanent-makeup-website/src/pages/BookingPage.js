import React from 'react';
import ServiceList from '../components/ServiceList';
import Calendar from '../components/Calendar';
import BookingForm from '../components/BookingForm';
import StripeCheckout from '../components/StripeCheckout';

const BookingPage = () => {
  return (
    <div>
      <ServiceList />
      <Calendar />
      <BookingForm />
      <StripeCheckout />
    </div>
  );
};

export default BookingPage;
