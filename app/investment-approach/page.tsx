import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import ParallaxImage from '@/components/ParallaxImage';
import Link from 'next/link';
import ApproachScrollSpy from '@/components/ApproachScrollSpy';
import { getAllMediaMap } from '@/lib/media';

export const metadata: Metadata = {
    title: 'Investment Approach',
    description:
        'A disciplined framework guiding the origination, underwriting, structuring, and deployment of principal and aligned capital.',
};

export default async function InvestmentApproachPage() {
    const mediaMap = await getAllMediaMap();
    const media = (key: string, fallback: string) => mediaMap[key] || fallback;

    const underwritingPillars = [
        {
            title: 'Underwriting Discipline',
            points: ['Asset-level analysis', 'Conservative leverage', 'Stress-tested modeling', 'Long-duration assumptions'],
            icon: (
                <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                </svg>
            ),
        },
        {
            title: 'Governance Framework',
            points: ['Investment committee review', 'Structured approvals', 'Risk oversight cadence', 'Institutional reporting'],
            icon: (
                <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 3v18" />
                </svg>
            ),
        },
        {
            title: 'Risk Management',
            points: ['Counterparty evaluation', 'Regulatory compliance', 'Capital stack protection', 'Scenario planning'],
            icon: (
                <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
        },
        {
            title: 'Capital Structuring',
            points: ['Equity, hybrid, bespoke instruments', 'Alignment with co-investors', 'Risk-adjusted deployment', 'Transparent governance terms'],
            icon: (
                <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h16" />
                    <path d="M12 4v16" />
                </svg>
            ),
        },
        {
            title: 'Post-Investment Stewardship',
            points: ['Active asset monitoring', 'Operational oversight', 'Quarterly review sessions', 'Defined exit protocols'],
            icon: (
                <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19h16" />
                    <path d="M6 19V7l6-4 6 4v12" />
                    <path d="M9 13h6" />
                </svg>
            ),
        },
        {
            title: 'Selective Partnership',
            points: ['Aligned institutional partners', 'Governance compatibility', 'Durable incentive structures', 'Long-horizon collaboration'],
            icon: (
                <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
                    <path d="M3 21a7 7 0 0 1 14 0" />
                    <path d="M18 8a3 3 0 1 1 3 3" />
                    <path d="M21 21v-1a4 4 0 0 0-3-3.87" />
                </svg>
            ),
        },
    ];

    const governanceSteps = [
        {
            label: 'Stage 01',
            title: 'Origination & Screening',
            detail: 'Identifying opportunities where operational quality, structural integrity, and governance alignment create durable potential.'
        },
        {
            label: 'Stage 02',
            title: 'Evaluation & Underwriting',
            detail: 'Opportunities rigorously assessed across financial, operational, and structural dimensions. Scenarios and sensitivities inform feasibility and resilience.'
        },
        {
            label: 'Stage 03',
            title: 'Execution & Structuring',
            detail: 'Capital deployment executed under defined oversight frameworks, balancing principal investment with participation from aligned institutional partners.'
        },
        {
            label: 'Stage 04',
            title: 'Oversight & Stewardship',
            detail: 'Post-deployment monitoring ensures adherence to structural objectives, governance alignment, and sustained value creation.'
        },
    ];

    const assuranceThemes = [
        'Independent legal and fiduciary partners across multiple jurisdictions.',
        'Information rights and reporting cadence tailored to sovereign, institutional, and family office partners.',
        'Capital preservation embedded at every stage of the investment lifecycle.',
        'Deployment remains selective, data-led, and governed by formal review processes.',
    ];

    const interactiveSections = [
        {
            id: 'origination-network',
            eyebrow: 'Origination',
            title: 'Selective origination',
            summary:
                'We identify opportunities where operational quality, structural integrity, and governance alignment create durable potential. Networks and proprietary research guide selective sourcing.',
            bullets: ['Theme-led sourcing', 'Counterparty quality filters', 'Jurisdictional practicality', 'Early risk mapping'],
        },
        {
            id: 'structuring-expertise',
            eyebrow: 'Structuring',
            title: 'Capital architecture',
            summary:
                'Every engagement is structured to balance risk, align incentives, and preserve capital. We employ equity, hybrid, or bespoke solutions designed for durability.',
            bullets: ['Governance terms', 'Covenants & reserves', 'Aligned participation', 'Cash flow priority design'],
        },
        {
            id: 'governance-oversight',
            eyebrow: 'Governance',
            title: 'Committee-led approvals',
            summary:
                'Investment decisions are guided by structured committees, documented protocols, and alignment checks across all participating parties.',
            bullets: ['Investment committee review', 'Independent legal diligence', 'Structured approvals', 'Escalation protocols'],
        },
        {
            id: 'portfolio-stewardship',
            eyebrow: 'Stewardship',
            title: 'Active oversight',
            summary:
                'Active oversight preserves the integrity of the original structure, ensures alignment with governance frameworks, and supports long-term capital durability.',
            bullets: ['Monitoring & reporting rhythm', 'Operational oversight', 'Quarterly review sessions', 'Defined exit protocols'],
        },
        {
            id: 'efficient-implementation',
            eyebrow: 'Execution',
            title: 'Disciplined implementation',
            summary:
                'Capital deployment follows formal oversight protocols, ensuring clarity, accountability, and alignment with the intended investment structure.',
            bullets: ['Measured pacing', 'Documentation readiness', 'Partner coordination', 'Implementation transparency'],
        },
        {
            id: 'sustainability-lens',
            eyebrow: 'Durability',
            title: 'Long-duration relevance',
            summary:
                'Where applicable, we incorporate operational resilience and regulatory considerations that protect the long-term relevance of essential assets.',
            bullets: ['Regulatory awareness', 'Operational resilience', 'Stakeholder alignment', 'Durability of demand'],
        },
    ];

    return (
        <>
            <section className="editorial-hero editorial-hero--center" style={{ backgroundImage: `url(${media('investment_approach_hero', '/images/hero-energy.png')})` }}>
                <div className="editorial-hero__overlay" aria-hidden="true" />
                <div className="container">
                    <div className="editorial-hero__content editorial-hero__content--center">
                        <FadeIn>
                            <span className="page-hero__overline">Investment Approach</span>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={1}>
                            <h1 className="page-hero__title">Investment Approach</h1>
                        </FadeIn>
                        <FadeIn delay={2}>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={3}>
                            <p className="editorial-hero__text">
                                A disciplined framework guiding the origination, underwriting, structuring, and deployment of
                                principal and aligned capital.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="approach-intro">
                            <div className="approach-intro__card">
                                <p className="page-hero__overline">Philosophy</p>
                                <h2 className="deck-title">Principle-Driven</h2>
                                <p>
                                    Our investments are guided by a principle-driven framework that prioritizes
                                    structural clarity, governance alignment, and long-term viability.
                                </p>
                            </div>
                            <div className="approach-intro__card">
                                <p className="page-hero__overline">Engagement</p>
                                <h2 className="deck-title">Selective Deployment</h2>
                                <p>
                                    Engagement is selective, ensuring each transaction aligns with both our capital
                                    objectives and the long-horizon goals of our partners.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <ul className="approach-tenets">
                            {assuranceThemes.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-offwhite">
                <div className="container">
                    <FadeIn>
                        <div className="approach-heading approach-heading--center">
                            <span className="page-hero__overline">Methodology</span>
                            <h2 className="deck-title">What partners can expect</h2>
                            <p className="deck-text">
                                A calm, repeatable process—paired with clear documentation and reporting—so partners understand the
                                cadence, decision points, and information rights associated with each engagement.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="approach-accordion" aria-label="Investment approach details">
                            <details className="approach-accordion__item">
                                <summary>Underwriting inputs</summary>
                                <div className="approach-accordion__body">
                                    <p>
                                        Each transaction undergoes comprehensive underwriting, including financial,
                                        operational, and governance assessment. This ensures clarity of exposure and
                                        informs bespoke structuring.
                                    </p>
                                </div>
                            </details>
                            <details className="approach-accordion__item">
                                <summary>Governance protocols</summary>
                                <div className="approach-accordion__body">
                                    <p>
                                        Investment decisions are guided by structured committees, documented protocols,
                                        and alignment checks across all participating parties. Independence of judgment
                                        and clarity of mandate remain central.
                                    </p>
                                </div>
                            </details>
                            <details className="approach-accordion__item">
                                <summary>Risk management</summary>
                                <div className="approach-accordion__body">
                                    <p>
                                        Risk management spans counterparty evaluation, compliance considerations, capital stack protection,
                                        and scenario-based monitoring. Focus is placed on protecting the downside first.
                                    </p>
                                </div>
                            </details>
                            <details className="approach-accordion__item">
                                <summary>Implementation &amp; reporting</summary>
                                <div className="approach-accordion__body">
                                    <p>
                                        Implementation emphasizes pacing, transparency, and readiness—coordinating documentation,
                                        stakeholder approvals, and reporting rhythms that match institutional expectations.
                                    </p>
                                </div>
                            </details>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-offwhite">
                <div className="container">
                    <div className="approach-grid">
                        {underwritingPillars.map((pillar) => (
                            <div key={pillar.title} className="approach-card">
                                {pillar.icon}
                                <h3 className="approach-card__title">{pillar.title}</h3>
                                <div className="approach-card__list">
                                    {pillar.points.map((point) => (
                                        <div key={point} className="approach-card__item">
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="approach-heading">
                            <span className="page-hero__overline">Process Framework</span>
                            <h2 className="deck-title">A consistent framework, applied selectively</h2>
                            <p className="deck-text">
                                Our process is designed to be globally consistent while remaining selective in where we deploy
                                capital—combining underwriting discipline, governance, and implementation rigor.
                            </p>
                        </div>
                    </FadeIn>
                    <ApproachScrollSpy
                        items={interactiveSections}
                        mediaSrc={media('investment_approach_img_1', '/images/hero-architecture.png')}
                        mediaAlt="Institutional architecture"
                    />
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="approach-timeline">
                            {governanceSteps.map((step) => (
                                <article key={step.title} className="approach-timeline__step">
                                    <span className="approach-timeline__label">{step.label}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.detail}</p>
                                </article>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-navy">
                <div className="container">
                    <FadeIn>
                        <div className="approach-governance">
                            <div>
                                <p className="page-hero__overline">Risk & Reporting</p>
                                <h2 className="deck-title deck-title--light">Stewardship</h2>
                                <p className="deck-text deck-text--light">
                                    Active oversight preserves the integrity of the original structure, ensures
                                    alignment with governance frameworks, and supports long-term capital durability
                                    for family offices, sovereign capital, and institutional partners.
                                </p>
                            </div>
                            <div className="approach-governance__grid">
                                <div>
                                    <h3>Oversight Rhythm</h3>
                                    <ul>
                                        <li>Monthly operating dashboards</li>
                                        <li>Quarterly audit-style reporting</li>
                                        <li>Annual strategic review</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Protection Levers</h3>
                                    <ul>
                                        <li>Structured covenants &amp; reserves</li>
                                        <li>Jurisdictional diversification</li>
                                        <li>Aligned co-investment participation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="insight-banner insight-banner--clean">
                <div className="insight-banner__media" aria-hidden="true">
                    <Image
                        src={media('investment_approach_img_2', '/images/hero-architecture.png')}
                        alt="Institutional architecture"
                        fill
                        priority={false}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="insight-banner__content">
                    <FadeIn>
                        <div className="insight-banner__card">
                            <p className="insight-banner__eyebrow">Engagement</p>
                            <h2>Engagement</h2>
                            <p>
                                Opportunities are considered where underwriting rigor, structural clarity, and
                                alignment of interests underpin long-term value.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <FadeIn>
                        <div className="approach-callout">
                            <div>
                                <p className="page-hero__overline">Strategic Alignment</p>
                                <h2 className="deck-title">Partnerships</h2>
                                <p className="deck-text">
                                    We align with institutional partners only where objectives, governance
                                    standards, and structural frameworks converge. Collaboration is considered with
                                    discretion, long-term alignment, and durable incentives.
                                </p>
                            </div>
                            <Link href="/contact" className="primary-button primary-button--outline">
                                Contact Us
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
