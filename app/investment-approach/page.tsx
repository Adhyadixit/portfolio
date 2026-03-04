import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import ParallaxImage from '@/components/ParallaxImage';
import Link from 'next/link';
import ApproachScrollSpy from '@/components/ApproachScrollSpy';

export const metadata: Metadata = {
    title: 'Investment Approach',
    description:
        'Disciplined, structured, and long-term investment approach with rigorous underwriting, governance, and risk management.',
};

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
        title: 'Capital Deployment',
        points: ['Equity, credit, hybrid instruments', 'Alignment with co-investors', 'Measured pacing of capital calls', 'Transparency on fees & carry'],
        icon: (
            <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h16" />
                <path d="M12 4v16" />
            </svg>
        ),
    },
    {
        title: 'Portfolio Stewardship',
        points: ['Active asset monitoring', 'Operational playbooks', 'Quarterly value creation reviews', 'Defined exit protocols'],
        icon: (
            <svg className="approach-card__icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19h16" />
                <path d="M6 19V7l6-4 6 4v12" />
                <path d="M9 13h6" />
            </svg>
        ),
    },
    {
        title: 'Partner Alignment',
        points: ['Co-investment alongside sponsors', 'Transparent economics', 'Custom reporting cadences', 'Dedicated relationship coverage'],
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
        detail: 'Sourcing via proprietary channels, thematic research, and sovereign / institutional dialogues.'
    },
    {
        label: 'Stage 02',
        title: 'Investment Committee',
        detail: 'Dual review across underwriting and structuring teams with scenario simulations and risk alignment.'
    },
    {
        label: 'Stage 03',
        title: 'Execution & Structuring',
        detail: 'SPV formation, shareholder alignment, documentation, and capital stack optimization.'
    },
    {
        label: 'Stage 04',
        title: 'Stewardship & Reporting',
        detail: 'Active oversight, quarterly reporting, and capital recycling decisions grounded in downside protection.'
    },
];

const assuranceThemes = [
    'Positioning benchmarked to institutional operators (Blackstone discipline, Rothschild restraint).',
    'Independent legal and fiduciary partners across UK, UAE, and BVI jurisdictions.',
    'Information rights and reporting cadence tailored to sovereign, institutional, and family office partners.',
    'No marketing-driven growth targets—deployment remains opportunistic, data-led, and capital preservative.',
];

const interactiveSections = [
    {
        id: 'origination-network',
        eyebrow: 'Origination',
        title: 'Selective mandate origination',
        summary:
            'Opportunities are sourced through proprietary channels, operating relationships, and cross-border dialogues—filtered through a strict investability screen.',
        bullets: ['Theme-led sourcing', 'Counterparty quality filters', 'Jurisdictional practicality', 'Early risk mapping'],
    },
    {
        id: 'structuring-expertise',
        eyebrow: 'Structuring',
        title: 'Capital architecture',
        summary:
            'Each transaction is structured with an SPV framework, documentation discipline, and capital stack protections designed to preserve downside resilience.',
        bullets: ['SPV governance terms', 'Covenants & reserves', 'Aligned sponsor participation', 'Cash flow priority design'],
    },
    {
        id: 'governance-oversight',
        eyebrow: 'Governance',
        title: 'Committee-led approvals',
        summary:
            'Investment decisions follow a structured cadence, with underwriting, legal, and risk oversight aligned to institutional standards and information rights.',
        bullets: ['Investment committee review', 'Independent legal diligence', 'Structured approvals', 'Escalation protocols'],
    },
    {
        id: 'portfolio-stewardship',
        eyebrow: 'Stewardship',
        title: 'Active oversight',
        summary:
            'Mandates are monitored with operating dashboards, periodic reviews, and governance touchpoints to protect capital and maintain transparency through cycles.',
        bullets: ['Monitoring & reporting rhythm', 'Operational playbooks', 'Quarterly review sessions', 'Defined exit protocols'],
    },
    {
        id: 'efficient-implementation',
        eyebrow: 'Execution',
        title: 'Efficient implementation',
        summary:
            'We focus on execution discipline—documentation readiness, capital call pacing, and responsible coordination with co-investors and strategic partners.',
        bullets: ['Measured pacing', 'Documentation readiness', 'Partner coordination', 'Implementation transparency'],
    },
    {
        id: 'sustainability-lens',
        eyebrow: 'Sustainability',
        title: 'Long-duration relevance',
        summary:
            'Where applicable, we incorporate operational resilience and regulatory considerations that protect the long-term relevance of essential assets.',
        bullets: ['Regulatory awareness', 'Operational resilience', 'Stakeholder alignment', 'Durability of demand'],
    },
];

export default function InvestmentApproachPage() {
    return (
        <>
            <section className="editorial-hero editorial-hero--center" style={{ backgroundImage: 'url(/images/hero-energy.png)' }}>
                <div className="editorial-hero__overlay" aria-hidden="true" />
                <div className="container">
                    <div className="editorial-hero__content editorial-hero__content--center">
                        <FadeIn>
                            <span className="page-hero__overline">Investment Approach</span>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={1}>
                            <h1 className="page-hero__title">Disciplined Capital Stewardship</h1>
                        </FadeIn>
                        <FadeIn delay={2}>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={3}>
                            <p className="editorial-hero__text">
                                We steward capital with the restraint of multi-generational houses and the rigor of institutional
                                allocators—focusing on essential sectors, contractual cash flows, and downside-first underwriting.
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
                                <p className="page-hero__overline">Positioning Reference</p>
                                <h2 className="deck-title">Institutional Tone</h2>
                                <p>
                                    Structural discipline comparable to Blackstone Inc.—measured deployment, transparent governance, and
                                    capital structures engineered for resilience.
                                </p>
                            </div>
                            <div className="approach-intro__card">
                                <p className="page-hero__overline">Heritage Restraint</p>
                                <h2 className="deck-title">Legacy Mindset</h2>
                                <p>
                                    Communication cadence and discretion echo Rothschild & Co—quiet execution, thoughtful alignment, and
                                    generational stewardship of partners’ capital.
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
                            <span className="page-hero__overline">Methodology details</span>
                            <h2 className="deck-title">What partners can expect</h2>
                            <p className="deck-text">
                                A calm, repeatable process—paired with clear documentation and reporting—so partners understand the
                                cadence, decision points, and information rights associated with each mandate.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="approach-accordion" aria-label="Investment approach details">
                            <details className="approach-accordion__item">
                                <summary>Underwriting inputs</summary>
                                <div className="approach-accordion__body">
                                    <p>
                                        Underwriting is grounded in asset-level diligence, conservative assumptions, and stress-tested
                                        scenario planning. Where relevant, contractual cash flows and operational levers are evaluated
                                        alongside macro sensitivity.
                                    </p>
                                </div>
                            </details>
                            <details className="approach-accordion__item">
                                <summary>Governance artifacts</summary>
                                <div className="approach-accordion__body">
                                    <p>
                                        Mandates are executed with clear governance terms, committee approvals, documentation discipline,
                                        and jurisdictional oversight. Information rights and reporting cadence are aligned up front.
                                    </p>
                                </div>
                            </details>
                            <details className="approach-accordion__item">
                                <summary>Risk management</summary>
                                <div className="approach-accordion__body">
                                    <p>
                                        Risk management spans counterparty evaluation, compliance considerations, capital stack protection,
                                        and scenario-based monitoring. When uncertainty strikes, focus is placed on protecting the downside
                                        first.
                                    </p>
                                </div>
                            </details>
                            <details className="approach-accordion__item">
                                <summary>Implementation & reporting</summary>
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
                            <span className="page-hero__overline">How the process works</span>
                            <h2 className="deck-title">A consistent framework, applied selectively</h2>
                            <p className="deck-text">
                                Our process is designed to be globally consistent, while remaining selective in where we deploy
                                capital—combining underwriting discipline, governance, and implementation rigor.
                            </p>
                        </div>
                    </FadeIn>
                    <ApproachScrollSpy
                        items={interactiveSections}
                        mediaSrc="/images/hero-architecture.png"
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
                                <h2 className="deck-title deck-title--light">Cycle-Resilient Stewardship</h2>
                                <p className="deck-text deck-text--light">
                                    Nabrel structures every mandate with capital stack protection, counterparty diligence, and multi-layer
                                    governance so that family offices, sovereign capital, and institutional partners participate with
                                    confidence through cycles.
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
                                        <li>Structured covenants & reserves</li>
                                        <li>Jurisdictional diversification</li>
                                        <li>Aligned sponsor co-investment</li>
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
                        src="/images/hero-architecture.png"
                        alt="Institutional architecture"
                        fill
                        priority={false}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="insight-banner__content">
                    <FadeIn>
                        <div className="insight-banner__card">
                            <p className="insight-banner__eyebrow">Institutional Framework</p>
                            <h2>Stewardship Through Cycles</h2>
                            <p>
                                Every mandate is structured to preserve capital first—supported by conservative underwriting,
                                committee-led governance, and reporting practices designed for long-term partners.
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
                                <p className="page-hero__overline">Engage with Nabrel</p>
                                <h2 className="deck-title">Structured access to essential industries</h2>
                                <p className="deck-text">
                                    We welcome dialogues with sovereign partners, family offices, and institutional allocators seeking
                                    disciplined capital programs anchored in real assets and critical infrastructure.
                                </p>
                            </div>
                            <Link href="/contact" className="primary-button primary-button--outline">
                                Initiate a Conversation
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
