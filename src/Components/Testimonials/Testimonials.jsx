import React, {useState, useEffect, useRef } from 'react'
import './Testimonial.css'

import { Link as ScrollLink } from 'react-scroll'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


//testimonial slider code
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

    //gsap effect code
    const testimonialDescRef = useRef(null)
    const testimonialCardRef = useRef(null)

    useEffect(() => {

        const elements = [testimonialDescRef.current, testimonialCardRef.current]

        elements.forEach((el) => {

            gsap.fromTo(el,
                {
                    y: 50,
                    opacity: 0.5,
                },{
                    y: 0,
                    opacity: 1,
                    delay: 0.3,
                    duration: 0.5,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleAction: 'play none none none'
                    },
                }
            );  
        })
        
    }, []);


    return (
        <div className="TestimonialContainer">

             <div ref = { testimonialDescRef } className="TestimonialDescription">
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
                            <div ref = { testimonialCardRef }className={slider===id ? "TestimonialCard": "TestimonialCard TestimonialCard-hidden"}>
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