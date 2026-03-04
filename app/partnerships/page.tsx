import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import ParallaxImage from '@/components/ParallaxImage';
import { getAllMediaMap } from '@/lib/media';

export const metadata: Metadata = {
    title: 'Partnerships',
    description: 'Strategic partnerships with family offices, sovereign capital, institutional investors, and consumer partners.',
};

export default async function PartnershipsPage() {
    const mediaMap = await getAllMediaMap();
    const media = (key: string, fallback: string) => mediaMap[key] || fallback;

    const partnerTypes = [
        {
            title: 'Family Offices',
            description: 'Multi-generational capital seeking disciplined, long-duration real asset opportunities with institutional governance.',
        },
        {
            title: 'Sovereign Capital',
            description: 'Government-aligned investment programs focused on infrastructure, urban regeneration, and strategic resource development.',
        },
        {
            title: 'Institutional Investors',
            description: 'Pension funds, endowments, and foundations seeking capital preservation with measured risk-adjusted returns.',
        },
        {
            title: 'Consumer Partners',
            description: 'Strategic operators and brands seeking co-investment opportunities in hospitality, retail, and mixed-use developments.',
        },
    ];

    const partnershipPrinciples = [
        'Capital alignment through co-investment',
        'Transparent governance and reporting',
        'Long-term partnership orientation',
        'Institutional-grade structuring',
        'Cross-border execution capability',
    ];

    const originationProcess = [
        {
            title: 'Proprietary Sourcing',
            detail: 'Direct relationships with sovereign entities, family offices, and institutional capital allocators.',
        },
        {
            title: 'Strategic Alignment',
            detail: 'Thematic screening for sector and geographic fit with partner objectives and risk parameters.',
        },
        {
            title: 'Joint Structuring',
            detail: 'Collaborative framework design with aligned economics, governance terms, and exit strategies.',
        },
        {
            title: 'Execution Excellence',
            detail: 'Disciplined deployment with transparent reporting and active stewardship through investment lifecycle.',
        },
    ];

    return (
        <>
            <section className="editorial-hero editorial-hero--center" style={{ backgroundImage: `url(${media('partnerships_hero', '/images/hero-skyline.png')})` }}>
                <div className="editorial-hero__overlay" aria-hidden="true" />
                <div className="container">
                    <div className="editorial-hero__content editorial-hero__content--center">
                        <FadeIn>
                            <span className="page-hero__overline">Partnerships</span>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={1}>
                            <h1 className="page-hero__title">Strategic Capital Partnerships</h1>
                        </FadeIn>
                        <FadeIn delay={2}>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={3}>
                            <p className="editorial-hero__text">
                                We align with family offices, sovereign capital, institutional investors, and consumer partners
                                to structure and execute high-conviction real asset mandates across Europe, MENA, and Africa.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div className="approach-heading approach-heading--center">
                            <span className="page-hero__overline">Partner Ecosystem</span>
                            <h2 className="deck-title">Who We Partner With</h2>
                            <p className="deck-text">
                                We selectively partner with capital providers and strategic operators who share our long-term,
                                capital-preservative approach to real asset investing.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="deck-grid">
                            {partnerTypes.map((partner) => (
                                <div key={partner.title} className="deck-card">
                                    <h3 className="deck-subtitle">{partner.title}</h3>
                                    <p className="deck-text">{partner.description}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="editorial-split">
                            <blockquote className="deck-quote">
                                Partnership is not transactional—it is the foundation of durable value creation
                                through aligned interests and shared commitment to capital preservation.
                            </blockquote>
                            <ParallaxImage
                                src={media('partnerships_parallax', '/images/hero-architecture.png')}
                                alt="Partnership architecture and governance"
                                className="editorial-frame editorial-frame--light"
                                intensity={14}
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div className="deck-two-panel">
                            <div className="deck-panel">
                                <h2 className="deck-title">Partnership Principles</h2>
                                <p className="deck-subtitle">Our Foundation</p>
                                <p className="deck-text">
                                    Every partnership is built on transparency, alignment, and long-term commitment to capital stewardship.
                                </p>
                            </div>
                            <div className="deck-panel deck-panel--light">
                                <ul className="deck-list">
                                    {partnershipPrinciples.map((principle) => (
                                        <li key={principle}>{principle}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="approach-heading">
                            <span className="page-hero__overline">Execution Process</span>
                            <h2 className="deck-title">How We Partner</h2>
                            <p className="deck-text">
                                A systematic approach to partnership origination, structuring, and execution
                                that ensures alignment and institutional governance throughout the investment lifecycle.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="deck-grid deck-grid--operating">
                            {originationProcess.map((step) => (
                                <div key={step.title} className="deck-card">
                                    <h2 className="deck-title">{step.title}</h2>
                                    <p className="deck-text">{step.detail}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="insight-banner insight-banner--clean">
                <div className="insight-banner__media" aria-hidden="true">
                    <Image
                        src={media('partnerships_img_1', '/images/hero-energy.png')}
                        alt="Strategic partnership execution"
                        fill
                        priority={false}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="insight-banner__content">
                    <FadeIn>
                        <div className="insight-banner__card">
                            <p className="insight-banner__eyebrow">Partnership Opportunity</p>
                            <h2>Align With Nabrel</h2>
                            <p>
                                Explore co-investment opportunities and strategic partnerships across our target sectors
                                and geographies. We welcome dialogue with aligned capital partners and operators.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
