import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            <div className="container">
                <div className="footer__gold-line"></div>

                <div className="footer__inner">
                    <div>
                        <div className="footer__brand-name">
                            NABR<span>EL</span>
                        </div>
                        <p className="footer__brand-desc">
                            Private capital and finance platform focused on essential real assets,
                            strategic industries, and structured investment solutions.
                        </p>
                    </div>

                    <div>
                        <div className="footer__col-title">Platform</div>
                        <div className="footer__links">
                            <Link href="/who-we-are" className="footer__link">Who We Are</Link>
                            <Link href="/what-we-do" className="footer__link">What We Do</Link>
                            <Link href="/investment-approach" className="footer__link">Investment Approach</Link>
                            <Link href="/partnerships" className="footer__link">Partnerships</Link>
                            <Link href="/contact" className="footer__link">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <div className="footer__col-title">Inquiries</div>
                        <div className="footer__links">
                            <Link href="/contact" className="footer__link">Engage With Us</Link>
                            <a 
                                href="https://www.linkedin.com/company/nabrel" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="footer__link"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span className="footer__copyright">
                        &copy; {currentYear} Nabrel. All rights reserved.
                    </span>
                    <div className="footer__legal">
                        <Link href="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
                        <Link href="/terms-of-use" className="footer__legal-link">Terms of Use</Link>
                        <Link href="/legal-disclaimer" className="footer__legal-link">Legal Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
