import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch(`/api/verify-payment?session_id=${sessionId}`);
        const data = await response.json();

        if (data.status === 'success') {
          setStatus('success');
          // Log the booking details (optional: send to a database)
          console.log('Payment successful, booking logged:', data.session);
        } else {
          setStatus('incomplete');
        }
      } catch (error) {
        console.error('Error fetching session:', error);
        setStatus('error');
      }
    };

    fetchSession();
  }, [sessionId]);

  return (
    <div className="py-10 bg-lightBg text-center">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'success' && (
        <>
          <h2 className="text-4xl font-semibold mb-4">Payment Successful!</h2>
          <p>Your booking has been successfully logged. Thank you!</p>
        </>
      )}
      {status === 'incomplete' && (
        <>
          <h2 className="text-4xl font-semibold mb-4">Payment Incomplete</h2>
          <p>It seems there was an issue with your payment. Please try again.</p>
          <a href="/booking">
            <button className="bg-primary text-lightText px-4 py-2 rounded hover:bg-secondary">
              Try Again
            </button>
          </a>
        </>
      )}
      {status === 'error' && (
        <>
          <h2 className="text-4xl font-semibold mb-4">Error</h2>
          <p>There was an error verifying your payment. Please contact support.</p>
        </>
      )}
    </div>
  );
};

export default Success;
