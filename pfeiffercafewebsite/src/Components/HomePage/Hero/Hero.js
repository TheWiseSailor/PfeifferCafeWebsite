import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Pfeiffer's</h1>
        <p className="hero-description">Discover our delicious offerings and order now!</p>
        {/* will add an option to see the menu */}
        <a href="https://www.clover.com/online-ordering/pfeiffer-cafe-confections-shelby" className="hero-button">Order Now!</a>
      </div>
    </div>
  );
}

export default Hero;
