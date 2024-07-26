import React from 'react';
import './DestinationsPage.css';
import NewsletterSignup from './NewsletterSignup';

// Import images
import destinationBannerImage from '../images/destination-banner.jpg';
import icelandImage from '../images/iceland.jpg';
import italyImage from '../images/italy.jpg';
import southImage from '../images/south.jpg';

const destinations = [
  {
    image: icelandImage,
    title: 'Iceland',
    description: 'Discover the breathtaking landscapes and hidden treasures of Iceland.'
  },
  {
    image: italyImage,
    title: 'Italy',
    description: 'Explore the diverse and flavorful cuisine of Italy.'
  },
  {
    image: southImage,
    title: 'South America',
    description: 'An unforgettable backpacking adventure across South America.'
  }
];

function DestinationsPage() {
  return (
    <div className="destinations-page-container">
      <div className="destinations-banner-section">
        <img src={destinationBannerImage} alt="Destinations Banner" className="destinations-banner-image" />
        <div className="destinations-banner-text">
          <h1>Destinations</h1>
          <p>Pick a destination and start exploring!</p>
        </div>
      </div>

      <div className="destinations-page-content">
        <h2 className="section-title">Destinations</h2>
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div className="destination-card" key={index}>
              <img src={destination.image} alt={destination.title} />
              <div className="destination-info">
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NewsletterSignup /> 
    </div>
  );
}

export default DestinationsPage;
