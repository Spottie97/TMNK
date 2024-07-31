import React from 'react';
import ContactInfo from '../components/ContactInfo';
import GoogleMap from '../components/GoogleMap';
import ContactForm from '../components/ContactForm';
import SocialMediaLinks from '../components/SocialMediaLinks';

const ContactPage = () => {
  return (
    <div>
      <ContactInfo />
      <GoogleMap />
      <ContactForm />
      <SocialMediaLinks />
    </div>
  );
};

export default ContactPage;
