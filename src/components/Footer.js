import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
        <p>© 2025 TripNest. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
