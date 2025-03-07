import React from 'react';
import './Gallery.css'

//importing the necessary images
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



const Gallery = () =>{


    return (

        <div className="gallery-container">
            <h1>For your Perusal</h1>

            <div className="grid-container-1">

                <div className="first-image-grid">
                    <img src={imgLandscape1}/>
                    <img src={p1}/>
                    <img src={imgLandscape2}/>
                </div>

                <div className='second-image-grid'>
                    <img src={Landscape1}/>
                    <img src={mixer1}/>
                    <img src={lighting}/>
                </div>

            </div>
          
        <div className="grid-container-2">
            <div className='second-image-grid'>
                <img src={lighting2}/>
                <img src={mixer2}/>
                <img src={Landscape2}/>
            </div>
        </div>
          

        </div>
    )
}

export default Gallery;