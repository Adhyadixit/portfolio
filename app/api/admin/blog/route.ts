import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { ADMIN_COOKIE_NAME, verifyAdminToken } from '@/lib/auth';
import { slugify } from '@/lib/slugify';

async function ensureAdmin() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    return verifyAdminToken(token);
  } catch (error) {
    console.error('Cookie access error:', error);
    return false;
  }
}

async function generateUniqueSlug(baseTitle: string) {
  const base = slugify(baseTitle);
  if (!base) {
    return `${Date.now()}`;
  }

  let finalSlug = base;
  let counter = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const rows = (await db`SELECT 1 FROM blog_posts WHERE slug = ${finalSlug} LIMIT 1`) as [];
    if (!rows.length) {
      break;
    }
    finalSlug = `${base}-${counter}`;
    counter += 1;
  }

  return finalSlug;
}

export async function POST(request: Request) {
  const session = await ensureAdmin();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const { title, excerpt, content, publish } = payload as {
    title?: string;
    excerpt?: string;
    content?: string;
    publish?: boolean;
  };

  if (!title || !content) {
    return NextResponse.json({ error: 'Title and content are required' }, { status: 422 });
  }

  const slug = await generateUniqueSlug(title);
  const publishNow = Boolean(publish);

  const rows = (await db`
    INSERT INTO blog_posts (title, slug, excerpt, content, published, published_at)
    VALUES (${title}, ${slug}, ${excerpt ?? ''}, ${content}, ${publishNow}, ${publishNow ? db`now()` : null})
    RETURNING id
  `) as { id: number }[];

  revalidatePath('/blog');
  if (publishNow) {
    revalidatePath(`/blog/${slug}`);
  }

  return NextResponse.json({ success: true, id: rows[0]?.id ?? null, slug });
}

export async function PATCH(request: Request) {
  const session = await ensureAdmin();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const { id, published } = payload as { id?: number; published?: boolean };

  if (!id || typeof published !== 'boolean') {
    return NextResponse.json({ error: 'Invalid parameters' }, { status: 422 });
  }

  const rows = (await db`
    UPDATE blog_posts
    SET published = ${published},
        published_at = ${published ? db`now()` : null},
        updated_at = now()
    WHERE id = ${id}
    RETURNING slug
  `) as { slug: string }[];

  if (!rows.length) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  const slug = rows[0].slug;
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);

  return NextResponse.json({ success: true });
}
