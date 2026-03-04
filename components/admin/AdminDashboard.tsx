
'use client';

import { FormEvent, useMemo, useState } from 'react';

interface Lead {
  id: number;
  full_name: string;
  organization: string;
  title?: string | null;
  email: string;
  inquiry_type: string;
  message?: string;
  created_at: string;
}

interface PostSummary {
  id: number;
  title: string;
  slug: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
}

interface AdminDashboardProps {
  adminEmail: string;
  leads: Lead[];
  posts: PostSummary[];
  mediaMap: Record<string, string>;
}

const initialForm = {
  title: '',
  excerpt: '',
  content: '',
  publish: false,
};

export default function AdminDashboard({ adminEmail, leads, posts, mediaMap }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'leads' | 'blogs' | 'media'>('leads');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState<number | null>(null);

  const leadsSorted = useMemo(() => leads, [leads]);
  const postsSorted = useMemo(() => posts, [posts]);

  const handleCreatePost = async (event: FormEvent) => {
    event.preventDefault();
    setStatus(null);
    setIsSaving(true);
    try {
      const response = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Unable to save post');
      }

      setForm(initialForm);
      setStatus('Post saved');
      window.location.reload();
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Unable to save post');
    } finally {
      setIsSaving(false);
    }
  };

  const togglePublish = async (postId: number, shouldPublish: boolean) => {
    setIsPublishing(postId);
    try {
      const response = await fetch('/api/admin/blog', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: postId, published: shouldPublish }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Unable to update post');
      }

      window.location.reload();
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Unable to update post');
    } finally {
      setIsPublishing(null);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.reload();
  };

  const uploadMedia = async (key: string, file: File) => {
    setStatus(null);
    setIsSaving(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/media/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to upload via API');
      }

      const { url } = await res.json();

      const saveRes = await fetch('/api/admin/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, url }),
      });

      if (!saveRes.ok) throw new Error('Failed to save media URL in database');

      setStatus(`Successfully updated ${key}!`);
      setTimeout(() => window.location.reload(), 800);
    } catch (err) {
      console.error(err);
      setStatus(`Error updating ${key}.`);
    } finally {
      setIsSaving(false);
    }
  };

  const formatDate = (value: string | null) => {
    if (!value) return '—';
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(value));
  };

  return (
    <div className="admin-shell">
      <div className="container">
        <div className="admin-actions">
          <div>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(11,31,59,0.6)' }}>
              Admin Panel
            </p>
            <span style={{ fontWeight: 600 }}>{adminEmail}</span>
          </div>
          <button className="btn btn--navy" onClick={handleLogout}>
            Log Out
          </button>
        </div>

        <div className="admin-dashboard">
          <aside className="admin-sidebar" aria-label="Admin navigation">
            <div>
              <div className="admin-sidebar__title">Administration</div>
              <p style={{ marginTop: '6px', color: 'rgba(11,31,59,0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Manage lead submissions and publish insights.
              </p>
            </div>
            <nav className="admin-sidebar__nav">
              <button
                type="button"
                className={`admin-sidebar__button ${activeTab === 'leads' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('leads')}
              >
                Leads
              </button>
              <button
                type="button"
                className={`admin-sidebar__button ${activeTab === 'blogs' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('blogs')}
              >
                Blogs
              </button>
              <button
                type="button"
                className={`admin-sidebar__button ${activeTab === 'media' ? 'is-active' : ''}`}
                onClick={() => setActiveTab('media')}
              >
                Media
              </button>
            </nav>
          </aside>

          <section className="admin-content">
            {activeTab === 'leads' ? (
              <>
                <h3>Leads</h3>
                {leadsSorted.length === 0 ? (
                  <p>No submissions yet.</p>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Organization</th>
                        <th>Email</th>
                        <th>Inquiry</th>
                        <th>Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {leadsSorted.map((lead) => (
                        <tr key={lead.id}>
                          <td>{lead.full_name}</td>
                          <td>{lead.organization}</td>
                          <td>
                            <a href={`mailto:${lead.email}`}>{lead.email}</a>
                          </td>
                          <td>{lead.inquiry_type}</td>
                          <td>{formatDate(lead.created_at)}</td>
                          <td>
                            <button className="btn btn--outline" onClick={() => setSelectedLead(lead)}>
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </>
            ) : activeTab === 'blogs' ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <h3>Blogs</h3>
                  <button className="btn btn--navy" onClick={() => setIsBlogModalOpen(true)}>
                    New Post
                  </button>
                </div>
                {status ? (
                  <p style={{ marginTop: '10px', color: status.includes('Unable') ? '#b94a48' : 'var(--gold-accent)' }}>{status}</p>
                ) : null}

                <ul className="admin-posts-list">
                  {postsSorted.length === 0 ? <li>No posts yet</li> : null}
                  {postsSorted.map((post) => (
                    <li key={post.id}>
                      <span>
                        {post.title} {post.published ? '(Published)' : '(Draft)'}
                      </span>
                      <button
                        className="btn btn--outline"
                        onClick={() => togglePublish(post.id, !post.published)}
                        disabled={isPublishing === post.id}
                      >
                        {isPublishing === post.id ? 'Updating…' : post.published ? 'Unpublish' : 'Publish'}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : activeTab === 'media' ? (
              <>
                <h3>Media Management</h3>
                <p style={{ marginBottom: '20px', color: 'rgba(11,31,59,0.7)', fontSize: '0.95rem' }}>
                  Upload replacement images/videos (Cloudinary). The changes will reflect immediately.
                </p>
                {status ? (
                  <p style={{ marginBottom: '20px', color: status.includes('Error') ? '#b94a48' : 'var(--gold-accent)', fontWeight: 600 }}>
                    {status}
                  </p>
                ) : null}

                <div className="admin-media-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                  {[
                    { key: 'home_hero_bg', label: 'Home - Hero Image' },
                    { key: 'home_serve_institutions', label: 'Home - Institutions Card' },
                    { key: 'home_serve_individuals', label: 'Home - Individuals Card' },
                    { key: 'home_offerings_1', label: 'Home - Offerings 1' },
                    { key: 'home_offerings_2', label: 'Home - Offerings 2' },
                    { key: 'home_offerings_3', label: 'Home - Offerings 3' },
                    { key: 'home_powering_1', label: 'Home - Powering 1' },
                    { key: 'home_powering_2', label: 'Home - Powering 2' },
                    { key: 'home_powering_3', label: 'Home - Powering 3' },
                    { key: 'home_leveraging_bg', label: 'Home - Leveraging Image' },
                    { key: 'home_video', label: 'Home - Invested Video' },
                    { key: 'who_we_are_hero', label: 'Who We Are - Hero Image' },
                    { key: 'who_we_are_hero_1', label: 'Who We Are - Info Image' },
                    { key: 'who_we_are_parallax', label: 'Who We Are - Parallax' },
                    { key: 'what_we_do_hero', label: 'What We Do - Hero Image' },
                    { key: 'what_we_do_img_1', label: 'What We Do - Image 1' },
                    { key: 'what_we_do_img_2', label: 'What We Do - Image 2' },
                    { key: 'what_we_do_parallax_1', label: 'What We Do - Parallax 1' },
                    { key: 'what_we_do_parallax_2', label: 'What We Do - Parallax 2' },
                    { key: 'partnerships_hero', label: 'Partnerships - Hero Image' },
                    { key: 'partnerships_img_1', label: 'Partnerships - Image 1' },
                    { key: 'partnerships_parallax', label: 'Partnerships - Parallax' },
                    { key: 'investment_approach_hero', label: 'Investment Approach - Hero Image' },
                    { key: 'investment_approach_img_1', label: 'Investment Approach - Image 1' },
                    { key: 'investment_approach_img_2', label: 'Investment Approach - Image 2' },
                  ].map((asset) => (
                    <div key={asset.key} style={{ padding: '16px', background: 'rgba(6,18,38,0.03)', border: '1px solid rgba(11,31,59,0.1)', borderRadius: '6px' }}>
                      <p style={{ fontWeight: 600, marginBottom: '8px', fontSize: '0.95rem' }}>{asset.label}</p>
                      {mediaMap[asset.key] && (
                        <div style={{ marginBottom: '12px', wordBreak: 'break-all', fontSize: '0.8rem', color: 'rgba(11,31,59,0.6)' }}>
                          <a href={mediaMap[asset.key]} target="_blank" rel="noreferrer">
                            Current Asset (Click to view)
                          </a>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*,video/*"
                        disabled={isSaving}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) uploadMedia(asset.key, file);
                        }}
                        style={{ fontSize: '0.85rem' }}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </section>
        </div>

        {selectedLead ? (
          <div className="admin-modal" role="dialog" aria-modal="true" aria-label="Lead details">
            <div className="admin-modal__overlay" onClick={() => setSelectedLead(null)} />
            <div className="admin-modal__panel">
              <div className="admin-modal__header">
                <h3 style={{ margin: 0 }}>Lead details</h3>
                <button className="btn btn--outline" onClick={() => setSelectedLead(null)}>
                  Close
                </button>
              </div>
              <div className="admin-modal__body">
                <p><strong>Name:</strong> {selectedLead.full_name}</p>
                <p><strong>Organization:</strong> {selectedLead.organization}</p>
                {selectedLead.title ? <p><strong>Title:</strong> {selectedLead.title}</p> : null}
                <p><strong>Email:</strong> <a href={`mailto:${selectedLead.email}`}>{selectedLead.email}</a></p>
                <p><strong>Inquiry:</strong> {selectedLead.inquiry_type}</p>
                <p><strong>Date:</strong> {formatDate(selectedLead.created_at)}</p>
                {selectedLead.message ? (
                  <div style={{ marginTop: '14px' }}>
                    <p style={{ fontWeight: 700, marginBottom: '8px' }}>Message</p>
                    <div style={{ whiteSpace: 'pre-wrap', color: 'rgba(11,31,59,0.82)', lineHeight: 1.8 }}>
                      {selectedLead.message}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}

        {isBlogModalOpen ? (
          <div className="admin-modal" role="dialog" aria-modal="true" aria-label="Create blog post">
            <div className="admin-modal__overlay" onClick={() => setIsBlogModalOpen(false)} />
            <div className="admin-modal__panel">
              <div className="admin-modal__header">
                <h3 style={{ margin: 0 }}>New insight</h3>
                <button className="btn btn--outline" onClick={() => setIsBlogModalOpen(false)}>
                  Close
                </button>
              </div>
              <div className="admin-modal__body">
                <form className="admin-blog-form" onSubmit={handleCreatePost}>
                  <div>
                    <label className="form-group__label" htmlFor="blog-title">
                      Title
                    </label>
                    <input
                      id="blog-title"
                      value={form.title}
                      onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-group__label" htmlFor="blog-excerpt">
                      Excerpt
                    </label>
                    <textarea
                      id="blog-excerpt"
                      rows={3}
                      value={form.excerpt}
                      onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="form-group__label" htmlFor="blog-content">
                      Content
                    </label>
                    <textarea
                      id="blog-content"
                      rows={10}
                      value={form.content}
                      onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
                      required
                    />
                  </div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="checkbox"
                      checked={form.publish}
                      onChange={(e) => setForm((prev) => ({ ...prev, publish: e.target.checked }))}
                    />
                    Publish immediately
                  </label>
                  <button type="submit" className="btn btn--navy" disabled={isSaving}>
                    {isSaving ? 'Saving…' : 'Save Insight'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
