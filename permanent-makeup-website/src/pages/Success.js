import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Fetch the session details from your backend to confirm payment
    const fetchSession = async () => {
      const response = await fetch(`/api/checkout-session?session_id=${sessionId}`);
      const session = await response.json();

      // Log the booking details using session information
      if (session.payment_status === 'paid') {
        // Log booking details here (e.g., send data to your backend)
        console.log('Payment successful, booking logged:', session);
      }
    };

    fetchSession();
  }, [sessionId]);

  return (
    <div className="py-10 bg-lightBg text-center">
      <h2 className="text-4xl font-semibold mb-4">Payment Successful!</h2>
      <p>Your booking has been successfully logged. Thank you!</p>
    </div>
  );
};

export default Success;
