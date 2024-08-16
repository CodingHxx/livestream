// src/app/api/auth/login/route.ts

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { signToken } from '@/lib/jwt';
import cookie from 'cookie';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = signToken({ id: user.id, email: user.email });
      const headers = new Headers();
      headers.append('Set-Cookie', cookie.serialize('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600, // 1 hour
        path: '/',
      }));
      return NextResponse.json({ message: 'Login successful' }, { headers });
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
