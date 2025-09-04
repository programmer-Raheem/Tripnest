import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactRow}>
          {/* Left Side: Contact Info */}
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Reach out using the details below.</p>
            
            <div className={styles.contactDetail}>
              <i className="bi bi-envelope-fill"></i>
              <span>hello@tripnest.com</span>
            </div>
            
            <div className={styles.contactDetail}>
              <i className="bi bi-telephone-fill"></i>
              <span>+92 300 1234567</span>
            </div>
            
            <div className={styles.contactDetail}>
              <i className="bi bi-geo-alt-fill"></i>
              <span>2nd floor Ettihad hieghts, johar town, Lahore Pakistan</span>
            </div>
          </div>
          
          {/* Right Side: Contact Form */}
          <div className={styles.contactForm}>
            <div className={styles.formBox}>
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4" 
                    placeholder="Type your message here" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;