'use client';

import { useState, FormEvent } from 'react';

export default function AdminLoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Invalid credentials');
      }

      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to login');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-shell">
      <div className="container">
        <form className="admin-login" onSubmit={handleSubmit}>
          <h2>Admin Access</h2>
          <p style={{ color: 'rgba(11, 31, 59, 0.7)', marginBottom: '20px' }}>
            Secure entry for Nabrel administrators.
          </p>
          {error ? <div className="admin-login__error">{error}</div> : null}
          <label className="form-group__label" htmlFor="admin-email">
            Email
          </label>
          <input
            id="admin-email"
            className="form-group__input"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          />
          <label className="form-group__label" htmlFor="admin-password" style={{ marginTop: '16px' }}>
            Password
          </label>
          <input
            id="admin-password"
            className="form-group__input"
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
          />
          <button type="submit" className="btn btn--navy" style={{ width: '100%', marginTop: '24px' }}>
            {isSubmitting ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
