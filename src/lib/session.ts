import { NextRequest } from 'next/server';
import { verifyToken } from './jwt';
import cookie from 'cookie';

// Server-side session handler
export async function getServerSession(req?: NextRequest) {
  const cookies = req
    ? cookie.parse(req.headers.get('cookie') || '') // Server-side
    : {}; // Default to empty if req is not provided

  const token = cookies.authToken;

  if (token) {
    try {
      const decoded = verifyToken(token);
      return { user: decoded };
    } catch (error) {
      return null;
    }
  }

  return null;
}
