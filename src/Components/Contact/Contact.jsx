import React, { useState, useEffect, useRef} from 'react';
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { CiPhone } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

    const name = "Name";
    const email = "Email";
    const message = "Message";
    const btn = 'Send'

     const contactRef = useRef(null)
    
        useEffect(() => {
    
                const contactEl = contactRef.current;
    
                gsap.fromTo(contactEl, {
                  
                    opacity: 0.2,
                },
                {
                    opacity: 1,
                    duration: 2,
                    delay:1,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: contactEl,
                        start: 'top 90%',
                        toggleAction: 'play none none none'
                    }
                });
            })

    return(
        <div className='contact-container' id='contact'>
            <div ref= { contactRef } className="contact-wrapper">

                <div className="contact">
                    <h1>Contact Section</h1>
                    <p>Feel free to Contact us anytime, 
                        we will get back to you as soon as possible
                        </p>

                        <input placeholder={name} type='text'/>
                        <input placeholder={email} type='email'/>
                        <input placeholder={message} type='text'/>

                        <button className=' btn contact-btn'>{btn}</button>
                  </div>
            
                    <div className="contact-info">

                        <h1>Info</h1>

                        <div className="mail info-div">
                            <MdOutlineEmail />
                            <p>info@getInTouch.We</p>
                        </div>

                        <div className="Phone info-div">
                            <CiPhone />
                            <p>+234 908 644 7689</p>
                        </div>

                        <div className="address info-div">
                            <FaRegAddressCard />
                            <p>Our Address</p>
                        </div>

                        <div className="available info-div">
                            <LuCalendarClock />
                            <p>Available 24/7 </p>
                        </div>
    
            </div>

            </div>

        </div>
    )
    
}

export default Contact;