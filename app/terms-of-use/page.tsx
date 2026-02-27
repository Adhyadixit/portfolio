import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Use',
    description: 'Terms and conditions governing the use of the Nabrel website.',
};

export default function TermsOfUsePage() {
    return (
        <section className="legal-page">
            <div className="container">
                <div className="legal-page__content">
                    <h1 className="legal-page__title">Terms of Use</h1>

                    <p>
                        Welcome to the Nabrel website. By accessing or using this website, you
                        agree to be bound by these Terms of Use. If you do not agree to these
                        terms, please do not use this website.
                    </p>

                    <h2>Use of Website</h2>
                    <p>
                        This website is provided for informational purposes only. The content
                        on this website does not constitute an offer, solicitation, or
                        recommendation to buy or sell any securities or investment products.
                    </p>

                    <h2>Intellectual Property</h2>
                    <p>
                        All content on this website, including text, graphics, logos, and
                        images, is the property of Nabrel and is protected by applicable
                        intellectual property laws. You may not reproduce, distribute, or
                        create derivative works without our prior written consent.
                    </p>

                    <h2>Accuracy of Information</h2>
                    <p>
                        While we strive to ensure the accuracy of the information on this
                        website, we make no warranties or representations regarding its
                        completeness, accuracy, or reliability. Information is subject to
                        change without notice.
                    </p>

                    <h2>Limitation of Liability</h2>
                    <p>
                        Nabrel shall not be liable for any direct, indirect, incidental, or
                        consequential damages arising from your use of this website or reliance
                        on any information provided herein.
                    </p>

                    <h2>Governing Law</h2>
                    <p>
                        These Terms of Use shall be governed by and construed in accordance
                        with applicable laws, without regard to conflict of law principles.
                    </p>

                    <h2>Modifications</h2>
                    <p>
                        Nabrel reserves the right to modify these Terms of Use at any time.
                        Continued use of the website after any changes constitutes acceptance
                        of the revised terms.
                    </p>
                </div>
            </div>
        </section>
    );
}
