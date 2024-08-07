import React from 'react';
import './Hero.css';
import LPImage from '../Hero/HeroImg/LPImage.png'; 

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={LPImage} alt="Landing Page" className="hero-image" />
    </div>
  );
}

export default Hero;