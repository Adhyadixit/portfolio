'use client';

import { useState, FormEvent } from 'react';

export default function AdminSetupForm() {
    const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError(null);

        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (form.password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/admin/setup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password
                }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data?.error ?? 'Unable to create admin');
            }

            // Success - refresh to go to dashboard or login
            window.location.href = '/admin';
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unable to complete setup');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="admin-shell">
            <div className="container">
                <form className="admin-login" onSubmit={handleSubmit} style={{ maxWidth: '480px' }}>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '8px' }}>Initial Admin Setup</h1>
                    <p style={{ color: 'rgba(11, 31, 59, 0.7)', marginBottom: '24px' }}>
                        Create the primary administrator account. This setup link is perishable and will be disabled once an admin exists.
                    </p>

                    {error ? (
                        <div className="admin-login__error" style={{ marginBottom: '20px', padding: '12px', background: '#fff5f5', color: '#c53030', border: '1px solid #feb2b2', fontSize: '0.9rem' }}>
                            {error}
                        </div>
                    ) : null}

                    <div style={{ marginBottom: '16px' }}>
                        <label className="form-group__label" htmlFor="admin-email" style={{ display: 'block', marginBottom: '8px' }}>
                            Email Address
                        </label>
                        <input
                            id="admin-email"
                            className="form-group__input"
                            type="email"
                            required
                            placeholder="admin@nabrel.com"
                            value={form.email}
                            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                            style={{ width: '100%', padding: '12px', border: '1px solid rgba(11, 31, 59, 0.15)' }}
                        />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label className="form-group__label" htmlFor="admin-password" style={{ display: 'block', marginBottom: '8px' }}>
                            Create Password
                        </label>
                        <input
                            id="admin-password"
                            className="form-group__input"
                            type="password"
                            required
                            value={form.password}
                            onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                            style={{ width: '100%', padding: '12px', border: '1px solid rgba(11, 31, 59, 0.15)' }}
                        />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label className="form-group__label" htmlFor="admin-confirm-password" style={{ display: 'block', marginBottom: '8px' }}>
                            Confirm Password
                        </label>
                        <input
                            id="admin-confirm-password"
                            className="form-group__input"
                            type="password"
                            required
                            value={form.confirmPassword}
                            onChange={(e) => setForm((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                            style={{ width: '100%', padding: '12px', border: '1px solid rgba(11, 31, 59, 0.15)' }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn--navy"
                        disabled={isSubmitting}
                        style={{
                            width: '100%',
                            backgroundColor: 'var(--navy-primary)',
                            color: 'white',
                            padding: '14px',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            opacity: isSubmitting ? 0.7 : 1
                        }}
                    >
                        {isSubmitting ? 'Finalizing Setup...' : 'Create Admin Account'}
                    </button>
                </form>
            </div>
        </div>
    );
}
