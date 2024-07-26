import React from 'react';
import './AboutPage.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import NewsletterSignup from './NewsletterSignup';
import bannerImage from '../images/about.jpg'; // Ensure correct path

function AboutPage() {
  return (
    <div className="about-page-container">
      <div className="about-banner">
        <img src={bannerImage} alt="About Us Banner" className="banner-image" />
      </div>
      <div className="about-content">
        <section className="about-section">
          <h2>About the Blog</h2>
          <p>
            Welcome to our travel blog! We are passionate travelers who love to explore new places, experience different cultures, and share our adventures with the world. Our blog is a place where we document our journeys, provide travel tips, and inspire others to embark on their own adventures.
          </p>
        </section>
        <section className="about-section">
          <h2>About the Author(s)</h2>
          <p>
            Our team consists of avid travelers and storytellers who are dedicated to bringing you the best travel content. We believe in the power of travel to open minds, foster understanding, and create lasting memories. Meet our authors:
          </p>
          <ul>
            <li><strong>John Doe:</strong> A travel enthusiast with a knack for finding hidden gems and unique experiences.</li>
            <li><strong>Jane Smith:</strong> A food lover and cultural explorer who enjoys discovering new cuisines and traditions.</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Mission Statement</h2>
          <p>
            Our mission is to inspire and empower travelers to explore the world with curiosity and respect. We strive to provide valuable insights, practical tips, and captivating stories that enrich your travel experiences. We believe in responsible and sustainable travel that benefits both travelers and the destinations they visit.
          </p>
        </section>
        <section className="about-section">
          <h2>Contact Information</h2>
          <p>
            We love hearing from our readers! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us:
          </p>
          <ul>
            <li>Email: contact@travelblog.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Follow us on social media:
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
      <NewsletterSignup />
    </div>
  );
}

export default AboutPage;
