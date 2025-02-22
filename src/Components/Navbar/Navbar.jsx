import React from 'react';
// import classes from './Navbar.module.css'
import './Navbar.css'
import logo from '../../assets/candela-logo.png'
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { PiTiktokLogoLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
    return (

        <nav className='Navbar'>

            <div className='logo'>
                <img src={logo} />
            </div>
            <ul className='navbarLink'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <ul className= "socials">
                <li><a href=""><CiFacebook/></a></li>
                <li><a href=""><FaWhatsapp /></a></li>
                <li><a href=""><FaInstagram/></a></li>
                <li><a href=""><PiTiktokLogoLight /></a></li>
            </ul>
            <div className='Hamburger'>
                <RxHamburgerMenu />
            </div>
        </nav>
 
    )
}


export default Navbar;