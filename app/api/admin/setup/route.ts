import { NextResponse } from 'next/server';
import { isAnyAdminCreated, createAdminToken, ADMIN_COOKIE_NAME } from '@/lib/auth';
import db from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    // 1. Check if any admin exists already (perishable link logic)
    const exists = await isAnyAdminCreated();
    if (exists) {
        return NextResponse.json({
            error: 'Setup already complete. An administrator account already exists.'
        }, { status: 403 });
    }

    const body = await request.json().catch(() => null);
    if (!body) {
        return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const { email, password } = body;

    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 422 });
    }

    if (password.length < 8) {
        return NextResponse.json({ error: 'Password too short' }, { status: 422 });
    }

    try {
        // 2. Hash and Create the first admin
        const hash = await bcrypt.hash(password, 10);

        const result = (await db`
      INSERT INTO admin_users (email, password_hash, role)
      VALUES (${email}, ${hash}, 'admin')
      RETURNING id, email, role
    `) as { id: number; email: string; role: string }[];

        const admin = result[0];

        // 3. Log them in immediately
        const token = createAdminToken(admin);
        const response = NextResponse.json({ success: true });

        response.cookies.set(ADMIN_COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
    } catch (err: any) {
        console.error('Setup error:', err);
        return NextResponse.json({
            error: 'Failed to create admin user'
        }, { status: 500 });
    }
}
