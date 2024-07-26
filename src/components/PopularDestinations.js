import React from 'react';
import './PopularDestinations.css';

// Import images
import parisImage from '../images/paris.jpg';
import tokyoImage from '../images/tokoyo.jpg';
import newYorkImage from '../images/new.jpg';

const destinations = [
  {
    image: parisImage,
    title: 'Paris',
    description: 'Experience the charm of the City of Lights.',
  },
  {
    image: tokyoImage,
    title: 'Tokyo',
    description: 'Discover the vibrant culture of Japan’s capital.',
  },
  {
    image: newYorkImage,
    title: 'New York',
    description: 'Explore the bustling streets of the Big Apple.',
  }
];

function PopularDestinations() {
  return (
    <div className="popular-destinations-container">
      <div className="section-title-wrapper">
        <h2 className="section-title">Popular Destinations</h2>
      </div>
      <div className="popular-destinations-grid">
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
  );
}

export default PopularDestinations;
