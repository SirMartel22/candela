import React from 'react'
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


export const Slider = () => {

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

    //    console.log({imgArr});
    return (

        <div>
            <h1>Gallery</h1>
            {imgArr.map((item, id)=>{
                console.log(id)
                return <img src={item} alt={`image ${id}`} key={id} />
            })}
        </div>
    )
}