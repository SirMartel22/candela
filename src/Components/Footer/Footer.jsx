import React, {useEffect, useRef} from 'react';
import './Footer.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const footerRef = useRef(null)
    const copyrightRef = useRef(null)

    useEffect(()=> {

        const elements = [footerRef.current, copyrightRef.current]

        elements.forEach((el) => {
           gsap.fromTo(el, {
                y: 30,
                opacity: 0.3
            },
            {
                y: 0,
                opacity: 1,
                delay: 0.5,
                duration: 1.5,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleAction: 'play none none none'
                }
            }
          )
          
        })

    }, [])
    return (

        <div className="footer-container">

        <div ref = { footerRef }className='footer-wrapper'>

            <div className="company-name">
                <h1>Candela Lights and Brand</h1>
            </div>
                <nav className='page-nav footer-nav'>
                    <ul>
                        <li><a href>Home</a></li>
                        <li><a href>About Us</a></li>
                        <li><a href>Contact</a></li>
                        <li><a href>Services</a></li>

                    </ul>
                </nav>

                <nav className='social-nav footer-nav'>
                    <ul>
                        <li><a href>Facebook</a></li>
                        <li><a href>Whatsapp</a></li>
                        <li><a href>Instagram</a></li>
                        <li><a href>Tiktok</a></li>
                    </ul>
                </nav>

                <nav className='other-nav'>
                    <ul>
                    <li><a href>Experience the Glow</a></li>
                        <li><a href>View our Work</a></li>
                        <li><a href>Become our VVIP</a></li>
                        <li><a href>Reach Us</a></li>
                    </ul>
                </nav>

            </div>

        <div ref = { copyrightRef } className="copy">
            <p>&copy; Candela 2025</p>
        </div>


        </div>
    )
}

export default Footer;