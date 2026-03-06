import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import ParallaxImage from '@/components/ParallaxImage';
import Link from 'next/link';
import { getAllMediaMap } from '@/lib/media';

export const metadata: Metadata = {
    title: 'Strategic Alignment',
    description: 'We engage selectively with aligned partners where objectives, governance, and structural clarity converge to support long-term value creation.',
};

export default async function PartnershipsPage() {
    const mediaMap = await getAllMediaMap();
    const media = (key: string, fallback: string) => mediaMap[key] || fallback;

    const partnerTypes = [
        {
            title: 'Families & Private Capital',
            description: 'Multigenerational investors seeking disciplined capital structuring and long-term alignment.',
        },
        {
            title: 'Institutional Partners',
            description: 'Select institutions participating alongside sponsored transactions under shared governance frameworks.',
        },
        {
            title: 'Operators & Sponsors',
            description: 'Management teams and sponsors seeking structured capital solutions with long-horizon perspective.',
        },
        {
            title: 'Sovereign Capital',
            description: 'Government-aligned entities participating in principal-led transactions where governance standards converge.',
        },
    ];

    const partnershipPrinciples = [
        'Alignment of interests and governance compatibility',
        'Structural clarity and risk-managed deployment',
        'Discretion in partner selection',
        'Long-term objectives and durable incentives',
        'Defined roles, responsibilities, and decision-making authorities',
    ];

    const alignmentCriteria = [
        {
            title: 'Alignment Criteria',
            detail: 'Prospective partners are considered based on strategic fit, governance compatibility, and alignment with structural frameworks.',
        },
        {
            title: 'Collaboration Approach',
            detail: 'Engagement is structured to preserve principal capital while enabling aligned partners to participate with transparency, clarity, and long-term perspective.',
        },
        {
            title: 'Co-Investment Standards',
            detail: 'Co-investment is pursued only when alignment with our structural and governance standards is evident. Discretion guides partner selection.',
        },
        {
            title: 'Oversight Protocols',
            detail: 'All partnerships operate under defined governance protocols and oversight frameworks with clearly documented accountability.',
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
                            <h1 className="page-hero__title">Strategic Alignment</h1>
                        </FadeIn>
                        <FadeIn delay={2}>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={3}>
                            <p className="editorial-hero__text">
                                We engage selectively with aligned partners where objectives, governance, and structural clarity
                                converge to support long-term value creation.
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
                        <div className="approach-heading approach-heading--center">
                            <span className="page-hero__overline">Partner Alignment</span>
                            <h2 className="deck-title">Who We Engage With</h2>
                            <p className="deck-text">
                                Our partnerships are guided by alignment of interests, governance standards, and
                                long-term structural integrity. We prioritize collaboration only when strategic
                                objectives and risk frameworks are clearly aligned and durable.
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
                                We maintain discretion in partner selection, ensuring transactions reflect long-term
                                objectives and risk-managed deployment. Engagement is structured to preserve
                                principal capital while enabling aligned participation.
                            </blockquote>
                            <ParallaxImage
                                src={media('partnerships_parallax', '/images/hero-architecture.png')}
                                alt="Partnership governance and structural clarity"
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
                                <h2 className="deck-title">Partnership Standards</h2>
                                <p className="deck-subtitle">Governance-Led</p>
                                <p className="deck-text">
                                    Roles, responsibilities, and decision-making authorities are clearly documented to
                                    ensure alignment, accountability, and durability across all engagements.
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
                        <div className="approach-heading approach-heading--center">
                            <span className="page-hero__overline">Engagement Model</span>
                            <h2 className="deck-title">How We Engage</h2>
                            <p className="deck-text">
                                Engagement is structured to balance principal capital commitment with aligned
                                partner participation under shared governance frameworks.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="deck-grid">
                            {alignmentCriteria.map((item) => (
                                <div key={item.title} className="deck-card">
                                    <h3 className="deck-subtitle">{item.title}</h3>
                                    <p className="deck-text">{item.detail}</p>
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
                        alt="Strategic alignment and governance"
                        fill
                        priority={false}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="insight-banner__content">
                    <FadeIn>
                        <div className="insight-banner__card">
                            <p className="insight-banner__eyebrow">Strategic Engagement</p>
                            <h2>Strategic Engagement</h2>
                            <p>
                                We consider participation in transactions only where alignment, structural
                                integrity, and governance rigor support long-term value creation.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
