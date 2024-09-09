// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2>Discover Your Next Adventure</h2>
        <p>Explore the most beautiful destinations and create unforgettable memories.</p>
        <a href="#destinations" className="btn-primary">Explore Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
