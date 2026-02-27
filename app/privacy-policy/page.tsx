import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Nabrel privacy policy regarding the collection, use, and protection of personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <section className="legal-page">
            <div className="container">
                <div className="legal-page__content">
                    <h1 className="legal-page__title">Privacy Policy</h1>

                    <p>
                        Nabrel (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting
                        the privacy of individuals who visit our website. This Privacy Policy
                        outlines how we collect, use, and safeguard your information.
                    </p>

                    <h2>Information We Collect</h2>
                    <p>
                        We may collect personal information that you voluntarily provide to us
                        when you contact us through our website, including your name,
                        organization, email address, and any other information you choose to
                        provide in the message field.
                    </p>

                    <h2>How We Use Your Information</h2>
                    <p>
                        We use the information we collect to respond to your inquiries,
                        evaluate potential partnerships, and improve our services. We do not
                        sell, trade, or otherwise transfer your personal information to outside
                        parties without your explicit consent.
                    </p>

                    <h2>Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal
                        information against unauthorized access, alteration, disclosure, or
                        destruction. However, no method of transmission over the Internet is
                        100% secure.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        Our website may use cookies to enhance user experience. You may choose
                        to set your web browser to refuse cookies, although this may affect
                        certain functionality.
                    </p>

                    <h2>Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites. We are not
                        responsible for the privacy practices of such external sites.
                    </p>

                    <h2>Changes to This Policy</h2>
                    <p>
                        We reserve the right to update this Privacy Policy at any time. Any
                        changes will be posted on this page with a revised effective date.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have questions regarding this Privacy Policy, please contact us
                        through our website contact form.
                    </p>
                </div>
            </div>
        </section>
    );
}
