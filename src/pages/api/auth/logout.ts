import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Clear the authentication token cookie
    res.setHeader('Set-Cookie', cookie.serialize('authToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0), // Set to a past date to delete the cookie
      path: '/',
      sameSite: 'strict',
    }));

    res.status(200).json({ message: 'Logged out successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
