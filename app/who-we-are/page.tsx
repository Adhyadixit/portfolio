import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Who We Are',
    description: 'Our mandate is to preserve and compound capital through disciplined investment in essential industries and real assets.',
};

export default function WhoWeArePage() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="page-hero page-hero--white">
                <div className="container">
                    <FadeIn>
                        <span className="page-hero__overline">About Nabrel</span>
                    </FadeIn>
                    <FadeIn delay={1}>
                        <h1 className="page-hero__title">Our Mandate</h1>
                    </FadeIn>
                    <FadeIn delay={2}>
                        <p className="page-hero__text">
                            To preserve and compound capital through disciplined investment in
                            essential industries and real assets.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ── IMAGE BREAK ── */}
            <section style={{ position: 'relative', height: '45vh', overflow: 'hidden' }}>
                <Image
                    src="/images/hero-architecture.png"
                    alt="Architectural interior representing institutional heritage"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </section>

            {/* ── PHILOSOPHY ── */}
            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                            <span className="page-hero__overline">Our Philosophy</span>
                            <h2 style={{ color: 'var(--navy-primary)', marginTop: '12px' }}>
                                Guiding Principles
                            </h2>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="philosophy-grid">
                            {[
                                'Capital Preservation',
                                'Long-Term Orientation',
                                'Measured Risk',
                                'Institutional Governance',
                                'Aligned Interests',
                            ].map((title) => (
                                <div key={title} className="philosophy-item">
                                    <div style={{ color: 'var(--gold-accent)', fontSize: '1.2rem', marginBottom: '16px' }}>
                                        ◆
                                    </div>
                                    <div className="philosophy-item__title">{title}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── SECTOR FOCUS ── */}
            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                            <span className="page-hero__overline">Sectors</span>
                            <h2 style={{ color: 'var(--navy-primary)', marginTop: '12px' }}>
                                Sector Focus
                            </h2>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="sectors-grid">
                            <div className="sector-group">
                                <h3 className="sector-group__title">Real Assets</h3>
                                <div className="sector-group__list">
                                    <div className="sector-group__item">Real Estate &amp; Development</div>
                                    <div className="sector-group__item">Infrastructure</div>
                                    <div className="sector-group__item">Energy</div>
                                </div>
                            </div>
                            <div className="sector-group">
                                <h3 className="sector-group__title">Natural Resources</h3>
                                <div className="sector-group__list">
                                    <div className="sector-group__item">Strategic minerals and industrial metals.</div>
                                </div>
                            </div>
                            <div className="sector-group">
                                <h3 className="sector-group__title">Essential Services</h3>
                                <div className="sector-group__list">
                                    <div className="sector-group__item">Healthcare platforms and industrial manufacturing.</div>
                                </div>
                            </div>
                            <div className="sector-group">
                                <h3 className="sector-group__title">Structured Capital</h3>
                                <div className="sector-group__list">
                                    <div className="sector-group__item">Asset-backed financing and senior secured lending.</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
