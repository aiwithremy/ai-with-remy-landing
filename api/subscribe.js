// Vercel Serverless Function - handles Beehiiv newsletter signups

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get email and attribution data from the request body
  const { email, utm_source, utm_medium, utm_campaign, referring_site } = req.body;

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
    // Build request body with attribution data
    const requestBody = {
      email: email,
      send_welcome_email: true
    };

    // Add attribution fields if provided
    if (utm_source) requestBody.utm_source = utm_source;
    if (utm_medium) requestBody.utm_medium = utm_medium;
    if (utm_campaign) requestBody.utm_campaign = utm_campaign;
    if (referring_site) requestBody.referring_site = referring_site;

    // Call Beehiiv API from the server (no CORS issues here!)
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      }
    );

    const data = await response.json();

    if (response.ok) {
      // Fire-and-forget: trigger n8n guide email workflow
      const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
      if (N8N_WEBHOOK_URL) {
        fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        }).catch(err => console.error('n8n webhook error:', err));
      }

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
