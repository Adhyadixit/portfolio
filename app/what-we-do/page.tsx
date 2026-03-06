import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import ParallaxImage from '@/components/ParallaxImage';
import NeuralBackground from '@/components/NeuralBackground';
import { getAllMediaMap } from '@/lib/media';

export const metadata: Metadata = {
    title: 'Investment Focus',
    description: 'Selective deployment of principal capital across direct and structured opportunities with governance rigor and institutional alignment.',
};

export default async function WhatWeDoPage() {
    const mediaMap = await getAllMediaMap();
    const media = (key: string, fallback: string) => mediaMap[key] || fallback;

    const mandateColumns = [
        {
            label: 'Capital Stewardship',
            value: 'Long-horizon allocation guided by downside discipline, liquidity awareness, and structural integrity.',
        },
        {
            label: 'Transaction Origination',
            value: 'Direct sourcing and evaluation of opportunities through proprietary networks and institutional diligence standards.',
        },
        {
            label: 'Underwriting & Risk',
            value: 'Comprehensive financial, operational, and structural assessment prior to capital commitment.',
        },
        {
            label: 'Capital Structuring',
            value: 'Design of equity, hybrid, and structured instruments aligned with risk-adjusted return objectives and long-term governance.',
        },
    ];

    const governancePoints = [
        'Structured protocols and documented agreements',
        'Independent oversight across participating parties',
        'Alignment of all participating parties preserved over time',
        'Integrity of capital maintained through governance',
    ];

    const priorities = [
        'Selective origination and disciplined underwriting',
        'Structured deployment with governance clarity',
        'Institutional-grade oversight and reporting',
        'Long-term alignment with institutional partners',
    ];

    const mandateLifecycle = [
        {
            title: 'Origination',
            copy: 'Identify transactions where fundamentals, structure, and governance support sustainable outcomes and long-term alignment.',
        },
        {
            title: 'Structuring & Underwriting',
            copy: 'Develop bespoke capital solutions using equity, hybrid, or structured instruments. Rigorous underwriting ensures risk-adjusted durability.',
        },
        {
            title: 'Deployment',
            copy: 'Capital is deployed under formal oversight protocols, ensuring clarity, accountability, and alignment with the intended investment structure.',
        },
        {
            title: 'Post-Investment Oversight',
            copy: 'Ongoing monitoring preserves capital, reinforces alignment, and supports long-horizon value creation.',
        },
    ];

    return (
        <>
            <section className="editorial-hero editorial-hero--center" style={{ backgroundImage: `url(${media('what_we_do_hero', '/images/hero-industrial.png')})` }}>
                <div className="editorial-hero__overlay" aria-hidden="true" />
                <div className="container">
                    <div className="editorial-hero__content editorial-hero__content--center">
                        <FadeIn>
                            <span className="page-hero__overline">What We Do</span>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={1}>
                            <h1 className="page-hero__title">Investment Focus</h1>
                        </FadeIn>
                        <FadeIn delay={2}>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={3}>
                            <p className="editorial-hero__text">
                                Selective deployment of principal capital across direct and structured opportunities, designed
                                with structural clarity, governance rigor, and alignment with institutional partners.
                            </p>
                            <Link href="/contact" className="primary-button" style={{ marginTop: '20px' }}>
                                Engagement
                            </Link>
                        </FadeIn>
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

            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="statement">
                            <div className="gold-divider"></div>
                            <p className="statement__text">
                                We engage in transactions where structural integrity, long-term governance, and
                                operational resilience underpin durable value creation. Capital solutions are flexible
                                across equity, hybrid, and bespoke structures, enabling selective collaboration with
                                aligned institutional partners.
                            </p>
                            <div className="gold-divider"></div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="insight-banner">
                <div className="insight-banner__media" aria-hidden="true">
                    <Image
                        src={media('what_we_do_img_1', '/images/hero-architecture.png')}
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
                            <p className="insight-banner__eyebrow">Execution Framework</p>
                            <h2>Institutional Execution</h2>
                            <p>
                                Opportunities are assessed through structured diligence frameworks that integrate
                                financial, operational, and governance evaluation. Deployment is designed to balance
                                principal capital commitment with aligned partner participation for long-term sustainability.
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
                            <h2 className="deck-title" style={{ marginBottom: 0 }}>Investment Lifecycle</h2>
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
                                <h3 className="deck-subtitle deck-subtitle--light">Capital Structuring</h3>
                                <p className="deck-text deck-text--light" style={{ marginBottom: '18px' }}>
                                    Investments are executed using bespoke equity, hybrid, and structured instruments.
                                    Solutions are tailored to balance risk, align incentives, and support long-term
                                    value creation for both principal and aligned partners.
                                </p>
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
                                <p className="deck-quote-inline">
                                    Our priorities are selective origination, disciplined underwriting, structured
                                    deployment, and long-term alignment with institutional and aligned partners.
                                    Engagement is pursued only when strategic clarity and governance standards are
                                    evident.
                                </p>
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
                                    src={media('what_we_do_parallax_2', '/images/hero-mining.png')}
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
                        <h2 className="deck-title">Building Resilliance</h2>
                        <p className="deck-text">
                            We consider participation in opportunities where underwriting rigor, structural
                            clarity, and alignment of interests underpin durable outcomes.
                        </p>
                        <Link href="/contact" className="primary-button" style={{ marginTop: '16px' }}>
                            Engage
                        </Link>
                        <div style={{ marginTop: '28px' }}>
                            <div style={{ width: '100%', maxWidth: '1040px', margin: '0 auto' }}>
                                <Image
                                    src={media('what_we_do_img_2', '/images/hero-infrastructure.png')}
                                    alt="Institutional infrastructure"
                                    width={1040}
                                    height={580}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
