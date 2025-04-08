import React, { useEffect } from 'react'
import HeroVideo from '../../assets/candelabgvideo.mp4'
import './Hero.css'
import { Link as ScrollLink } from 'react-scroll'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

  useEffect(()=> {

    gsap.fromTo('.hero-text', {
      y: 50,
      opacity: 0.6,
    },
    {
      y: 0,
      opacity: 1,
      duration: 3,
      ease:'power2.in',
      ScrollTrigger: {
        trigger: '.hero-text',
        // start: 'top 80%',
        // toggleAction: " play none none none",
      },
    }
  )
}, [])
  return (

    <div className='hero-container' id='hero'>
        <video src={HeroVideo} autoPlay muted loop>
            
        </video>
        <div className= 'hero-text'>
            <h1> Turn Up the Radiance </h1>
            <p>Light up your stage with Candela – where innovation meets illumination.</p>

            {/* //hero section button code */}
            <button className="btn heroBtn">
                <ScrollLink to='gallery' spy={true} smooth={true} duration={900}>
                    Experience the Glow
                </ScrollLink> 
              </button>
        </div>
    </div>
  )
}

export default Hero
