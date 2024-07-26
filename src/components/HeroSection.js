import React from 'react';
import './HeroSection.css';
import sampleVideo from '../videos/home-video.mp4'; 
import bbcTravelLogo from '../images/bbc-travel.png';
import usaTodayLogo from '../images/usa.png';
import travelImage from '../images/image1.jpg';

function HeroSection() {
  return (
    <div>
      <div className="hero-container">
        <video className="hero-video" autoPlay loop muted>
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1 className="hero-subtitle">Journey Beyond</h1>
          <h2 className="hero-title">Discover Hidden Gems Around the Globe</h2>
          <button className="hero-button">Start Exploring</button>
        </div>
      </div>

      <div className="featured-container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Featured</h2>
        </div>
        <div className="featured-logos">
          <div className="featured-logo">
            <img src={bbcTravelLogo} alt="BBC Travel" />
          </div>
          <div className="featured-logo">
            <img src={usaTodayLogo} alt="USA Today" />
          </div>
        </div>
      </div> 

      <div className="introduction-container">
        <div className="intro-image">
          <img src={travelImage} alt="Travel" />
        </div>
        <div className="intro-content">
          <h2 className="section-title">Introduction</h2>
          <p>
            Welcome to our travel blog where we share our experiences and tips for discovering the most beautiful destinations around the world. Join us on our journey to explore hidden gems, meet new cultures, and create unforgettable memories.
          </p>
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
