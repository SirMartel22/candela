import React, { useState, useEffect } from 'react';
import './Testimonials.css'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll'

const TestimonySlider = ({testimonials}) => {

    const [currentTestimony, setCurrentTestimony] = useState(0)
    const [direction, setDirection] = useState("") // Track the direction of the slide;

    const prevBtn = () => {
        //check if we are currently in the firstSlude
        const firstTestimony = currentTestimony === 0

        //create new newTestimony slide
        const newTestimony = firstTestimony ? testimonials.length - 1 : currentTestimony - 1;
        
        //Set direction for sliding in from the left
        setDirection('left');

        //set newTestimony as currentTestimony
        setCurrentTestimony(newTestimony)
    }

      
    const nextBtn = () => {

        //check is we're view the last testimony
        const lastTestimony = currentTestimony === testimonials.length - 1;

        //create new testimony slide
        const newTestimony = lastTestimony ? 0 : currentTestimony + 1;

        // Set Direction for sliding in from the right
        setDirection("right");
        // set current testimony as the newTestimony
        setCurrentTestimony(newTestimony)

    }

    //Automatically slide every 7 seconds
    // useEffect (() => {
    //     const interval = setInterval(()=>{
    //         setDirection('right');
    //         setCurrentTestimony(prev => (prev === testimonials.length -1 ? 0 : prev + 1));
    //     }, 7000);
    //     return () => clearInterval(interval);
    // }, [])


    useEffect(()=>{
        setDirection(""); //reset animation class first
        setTimeout(()=> {
          setDirection("right");
        }, 10) //Reapply the class after a short delay
      }, [currentTestimony]);
      

    useEffect(()=>{
        const interval = setInterval(() => {
            nextBtn();
        }, 7000)
        return () => clearInterval(interval);
      }, []);
  

        const testimonyStyles = {
            width: "100%",
            height: "auto",
            borderRadius: "20px",
            color: "#f5f5f5",
            overflow: 'hidden',
            padding: "20px",
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(74, 42, 24, 0.484)",
            textAlign: "center", // Center the text inside the card
            animation: direction === "right"
                        ? "slideInFromRight 0.5s ease-in-out"
                        : direction === "left"
                        ? "slideInFromLeft 0.5s ease-in-out"
                        : "none", //apply animation based on direction
            animationRepeat: "infinity",
        }

        const nextButton = {
            fontSize: "30px",
            position: "absolute",
            right: "10px",
            top: "50%",
            color: "f5f5f5",
            zIndex: 1,
            cursor: "pointer",
            transform: "translateY(-50%)", //adjust the arrow for perfect center
            transition: "0.3 ease-in-out",
        }

        const prevButton ={
            fontSize: "45px",
            position: "absolute",
            left: "10px",
            top: "50%",
            color: "#f5f5f5",
            zIndex: 1,
            cursor: "pointer",
            transform: "translateY(-50%)",
            transition: "0.3 ease-in-out",
        }

        //style for the entire slider container (right side)
        const sliderContainer = {
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }

    return (

        <div style= {sliderContainer}>
            <div style={prevButton} onClick={prevBtn}>
                <MdOutlineArrowBackIosNew />
            </div>
            <div style={nextButton} onClick={nextBtn}>
                <MdOutlineArrowForwardIos />
            </div>

            <div style={testimonyStyles} className="testimony-slider">
                <p>{testimonials[currentTestimony].testimony}</p>
                <p>{testimonials[currentTestimony].post}</p>
                <h1>{testimonials[currentTestimony].name}</h1>
            </div>
        </div>
    )
}

const NewTestimony = () => {

    const testimonials = [
        {
            name: "Maria Gonzalez",
            post: "Theater Director",
            testimony: `"Candela's lighting solutions transformed our theater production. The audience was completely immersed in every scene"`
        },

        {
            name: "Jake Wilson",
            post: "Production Designer",
            testimony: `"Candela's DMX systems are incredibly intuitive and have revolutionized our light show. Setup time is cut in half, and the impact is twice as powerful."`
        },

        {
            name: "Robert James",
            post: "Theater Director",
            testimony: `"The moment we switched to Candela for our dance studio, both instructors and students noticed the difference."`
        },

        {
            name: "Amelia Taylor",
            post: "Community Arts Director",
            testimony: `"When our community theater upgraded to Candela, we weren't just getting better lights—we were getting a partner."`
        },
    ]


    return (

        <div className="testimonials-section">
            <div className="testimonials-description">
                <h1>What Sets Us Apart</h1>
                <p>At Candela, we don't just illuminate stages—we transform spaces into experiences. 
                    Our lights breathe life into every performance, creating moods that captivate audiences and elevate artists. 
                    From warm intimate glows to powerful dynamic beams, 
                    we craft the perfect ambience that makes each moment unforgettable. 
                    Lighting isn't just what we do—it's who we are.
                </p>

                <button className="testimonial btn">
                    <ScrollLink to='contact' spy={true} smooth={true} duration={500}> 
                        Become our VVIP
                        </ScrollLink>
                </button>
            </div>

            <TestimonySlider testimonials={testimonials}  />
        </div>
    )
}


export default NewTestimony;