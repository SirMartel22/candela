import React, { useState }from 'react';
import './NewSlider.css';
import image_1 from '../../assets/l1.jpg';
import image_2 from '../../assets/l2.jpg';
import image_3 from '../../assets/landscape.jpg';
import image_4 from '../../assets/landscape1.jpg';
import image_5 from '../../assets/mixer.jpg';
import image_6 from '../../assets/mixer2.jpg';
import image_7 from '../../assets/p1.jpg';
import image_8 from '../../assets/installation 2.jpg';
import image_9 from '../../assets/lighting.jpg'
import image_10 from '../../assets/lighting2.jpg'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";


const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const sliderStyle={
        height: "100%",
        position: 'relative',
    }

    const slideStyles = {
        width: '150%',
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].image})`,
    }

    const backWard = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: "#fff",
        zIndex: 1,
        cursor: 'pointer',
    }

    const forWard = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: "#fff",
        zIndex: 1,
        cursor: 'pointer',
        // transition: '0.5 ease in-out'
    }

    // defining the click event for previous button
    const previous = () => {
        //checking whether we currently seeing the first image in the array of image 0
        const isFirstSlide = currentIndex === 0;
        //setting new variable and using ternary operator
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };

    //defining the click event fornext button

    const next = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    return (
        <div style={sliderStyle}>
            {/* adding the forward and backward arrow */}
            <div style={backWard} onClick={previous}><MdArrowBackIos /></div>
            <div style={forWard} onClick={next}><MdArrowForwardIos /></div>
            
           <div style={slideStyles}>

           </div>
        </div>
    )
}

const NewSlider = () => {

    const slides = [
        {image: image_1, title: "image1"},
        {image: image_2, title: "image2"},
        {image: image_3, title: "image3"},
        {image: image_4, title: "image4"},
        {image: image_5, title: "image5"},
        {image: image_6, title: "image6"},
        {image: image_7, title: "image7"},
        {image: image_8, title: "image8"},
        {image: image_9, title: "image9"},
        {image: image_10, title: "image10"},
    ]

    const containerStyles = {
        width: '500px',
        height: '280px',
        margin: '0 auto', 
        padding: "20px",
        
    }

    return (
        <div className="image-gallery">
            <h1>Gallery of Image for Your Perusal</h1>
            <div style ={containerStyles}>
                <ImageSlider slides= {slides} />
            </div>
        </div>
    )
}

export default NewSlider;