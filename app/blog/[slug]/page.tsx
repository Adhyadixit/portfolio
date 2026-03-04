import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FadeIn from '@/components/FadeIn';
import db from '@/lib/db';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  published_at: string | null;
}

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const rows = (await db`
    SELECT id, title, slug, content, excerpt, published_at
    FROM blog_posts
    WHERE slug = ${slug} AND published = true
    LIMIT 1
  `) as BlogPost[];

  return rows[0] ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: 'Insight not found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt ?? 'Nabrel insight',
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.published_at
    ? new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(
        new Date(post.published_at)
      )
    : null;

  const paragraphs = post.content.split(/\n\n+/).filter(Boolean);

  return (
    <>
      <section className="page-hero page-hero--white">
        <div className="container">
          <FadeIn>
            <span className="page-hero__overline">Insights</span>
          </FadeIn>
          <FadeIn delay={1}>
            <h1 className="page-hero__title">{post.title}</h1>
          </FadeIn>
          {formattedDate ? (
            <FadeIn delay={2}>
              <p className="page-hero__text">Published {formattedDate}</p>
            </FadeIn>
          ) : null}
        </div>
      </section>

      <section className="section section-white">
        <div className="container blog-article">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    </>
  );
}
