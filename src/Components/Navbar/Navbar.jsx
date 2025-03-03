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

            </div>
            <div className='Hamburger' >
                <RxHamburgerMenu onClick={menuShow}/>
            </div>
        </nav>
    )
}


export default Navbar;