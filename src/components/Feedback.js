import React, { useState } from 'react';
import styles from './Feedback.module.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit it
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="feedback" className={styles.feedbackSection}>
      <div className={styles.feedbackHero}>
        <div className={styles.feedbackContainer}>
          <h1>We Value Your Feedback</h1>
          <p>Tell us how we did and help us improve your next trip.</p>
        </div>
      </div>

      <main className={styles.feedbackContainer}>
        <section className={styles.feedback}>
          <form id="feedbackForm" className={styles.feedbackForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.feedbackRow}>
              <div className={styles.feedbackField}>
                <label htmlFor="name">Your Name</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? styles.errorInput : ''}
                />
                {errors.name && <small className={styles.error} data-for="name">{errors.name}</small>}
              </div>
              <div className={styles.feedbackField}>
                <label htmlFor="email">Your Email</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <small className={styles.error} data-for="email">{errors.email}</small>}
              </div>
            </div>

            <div className={styles.feedbackField}>
              <label htmlFor="subject">Subject</label>
              <input 
                id="subject" 
                name="subject" 
                type="text" 
                placeholder="Booking support, package inquiry, etc." 
                value={formData.subject}
                onChange={handleInputChange}
                className={errors.subject ? styles.errorInput : ''}
              />
              {errors.subject && <small className={styles.error} data-for="subject">{errors.subject}</small>}
            </div>

            <div className={styles.feedbackField}>
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                placeholder="Write your feedback..." 
                value={formData.message}
                onChange={handleInputChange}
                className={errors.message ? styles.errorInput : ''}
              ></textarea>
              {errors.message && <small className={styles.error} data-for="message">{errors.message}</small>}
            </div>

            <button type="submit" className={styles.feedbackBtn}>Submit Feedback</button>
            {isSubmitted && <p className={styles.thankyou}>🎉 Thank you! Your feedback has been received.</p>}
          </form>
        </section>
      </main>
    </section>
  );
};

export default Feedback;