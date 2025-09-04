import React from 'react';
import './Services.css';

const Services = () => {
  const internationalTours = [
    {
      id: 1,
      image: 'tokyo.jpg',
      alt: 'Tokyo',
      title: 'TOKYO',
      description: 'Tokyo, Japan\'s vibrant capital, blends ultramodern skyscrapers with historic temples, bustling streets, anime culture, diverse cuisine, and advanced tech—offering an unforgettable mix of tradition and innovation.'
    },
    {
      id: 2,
      image: 'turkey.jpg',
      alt: 'Turkey',
      title: 'TURKEY',
      description: 'Turkey bridges Europe and Asia, offering rich history, diverse culture, stunning landscapes, ancient ruins, vibrant bazaars, and delicious cuisine—from Istanbul\'s mosques to Cappadocia\'s surreal scenery.'
    },
    {
      id: 3,
      image: 'italy.jpg',
      alt: 'Italy',
      title: 'ITALY',
      description: 'Italy captivates with timeless art, rich history, romantic cities, scenic coastlines, and world-famous cuisine—from Rome\'s ruins to Venice\'s canals and Tuscany\'s rolling vineyards.'
    },
    {
      id: 4,
      image: 'iceland.jpg',
      alt: 'Iceland',
      title: 'ICELAND',
      description: 'Iceland, a land of fire and ice, features dramatic volcanoes, hot springs, geysers, and the Northern Lights, offering a unique blend of rugged natural beauty and stunning landscapes.'
    },
    {
      id: 5,
      image: 'dubai.jpg',
      alt: 'Dubai',
      title: 'DUBAI',
      description: 'Dubai dazzles with futuristic skyscrapers, luxury malls, desert safaris, and iconic landmarks like Burj Khalifa. A global hub for business, shopping, entertainment, and unforgettable experiences.'
    }
  ];

  const nationalTours = [
    {
      id: 1,
      image: 'muree.jpg',
      alt: 'Murree',
      title: 'MUREE',
      description: 'Murree, a charming hill station near Islamabad, features pine forests, cool breezes, colonial architecture, and scenic viewpoints. A classic escape for relaxation, especially in summer.'
    },
    {
      id: 2,
      image: 'hunza.jpg',
      alt: 'Hunza',
      title: 'HUNZA',
      description: 'Hunza Valley, nestled in Gilgit-Baltistan, offers majestic mountains, turquoise lakes, ancient forts, and warm hospitality. A paradise for nature lovers, photographers, and peace seekers alike.'
    },
    {
      id: 3,
      image: 'skardu.jpg',
      alt: 'Skardu',
      title: 'SKARDU',
      description: 'Skardu stuns with rugged peaks, alpine lakes, and valleys like Shigar and Khaplu. It\'s the gateway to K2 and a dream for trekkers and explorers.'
    },
    {
      id: 4,
      image: 'swat.jpg',
      alt: 'Swat',
      title: 'SWAT',
      description: 'Swat Valley features lush landscapes, rivers, and mountains—an ideal destination for nature lovers and cultural exploration.'
    },
    {
      id: 5,
      image: 'darawar.jpg',
      alt: 'Darawar Fort',
      title: 'DARAWAR FORT',
      description: 'Derawar Fort, a majestic 9th-century structure in Cholistan Desert, features 40 towering bastions, vast walls, and rich Bahawalpur history—an architectural marvel amid the golden sands.'
    }
  ];

  return (
    <div id="Services">  
      <div id="services-page">
        <h1>Our Services</h1>

        <h2>International Tours</h2>
        <ul className="services-container">
          {internationalTours.map(tour => (
            <li key={tour.id}>
              <img src={`/${tour.image}`} alt={tour.alt} />
              <div className="content">
                <span>
                  <h2>{tour.title}</h2>
                  <p>{tour.description}</p>
                </span>
              </div>
            </li>
          ))}
        </ul>

        <h2>National Tours</h2>
        <ul className="services-container">
          {nationalTours.map(tour => (
            <li key={tour.id}>
              <img src={`/${tour.image}`} alt={tour.alt} />
              <div className="content">
                <span>
                  <h2>{tour.title}</h2>
                  <p>{tour.description}</p>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;