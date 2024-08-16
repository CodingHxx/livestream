// pages/api/posts.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
  id: number;
  title: string;
  content: string;
  postLink?: string;
  postImage?: string;
  createdAt: string;
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  if (req.method === 'POST') {
    try {
      const { title, content, postLink, postImage } = req.body;

      // Validate input
      if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
      }

      // Create a new post with Prisma
      const post = await prisma.post.create({
        data: {
          title,
          content,
          postLink,  // These fields are optional
          postImage, // Optional field
        },
      });

      res.status(201).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the post' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
