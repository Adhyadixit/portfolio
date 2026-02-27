import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Partnerships',
    description: 'Aligned capital partnerships with family offices, sovereign capital, institutional investors, and strategic operators.',
};

export default function PartnershipsPage() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="page-hero page-hero--white">
                <div className="container">
                    <FadeIn>
                        <span className="page-hero__overline">Collaboration</span>
                    </FadeIn>
                    <FadeIn delay={1}>
                        <h1 className="page-hero__title">Aligned Capital Partnerships</h1>
                    </FadeIn>
                </div>
            </section>

            {/* ── IMAGE BREAK ── */}
            <section style={{ position: 'relative', height: '40vh', overflow: 'hidden' }}>
                <Image
                    src="/images/hero-skyline.png"
                    alt="City skyline representing global partnerships"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </section>

            {/* ── PARTNER PROFILE ── */}
            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                            <span className="page-hero__overline">Who We Align With</span>
                            <h2 style={{ color: 'var(--navy-primary)', marginTop: '12px' }}>
                                Partner Profile
                            </h2>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="partners-grid">
                            <div className="partner-card">
                                <div className="partner-card__icon">
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 21h18" />
                                        <path d="M5 21V7l7-4 7 4v14" />
                                        <path d="M9 21v-6h6v6" />
                                    </svg>
                                </div>
                                <div className="partner-card__title">Family Offices</div>
                            </div>
                            <div className="partner-card">
                                <div className="partner-card__icon">
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div className="partner-card__title">Sovereign Capital</div>
                            </div>
                            <div className="partner-card">
                                <div className="partner-card__icon">
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="7" width="20" height="14" rx="2" />
                                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                        <path d="M12 12v.01" />
                                    </svg>
                                </div>
                                <div className="partner-card__title">Institutional Investors</div>
                            </div>
                            <div className="partner-card">
                                <div className="partner-card__icon">
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 20V10" />
                                        <path d="M18 20V4" />
                                        <path d="M6 20v-4" />
                                    </svg>
                                </div>
                                <div className="partner-card__title">Strategic Operators</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── PARTNERSHIP PHILOSOPHY ── */}
            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="statement">
                            <span className="page-hero__overline">Our Commitment</span>
                            <h2 style={{ color: 'var(--navy-primary)', marginTop: '12px', marginBottom: '24px' }}>
                                Partnership Philosophy
                            </h2>
                            <div className="gold-divider"></div>
                            <p className="statement__text">
                                We commit capital alongside our partners, ensuring alignment of
                                interests and disciplined execution.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── PROJECT ORIGINATION ── */}
            <section className="section section-navy">
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <span className="page-hero__overline">Execution</span>
                            <h2 style={{ color: 'var(--white)', marginTop: '12px' }}>
                                Project Origination
                            </h2>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="pillars">
                            <div className="pillar" style={{ borderColor: 'rgba(184,155,94,0.2)' }}>
                                <div className="pillar__number">I</div>
                                <div className="pillar__title" style={{ color: 'var(--white)' }}>
                                    Proprietary Sourcing
                                </div>
                            </div>
                            <div className="pillar" style={{ borderColor: 'rgba(184,155,94,0.2)' }}>
                                <div className="pillar__number">II</div>
                                <div className="pillar__title" style={{ color: 'var(--white)' }}>
                                    Cross-Border Structuring
                                </div>
                            </div>
                            <div className="pillar" style={{ borderColor: 'rgba(184,155,94,0.2)' }}>
                                <div className="pillar__number">III</div>
                                <div className="pillar__title" style={{ color: 'var(--white)' }}>
                                    Joint Venture Frameworks
                                </div>
                            </div>
                            <div className="pillar" style={{ borderColor: 'rgba(184,155,94,0.2)' }}>
                                <div className="pillar__number">IV</div>
                                <div className="pillar__title" style={{ color: 'var(--white)' }}>
                                    Institutional Co-Investment
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
