import React from 'react';
import './ContactPage.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import NewsletterSignup from './NewsletterSignup';

function ContactPage() {
  return (
    <div className="contact-page-container">
      <div className="contact-banner">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
       
        
        <section className="contact-form-section">
          <h2>Contact Form</h2>
          <div className="contact-form-card">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How can I contact customer support?</h3>
            <p>You can reach out to our customer support team via email or phone. Please see the contact information below.</p>
          </div>
          <div className="faq-item">
            <h3>What is the response time for inquiries?</h3>
            <p>We typically respond to inquiries within 24-48 hours. Our team works hard to address all queries as quickly as possible.</p>
          </div>
          <div className="faq-item">
            <h3>Can I update my contact information?</h3>
            <p>Yes, you can update your contact information by reaching out to us through the contact form below or via email.</p>
          </div>
        </section>
        <section className="contact-info-section">
          <h2>Contact Information</h2>
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

export default ContactPage;
