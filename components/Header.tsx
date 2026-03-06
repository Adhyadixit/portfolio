'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/who-we-are', label: 'About' },
    { href: '/what-we-do', label: 'Investment Focus' },
    { href: '/investment-approach', label: 'Investment Approach' },
    { href: '/partnerships', label: 'Strategic Alignment' },
    { href: '/blog', label: 'Insights' },
    { href: '/contact', label: 'Engagement' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`header header--solid ${isScrolled ? 'header--scrolled' : ''}`}
            role="banner"
        >
            <div className="header__inner">
                <Link href="/" className="header__logo" aria-label="Nabrel Home">
                    <Image
                        src="/nabrel_white_on_blue-removebg-preview.png"
                        alt="Nabrel"
                        width={300}
                        height={110}
                        className="header__logo-img"
                        priority
                    />
                </Link>

                <nav className="header__nav" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`header__nav-link ${pathname === link.href ? 'header__nav-link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <button
                    className={`header__menu-toggle ${isMobileMenuOpen ? 'header__menu-toggle--open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav
                className={`header__mobile-nav ${isMobileMenuOpen ? 'header__mobile-nav--open' : ''}`}
                aria-label="Mobile navigation"
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`header__nav-link ${pathname === link.href ? 'header__nav-link--active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
