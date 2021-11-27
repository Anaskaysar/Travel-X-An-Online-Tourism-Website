import React from 'react';
import { Button } from '../../Components/Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      
      <h1>Go Endlessly</h1>
      <p>Ready to explore?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Featured Packages
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Book A Trip
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;