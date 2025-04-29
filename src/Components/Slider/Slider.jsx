import React, { useState, useEffect, useRef } from 'react'
import './Slider.css'               
import imgLandscape1 from '../../assets/l1.jpg';
import imgLandscape2 from '../../assets/l2.jpg';
import Landscape1 from '../../assets/landscape.jpg';
import Landscape2 from '../../assets/landscape1.jpg';
import mixer1 from '../../assets/mixer.jpg';
import mixer2 from '../../assets/mixer2.jpg';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/installation 2.jpg';
import lighting from '../../assets/lighting.jpg'
import lighting2 from '../../assets/lighting2.jpg'

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



export const Slider = () => {

    const galleryRef = useRef(null)
    const carouselRef = useRef(null)

    const [image, setImage] = useState(0)

    const imgArr = [
           imgLandscape1, 
           imgLandscape2, 
           Landscape1, 
           Landscape2,
           mixer1,
           mixer2,
           p1,
           p2,
           lighting,
           lighting2        
       ]
       
       //setting the previous view button
       const backwardBtn = () => {
           setImage(image === 0 ? imgArr.length - 1 : image - 1 )
       }

       //setting the next button
        const forwardBtn = () =>{
            setImage(image === imgArr.length - 1  ? 0 : image + 1 )
        }

        useEffect(() => {

            const galleryEl = galleryRef.current;
            const carouselEl = carouselRef.current

            gsap.fromTo(galleryEl, {
                // y: 50,
                opacity: 0.3,
            },
            {
                // y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: galleryEl,
                    start: 'top 90%',
                    toggleAction: 'play none none none'
                }
            });

            gsap.fromTo(carouselEl, {
                opacity: 0.2,
            },
            {
                opacity: 1,
                duration: 0.2,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: carouselEl,
                    start: 'top 90%',
                    toggleAction: 'play none none none'
                }
            });
        })
    return (
 
        <div className="slider-container">
            <h1 ref={ galleryRef }> Gallery for your perusal</h1>
            <div ref={ carouselRef } className = "carousel">
                <IoIosArrowBack className="arrow backward-btn" onClick={backwardBtn} />
                {imgArr.map((item, id)=>{
                    return (
                        <img 
                            src={item} 
                            alt={`image ${id}`} 
                            key={id} 
                            className={image === id ? "image": "image image-hidden"}/>)
                })}
                <IoIosArrowForward  className="arrow forward-btn"  onClick={forwardBtn} />

                <span className="indicators">
                    {imgArr.map((_, id)=>{
                        return (
                            <button 
                                onClick={null} 
                                className={image===id? "indicator": "indicator indicator-highlight"}>

                            </button>
                        )
                    })}
                </span>
            </div>
                
        </div>
    )
}