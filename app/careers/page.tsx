import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

export const metadata = {
  title: 'Careers | Nabrel',
  description: 'Build a long-term career aligned with Nabrel’s mission across real assets, strategic industries, and structured finance.',
};

const openings = [
  {
    title: 'Investment Associate — Real Assets',
    location: 'Dubai, UAE',
    type: 'Full-time',
  },
  {
    title: 'Vice President, Strategic Industries',
    location: 'New York, USA',
    type: 'Full-time',
  },
  {
    title: 'Senior Analyst, Capital Formation',
    location: 'London, UK',
    type: 'Full-time',
  },
];

const benefits = [
  'Long-term alignment with carried interest and co-invest opportunities',
  'Global rotations across core platforms and operating partners',
  'Wellness, relocation, and professional development support',
];

export default function CareersPage() {
  return (
    <main className="page careers-page">
      <section className="section section-white">
        <div className="container">
          <FadeIn>
            <div className="page-intro">
              <p className="eyebrow">Careers</p>
              <h1>Build durable value with Nabrel</h1>
              <p>
                We recruit investors, operators, and technologists who are committed to disciplined underwriting, operational
                excellence, and long-duration partnerships. Explore current openings and reach out to our talent team.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-white">
        <div className="container careers-grid">
          <FadeIn>
            <div>
              <h2>Open Roles</h2>
              <ul className="careers-openings">
                {openings.map((role) => (
                  <li key={role.title}>
                    <h3>{role.title}</h3>
                    <p>{role.location}</p>
                    <span>{role.type}</span>
                    <Link href="/contact" className="primary-button primary-button--ghost">
                      <span>Discuss Role</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={2}>
            <div>
              <h2>Life at Nabrel</h2>
              <ul className="careers-benefits">
                {benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="mailto:talent@nabrel.com" className="primary-button">
                <span>Email Talent Team</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
