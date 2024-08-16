import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, thumbnail, Link, userId } = req.body;

    if (!title || !thumbnail || !Link || !userId) {
      return res.status(400).json({ error: 'All fields (title, thumbnail, Link, userId) are required' });
    }

    try {
      // Create a new stream and connect it to the existing user
      const stream = await prisma.stream.create({
        data: {
          title,
          thumbnail,
          Link,
          user: {
            connect: { id: userId } // Connect to an existing user by their ID
          }
        }
      });

      res.status(201).json(stream);
    } catch (error) {
      console.error('Error creating stream:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
