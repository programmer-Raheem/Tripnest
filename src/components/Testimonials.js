import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: "★★★★★",
      quote: "TripNest made my dream vacation to Bali unforgettable. Everything was perfectly organized!",
      caption: "Bali 7-day package (Flights + Hotel included)"
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Daniel Lee",
      location: "Toronto, Canada",
      rating: "★★★★☆",
      quote: "We did a Europe tour with the family—smooth, stress-free, and amazing value.",
      caption: "Europe Family Tour (Flights + Guide included)"
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Janny Harloz",
      location: "Dubai, UAE",
      rating: "★★★★★",
      quote: "The Maldives package was worth every penny. I'll definitely travel again.",
      caption: "Luxury Maldives Beach Resort — 5 nights"
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      name: "James Carter",
      location: "London, UK",
      rating: "★★★★☆",
      quote: "Best agency I've used. Flights, hotels, activities—TripNest handled it all.",
      caption: "Thailand Adventure Tour — 8 days, guided"
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      name: "Maria Gonzalez",
      location: "Madrid, Spain",
      rating: "★★★★★",
      quote: "The most romantic honeymoon in Santorini—seamless from start to finish.",
      caption: "Hunza Honeymoon — 6 nights, private transfers"
    },
    {
      id: 6,
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Liam Anderson",
      location: "Sydney, Australia",
      rating: "★★★★★",
      quote: "From Tokyo to Kyoto—every detail was on point. Incredible experience.",
      caption: "Japan Culture & Cities — 9 days"
    },
    {
      id: 7,
      image: "https://randomuser.me/api/portraits/women/36.jpg",
      name: "Emily Brown",
      location: "Los Angeles, USA",
      rating: "★★★★☆",
      quote: "Dubai adventure was perfect—desert safari and luxury stays were a highlight.",
      caption: "Dubai Luxury + Desert Safari — 5 days"
    },
    {
      id: 8,
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "Omar Khalid",
      location: "Lahore, Pakistan",
      rating: "★★★★★",
      quote: "Istanbul, Cappadocia, Antalya—every stop was unforgettable. Thank you, TripNest!",
      caption: "Turkey Highlights — 10 days"
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.pageHero}>
        <div className="container">
          <h1>What Our Travelers Say</h1>
          <p>Real stories from journeys around the world.</p>
        </div>
      </div>

      <main className={styles.containers}>
        <section className={styles.testimonialGrid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p className={styles.muted}>{testimonial.location}</p>
              <div className={styles.stars}>{testimonial.rating}</div>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <p className={styles.caption}>{testimonial.caption}</p>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
};

export default Testimonials;