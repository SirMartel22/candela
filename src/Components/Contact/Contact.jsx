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

            const handleSubmit = (e) => {
                e.preventDefault();
                const url = "https://script.google.com/macros/s/AKfycbxTkmY92IQ5m-I183hVvjkTFOq-ngmE4uSKbBHtYVgLTZTQqMrIgUY-ldbUaOPNrIO5/exec";
                fetch(url, {
                   method: "POST",
                   headers: {"Content-Type": "application/x-www-form-urlencoded"},
                   mode: "no-cors",
                   body: (`Name=${e.target.name.value}
                           Email=${e.target.email.value}
                           Message=${e.target.message.value}`) 
                }).then(res=>res.text()).then(data=>{
                    alert(data);
                    e.target.name.value = ""
                    e.target.email.value = ""
                    e.target.message.value = ""
                }).catch(error=>console.log(error))
            }

    return(
        <div className='contact-container' id='contact'>
            <div ref= { contactRef } className="contact-wrapper">

            <form action='/submit' onSubmit={handleSubmit} method='POST'>

                <div className="contact">
                    <h1>Contact Section</h1>
                    <p>Feel free to Contact us anytime, 
                        we will get back to you as soon as possible
                        </p>
                        <input placeholder={name} name="name" type='text'/>
                        <input placeholder={email} name="email" type='email'/>
                        <input placeholder={message} name="message" type='text'/>

                        <button className=' btn contact-btn'>{btn}</button>
                      
                  </div>

                  </form>

            
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