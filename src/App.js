import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopularDestinations from './components/PopularDestinations';
import LatestBlogPosts from './components/LatestBlogPosts';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage'; // Import the BlogPage component
import DestinationsPage from './components/DestinationsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <PopularDestinations />
            <LatestBlogPosts />
            <NewsletterSignup />
          </>
        } />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/destinations" element={<DestinationsPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
