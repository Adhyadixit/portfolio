import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="footer__gold-line"></div>

                <div className="footer__inner">
                    <div>
                        <div className="footer__brand-name">
                            <Image
                                src="/nabrel_white_on_blue-removebg-preview.png"
                                alt="Nabrel"
                                width={300}
                                height={110}
                                className="header__logo-img"
                            />
                        </div>
                        <p className="footer__brand-desc">
                            A privately governed principal investment office originating, underwriting, and
                            structuring long-term capital solutions.
                        </p>
                        <div className="footer__social">
                            <a 
                                href="https://www.linkedin.com/company/nabrel" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer__social-link"
                                aria-label="LinkedIn"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="footer__col-title">Platform</div>
                        <div className="footer__links">
                            <Link href="/who-we-are" className="footer__link">About</Link>
                            <Link href="/what-we-do" className="footer__link">Investment Focus</Link>
                            <Link href="/investment-approach" className="footer__link">Investment Approach</Link>
                            <Link href="/partnerships" className="footer__link">Strategic Alignment</Link>
                            <Link href="/contact" className="footer__link">Engagement</Link>
                        </div>
                    </div>

                    <div>
                        <div className="footer__col-title">Inquiries</div>
                        <div className="footer__links">
                            <Link href="/contact" className="footer__link">Engage With Us</Link>
                        </div>
                        <div className="footer__col-title" style={{ marginTop: '2rem' }}>Locations</div>
                        <div className="footer__links">
                            <span className="footer__link" style={{ cursor: 'default' }}>
                                United Arab Emirates | United Kingdom | Switzerland
                            </span>
                            <span className="footer__link" style={{ cursor: 'default', color: 'rgba(255, 255, 255, 0.6)' }}>
                                Planned expansion in the United States and Hong Kong.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span className="footer__copyright">
                        &copy; {currentYear} Nabrel. All rights reserved.
                    </span>
                    <div className="footer__legal">
                        <Link href="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
                        <Link href="/cookies-policy" className="footer__legal-link">Cookies Policy</Link>
                        <Link href="/terms-of-use" className="footer__legal-link">Terms of Use</Link>
                        <Link href="/legal-disclaimer" className="footer__legal-link">Legal Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
