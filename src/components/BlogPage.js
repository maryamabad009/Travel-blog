import React from 'react';
import './BlogPage.css';
import NewsletterSignup from './NewsletterSignup';

// Import images
import icelandImage from '../images/iceland.jpg';
import italyImage from '../images/italy.jpg';
import southImage from '../images/south.jpg';
import blogBannerImage from '../images/blog-banner.jpg'; // New image for the banner

const blogPosts = [
  {
    image: icelandImage,
    title: 'Exploring the Hidden Gems of Iceland',
    excerpt: 'Discover the breathtaking landscapes and hidden treasures of Iceland in our latest adventure.',
    link: 'https://en.wikipedia.org/wiki/Iceland' // Link to the full post
  },
  {
    image: italyImage,
    title: 'A Culinary Journey Through Italy',
    excerpt: 'Join us on a delicious journey through the diverse and flavorful cuisine of Italy.',
    link: 'https://en.wikipedia.org/wiki/Italy' // Link to the full post
  },
  {
    image: southImage,
    title: 'The Ultimate Guide to Backpacking in South America',
    excerpt: 'Everything you need to know for an unforgettable backpacking adventure across South America.',
    link: 'https://en.wikipedia.org/wiki/South_America' // Link to the full post
  }
];

function BlogPage() {
  return (
    <div className="blog-page-container">
      {/* Banner Section */}
      <div className="banner-section">
        <img src={blogBannerImage} alt="Blog Banner" className="banner-image" />
        <div className="banner-text">
          <h1>BLOG</h1>
          <p>Recent travel blog posts</p>
        </div>
      </div>
      
      <div className="blog-page-content">
        <div className="blog-posts">
          <h2 className="section-title">Blog Posts</h2>
          <div className="blog-posts-grid">
            {blogPosts.map((post, index) => (
              <div className="blog-post-card" key={index}>
                <img src={post.image} alt={post.title} />
                <div className="blog-post-info">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href={post.link} className="read-more-button">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <aside className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="/category/adventure">Adventure</a></li>
              <li><a href="/category/food">Food</a></li>
              <li><a href="/category/travel-tips">Travel Tips</a></li>
              <li><a href="/category/culture">Culture</a></li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Recent Posts</h3>
            <ul>
              <li><a href="/blog/iceland">Exploring the Hidden Gems of Iceland</a></li>
              <li><a href="/blog/italy">A Culinary Journey Through Italy</a></li>
              <li><a href="/blog/south-america">The Ultimate Guide to Backpacking in South America</a></li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Tags</h3>
            <div className="tags">
              <a href="/tag/adventure">Adventure</a>
              <a href="/tag/food">Food</a>
              <a href="/tag/culture">Culture</a>
              <a href="/tag/nature">Nature</a>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </aside>
      </div>

      <NewsletterSignup /> 
    </div>
  );
}

export default BlogPage;
