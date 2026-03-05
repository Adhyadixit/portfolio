import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import { getAllMediaMap } from '@/lib/media';

export const metadata: Metadata = {
    title: 'Cookies Policy',
};

export default async function CookiesPolicyPage() {
    const mediaMap = await getAllMediaMap();
    const media = (key: string, fallback: string) => mediaMap[key] || fallback;

    return (
        <main>
            <section
                className="editorial-hero editorial-hero--center"
                style={{ backgroundImage: `url(${media('cookies_policy_hero', '/images/hero-skyline.png')})` }}
            >
                <div className="editorial-hero__overlay" aria-hidden="true" />
                <div className="container">
                    <div className="editorial-hero__content editorial-hero__content--center">
                        <FadeIn>
                            <span className="page-hero__overline">Legal</span>
                            <span className="editorial-hero__divider" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn delay={1}>
                            <h1 className="page-hero__title">Cookies Policy</h1>
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
                            Nabrel ("we", "our", or "us") uses cookies and similar tracking technologies on our website. This Cookies Policy explains what these technologies are, why we use them, and your rights to control our use of them.
                        </p>

                        <h2>2. What are cookies?</h2>
                        <p>
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                        </p>

                        <h2>3. Why do we use cookies?</h2>
                        <p>We use first-party and third-party cookies for several reasons:</p>
                        <ul>
                            <li><strong>Essential Cookies:</strong> Some cookies are strictly necessary for technical reasons in order for our website to operate.</li>
                            <li><strong>Performance & Analytics Cookies:</strong> These cookies collect information about how you use our website, like which pages you visited and which links you clicked on. None of this information can be used to identify you.</li>
                            <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make when you visit in order to provide enhanced, more personal features.</li>
                        </ul>

                        <h2>4. How can I control cookies?</h2>
                        <p>
                            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                        </p>

                        <h2>5. Changes to this Cookies Policy</h2>
                        <p>
                            We may update this Cookies Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookies Policy regularly to stay informed about our use of cookies and related technologies.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
