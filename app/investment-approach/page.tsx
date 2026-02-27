import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
    title: 'Investment Approach',
    description: 'Disciplined, structured, and long-term investment approach with rigorous underwriting, governance, and risk management.',
};

export default function InvestmentApproachPage() {
    return (
        <>
            {/* ── HERO ── */}
            <section
                className="page-hero page-hero--navy"
                style={{
                    backgroundImage: 'url(/images/hero-architecture.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(11,31,59,0.92), rgba(11,31,59,0.85))',
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <span className="page-hero__overline">Our Methodology</span>
                    </FadeIn>
                    <FadeIn delay={1}>
                        <h1 className="page-hero__title" style={{ color: 'var(--white)' }}>
                            Disciplined. Structured. Long-Term.
                        </h1>
                    </FadeIn>
                </div>
            </section>

            {/* ── THREE APPROACH PILLARS ── */}
            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div className="approach-grid">
                            <div className="approach-card">
                                <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12l2 2 4-4" />
                                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                                </svg>
                                <h3 className="approach-card__title">Underwriting Discipline</h3>
                                <div className="approach-card__list">
                                    <div className="approach-card__item">Asset-level analysis.</div>
                                    <div className="approach-card__item">Conservative leverage.</div>
                                    <div className="approach-card__item">Stress-tested modeling.</div>
                                    <div className="approach-card__item">Long-duration assumptions.</div>
                                </div>
                            </div>

                            <div className="approach-card">
                                <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M3 9h18" />
                                    <path d="M9 3v18" />
                                </svg>
                                <h3 className="approach-card__title">Governance Framework</h3>
                                <div className="approach-card__list">
                                    <div className="approach-card__item">Investment committee review.</div>
                                    <div className="approach-card__item">Structured approvals.</div>
                                    <div className="approach-card__item">Risk oversight.</div>
                                    <div className="approach-card__item">Institutional reporting.</div>
                                </div>
                            </div>

                            <div className="approach-card">
                                <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <h3 className="approach-card__title">Risk Management</h3>
                                <div className="approach-card__list">
                                    <div className="approach-card__item">Counterparty evaluation.</div>
                                    <div className="approach-card__item">Regulatory compliance.</div>
                                    <div className="approach-card__item">Capital stack protection.</div>
                                    <div className="approach-card__item">Scenario planning.</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── STATEMENT ── */}
            <section className="section section-navy">
                <div className="container">
                    <FadeIn>
                        <div className="statement">
                            <div className="gold-divider"></div>
                            <p className="statement__text" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                Our investment process is designed to withstand market cycles,
                                protect capital, and generate sustainable returns through
                                disciplined execution and institutional standards.
                            </p>
                            <div className="gold-divider"></div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
