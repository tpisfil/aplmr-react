import React from 'react';
import '../App.css';
import Button from './Button';
import './Main.css';

const Main = () => {
  return (
    <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' buttonSize="btn--large">GET STARTED</Button>
        </div>
    </div>
  )
}

export default Main