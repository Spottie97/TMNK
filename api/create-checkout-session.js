const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, serviceName, priceId, time } = req.body;

    try {
      // Create Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/booking/cancel`,
      });

      // Store booking details temporarily
      const client = await pool.connect();
      await client.query(
        'INSERT INTO temp_bookings (session_id, name, email, service, time) VALUES ($1, $2, $3, $4, $5)',
        [session.id, name, email, serviceName, time]
      );
      client.release();

      res.status(200).json({ id: session.id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
