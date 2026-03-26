import FadeIn from '@/components/FadeIn';
import HeroGlobe from '@/components/HeroGlobe';
import ShaderBackground from '@/components/ShaderBackground';
import Link from 'next/link';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import FullWidthCarousel from '@/components/FullWidthCarousel';
import WhoWeServeAccordion from '@/components/WhoWeServeAccordion';
import FullWidthVideoEmbed from '@/components/FullWidthVideoEmbed';
import { getAllMediaMap } from '@/lib/media';

export default async function HomePage() {
  const mediaMap = await getAllMediaMap();
  const media = (key: string, fallback: string) => mediaMap[key] || fallback;
  const audienceCards = [
    {
      title: 'Families & Private Capital',
      description:
        'Multigenerational investors seeking disciplined capital structuring and long-term alignment.',
      image: media('home_serve_individuals', '/images/hero-architecture.png'),
      alt: 'Institutional architecture representing private capital',
      href: '/investment-approach',
    },
    {
      title: 'Institutional Partners',
      description:
        'Select institutions participating alongside sponsored transactions under shared governance frameworks.',
      image: media('home_serve_institutions', '/E82424DD-5681-4D3D-9438-A86759CAF66D.png'),
      alt: 'Structured capital representing institutional partnership',
      href: '/investment-approach',
    },
    {
      title: 'Operators & Sponsors',
      description:
        'Management teams and sponsors seeking structured capital solutions, engaged as aligned counterparts with a long-horizon perspective in transactions.',
      image: media('home_serve_operators', '/images/hero-industrial.png'),
      alt: 'Industrial operations representing aligned counterparts in transactions',
      href: '/investment-approach',
    },
  ];


  const poweringSlides = [
    {
      image: media('home_powering_1', '/images/hero-energy.png'),
      alt: 'Aerial view of hydropower facility',
      headline: 'Capital Stewardship',
      subhead: 'Long-Horizon Allocation',
      copy:
        'Long-horizon allocation guided by downside discipline, liquidity awareness, and structural integrity across essential sectors.',
      ctaHref: '/what-we-do',
      ctaLabel: 'Investment Focus',
    },
    {
      image: media('home_powering_2', '/images/hero-infrastructure.png'),
      alt: 'Critical infrastructure representing institutional stewardship',
      headline: 'Transaction Origination',
      subhead: 'Proprietary Sourcing',
      copy:
        'Direct sourcing and evaluation of opportunities through proprietary networks and institutional diligence standards.',
      ctaHref: '/investment-approach',
      ctaLabel: 'Our Approach',
    },
    {
      image: media('home_powering_3', '/images/hero-industrial.png'),
      alt: 'Industrial operations at scale',
      headline: 'Capital Structuring',
      subhead: 'Bespoke Solutions',
      copy:
        'Design of equity, hybrid, and structured instruments aligned with risk-adjusted return objectives and long-term governance.',
      ctaHref: '/partnerships',
      ctaLabel: 'Strategic Alignment',
    },
  ];

  return (
    <>
      {/* ── HERO SECTION (Globe background + classic hero) ── */}
      <section className="hero-home">
        <div className="hero-home__globe-bg" aria-hidden="true">
          <HeroGlobe
            className="hero-home__globe"
            size="100%"
            dotColor="rgba(255, 255, 255, ALPHA)"
            arcColor="rgba(255, 255, 255, 0.22)"
            markerColor="rgba(255, 255, 255, 0.95)"
          />
        </div>

        <div className="hero-home__content">
          <div className="container">
            <div className="hero-home__grid">
              <div className="hero-home__title-side">
                <FadeIn>
                  <div className="hero-home__copy-shell">
                    <h1 className="hero-home__headline">
                      Disciplined Capital.
                      <br />
                      Structured Opportunity.
                    </h1>
                    <span className="hero-home__separator" aria-hidden="true" />
                    <p className="hero-home__description">
                      A privately governed investment office focused on originating, underwriting, and
                      structuring long-term investments with institutional rigor.
                    </p>
                    <Link href="/contact" className="primary-button" style={{ marginTop: '20px' }}>
                      Engagement
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-home__image-container">
          <FadeIn>
            <div className="hero-home__image-wrapper">
              <Image
                src={media('home_hero_bg', '/Untitled design (2).png')}
                alt="Industrial infrastructure representing institutional investment"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SPACER to accommodate hanging image ── */}
      <div className="hero-home__spacer"></div>

      {/* ── INSTITUTIONAL STATEMENT ── */}
      <section className="section section-white">
        <div className="container">
          <FadeIn>
            <div className="statement">
              <div className="gold-divider"></div>
              <p className="statement__text">
                We operate as a principal investment office deploying our own capital across select
                direct and structured opportunities. In transactions we sponsor, we underwrite risk,
                structure capital solutions, and collaborate with aligned partners where governance
                and long-term objectives are shared.
              </p>
              <div className="gold-divider"></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CORE CAPABILITIES CAROUSEL ── */}
      <FullWidthCarousel slides={poweringSlides} />

      {/* ── WHO WE SERVE SECTION ── */}
      <WhoWeServeAccordion title="Who We Serve" cards={audienceCards} />

      {/* ── INSTITUTIONAL MID-PAGE BAND ── */}
      <section className="full-bleed-feature">
        <div className="full-bleed-feature__image">
          <Image
            src={media('home_leveraging_bg', '/Untitled design.png')}
            alt="Architectural form representing institutional governance"
            fill
            priority={false}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="fluid-container-narrow full-bleed-feature__content">
          <div className="full-bleed-feature__card">
            <h2>Institutional Framework</h2>
            <div className="full-bleed-feature__description">
              <p>
                We prioritize structure before scale and alignment before expansion.
                Capital is deployed selectively, with discipline embedded at every stage of the
                investment lifecycle.
              </p>
              <p>
                Every transaction benefits from rigorous underwriting, governed processes, and
                structural clarity designed to preserve capital across market cycles.
              </p>
            </div>
            <Link href="/who-we-are" className="primary-button primary-button--ghost full-bleed-feature__cta">
              <span>Our Mandate</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bx-block-component bx-offerings alignfull wp-block-blackstone-v2-our-offerings">
        <div className="bx-offerings__inner">
          <div className="bx-offerings__heading bx-offerings-heading has-text-align-center">
            <p className="bx-offerings-heading__eyebrow" aria-hidden="true">
              ABOUT The firm
            </p>
            <h2 className="bx-offerings-heading__title">
              <span className="visually-hidden">ABOUT The firm: </span>
              Delivering for Investors
            </h2>
          </div>

          <div className="bx-offerings__main bx-offerings-main wp-block-blackstone-v2-our-offerings-main">
            <h3 className="bx-offerings-main__title">Principal Capital Office</h3>

            <div className="bx-offerings-main__content">
              <div className="bx-offerings-main__copy">
                <p>
                  Nabrel is a privately governed investment office deploying principal capital across direct and
                  structured opportunities. We originate transactions, underwrite risk, and structure bespoke
                  capital solutions with institutional governance.
                </p>
              </div>

              <div className="bx-offerings-main__cta">
                <Link
                  className="bx-singular-link_frontend"
                  href="/who-we-are"
                  aria-label="Learn More"
                >
                  <span className="bx-singular-link__label">Learn More</span>
                  <svg className="bx-singular-link__icon" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="bx-singular-link__icon-arrow"
                      d="M29 20c0-.2 0-.4-.2-.6l-4.4-4.6a1 1 0 0 0-1.2 0c-.3.3-.3.8 0 1.1l3.1 3.3H11.8a.8.8 0 1 0 0 1.6h14.5l-3 3.3c-.4.3-.4.8 0 1.2.3.3.8.2 1.1 0l4.4-4.7.2-.6Z"
                      fill="currentColor"
                    ></path>
                    <path
                      className="bx-singular-link__icon-fill"
                      d="M20 0a20 20 0 1 1 0 40 20 20 0 0 1 0-40Zm3.2 14.8c-.3.3-.3.8 0 1.1l3.1 3.3H11.8a.8.8 0 1 0 0 1.6h14.5l-3 3.3c-.4.3-.4.8 0 1.2.3.3.8.2 1.1 0l4.4-4.7.2-.6c0-.2 0-.4-.2-.6l-4.4-4.6a1 1 0 0 0-1.2 0Z"
                      fill="currentColor"
                      opacity="0"
                    ></path>
                    <path
                      className="bx-singular-link__icon-border"
                      d="M20 0a20 20 0 1 0 0 40 20 20 0 0 0 0-40Zm0 1.5a18.5 18.5 0 1 1 0 37 18.5 18.5 0 0 1 0-37Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bx-offerings-main__stat">
              <p className="bx-offerings-main__stat-value">$100 M </p>
              <div className="bx-offerings-main__stat-subtext">
                <p>Assets Coordinated</p>
              </div>
              <div className="bx-offerings-main__stat-disclaimer">
                <p></p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <FullWidthVideoEmbed
        videoSrc={media('home_video', 'https://video.gumlet.io/694cef8ab122cbf176482b8c/69a1ae6f825d3351d5358089/download.mp4')}
      />


    </>
  );
}
