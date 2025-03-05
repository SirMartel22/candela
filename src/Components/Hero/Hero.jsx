import React from 'react'
import HeroVideo from '../../assets/candelabgvideo.mp4'
import './Hero.css'

const Hero = () => {
  return (

    <div className='hero-container'>
        <video src={HeroVideo} autoPlay muted loop>
            
        </video>
        <div className= 'hero-text'>
            <h1> Turn Up the Radiance </h1>
            <p>Light up your stage with Candela – where innovation meets illumination.</p>

            <button className="btn heroBtn">Experience the Glow</button>
        </div>
    </div>
  )
}

export default Hero
