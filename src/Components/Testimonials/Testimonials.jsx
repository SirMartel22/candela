import React, {useState, useEffect} from 'react'
// import { Testifiers } from './Testimonials.json'
import classes from './Testimonials.module.css'

import { Link as ScrollLink } from 'react-scroll'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



const Testimonials = ( {Testifiers} ) => {


    return (
        <div className={classes.TestimonialContainer}>

             <div className={classes.TestimonialDescription}>
                 <h1>What Sets Us Apart</h1>
                 <p>At Candela, we don't just illuminate stages—we transform spaces into experiences. 
                     Our lights breathe life into every performance, creating moods that captivate audiences and elevate artists. 
                     From warm intimate glows to powerful dynamic beams, 
                     we craft the perfect ambience that makes each moment unforgettable. 
                     Lighting isn't just what we do—it's who we are.
                 </p>

                 <button className="testimonial btn">
                     <ScrollLink to='contact' spy={true} smooth={true} duration={500}> 
                         Become our VVIP
                         </ScrollLink>
                 </button>
                </div>

                <div className={classes.TestimonialSection}>
                <IoIosArrowBack className/>

                    {Testifiers.map((item, id)=>{
                        return(
                            <div className={classes.TestimonialCard}>
                                <p>{item.description}</p>
                                <h4>{item.name}</h4>
                                <h5>{item.position}</h5>
                            </div>
                        )
                    })}
                    
                <IoIosArrowForward />

                </div>

       
        </div>
    )
}

export default Testimonials;