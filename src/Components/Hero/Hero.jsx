import React from 'react'
import HeroVideo from '../../assets/Candela-hero.mp4'
import './Hero.css'

const Hero = () => {
  return (

    <div className='hero-container'>
        <video src={HeroVideo} autoPlay muted loop>
            
        </video>
        <div>
            <h1> Turn Up the Radiance </h1>
            <p></p>

            <button className="btn">Experience the Glow</button>
        </div>
    </div>
  )
}

export default Hero
