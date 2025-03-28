import React from 'react'
import './About.css'
import { PiChurchThin } from "react-icons/pi";
import { GiCrystalShine } from "react-icons/gi";
import { IoFlameOutline } from "react-icons/io5";
import { GiMightySpanner } from "react-icons/gi";
import {Link as ScrollLink} from 'react-scroll'

const About = () => {
   
  return (
    <div className='about-container' id='about'>

     <div className='about'>
        <h1>Company Profile</h1>
        <p>At Candela, we bring events to life with cutting-edge stage lighting solutions that create unforgettable atmospheres. Whether it’s a 
             <span> church concert, wedding, corporate event, or naming ceremony,</span> our expert lighting designs set the perfect mood, 
            transforming ordinary spaces into extraordinary experiences.
        </p>

        <button className="aboutBtn">
            <ScrollLink to='video' spy={true} smooth={true} duration={800}>
                View Our Work
            </ScrollLink>
        </button>
        
      </div> 

      <div className='services'>
        <h2>What We Do</h2>

            <div className="concert container">
                <div className="church-icon">
                    <PiChurchThin className="icon" />
                </div>
                <div className="concert-text">
                    <h3>Concert & Event Lighting</h3>
                    <p> Dynamic lighting setups for church concerts, live performances, and corporate events.</p>
                </div>
                
            </div>

            <div className="wedding container">
                <div className="wedding-icon">
                    <GiCrystalShine className="icon" />
                </div>

                <div className="wedding-text">
                    <h3>Wedding & Reception Lighting</h3>
                     <p> Elegant lighting designs to set the perfect romantic and celebratory mood.</p>
                </div>
            
            </div>

            <div className="stage container">

                <div className="stage-icon">
                    <IoFlameOutline className = "icon" />
                </div>

                <div className="stage-text">
                    <h3>Theatrical & Stage Effects</h3>
                    <p> Professional lighting effects to bring drama, depth, and magic to your stage.</p>
                </div>
               
            </div>

            <div className="installation container">
                <div className="installation-icon">
                    <GiMightySpanner className="icon" />
                </div>

                <div className="installation-text">
                    <h3> Installation & Technical Support</h3>
                    <p> Expert setup, testing, and on-site lighting management.</p>
                </div>
                
            </div>
    
    </div>   
     
    </div>
  )
}

export default About
