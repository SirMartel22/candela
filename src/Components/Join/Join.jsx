import React, { useEffect, useState, useRef } from 'react';
import './Join.css'
import stageLight from '../../assets/stageLighting.jpg'
import { Link as ScrollLink } from 'react-scroll'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Join = () => {

    const joinHeadRef = useRef(null)
    const joinParRef = useRef(null)
    const joinBtnRef = useRef(null)

    useEffect(() => {

        const elements = [joinHeadRef.current, joinParRef.current, joinBtnRef.current]

        elements.forEach((el) => {

            gsap.fromTo(el,
                {
                    y: 50,
                    opacity: 0.5,
                },{
                    y: 0,
                    opacity: 1,
                    duration: 1,
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

        <div className= "join-container">
            {/* <div className="join-img"> */}
                {/* <img src={stageLight}/> */}
            {/* </div> */}

            <div className="join-text">
                <h4 ref = { joinHeadRef }> Join 200+ people who already trust us with their event</h4>
                <p ref= { joinParRef }>Experience seamless stage lighting solutions trusted by over 200 clients. 
                    From concerts to weddings, we bring your events to life with brilliance and precision
                </p>

                 <button ref={ joinBtnRef } className="joinBtn">
                            <ScrollLink to='contact' spy={true} smooth={true} duration={800}>
                                Become part of the Family
                            </ScrollLink>
                </button>
            </div>

        </div>
    )
}

export default Join;