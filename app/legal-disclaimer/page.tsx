import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal Disclaimer',
    description: 'Legal disclaimer for Nabrel website content and investment information.',
};

export default function LegalDisclaimerPage() {
    return (
        <section className="legal-page">
            <div className="container">
                <div className="legal-page__content">
                    <h1 className="legal-page__title">Legal Disclaimer</h1>

                    <p>
                        The information contained on this website is provided for general
                        informational purposes only and does not constitute financial, legal,
                        or investment advice.
                    </p>

                    <h2>No Offer or Solicitation</h2>
                    <p>
                        Nothing on this website constitutes an offer to sell, or a
                        solicitation of an offer to buy, any interest in any fund, vehicle, or
                        investment product managed or advised by Nabrel or its affiliates. Any
                        such offer or solicitation will be made only by means of formal
                        offering documents.
                    </p>

                    <h2>No Investment Advice</h2>
                    <p>
                        The information provided on this website should not be relied upon as
                        investment advice. Prospective investors should consult their own
                        financial, legal, and tax advisors before making any investment
                        decisions.
                    </p>

                    <h2>Forward-Looking Statements</h2>
                    <p>
                        This website may contain forward-looking statements based on current
                        expectations and assumptions. These statements involve risks and
                        uncertainties, and actual results may differ materially from those
                        expressed or implied.
                    </p>

                    <h2>No Performance Guarantees</h2>
                    <p>
                        Past performance is not indicative of future results. No guarantee or
                        representation is made that any investment strategy will achieve its
                        objectives or avoid losses.
                    </p>

                    <h2>Regulatory Notice</h2>
                    <p>
                        Nabrel and its affiliates may not be registered as investment advisers
                        in all jurisdictions. The availability of services described on this
                        website may be restricted in certain jurisdictions.
                    </p>

                    <h2>Third-Party Information</h2>
                    <p>
                        Any references to third-party data, research, or publications are
                        provided for informational purposes only. Nabrel does not endorse or
                        guarantee the accuracy of such information.
                    </p>
                </div>
            </div>
        </section>
    );
}
