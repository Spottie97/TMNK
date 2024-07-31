const { Pool } = require('pg');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { session_id } = req.body;

    try {
      // Verify the session
      const session = await stripe.checkout.sessions.retrieve(session_id);

      if (session.payment_status === 'paid') {
        const client = await pool.connect();
        const { rows } = await client.query('SELECT * FROM temp_bookings WHERE session_id = $1', [session_id]);

        if (rows.length > 0) {
          const booking = rows[0];

          // Store booking in permanent bookings table
          await client.query(
            'INSERT INTO bookings (name, email, service, time) VALUES ($1, $2, $3, $4)',
            [booking.name, booking.email, booking.service, booking.time]
          );

          // Remove from temp bookings
          await client.query('DELETE FROM temp_bookings WHERE session_id = $1', [session_id]);

          client.release();

          res.status(200).json({ message: 'Booking confirmed' });
        } else {
          client.release();
          res.status(404).json({ error: 'No temporary booking found' });
        }
      } else {
        res.status(400).json({ error: 'Payment not confirmed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
