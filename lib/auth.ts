import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from './db';

export const ADMIN_COOKIE_NAME = 'nabrel_admin_token';

const getJwtSecret = () => {
  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret && process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test') {
    console.warn('ADMIN_JWT_SECRET is missing. Defaulting to insecure fallback for build.');
    return 'insecure_default_secret';
  }
  return secret || 'insecure_default_secret';
};

const jwtSecret: string = getJwtSecret();

const defaultAdminEmail = process.env.DEFAULT_ADMIN_EMAIL;
const defaultAdminPassword = process.env.DEFAULT_ADMIN_PASSWORD;

export async function ensureDefaultAdmin() {
  if (!defaultAdminEmail || !defaultAdminPassword) return;

  // Ensure admin_users table exists before querying
  await db`
    CREATE TABLE IF NOT EXISTS admin_users (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT DEFAULT 'admin' NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now() NOT NULL
    )
  `;

  // Ensure media_assets table exists
  await db`
    CREATE TABLE IF NOT EXISTS media_assets (
      key TEXT PRIMARY KEY,
      url TEXT NOT NULL,
      updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
    )
  `;

  const existsResult = (await db`
    SELECT EXISTS (
      SELECT 1 FROM admin_users WHERE email = ${defaultAdminEmail}
    ) AS exists
  `) as { exists: boolean }[];

  if (!existsResult[0]?.exists) {
    const hash = await bcrypt.hash(defaultAdminPassword, 10);
    await db`
      INSERT INTO admin_users (email, password_hash)
      VALUES (${defaultAdminEmail}, ${hash})
      ON CONFLICT (email) DO NOTHING
    `;
  }
}

export async function verifyAdminCredentials(email: string, password: string) {
  const rows = (await db`
    SELECT id, email, password_hash, role
    FROM admin_users
    WHERE email = ${email}
    LIMIT 1
  `) as { id: number; email: string; password_hash: string; role: string }[];

  if (!rows.length) return null;

  const user = rows[0];
  const matches = await bcrypt.compare(password, user.password_hash);
  if (!matches) return null;

  return { id: user.id, email: user.email, role: user.role };
}

export function createAdminToken(payload: { id: number; email: string; role: string }) {
  return jwt.sign(payload, jwtSecret, { expiresIn: '7d' });
}

export function verifyAdminToken(token?: string) {
  if (!token) return null;
  try {
    return jwt.verify(token, jwtSecret) as { id: number; email: string; role: string };
  } catch {
    return null;
  }
}
