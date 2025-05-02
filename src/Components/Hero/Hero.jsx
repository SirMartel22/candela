import React, { useEffect } from 'react'
import './Hero.css'
import { Link as ScrollLink } from 'react-scroll'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

  useEffect(()=> {

    gsap.fromTo('.hero-text', {
      y: 50,
      opacity: 0.2,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease:'power2.out',
      ScrollTrigger: {
        trigger: '.hero-text',
 
      },
    }
  )
}, [])
  return (

    <div className='hero-container' id='hero'>
        <video src='https://res.cloudinary.com/djhfy0pr4/video/upload/v1745845871/candelabgvideo_z4dybk.mp4' autoPlay muted loop>
            
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
