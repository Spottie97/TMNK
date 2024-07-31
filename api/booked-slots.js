const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = async (req, res) => {
  const { date, service } = req.query;

  if (!date || !service) {
    res.status(400).json({ error: 'Missing date or service parameters' });
    return;
  }

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM bookings WHERE date = $1 AND service = $2', [date, service]);
    const bookings = result.rows;

    client.release();

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
