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

        <div className="gallery-container" id='gallery'>
            <h1>For your Perusal</h1>

            <div className= 'grid-container'>
            
                <img src={imgLandscape1} className="first-img"/>
                <img src={p1} className="second-img"/>
                <img src={imgLandscape2} className="third-img"/>
            
                <img src={Landscape1} className="fourth-img"/>
                <img src={mixer1} className="fifth-img"/>
                <img src={lighting} className="sixth-img"/>
           
                <img src={lighting2} className="seventh-img"/>
                <img src={mixer2} className="eighth-img"/>
                <img src={Landscape2} className="nineth-img"/>
            </div>

        </div>
    )
}

export default Gallery;