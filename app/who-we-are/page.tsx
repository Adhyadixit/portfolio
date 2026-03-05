import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import ParallaxImage from '@/components/ParallaxImage';
import NeuralBackground from '@/components/NeuralBackground';
import { getAllMediaMap } from '@/lib/media';

export const metadata: Metadata = {
    title: 'Who We Are',
    description:
        'A privately governed principal investment office focused on disciplined capital stewardship, rigorous underwriting, and selective transaction sponsorship.',
};

export default async function WhoWeArePage() {
    const mediaMap = await getAllMediaMap();
    const media = (key: string, fallback: string) => mediaMap[key] || fallback;

    const operatingHighlights = [
        'Independent decision-making and rigorous underwriting',
        'Selective transaction sponsorship across direct and structured investments',
        'Long-term perspective prioritizing structural integrity over scale-driven expansion',
    ];

    const philosophyPrinciples = [
        'Long-term orientation over short-cycle return objectives',
        'Comprehensive underwriting prior to commitment',
        'Alignment of interests and durability of partnership',
        'Structural integrity with risk mitigation at inception',
        'Independence of judgment and clarity of mandate',
    ];

    const representativeExperience = [
        'Structured and coordinated ~$91M in investor commitments during pre-development of a major infrastructure initiative',
        'Facilitated sovereign and institutional capital relationships across MENA',
        'Advanced hospitality and urban development initiatives across Europe and MENA',
        'Structured natural resource development partnerships',
        'Advised SPV governance and PPP framework execution',
    ];

    const outlookPriorities = [
        'Selective origination with governance clarity',
        'Conservative underwriting and bespoke structuring',
        'Institutional-grade oversight and reporting',
        'Long-term alignment with institutional partners',
    ];

    const operatingModel = [
        {
            title: 'Originate',
            copy: 'Identifying transactions where fundamentals, structure, and governance support sustainable outcomes and long-term alignment.',
        },
        {
            title: 'Structure',
            copy: 'Developing bespoke capital solutions using equity, hybrid, or structured instruments. Rigorous underwriting ensures risk-adjusted durability.',
        },
        {
            title: 'Steward',
            copy: 'Active oversight preserves the integrity of each structure, ensures alignment with governance frameworks, and supports long-term capital durability.',
        },
    ];

    return (
        <>
            <section
                className="editorial-hero editorial-hero--center"
                style={{ backgroundImage: `url(${media('who_we_are_hero', '/images/hero-skyline.png')})` }}
            >
                <div className="editorial-hero__overlay" aria-hidden="true" />
                <div className="container">
                    <div className="editorial-hero__content editorial-hero__content--center">
                        <FadeIn>
                            <span className="page-hero__overline">Who We Are</span>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={1}>
                            <h1 className="page-hero__title">Our Mandate</h1>
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
                                    stewardship of capital. Our structure enables independent decision-making, rigorous
                                    underwriting, and selective transaction sponsorship across direct and structured investments.
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
                        <div className="deck-two-panel">
                            <div className="deck-panel">
                                <h2 className="deck-title">Investment Philosophy</h2>
                                <p className="deck-subtitle">Core Principles</p>
                                <p className="deck-text">
                                    We do not pursue volume-based deployment. Engagement is selective, transactions are
                                    underwritten conservatively, and capital is structured with long-term accountability in mind.
                                </p>
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
                        <div className="deck-outlook">
                            <div>
                                <h2 className="deck-title deck-title--light">Strategic Outlook</h2>
                                <p className="deck-quote-inline">Disciplined. Independent. Enduring.</p>
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
