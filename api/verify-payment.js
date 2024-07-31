const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const sessionId = req.query.session_id;

    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (session.payment_status === 'paid') {
        // Payment is confirmed
        // Here, you could log the booking details to a database
        res.status(200).json({ status: 'success', session });
      } else {
        // Payment failed or is incomplete
        res.status(200).json({ status: 'incomplete', session });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}
