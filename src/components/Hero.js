import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section
      className={styles.hero}
      id="home"
      style={{ backgroundImage: `url(/bg.png)` }} // directly from public folder
    >
      <div className={styles.heroContainer}>
        <h2 className={styles.subtitle}>Welcome to TripNest</h2>
        <h1 className={styles.title}>
          It is Better to <br /> Travel Well
          <span className="text-primary"> Than</span> <br />
          <span className="text-primary"> to Arrive </span>
        </h1>
        
        <Link to="/booking" className={styles.ctaButton}>
          <i className="fa-solid fa-paper-plane me-2"></i> Start Your Journey
        </Link>
      </div>  
    </section>
  );
};

export default Hero;
