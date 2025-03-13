import React from 'react';
import {useState, useEffect} from 'react';
// import classes from './Navbar.module.css'
import './Navbar.css'
import logo from '../../assets/candela-logo.png'
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiTiktokLogoLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as ScrollLink } from 'react-scroll'



const Navbar = () => {

    //setting the sticky effect of the navigation bar

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        })
    }, [])

    //toggle navbar responsiveness
    const [showMenu, setShowMenu] = useState(false);

    const menuShow = () => {
        // showMenu ? setShowMenu(false) : setShowMenu(true);
        setShowMenu(!showMenu);
    }

    return (

        <nav className={`nav-bar ${sticky ? 'sticky-background' : ''}`} >
           

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