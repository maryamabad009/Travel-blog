// src/components/LatestBlogPosts.js
import React from 'react';
import './LatestBlogPosts.css';

// Import images
import icelandImage from '../images/iceland.jpg';
import italyImage from '../images/italy.jpg';
import southImage from '../images/south.jpg';

const blogPosts = [
  {
    image: icelandImage,
    title: 'Exploring the Hidden Gems of Iceland',
    excerpt: 'Discover the breathtaking landscapes and hidden treasures of Iceland in our latest adventure.',
  },
  {
    image: italyImage,
    title: 'A Culinary Journey Through Italy',
    excerpt: 'Join us on a delicious journey through the diverse and flavorful cuisine of Italy.',
  },
  {
    image: southImage,
    title: 'The Ultimate Guide to Backpacking in South America',
    excerpt: 'Everything you need to know for an unforgettable backpacking adventure across South America.',
  }
];

function LatestBlogPosts() {
  return (
    <div className="latest-blog-posts-container">
      <h2 className="section-title">Latest Blog Posts</h2>
      <div className="latest-blog-posts-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-post-card" key={index}>
            <img src={post.image} alt={post.title} />
            <div className="blog-post-info">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default LatestBlogPosts;
