'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const decline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-consent__card">
                <div className="cookie-consent__text">
                    <p>
                        Nabrel uses cookies to enhance your experience and analyze site usage. By continuing to visit our site, you agree to our use of cookies as described in our <Link href="/cookies-policy">Cookies Policy</Link>.
                    </p>
                </div>
                <div className="cookie-consent__actions">
                    <button className="btn btn--white" style={{ border: '1px solid rgba(11,31,59,0.2)' }} onClick={decline}>
                        Decline
                    </button>
                    <button className="btn btn--navy" onClick={accept}>
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
