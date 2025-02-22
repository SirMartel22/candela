import React from 'react'
import HeroVideo from '../../assets/Candela-hero.mp4'
import './Hero.css'

const Hero = () => {
  return (

    <div className='hero-container'>
        <video src={HeroVideo} autoPlay muted loop>
            
        </video>
        <div>
            <h1> Candela Light and Brand</h1>
            <p></p>
        </div>
    </div>
  )
}

export default Hero
