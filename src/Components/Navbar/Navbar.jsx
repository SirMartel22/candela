import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css'
import logo from '../../assets/candela-logo.png'
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiTiktokLogoLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as ScrollLink } from 'react-scroll'
import gsap from 'gsap'



const Navbar = () => {

    //setting the sticky effect of the navigation bar

    const [sticky, setSticky] = useState(false);

    //GSAP animation ref
    // const navRef = useRef(null);
    // const logoRef = useRef(null);
    // const linksRef = useRef(null);
    // const socialRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        });

        // const tl = gsap.timeline({
        //     defaults:{
        //         ease: "power3.out"
        //     }
        // })

        // //Navbar entrance
        // tl.from(navRef.current, {
        //     y: -100,
        //     opacity: 0,
        //     duration: 0.1
        // })

        // //logo animation
        // .from(logoRef.current, {
        //     y: -50,
        //     opacity: 0,
        //     duration: 0.8,
        //     ease: "back.out(1.7)"
        // }, "-=0.5") //overlap with previous animation

        // //navigation links animation
        // .from(linksRef.current.children, {
        //     y: 20,
        //     opacity: 0,
        //     duration: 0.6,
        //     stagger: 0.2,
        // }, "-=0.5");


        // //CleanUp
        // return() => {
        //     tl.kill();
        // }


      
    }, [])

    //toggle navbar responsiveness
    const [showMenu, setShowMenu] = useState(false);

    const menuShow = () => {
        // showMenu ? setShowMenu(false) : setShowMenu(true);
        setShowMenu(!showMenu);
    }

    return (

        <nav  className={`nav-bar ${sticky ? 'sticky-background' : ''}`} >
           

            <div className='logo'>
                <img src={logo} />
            </div>
            <div className={`nav-link ${showMenu ? "show-menu" : ''}`}>
                <ul className="links">
                    
                    <ScrollLink to="hero" spy={true} smooth={true} duration={500}>
                        <li>Home</li>
                    </ScrollLink>
                    
                    <ScrollLink to="about" spy={true} smooth={true} duration={500}>
                        <li>About</li>
                    </ScrollLink>

                    <ScrollLink to="gallery" spy={true} smooth={true} duration={500}>
                        <li>Gallery</li>
                    </ScrollLink>

                    <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
                        <li>Contact</li>
                    </ScrollLink>
                </ul>

                <ul className= "socials">

                    <li><a href="https://www.facebook.com/share/14wdGTrrEP/?mibextid=LQQJ4d"><CiFacebook/></a></li>
                    <li><a href="https://wa.me/2347030078373" target='blank' rel='noopener noreferrer' ><FaWhatsapp /></a></li>
                    <li><a href="https://www.instagram.com/candela.consult/"><FaInstagram/></a></li>
                    <li><a href= "https://www.tiktok.com/@candelastagelights?is_from_webapp=1&sender_device=pc" target='blank' rel='noopener,noreferrer'><PiTiktokLogoLight /></a></li>
               
                </ul>

            </div>
            <div className='Hamburger' >
                <RxHamburgerMenu onClick={menuShow}/>
            </div>
        </nav>
    )
}


export default Navbar;