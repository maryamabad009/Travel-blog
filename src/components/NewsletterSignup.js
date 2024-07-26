// src/components/NewsletterSignup.js
import React, { useState } from 'react';
import './NewsletterSignup.css';

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Subscribed with: ${email}`);
  };

  return (
    <div className="newsletter-signup-container">
      <h2 className="section-title">Newsletter Signup</h2>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
