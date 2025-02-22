import React from 'react'
import './About.css'

const About = () => {
   
  return (
    <div className='about-container'>
      <div className='about'>
        <h1>Company Profile</h1>
        <p>At Candela, we bring events to life with cutting-edge stage lighting solutions that create unforgettable atmospheres. Whether it’s a 
            <span>church concert, wedding, corporate event, or naming ceremony,</span> our expert lighting designs set the perfect mood, 
            transforming ordinary spaces into extraordinary experiences.
        </p>

        <button className="aboutBtn">View Our Work</button>
        
      </div> 

      <div className='services'>
        <h2>What We Do</h2>

            <div className="concert">
                <h3>Concert & Event Lighting</h3>
                <p> Dynamic lighting setups for church concerts, live performances, and corporate events.</p>
            </div>

            <div className="concert">
                <h3>Wedding & Reception Lighting</h3>
                <p> Elegant lighting designs to set the perfect romantic and celebratory mood.</p>
            </div>

            <div className="concert">
                <h3>Theatrical & Stage Effects</h3>
                <p> Professional lighting effects to bring drama, depth, and magic to your stage.</p>
            </div>

            <div className="concert">
                <h3> Installation & Technical Support</h3>
                <p> Expert setup, testing, and on-site lighting management.</p>
            </div>
        
      </div> 
     
    
    </div>

    
  )
}

export default About
