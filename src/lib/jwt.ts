// lib/jwt.ts

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'; // Replace with a strong key

export const signToken = (payload: object) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};
