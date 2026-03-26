'use client';

import { useState, FormEvent } from 'react';
import FadeIn from '@/components/FadeIn';

const inquiryTypes = [
    'Select Nature of Inquiry',
    'Transaction Participation',
    'Co-Investment Engagement',
    'Strategic Alignment',
    'Capital Structuring',
    'General Inquiry',
];

const initialForm = {
    fullName: '',
    organization: '',
    title: '',
    email: '',
    inquiryType: '',
    message: '',
};

export default function ContactPage() {
    const [formData, setFormData] = useState(initialForm);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    organization: formData.organization,
                    title: formData.title,
                    email: formData.email,
                    inquiryType: formData.inquiryType,
                    message: formData.message,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit inquiry');
            }

            setFormData(initialForm);
            setIsSubmitted(true);
        } catch (err) {
            setError('Something went wrong. Please try again or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* ── HERO ── */}
            <section className="page-hero page-hero--white">
                <div className="container">
                    <FadeIn>
                        <span className="page-hero__overline">Engagement</span>
                    </FadeIn>
                    <FadeIn delay={1}>
                        <h1 className="page-hero__title">Engagement</h1>
                    </FadeIn>
                    <FadeIn delay={2}>
                        <p className="page-hero__text">
                            We consider inquiries only where structural clarity, governance alignment, and long-term
                            objectives support a durable collaboration.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ── CONTACT FORM ── */}
            <section className="section section-white" style={{ paddingTop: '40px' }}>
                <div className="container">
                    <FadeIn>
                        {isSubmitted ? (
                            <div className="contact-form" style={{ textAlign: 'center' }}>
                                <div style={{ color: 'var(--gold-accent)', fontSize: '2rem', marginBottom: '24px' }}>
                                    ◆
                                </div>
                                <h3 style={{ color: 'var(--navy-primary)', marginBottom: '16px', fontFamily: 'var(--font-heading)', fontSize: '1.8rem' }}>
                                    Thank You
                                </h3>
                                <p style={{ color: 'var(--charcoal)', opacity: 0.7 }}>
                                    Your inquiry has been received. A member of our team will
                                    respond within two business days.
                                </p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                                    <h2 style={{ color: 'var(--navy-primary)', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 500, marginBottom: '8px' }}>
                                        Submit an Inquiry
                                    </h2>
                                    <p style={{ color: 'var(--charcoal)', opacity: 0.65, fontSize: '0.95rem', maxWidth: '560px', margin: '0 auto' }}>
                                        Please provide context regarding potential collaboration or engagement. All
                                        submissions are reviewed with discretion.
                                    </p>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div className="form-group">
                                        <label className="form-group__label" htmlFor="fullName">
                                            Name
                                        </label>
                                        <input
                                            className="form-group__input"
                                            type="text"
                                            id="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) =>
                                                setFormData({ ...formData, fullName: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-group__label" htmlFor="organization">
                                            Organization
                                        </label>
                                        <input
                                            className="form-group__input"
                                            type="text"
                                            id="organization"
                                            value={formData.organization}
                                            onChange={(e) =>
                                                setFormData({ ...formData, organization: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div className="form-group">
                                        <label className="form-group__label" htmlFor="title">
                                            Title
                                        </label>
                                        <input
                                            className="form-group__input"
                                            type="text"
                                            id="title"
                                            value={formData.title}
                                            onChange={(e) =>
                                                setFormData({ ...formData, title: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-group__label" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="form-group__input"
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-group__label" htmlFor="inquiryType">
                                        Nature of Inquiry
                                    </label>
                                    <select
                                        className="form-group__select"
                                        id="inquiryType"
                                        required
                                        value={formData.inquiryType}
                                        onChange={(e) =>
                                            setFormData({ ...formData, inquiryType: e.target.value })
                                        }
                                    >
                                        {inquiryTypes.map((type) => (
                                            <option key={type} value={type === 'Select Nature of Inquiry' ? '' : type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-group__label" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-group__textarea"
                                        id="message"
                                        required
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                    />
                                </div>

                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <button type="submit" className="btn btn--navy">
                                        {isSubmitting ? 'Submitting…' : 'Engagement'}
                                    </button>
                                </div>
                                {error ? (
                                    <p style={{ color: '#b94a48', marginTop: '12px' }}>{error}</p>
                                ) : null}
                            </form>
                        )}
                    </FadeIn>

                    <p className="confidentiality-notice">
                        All communications are treated with strict confidentiality. For inquiries or correspondence,
                        please reach out via the form above.
                    </p>
                </div>
            </section>
        </>
    );
}
