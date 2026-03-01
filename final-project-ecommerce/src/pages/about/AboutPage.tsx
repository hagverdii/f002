import React, { useState } from "react";
import "./aboutPage.css";

const TwitterIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
  </svg>
);
const InstagramIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
    <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
  </svg>
);
const LinkedInIcon = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
    <rect x='2' y='9' width='4' height='12' />
    <circle cx='4' cy='4' r='2' />
  </svg>
);
const DeliveryIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='1' y='3' width='15' height='13' />
    <polygon points='16 8 20 8 23 11 23 16 16 16 16 8' />
    <circle cx='5.5' cy='18.5' r='2.5' />
    <circle cx='18.5' cy='18.5' r='2.5' />
  </svg>
);
const HeadphonesIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M3 18v-6a9 9 0 0 1 18 0v6' />
    <path d='M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z' />
  </svg>
);
const ShieldIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
    <polyline points='9 12 11 14 15 10' />
  </svg>
);
const StoreIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M3 9l1-5h16l1 5' />
    <path d='M3 9a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2' />
    <path d='M5 11v9h14v-9' />
    <line x1='9' y1='15' x2='15' y2='15' />
  </svg>
);
const SaleIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10' />
    <line x1='12' y1='8' x2='12' y2='12' />
    <line x1='12' y1='16' x2='12.01' y2='16' />
  </svg>
);
const BagIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' />
    <line x1='3' y1='6' x2='21' y2='6' />
    <path d='M16 10a4 4 0 0 1-8 0' />
  </svg>
);
const MoneyIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='12' y1='1' x2='12' y2='23' />
    <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
  </svg>
);

const STATS = [
  { icon: <StoreIcon />, value: "10.5k", label: "Sallers active our site" },
  { icon: <SaleIcon />, value: "33k", label: "Monthly Product Sale", highlight: true },
  { icon: <BagIcon />, value: "45.5k", label: "Customer active in our site" },
  { icon: <MoneyIcon />, value: "25k", label: "Annual gross sale in our site" },
];

const TEAM = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

const PERKS = [
  { icon: <DeliveryIcon />, title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140" },
  { icon: <HeadphonesIcon />, title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support" },
  { icon: <ShieldIcon />, title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days" },
];

const TOTAL_DOTS = 5;

const AboutPage: React.FC = () => {
  const [activeDot, setActiveDot] = useState(2);

  return (
    <div className='about-page'>
      <section className='about-story'>
        <div className='about-story-text'>
          <h1 className='about-story-title'>Our Story</h1>
          <p className='about-story-para'>
            Launced in 2015, Exclusive is South Asia's premier online shopping marketplace with an active
            presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
          </p>
          <p className='about-story-para'>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
            diverse assotment in categories ranging from consumer.
          </p>
        </div>
        <div className='about-story-image-wrap'>
          <img
            src='https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80'
            alt='Shopping'
            className='about-story-image'
          />
        </div>
      </section>

      <section className='about-stats'>
        {STATS.map((stat, i) => (
          <div key={i} className={`about-stat-card ${stat.highlight ? "about-stat-card--highlight" : ""}`}>
            <div
              className={`about-stat-icon-wrap ${stat.highlight ? "about-stat-icon-wrap--highlight" : ""}`}
            >
              {stat.icon}
            </div>
            <span className='about-stat-value'>{stat.value}</span>
            <span className='about-stat-label'>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className='about-team'>
        <div className='about-team-grid'>
          {TEAM.map((member, i) => (
            <div key={i} className='about-team-card'>
              <div className='about-team-image-wrap'>
                <img src={member.image} alt={member.name} className='about-team-image' />
              </div>
              <h3 className='about-team-name'>{member.name}</h3>
              <p className='about-team-role'>{member.role}</p>
              <div className='about-team-socials'>
                <a href='#' aria-label='Twitter' className='about-social-link'>
                  <TwitterIcon />
                </a>
                <a href='#' aria-label='Instagram' className='about-social-link'>
                  <InstagramIcon />
                </a>
                <a href='#' aria-label='LinkedIn' className='about-social-link'>
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className='about-team-dots'>
          {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
            <button
              key={i}
              className={`about-team-dot ${i === activeDot ? "about-team-dot--active" : ""}`}
              onClick={() => setActiveDot(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section className='about-perks'>
        {PERKS.map((perk, i) => (
          <div key={i} className='about-perk'>
            <div className='about-perk-icon-wrap'>{perk.icon}</div>
            <h4 className='about-perk-title'>{perk.title}</h4>
            <p className='about-perk-desc'>{perk.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutPage;
