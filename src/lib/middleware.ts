import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { verifyToken } from './jwt';
import cookie from 'cookie';

export const withAuth = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.authToken;

  if (token) {
    try {
      const decoded = verifyToken(token);
      (req as any).user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  } else {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
