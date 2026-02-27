import FadeIn from '@/components/FadeIn';
import HeroGlobe from '@/components/HeroGlobe';
import ShaderBackground from '@/components/ShaderBackground';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { Quote } from 'lucide-react';
import LazyFullWidthCarousel from '@/components/lazy/LazyFullWidthCarousel';
import LazyWhoWeServeAccordion from '@/components/lazy/LazyWhoWeServeAccordion';
import LazyFullWidthVideoEmbed from '@/components/lazy/LazyFullWidthVideoEmbed';

export default function HomePage() {
  const audienceCards = [
    {
      title: 'Institutions',
      description:
        'We partner with global institutions and family offices to provide investment solutions aligned with their growth objectives.',
      image: '/images/hero-architecture.png',
      alt: 'Skyscrapers representing institutional investors',
      href: '/partnerships',
    },
    {
      title: 'Individuals',
      description:
        'We help individuals create wealth and secure their financial futures, guided by an investment approach focused on enduring value.',
      image: '/E82424DD-5681-4D3D-9438-A86759CAF66D.png',
      alt: 'Parent guiding child on bicycle symbolizing personal wealth',
      href: '/contact',
    },
  ];

  const reviews = [
    {
      quote:
        'Nabrel has been a steady partner across multiple infrastructure mandates—able to mobilize capital, operating talent, and structured solutions at a pace that matches real-world demand.',
      name: 'Elaine Porter',
      title: 'Chief Investment Officer, Northern Crest Pensions',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      metric: {
        value: '$3.4B',
        label: 'Capital deployed together',
      },
    },
    {
      quote:
        'Their governance discipline and portfolio support give us confidence to underwrite long-dated strategies while still moving decisively when markets shift.',
      name: 'Rahul Menon',
      title: 'Managing Director, Meridian Sovereign Fund',
      avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
      metric: {
        value: '18yrs',
        label: 'Average partnership tenure',
      },
    },
    {
      quote:
        'Nabrel’s operating bench and data transparency have transformed how our board evaluates mission-critical assets. They deliver, full stop.',
      name: 'Claudia Rios',
      title: 'Chair, Alton Family Office',
      avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=900&q=80',
      metric: {
        value: '96%',
        label: 'Portfolio satisfaction rating',
      },
    },
  ];

  const offeringsHighlights = [
    {
      title: 'Build financial security',
      description:
        'We seek to deliver outstanding performance for institutional and individual investors by stewarding their capital with integrity and conviction.',
      image: '/Untitled design (5).png',
      alt: 'City grid representing financial systems',
      href: '/partnerships',
      cta: 'Learn More About Our Clients',
    },
    {
      title: 'Build your career',
      description:
        'We offer an environment where exceptional talent can build lasting careers—at the forefront of emerging trends and setting standards for our industry.',
      image: '/3D593A20-063D-46C3-876B-7BC4B1341D66.png',
      alt: 'Industrial port infrastructure representing opportunity',
      href: '/careers',
      cta: 'Learn More About Our Careers',
    },
    {
      title: 'Build strong businesses',
      description:
        'We equip businesses with an extensive range of tools and capabilities they need to grow.',
      image: '/Untitled design (3).png',
      alt: 'Rail lines at sunset representing operational scale',
      href: '/what-we-do',
      cta: 'Learn About Our Operating Team',
    },
  ];

  const poweringSlides = [
    {
      image: '/images/hero-energy.png',
      alt: 'Aerial view of hydropower facility',
      headline: 'Powering Industries That Drive Economies',
      subhead: 'Value & Impact',
      copy:
        'Rewiring global systems—from supply chains to energy grids—requires bold investment. Our energy platform is foundational in driving that change and delivering value along the way.',
      ctaHref: '/what-we-do',
      ctaLabel: 'Learn More',
    },
    {
      image: '/images/hero-infrastructure.png',
      alt: 'Critical infrastructure representing institutional stewardship',
      headline: 'Structuring Capital for Generational Resilience',
      subhead: 'Institutional Standards',
      copy:
        'We underwrite long-duration assets with disciplined governance—aligning stewardship, capital markets access, and operational expertise across cycles.',
      ctaHref: '/investment-approach',
      ctaLabel: 'Our Approach',
    },
    {
      image: '/images/hero-industrial.png',
      alt: 'Industrial operations at scale',
      headline: 'Backing Platforms that Enable Real Economies',
      subhead: 'Strategic Industries',
      copy:
        'From logistics to critical services, Nabrel supports platforms that anchor productivity and long-term competitiveness for institutional partners.',
      ctaHref: '/partnerships',
      ctaLabel: 'Partner With Us',
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
                  <div className="hero-home__headline-shell">
                    <h1 className="hero-home__headline">
                      Enduring Capital.
                      <br />
                      Structured for Generations.
                    </h1>
                  </div>
                </FadeIn>
              </div>
              <div className="hero-home__content-side">
                <FadeIn delay={2}>
                  <div className="hero-home__description-shell">
                    <p className="hero-home__description">
                      Nabrel is a private capital platform operating across real assets, strategic industries, and structured
                      finance, building long-term value for institutional partners around the world.
                    </p>
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
                src="/Untitled design (2).png"
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
                We steward capital across essential sectors that underpin economic
                resilience. Our focus is disciplined underwriting, long-duration
                ownership, and institutional governance.
              </p>
              <div className="gold-divider"></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── POWERING INDUSTRIES SLIDE (Third Section) ── */}
      <Suspense fallback={<div className="section-loading" aria-hidden="true" />}>
        <LazyFullWidthCarousel slides={poweringSlides} />
      </Suspense>

      {/* ── WHO WE SERVE SECTION ── */}
      <Suspense fallback={<div className="section-loading" aria-hidden="true" />}>
        <LazyWhoWeServeAccordion title="Who We Serve" cards={audienceCards} />
      </Suspense>

      {/* ── FULL WIDTH IMAGE WITH TEXT ── */}
      <section className="full-bleed-feature">
        <div className="full-bleed-feature__image">
          <Image
            src="/Untitled design.png"
            alt="Leaning architectural form representing Nabrel ecosystem"
            fill
            priority={false}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="fluid-container-narrow full-bleed-feature__content">
          <div className="full-bleed-feature__card">
            <h2>Leveraging the Nabrel Ecosystem</h2>
            <div className="full-bleed-feature__description">
              <p>
                One of the keys to our success is the Nabrel Ecosystem—the collective intelligence and insights we gather from
                operational expertise, global reach, and deep relationships with partners around the world.
              </p>
              <p>
                Together, this helps us identify and act on opportunities few others can—and enables each of our platforms to
                benefit from being a part of the whole.
              </p>
            </div>
            <Link href="/who-we-are" className="primary-button primary-button--ghost full-bleed-feature__cta">
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bx-block-component bx-offerings alignfull bx-component-base-padding-top bx-component-base-padding-bottom wp-block-blackstone-v2-our-offerings">
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
            <h3 className="bx-offerings-main__title">Unmatched scale</h3>

            <div className="bx-offerings-main__content">
              <div className="bx-offerings-main__copy">
                <p>
                  Nabrel is an alternative investment platform with deep sector expertise and a global operating network. We
                  serve institutional and individual partners by building strong businesses that deliver lasting value.
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
                <p>Co-Ordinated Assets Management</p>
              </div>
              <div className="bx-offerings-main__stat-disclaimer">
                <p>All figures are illustrative.</p>
              </div>
            </div>
          </div>

          <div className="bx-offerings__highlights bx-offerings-highlights wp-block-blackstone-v2-our-offerings-highlights">
            {offeringsHighlights.map((item) => (
              <div key={item.title} className="bx-offerings-highlights__item wp-block-blackstone-v2-our-offerings-highlights-item">
                <div className="bx-offerings-card">
                  <div className="bx-offerings-card__media" style={{ ['--x' as any]: 0.5, ['--y' as any]: 0.5 }}>
                    <div className="bx-offerings-card__media-img">
                      <Image src={item.image} alt={item.alt} fill style={{ objectFit: 'cover' }} sizes="(min-width: 1024px) 33vw, 100vw" />
                    </div>
                    <div className="bx-offerings-card__media-curtain"></div>
                  </div>
                  <div className="bx-offerings-card__content">
                    <h3 className="bx-offerings-card__title">{item.title}</h3>
                    <div className="bx-offerings-card__description">
                      <p>{item.description}</p>
                    </div>
                    <div className="bx-offerings-card__cta">
                      <p>
                        <Link href={item.href}>{item.cta}</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="section-loading" aria-hidden="true" />}>
        <LazyFullWidthVideoEmbed
          eyebrow="Watch Now"
          title="Invested"
          videoSrc="https://video.gumlet.io/694cef8ab122cbf176482b8c/69a1ae6f825d3351d5358089/download.mp4"
        />
      </Suspense>

      <section className="reviews" aria-labelledby="reviews-heading">
        <div className="reviews__bg" aria-hidden="true">
          <ShaderBackground />
        </div>
        <div className="reviews__inner">
          <FadeIn>
            <div className="reviews__heading">
              <p className="reviews__eyebrow">Reviews</p>
              <h2 id="reviews-heading">Delivering confidence for every stakeholder</h2>
              <p>
                Voices from the institutions, sovereign partners, and family offices that work with Nabrel across the globe.
              </p>
            </div>
          </FadeIn>

          <div className="reviews__grid">
            {reviews.map((review, idx) => (
              <FadeIn key={review.name} delay={(idx % 3) + 1}>
                <article className="review-card">
                  <div className="review-card__quote-icon">
                    <Quote aria-hidden size={24} />
                  </div>
                  <p className="review-card__quote">“{review.quote}”</p>
                  <div className="review-card__person">
                    <div className="review-card__avatar">
                      <Image src={review.avatar} alt={review.name} fill sizes="72px" />
                    </div>
                    <div>
                      <p className="review-card__name">{review.name}</p>
                      <p className="review-card__title">{review.title}</p>
                    </div>
                  </div>
                  <div className="review-card__metric">
                    <span className="review-card__metric-value">{review.metric.value}</span>
                    <span className="review-card__metric-label">{review.metric.label}</span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
