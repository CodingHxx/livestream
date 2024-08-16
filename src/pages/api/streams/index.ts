import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch all streams
      const streams = await prisma.stream.findMany({
        include: {
          user: true, // Include user information if needed
        },
      });

      res.status(200).json(streams);
    } catch (error) {
      console.error('Failed to fetch streams:', error);
      res.status(500).json({ error: 'Failed to fetch streams' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
