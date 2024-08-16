import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from '@/lib/session';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req);

  if (session && session.user) {
    res.status(200).json({ message: 'This is a protected route' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}
