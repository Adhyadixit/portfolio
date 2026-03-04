import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import ParallaxImage from '@/components/ParallaxImage';
import NeuralBackground from '@/components/NeuralBackground';

export const metadata: Metadata = {
    title: 'Who We Are',
    description:
        'Nabrel is an independent private capital and development platform operating through disciplined, deal-by-deal mandates across Europe, MENA, and Africa.',
};

export default function WhoWeArePage() {
    const operatingHighlights = [
        'Operates on a deal-by-deal SPV basis',
        'Ensures transparent governance and aligned investor interests',
        'Combines principal investment participation, capital structuring, and cross-border advisory',
    ];

    const philosophyPrinciples = [
        'Capital preservation before return optimization',
        'Structured downside protection',
        'Selective, high-conviction mandates',
        'Long-duration asset relevance',
        'Institutional governance standards',
    ];

    const representativeExperience = [
        'Structured and coordinated ~$91M in investor commitments during pre-development of a major infrastructure initiative',
        'Facilitated sovereign and institutional capital relationships across MENA',
        'Advanced hospitality and urban development initiatives across Europe and MENA',
        'Structured natural resource development partnerships',
        'Advised SPV governance and PPP framework execution',
    ];

    const outlookPriorities = [
        'Selectively originated mandates',
        'Disciplined capital deployment',
        'Institutional-grade structuring',
        'Long-term public-private alignment',
    ];

    const operatingModel = [
        {
            title: 'Originate',
            copy: 'Sourcing selectively originated mandates in strategically advantaged markets, with a preference for asset-backed value creation.',
        },
        {
            title: 'Structure',
            copy: 'Institutional-grade SPV structuring, governance terms, and downside protection built into each transaction.',
        },
        {
            title: 'Steward',
            copy: 'Active oversight and reporting discipline designed to align interests and preserve capital across the mandate lifecycle.',
        },
    ];

    return (
        <>
            <section
                className="editorial-hero editorial-hero--center"
                style={{ backgroundImage: 'url(/images/hero-skyline.png)' }}
            >
                <div className="editorial-hero__overlay" aria-hidden="true" />
                <div className="container">
                    <div className="editorial-hero__content editorial-hero__content--center">
                        <FadeIn>
                            <span className="page-hero__overline">Who We Are</span>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={1}>
                            <h1 className="page-hero__title">Independent Private Capital Platform</h1>
                        </FadeIn>
                        <FadeIn delay={2}>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={3}>
                            <p className="editorial-hero__text">
                                Nabrel is an independent private capital and development platform operating through disciplined, deal-by-deal mandates across Europe, MENA, and select African growth corridors.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div className="deck-grid deck-grid--about">
                            <div className="deck-card">
                                <h2 className="deck-title">About Nabrel</h2>
                                <p className="deck-text">
                                    The platform operates on a deal-by-deal SPV basis, aligning sponsor participation with
                                    institutional governance standards and transparent reporting discipline.
                                </p>
                            </div>
                            <div className="deck-card deck-card--navy">
                                <ul className="deck-list deck-list--light">
                                    {operatingHighlights.map((item) => (
                                        <li key={item}>{item}</li>
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
                        <div className="editorial-split">
                            <blockquote className="deck-quote">
                                To originate and structure high-conviction real asset investments in strategically advantaged markets,
                                aligning private capital with long-term economic development.
                            </blockquote>
                            <ParallaxImage
                                src="/images/hero-infrastructure.png"
                                alt="Mission and discipline"
                                className="editorial-frame editorial-frame--light"
                                intensity={14}
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="deck-grid deck-grid--operating">
                            {operatingModel.map((item) => (
                                <div key={item.title} className="deck-card">
                                    <h2 className="deck-title">{item.title}</h2>
                                    <p className="deck-text">{item.copy}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div className="deck-two-panel">
                            <div className="deck-panel">
                                <h2 className="deck-title">Investment Philosophy</h2>
                                <p className="deck-subtitle">Core Principle</p>
                                <p className="deck-text">Focused on disciplined execution and enduring value creation, not volume.</p>
                            </div>
                            <div className="deck-panel deck-panel--light">
                                <ul className="deck-list">
                                    {philosophyPrinciples.map((item) => (
                                        <li key={item}>{item}</li>
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
                        <div className="deck-grid deck-grid--experience">
                            <div>
                                <span className="page-hero__overline">Representative Experience</span>
                                <ul className="deck-list deck-list--spacious">
                                    {representativeExperience.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="deck-image-stack">
                                <ParallaxImage
                                    src="/images/hero-mining.png"
                                    alt="Representative infrastructure and natural resource experience"
                                    className="editorial-frame editorial-frame--light"
                                    intensity={12}
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-navy section-navy--neural">
                <div className="section-navy__neural" aria-hidden="true">
                    <NeuralBackground
                        className="section-navy__neural-canvas"
                        color="#87b5ff"
                        trailOpacity={0.08}
                        particleCount={850}
                        speed={0.9}
                        trailFill="rgba(11,31,59,0.3)"
                    />
                </div>
                <div className="container">
                    <FadeIn>
                        <div className="deck-outlook">
                            <div>
                                <h2 className="deck-title deck-title--light">Strategic Outlook Engagement</h2>
                                <p className="deck-quote-inline">Private Capital. Structured. Enduring.</p>
                            </div>
                            <div className="deck-outlook__panel">
                                <h3>Engages with</h3>
                                <ul>
                                    <li>Sovereign wealth funds</li>
                                    <li>Institutional investors</li>
                                    <li>Family offices</li>
                                    <li>Municipal authorities</li>
                                    <li>Strategic co-investment partners</li>
                                </ul>
                            </div>
                            <div className="deck-outlook__panel">
                                <h3>Strategic priorities</h3>
                                <ul>
                                    {outlookPriorities.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
