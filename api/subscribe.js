// Vercel Serverless Function - handles Beehiiv newsletter signups
// This runs on the server, so there are no CORS issues

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get email from the request body
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Get API credentials from environment variables (secure, not exposed to browser)
  const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
  const BEEHIIV_PUB_ID = process.env.BEEHIIV_PUB_ID;

  if (!BEEHIIV_API_KEY || !BEEHIIV_PUB_ID) {
    console.error('Missing Beehiiv environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Call Beehiiv API from the server (no CORS issues here!)
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          send_welcome_email: true
        })
      }
    );

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(response.status).json({
        error: data.message || 'Subscription failed'
      });
    }
  } catch (error) {
    console.error('Beehiiv API error:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
}
