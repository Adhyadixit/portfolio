import { cookies } from 'next/headers';
import { ensureDefaultAdmin, verifyAdminToken, ADMIN_COOKIE_NAME } from '@/lib/auth';
import db from '@/lib/db';
import AdminLoginForm from '@/components/admin/AdminLoginForm';
import AdminDashboard from '@/components/admin/AdminDashboard';
import { getAllMediaMap } from '@/lib/media';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  await ensureDefaultAdmin();
  const cookieStore = (await Promise.resolve(cookies())) as Awaited<ReturnType<typeof cookies>>;
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const session = verifyAdminToken(token);

  if (!session) {
    return <AdminLoginForm />;
  }

  const leads = (await db`
    SELECT id, full_name, organization, title, email, inquiry_type, message, created_at
    FROM lead_submissions
    ORDER BY created_at DESC
    LIMIT 50
  `) as {
    id: number;
    full_name: string;
    organization: string;
    title: string | null;
    email: string;
    inquiry_type: string;
    message: string;
    created_at: string;
  }[];

  const posts = (await db`
    SELECT id, title, slug, published, published_at, created_at
    FROM blog_posts
    ORDER BY created_at DESC
    LIMIT 50
  `) as {
    id: number;
    title: string;
    slug: string;
    published: boolean;
    published_at: string | null;
    created_at: string;
  }[];

  const mediaMap = await getAllMediaMap();

  return <AdminDashboard adminEmail={session.email} leads={leads} posts={posts} mediaMap={mediaMap} />;
}
