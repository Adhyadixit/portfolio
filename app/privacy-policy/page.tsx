import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import { getAllMediaMap } from '@/lib/media';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Nabrel privacy policy regarding the collection, use, and protection of personal information.',
};

export default async function PrivacyPolicyPage() {
    const mediaMap = await getAllMediaMap();
    const media = (key: string, fallback: string) => mediaMap[key] || fallback;

    return (
        <main>
            <section
                className="editorial-hero editorial-hero--center"
                style={{ backgroundImage: `url(${media('privacy_policy_hero', '/images/hero-skyline.png')})` }}
            >
                <div className="editorial-hero__overlay" aria-hidden="true" />
                <div className="container">
                    <div className="editorial-hero__content editorial-hero__content--center">
                        <FadeIn>
                            <span className="page-hero__overline">Legal</span>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={1}>
                            <h1 className="page-hero__title">Privacy Policy</h1>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="policy-page">
                <div className="policy-content">
                    <FadeIn delay={2}>
                        <span className="policy-last-updated">Last Updated: March 2026</span>

                        <h2>1. Introduction</h2>
                        <p>
                            Nabrel (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting
                            the privacy of individuals who visit our website. This Privacy Policy
                            outlines how we collect, use, and safeguard your information.
                        </p>

                        <h2>2. Information We Collect</h2>
                        <p>
                            We may collect personal information that you voluntarily provide to us
                            when you contact us through our website, including your name,
                            organization, email address, and any other information you choose to
                            provide in the message field.
                        </p>

                        <h2>3. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to respond to your inquiries,
                            evaluate potential partnerships, and improve our services. We do not
                            sell, trade, or otherwise transfer your personal information to outside
                            parties without your explicit consent.
                        </p>

                        <h2>4. Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal
                            information against unauthorized access, alteration, disclosure, or
                            destruction. However, no method of transmission over the Internet is
                            100% secure.
                        </p>

                        <h2>5. Cookies</h2>
                        <p>
                            Our website uses cookies to enhance user experience. You can find more information about our use of cookies in our <a href="/cookies-policy" style={{ color: 'var(--navy-primary)', textDecoration: 'underline' }}>Cookies Policy</a>.
                        </p>

                        <h2>6. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not
                            responsible for the privacy practices of such external sites.
                        </p>

                        <h2>7. Changes to This Policy</h2>
                        <p>
                            We reserve the right to update this Privacy Policy at any time. Any
                            changes will be posted on this page with a revised effective date.
                        </p>

                        <h2>8. Contact Us</h2>
                        <p>
                            If you have questions regarding this Privacy Policy, please contact us
                            through our website contact form.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
