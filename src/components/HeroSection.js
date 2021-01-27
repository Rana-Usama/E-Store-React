import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css'

function HeroSection() {
 return (
  <div className='hero-container'>
   {/* <video src="/videos/video-2.mp4" autoPlay loop muted></video> */}
   <h1>Let's Buy</h1>
   <p>What are you waiting for!</p>
   <div className="hero-btns">
    <Button 
    className='btns'
    buttonSize='btn--large' 
    buttonStyle='btn--outline'>BUY NOW</Button>
    <Button 
    className='btns'
    buttonSize='btn--large' 
    buttonStyle='btn--primary'>WATCH TRAILER <i className='far fa-play-circle'/>
    </Button>

   </div>
  </div>
 )
}

export default HeroSection
