import React, { useState } from 'react';
import './Testimonials.css'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll'

const TestimonySlider = ({testimonials}) => {

    const [currentTestimony, setCurrentTestimony] = useState(0)

    const prevBtn = () => {
        //check if we are currently in the firstSlude
        const firstTestimony = currentTestimony === 0

        //create new newTestimony slide
        const newTestimony = firstTestimony ? testimonials.length - 1 : currentTestimony - 1;

        //set newTestimony as currentTestimony
        setCurrentTestimony(newTestimony)

    }

    const nextBtn = () => {

        //check is we're view the last testimony
        const lastTestimony = currentTestimony === testimonials.length - 1;

        //create new testimony slide
        const newTestimony = lastTestimony ? 0 : currentTestimony + 1;

        // set current testimony as the newTestimony
        setCurrentTestimony(newTestimony)

    }

        const testimonyStyles = {
            width: "45%",
            height: "100%",
            borderRadius: "20px",
            position: 'relative',
            color: "#f5f5f5",
            overflow: 'hidden',
            // alignContent: 'center',
        }

        const nextButton = {
            fontSize: "45px",
            position: "absolute",
            right: "400px",
            color: "f5f5f5",
            zIndex: 1,
            cursor: "pointer"
        }

        const prevButton ={
            fontSize: "45px",
            position: "absolute",
            // left: "1200px",
            color: "#f5f5f5",
            zIndex: 1,
            cursor: "pointer"
        }

    return (

        <div>
            <div style={prevButton} onClick={prevBtn}>
                <MdOutlineArrowBackIosNew />
            </div>
            <div style={nextButton} onClick={nextBtn}>
                <MdOutlineArrowForwardIos />
            </div>

            <div style={testimonyStyles}>
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

            <TestimonySlider testimonials={testimonials} />
        </div>
    )
}


export default NewTestimony;