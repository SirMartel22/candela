import React, { useState, useEffect, useRef } from 'react';
import './Test.css'
import bowenLogo from '../../assets/bowen.png'
import KwaraTvLogo from '../../assets/kwaraTv.jpg'
import skilledAward from '../../assets/skilled-award.jpg'
import pAssemblyLogo from '../../assets/p-assembly.png'
import redeemersLogo from '../../assets/redeemers.png'
import landmarkLogo from '../../assets/landmark.jpg'
import KTvLogo from '../../assets/adidas.png'
import skAward from '../../assets/skilled-award.jpg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Testing = () => {

        const brandArr = [ 
            bowenLogo, 
            KwaraTvLogo, 
            skilledAward, 
            pAssemblyLogo,
            redeemersLogo,
            landmarkLogo,
            KTvLogo,
            skAward
        ];
        console.log(brandArr);

        const headRef = useRef(null)
        const textRef = useRef(null)


        useEffect(()=>{
            const elements = [headRef.current, textRef.current]

            elements.forEach((el) => {

                gsap.fromTo(el, {
                    y: 50,
                    opacity: 0.5,
                },{
                    y: 0,
                    opacity: 1,
                    delay: 0.5,
                    duration: 1,
                    ease: 'power2.inOut',
                    scrollTrigger:{
                        trigger: el,
                        start: 'top 90%',
                        toggleAction: 'play none none none'
                    }
                })
            })
        })

        
    return (

        <div className='organization-container'>

            <div  className="organization-head">
                <h1 ref= { headRef } className="head">
                    30+ Big Organization Makes 
                    Candela their Event Lighting Brand
                </h1>
                <p ref= { textRef } className="text">Many Organization have collaborated with 
                    Candela and they trust us with their Event Lighting</p>
            </div>

            <div className="organization-logo">

                <img src={brandArr[0]}  className="image image-1"/>
                <img src={brandArr[1]}  className="image image-2"/>
                <img src={brandArr[2]}  className="image image-3"/>
                <img src={brandArr[3]}  className="image image-4"/>
                
                <img src={brandArr[4]}  className="image image-5"/>
                <img src={brandArr[5]}  className="image image-6"/>
                <img src={brandArr[6]}  className="image image-7"/>
                <img src={brandArr[7]}  className="image image-8"/>

            </div>
        </div>
    )
}

export default Testing;