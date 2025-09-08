import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.mapOverlay} aria-hidden="true"></div>

      <div className={styles.aboutContainer}>
        <header className={styles.aboutHeader}>
          <h2>About TripNest</h2>
          <p>Your journey begins here</p>
        </header>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h3>Who We Are</h3>
            <p>
              At TripNest, we believe every journey should be unforgettable. We are a
              modern travel agency committed to helping explorers discover the
              world's most breathtaking destinations with ease, comfort, and
              authenticity.
            </p>
          </div>
          <figure className={styles.aboutImage}>
            {/* Image would go here */}
          </figure>
        </div>

        <div className={styles.missionVision} aria-label="Mission and Vision">
          <article className={styles.aboutCard}>
            <div className={styles.icon} aria-hidden="true">✈️</div>
            <h4>Affordable Travel</h4>
            <p>Exclusive deals to make your dream trips budget-friendly.</p>
          </article>
          <article className={styles.aboutCard}>
            <div className={styles.icon} aria-hidden="true">🌍</div>
            <h4>Global Destinations</h4>
            <p>Explore hidden gems and iconic landmarks across the globe.</p>
          </article>
          <article className={styles.aboutCard}>
            <div className={styles.icon} aria-hidden="true">🤝</div>
            <h4>Personalized Plans</h4>
            <p>Custom itineraries tailored to your preferences and needs.</p>
          </article>
          <article className={styles.aboutCard}>
            <div className={styles.icon} aria-hidden="true">🌿</div>
            <h4>Eco-Friendly Tourism</h4>
            <p>Promoting sustainable travel for a greener planet.</p>
          </article>
        </div>

        {/* Animated Travel Routes SVG with Airplanes */}
        <svg className={styles.routes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" aria-hidden="true">
          <path id="routePath1" d="M100,220 C280,120 520,300 700,200" />
          <text font-size="20" dy="-10">
            <textPath href="#routePath1" startOffset="0%">
              ✈️
              <animate attributeName="startOffset" from="0%" to="100%" dur="9s" repeatCount="indefinite" />
            </textPath>
          </text>
          <path id="routePath2" d="M680,140 C560,60 240,60 140,140" />
          <text font-size="18" dy="16">
            <textPath href="#routePath2" startOffset="100%">
              ✈️
              <animate attributeName="startOffset" from="0%" to="100%" dur="9s" repeatCount="indefinite" />
            </textPath>
          </text>
          <path id="routePath3" d="M80,320 C240,260 560,360 740,300" />
          <text font-size="18" dy="-10">
            <textPath href="#routePath3" startOffset="0%">
              ✈️
              <animate attributeName="startOffset" from="0%" to="100%" dur="6s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
};

export default About;