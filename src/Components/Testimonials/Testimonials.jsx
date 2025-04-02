import React, {useState, useEffect} from 'react'
// import { Testifiers } from './Testimonials.json'
import './Testimonial.css'

import { Link as ScrollLink } from 'react-scroll'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



const Testimonials = ( {Testifiers} ) => {

    const[slider, setSlider] = useState(0);

    //setting the previous view button
    const prevBtn = () => {
        setSlider(slider === 0 ? Testifiers.length - 1 : slider - 1 )
    }

    //setting the next view button
    const nextBtn = () => {
        setSlider(slider === Testifiers.length - 1 ? 0 : slider + 1 )
    }

    return (
        <div className="TestimonialContainer">

             <div className="TestimonialDescription">
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

                <div className="TestimonialSection">
                    
                <IoIosArrowBack className="slideBtn prevBtn" onClick = { prevBtn } />

                    {Testifiers.map((item, id)=>{
                        return(
                            <div className={slider===id ? "TestimonialCard": "TestimonialCard TestimonialCard-hidden"}>
                                <p>{item.description}</p>
                                <h4>{item.name}</h4>
                                <h5>{item.position}</h5>
                            </div>
                        )
                    })}

                <IoIosArrowForward className="slideBtn nextBtn" onClick = { nextBtn } />

                <span className= "viewBtn">
                    {Testifiers.map((_, id)=>{
                        return(

                            <button onClick={null}
                                className={slider===id ? "view": "view view-highlight"}
                            >

                            </button>
                        )
                    })}
                </span>

                </div>
        </div>
    )
}

export default Testimonials;