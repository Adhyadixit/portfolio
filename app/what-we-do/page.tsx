import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import ParallaxImage from '@/components/ParallaxImage';

export const metadata: Metadata = {
    title: 'What We Do',
    description: 'Disciplined capital deployment across high-impact mandates, with SPV structuring, governance oversight, and institutional partnerships.',
};

export default function WhatWeDoPage() {
    const mandateColumns = [
        {
            label: 'Target Capitalization',
            value: '$50–75M+ equity commitments per transaction',
        },
        {
            label: 'Return Profile',
            value: '15–19% IRR target (risk-adjusted)',
        },
        {
            label: 'Strategic Focus',
            value: 'Flexible capital solutions across equity and structured finance',
        },
        {
            label: 'Structure',
            value: 'Urban regeneration, resource infrastructure, and civic mixed-use platforms',
        },
    ];

    const governancePoints = [
        'Dedicated SPV per mandate',
        'Defined shareholder agreements',
        'Independent legal oversight (UK, UAE, BVI)',
        'Transparent reporting standards',
        'Regulatory compliance adherence',
    ];

    const priorities = [
        'Selectively originated mandates',
        'Disciplined capital deployment',
        'Institutional-grade structuring',
        'Long-term public-private alignment',
    ];

    const mandateLifecycle = [
        {
            title: 'Origination',
            copy: 'Identify opportunities where asset fundamentals, structure, and governance can create durable downside protection.',
        },
        {
            title: 'SPV Structuring',
            copy: 'Dedicated SPV per mandate, aligned sponsor participation, and defined shareholder agreements.',
        },
        {
            title: 'Execution',
            copy: 'Disciplined deployment with institutional reporting and independent legal oversight.',
        },
        {
            title: 'Stewardship',
            copy: 'Ongoing oversight designed to preserve capital and compound returns over the hold period.',
        },
    ];

    return (
        <>
            <section className="editorial-hero" style={{ backgroundImage: 'url(/images/hero-industrial.png)' }}>
                <div className="editorial-hero__overlay" aria-hidden="true" />
                <div className="container editorial-hero__inner">
                    <div className="editorial-hero__grid">
                        <div className="editorial-hero__copy">
                            <FadeIn>
                                <span className="page-hero__overline">What We Do</span>
                            </FadeIn>
                            <FadeIn delay={1}>
                                <h1 className="editorial-hero__title">Investment Mandate</h1>
                            </FadeIn>
                            <FadeIn delay={2}>
                                <span className="editorial-hero__divider" aria-hidden="true" />
                            </FadeIn>
                            <FadeIn delay={3}>
                                <p className="editorial-hero__text">
                                    Disciplined capital deployment across high-impact real asset opportunities, executed through dedicated
                                    SPVs, transparent governance, and aligned co-investment frameworks.
                                </p>
                            </FadeIn>
                        </div>
                        <div>
                            <ParallaxImage
                                src="/images/hero-energy.png"
                                alt="Investment mandate overview"
                                className="editorial-frame editorial-tilt"
                                intensity={18}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div className="mandate-grid">
                            {mandateColumns.map((column) => (
                                <article key={column.label} className="mandate-card">
                                    <h3>{column.label}</h3>
                                    <p>{column.value}</p>
                                </article>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="insight-banner">
                <div className="insight-banner__media" aria-hidden="true">
                    <Image
                        src="/images/hero-architecture.png"
                        alt="Institutional architecture"
                        fill
                        priority={false}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="insight-banner__scrim" aria-hidden="true" />
                <div className="insight-banner__content">
                    <FadeIn>
                        <div className="insight-banner__card">
                            <p className="insight-banner__eyebrow">Execution Spotlight</p>
                            <h2>Institutional Execution</h2>
                            <p>
                                Coordinated capital programs anchored by municipal partnerships, strategic investors, and disciplined
                                governance frameworks designed for enduring impact.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="page-hero__overline">How We Execute</span>
                            <h2 className="deck-title" style={{ marginBottom: 0 }}>Mandate lifecycle</h2>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="deck-grid">
                            {mandateLifecycle.map((item) => (
                                <div key={item.title} className="deck-card">
                                    <h3 className="deck-subtitle">{item.title}</h3>
                                    <p className="deck-text">{item.copy}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="deck-two-panel deck-two-panel--case">
                            <div className="deck-panel deck-panel--navy">
                                <h2 className="deck-title deck-title--light">Case Example</h2>
                                <p className="deck-text deck-text--light">
                                    Hospitality-led urban development (~$50M)
                                    <br />
                                    Region: Europe / MENA
                                    <br />
                                    Stage: Pre-development
                                    <br />
                                    Role: Sponsor &amp; Capital Structuring
                                </p>
                                <ul className="deck-list deck-list--light deck-list--compact">
                                    <li>120–150 key hospitality asset</li>
                                    <li>Integrated public realm enhancements</li>
                                    <li>Mixed-use activation</li>
                                    <li>Dedicated SPV + sponsor equity + institutional co-investment</li>
                                    <li>PPP framework (where applicable)</li>
                                </ul>
                            </div>
                            <div className="deck-image-stack">
                                <ParallaxImage
                                    src="/images/hero-skyline.png"
                                    alt="Case example for hospitality-led urban development"
                                    className="editorial-frame editorial-frame--light"
                                    intensity={16}
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div className="deck-two-panel">
                            <div className="deck-panel deck-panel--light">
                                <h2 className="deck-title">Governance &amp; Structure</h2>
                                <ul className="deck-list">
                                    {governancePoints.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="deck-panel deck-panel--navy">
                                <h3 className="deck-subtitle deck-subtitle--light">Capital Flow</h3>
                                <p className="deck-text deck-text--light" style={{ marginBottom: '18px' }}>
                                    Municipal / strategic coordination alongside SPV
                                </p>
                                <div className="capital-flow" aria-label="Capital flow diagram">
                                    <div className="capital-flow__node">Investor Capital</div>
                                    <div className="capital-flow__arrow" aria-hidden="true" />
                                    <div className="capital-flow__node capital-flow__node--accent">SPV</div>
                                    <div className="capital-flow__arrow" aria-hidden="true" />
                                    <div className="capital-flow__node">Project Entity</div>
                                    <div className="capital-flow__return">
                                        <span>Returns &amp; Reporting</span>
                                        <span className="capital-flow__return-arrow" aria-hidden="true" />
                                        <span>Investors</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-navy">
                <div className="container">
                    <FadeIn>
                        <div className="deck-outlook">
                            <div>
                                <h2 className="deck-title deck-title--light">Strategic Outlook Engagement</h2>
                                <p className="deck-quote-inline">Private Capital. Structured. Enduring.</p>
                            </div>
                            <div className="deck-outlook__panel">
                                <h3>Strategic priorities</h3>
                                <ul>
                                    {priorities.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <ParallaxImage
                                    src="/images/hero-mining.png"
                                    alt="Strategic outlook engagement"
                                    className="editorial-frame"
                                    intensity={16}
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <div className="deck-contact-callout">
                        <h2 className="deck-title">Invest in Nabrel</h2>
                        <p className="deck-text">Connect with our investment approach to explore aligned mandates.</p>
                        <Link href="/investment-approach" className="primary-button" style={{ marginTop: '16px' }}>
                            Explore Investment Approach
                        </Link>
                        <div style={{ marginTop: '28px' }}>
                            <div className="editorial-collage">
                                <Image src="/images/hero-infrastructure.png" alt="Institutional infrastructure" width={520} height={360} />
                                <Image src="/images/hero-industrial.png" alt="Real assets" width={520} height={360} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
