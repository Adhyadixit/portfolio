import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import ParallaxImage from '@/components/ParallaxImage';
import Link from 'next/link';
import NeuralBackground from '@/components/NeuralBackground';
import { getAllMediaMap } from '@/lib/media';

export const metadata: Metadata = {
    title: 'About',
    description:
        'A privately governed principal investment office focused on originating, underwriting, and structuring long-term investments with institutional rigor.',
};

export default async function WhoWeArePage() {
    const mediaMap = await getAllMediaMap();
    const media = (key: string, fallback: string) => mediaMap[key] || fallback;

    const operatingHighlights = [
        'Principal investment office',
        'Independent governance',
        'Long-term capital stewardship',
        'Bespoke transaction structuring',
    ];

    const operatingModel = [
        {
            title: 'Underwriting Oversight',
            copy: 'Every transaction undergoes comprehensive underwriting, including financial, operational, and governance assessment.',
        },
        {
            title: 'Strategic Alignment',
            copy: 'Capital is deployed where structural integrity and governance alignment support durable outcomes.',
        },
        {
            title: 'Sponsorship Rigor',
            copy: 'We originate transactions, underwrite risk, and structure solutions that prioritize stability across cycles.',
        },
    ];

    const philosophyCards = [
        {
            title: 'Long-Term Orientation',
            copy: 'Capital is deployed with generational perspective rather than short-cycle return objectives.',
        },
        {
            title: 'Underwriting Discipline',
            copy: 'Every opportunity undergoes comprehensive financial, operational, and structural review prior to commitment.',
        },
        {
            title: 'Alignment of Interests',
            copy: 'Transactions are structured to ensure clarity of incentives and durability of partnership over time.',
        },
        {
            title: 'Structural Integrity',
            copy: 'Capital solutions are designed with risk mitigation, liquidity awareness, and governance embedded at inception.',
        },
    ];

    return (
        <>
            <section className="editorial-hero editorial-hero--center" style={{ backgroundImage: `url(${media('who_we_are_hero', '/images/hero-infrastructure.png')})` }}>
                <div className="editorial-hero__overlay" aria-hidden="true" />
                <div className="container">
                    <div className="editorial-hero__content editorial-hero__content--center">
                        <FadeIn>
                            <span className="page-hero__overline">Our Mandate</span>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={1}>
                            <h1 className="page-hero__title">About</h1>
                        </FadeIn>
                        <FadeIn delay={2}>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={3}>
                            <p className="editorial-hero__text">
                                Independent. Governance-driven. Long-term in orientation.
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
                                <h2 className="deck-title">Principal Investment Office</h2>
                                <p className="deck-text">
                                    We are a privately governed principal investment office focused on the disciplined
                                    stewardship of capital.
                                    <br /><br />
                                    Our structure enables independent decision-making, rigorous underwriting, and
                                    selective transaction sponsorship across direct and structured investments.
                                    <br /><br />
                                    We operate with long-term perspective, prioritizing structural integrity and governance
                                    over scale-driven expansion.
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
                                Our investment decisions are governed by formal review processes, capital allocation
                                discipline, and structured risk assessment frameworks. Independence of judgment and
                                clarity of mandate are foundational to our operating model.
                            </blockquote>
                            <ParallaxImage
                                src={media('who_we_are_hero_1', '/images/hero-infrastructure.png')}
                                alt="Governance and independence"
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
                        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                            <h2 className="deck-title">Investment Philosophy</h2>
                            <p className="deck-text" style={{ maxWidth: '640px', margin: '0 auto' }}>
                                Capital is deployed with generational perspective, prioritizing structural
                                integrity and alignment of interests over short-cycle return objectives.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="deck-grid">
                            {philosophyCards.map((item) => (
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
                        <div className="deck-grid deck-grid--experience">
                            <div>
                                <h2 className="deck-title">Our Approach</h2>
                                <p className="deck-text" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                                    We do not pursue volume-based deployment.
                                    <br /><br />
                                    Engagement is selective, transactions are underwritten conservatively, and capital is
                                    structured with long-term accountability in mind.
                                    <br /><br />
                                    Growth is pursued where governance and structural clarity support durable outcomes.
                                </p>
                            </div>
                            <div className="deck-image-stack">
                                <ParallaxImage
                                    src={media('who_we_are_parallax', '/images/hero-mining.png')}
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
                        <div style={{ textAlign: 'right', maxWidth: '800px', marginLeft: 'auto', marginRight: '10%' }}>
                            <p className="deck-quote-inline">
                                Our mandate remains focused on disciplined capital stewardship and selective
                                transaction engagement aligned with long-term objectives.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
