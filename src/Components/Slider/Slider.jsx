import React, { useState } from 'react'
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


export const Slider = () => {

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

    return (

        <div className="slider-container">
            <h1>Gallery for your perusal</h1>
            <div className = "carousel">
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