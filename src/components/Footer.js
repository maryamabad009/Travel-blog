import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-socials">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
      </div>
      <div className="footer-contact">
        <p>Email: contact@travelblog.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Your Travel Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
