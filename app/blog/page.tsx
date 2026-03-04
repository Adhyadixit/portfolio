import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { db } from '@/lib/db';

interface BlogPostSummary {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  published_at: string | null;
}

async function getPublishedPosts() {
  const rows = (await db`
    SELECT id, title, slug, excerpt, published_at
    FROM blog_posts
    WHERE published = true
    ORDER BY published_at DESC NULLS LAST, created_at DESC
  `) as BlogPostSummary[];
  return rows;
}

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Editorial perspectives from Nabrel on capital deployment, stewardship, and real asset investing.',
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <section className="page-hero page-hero--white">
        <div className="container">
          <FadeIn>
            <span className="page-hero__overline">Insights</span>
          </FadeIn>
          <FadeIn delay={1}>
            <h1 className="page-hero__title">Nabrel Perspectives</h1>
          </FadeIn>
          <FadeIn delay={2}>
            <p className="page-hero__text">
              Briefings and viewpoints on capital structure, governance, and the stewardship principles that guide our platform.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          {posts.length === 0 ? (
            <div className="blog-empty">
              <p>No published insights yet. Please check back soon.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post, index) => (
                <FadeIn key={post.id} delay={index * 0.15}>
                  <article className="blog-card">
                    <div className="blog-card__meta">
                      {post.published_at ? new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(post.published_at)) : 'Unpublished'}
                    </div>
                    <h2 className="blog-card__title">{post.title}</h2>
                    {post.excerpt ? <p className="blog-card__excerpt">{post.excerpt}</p> : null}
                    <Link href={`/blog/${post.slug}`} className="blog-card__link">
                      Read insight
                    </Link>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
