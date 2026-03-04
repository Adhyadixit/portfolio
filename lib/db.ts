import { neon } from '@neondatabase/serverless';

declare global {
  // eslint-disable-next-line no-var
  var __neon__: ReturnType<typeof neon> | undefined;
}

// Handle missing DATABASE_URL gracefully for static builds
const databaseUrl = process.env.DATABASE_URL;

function createMockDb() {
  const mockDb = () => {
    console.warn('DATABASE_URL not set - using mock database for static build');
    return Promise.resolve([]);
  };
  
  // Add all the same methods as the real db
  mockDb.sql = mockDb;
  mockDb.array = mockDb;
  
  return mockDb;
}

let db: ReturnType<typeof neon> | ReturnType<typeof createMockDb>;

if (!databaseUrl) {
  db = createMockDb();
} else {
  const cached = global.__neon__ ?? neon(databaseUrl);

  if (process.env.NODE_ENV !== 'production') {
    global.__neon__ = cached;
  }

  db = cached;
}

export default db;
