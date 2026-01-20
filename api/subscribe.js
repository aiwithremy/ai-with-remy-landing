// Vercel Serverless Function - handles Beehiiv newsletter signups
// Uses modern Vercel Functions syntax with POST export

export async function POST(request) {
  try {
    // Get email from the request body
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get API credentials from environment variables (secure, not exposed to browser)
    const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
    const BEEHIIV_PUB_ID = process.env.BEEHIIV_PUB_ID;

    if (!BEEHIIV_API_KEY || !BEEHIIV_PUB_ID) {
      console.error('Missing Beehiiv environment variables');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

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
      return new Response(
        JSON.stringify({ success: true, data }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: data.message || 'Subscription failed' }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Beehiiv API error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to subscribe' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
