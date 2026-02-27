'use client';

import { useState, FormEvent } from 'react';
import FadeIn from '@/components/FadeIn';

const inquiryTypes = [
    'Select Inquiry Type',
    'Investment Partnership',
    'Co-Investment Opportunity',
    'Strategic Advisory',
    'Capital Formation',
    'General Inquiry',
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        organization: '',
        title: '',
        email: '',
        inquiryType: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // In production, this would send to an API endpoint
        setIsSubmitted(true);
    };

    return (
        <>
            {/* ── HERO ── */}
            <section className="page-hero page-hero--white">
                <div className="container">
                    <FadeIn>
                        <span className="page-hero__overline">Get In Touch</span>
                    </FadeIn>
                    <FadeIn delay={1}>
                        <h1 className="page-hero__title">Contact</h1>
                    </FadeIn>
                    <FadeIn delay={2}>
                        <p className="page-hero__text">
                            We welcome inquiries from qualified institutional investors,
                            family offices, and strategic partners.
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
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div className="form-group">
                                        <label className="form-group__label" htmlFor="fullName">
                                            Full Name
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
                                            required
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
                                        Type of Inquiry
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
                                            <option key={type} value={type === 'Select Inquiry Type' ? '' : type}>
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
                                        Submit Inquiry
                                    </button>
                                </div>
                            </form>
                        )}
                    </FadeIn>

                    <p className="confidentiality-notice">
                        All communications are treated with strict confidentiality.
                    </p>
                </div>
            </section>
        </>
    );
}
