import { neon } from '@neondatabase/serverless';

declare global {
  // eslint-disable-next-line no-var
  var __neon__: ReturnType<typeof neon> | undefined;
}

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Please add it to your environment.');
}

const cached = global.__neon__ ?? neon(process.env.DATABASE_URL);

if (process.env.NODE_ENV !== 'production') {
  global.__neon__ = cached;
}

export const db = cached;
