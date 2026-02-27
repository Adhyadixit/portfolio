import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'What We Do',
    description: 'Capital deployment and platform development across direct investments, structured finance, and strategic advisory.',
};

export default function WhatWeDoPage() {
    return (
        <>
            {/* ── HERO ── */}
            <section
                className="page-hero page-hero--navy"
                style={{
                    backgroundImage: 'url(/images/hero-energy.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(11,31,59,0.9), rgba(11,31,59,0.8))',
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn>
                        <span className="page-hero__overline">Our Activities</span>
                    </FadeIn>
                    <FadeIn delay={1}>
                        <h1 className="page-hero__title" style={{ color: 'var(--white)' }}>
                            Capital Deployment &amp;<br />Platform Development
                        </h1>
                    </FadeIn>
                </div>
            </section>

            {/* ── DIRECT INVESTMENTS ── */}
            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="content-section">
                            <div>
                                <span className="content-section__label">Section I</span>
                                <h2 className="content-section__title">Direct Investments</h2>
                                <div className="content-section__list">
                                    <div className="content-section__list-item">
                                        Majority and significant minority stakes.
                                    </div>
                                    <div className="content-section__list-item">
                                        Long-term ownership.
                                    </div>
                                    <div className="content-section__list-item">
                                        Active governance oversight.
                                    </div>
                                </div>
                            </div>
                            <Image
                                src="/images/hero-skyline.png"
                                alt="Urban infrastructure representing direct investments"
                                width={560}
                                height={400}
                                className="content-section__image"
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── DEVELOPMENT & PLATFORM BUILDING ── */}
            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div className="content-section content-section--reverse">
                            <Image
                                src="/images/hero-infrastructure.png"
                                alt="Infrastructure development"
                                width={560}
                                height={400}
                                className="content-section__image"
                            />
                            <div>
                                <span className="content-section__label">Section II</span>
                                <h2 className="content-section__title">
                                    Development &amp; Platform Building
                                </h2>
                                <div className="content-section__list">
                                    <div className="content-section__list-item">
                                        Ground-up real estate development.
                                    </div>
                                    <div className="content-section__list-item">
                                        Infrastructure build-outs.
                                    </div>
                                    <div className="content-section__list-item">
                                        Industrial operating platforms.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── STRUCTURED FINANCE ── */}
            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="content-section">
                            <div>
                                <span className="content-section__label">Section III</span>
                                <h2 className="content-section__title">Structured Finance</h2>
                                <div className="content-section__list">
                                    <div className="content-section__list-item">
                                        Senior secured debt.
                                    </div>
                                    <div className="content-section__list-item">
                                        Mezzanine structures.
                                    </div>
                                    <div className="content-section__list-item">
                                        Hybrid capital solutions.
                                    </div>
                                    <div className="content-section__list-item">
                                        Real estate and infrastructure credit.
                                    </div>
                                </div>
                                <p className="content-section__text" style={{ marginTop: '24px' }}>
                                    Nabrel operates within the institutional finance ecosystem,
                                    structuring capital solutions backed by tangible assets and
                                    contractual cash flows.
                                </p>
                            </div>
                            <Image
                                src="/images/hero-mining.png"
                                alt="Industrial assets representing structured finance"
                                width={560}
                                height={400}
                                className="content-section__image"
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── STRATEGIC ADVISORY ── */}
            <section className="section section-navy">
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <span className="page-hero__overline">Section IV</span>
                            <h2 style={{ color: 'var(--white)', marginTop: '12px' }}>
                                Strategic Advisory
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '16px', fontSize: '1rem', maxWidth: '500px', margin: '16px auto 0' }}>
                                Selective mandates in:
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="pillars">
                            {[
                                'Transaction Structuring',
                                'Capital Formation',
                                'Cross-Border Partnerships',
                                'Asset Repositioning',
                            ].map((item) => (
                                <div key={item} className="pillar" style={{ borderColor: 'rgba(184,155,94,0.2)' }}>
                                    <div className="pillar__title" style={{ color: 'var(--white)' }}>
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
