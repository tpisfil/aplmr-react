import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
        {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
        <h1>AP Lawn Mower Repair</h1>
        <p>Hablamos Espa&ntilde;ol!</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' buttonSize="btn--large">About Us </Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize="btn--large"><i class="fa-solid fa-phone"/> Contact Us!</Button>
        </div>
    </div>
  )
}

export default HeroSection