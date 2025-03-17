import React, { useState } from 'react';
import './Testimonials.css'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const TestimonySlider = ({testimonials}) => {

    const [currentTestimony, setCurrentTestimony] = useState(0)

    const prevBtn = () => {
        //check if we are currently in the firstSlude
        const firstTestimony = currentTestimony === 0

        //create new newTestimony slide
        const newTestimony = firstTestimony ? slides.length - 1 : currentTestimony - 1;

        //set newTestimony as currentTestimony
        setCurrentTestimony(newTestimony)

    }

    const nextBtn = () => {

        //check is we're view the last testimony
        const lastTestimony = currentTestimony === slides.length - 1;

        //create new testimony slide
        const newTestimony = lastTestimony ? 0 : currentTestimony + 1;

        // set current testimony as the newTestimony
        setCurrentTestimony(newTestimony)

    }

        const testimonyStyles = {
            width: "50%",
            height: "100%",
            borderRadius: "20px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            background: ``,
            color: "#f5f5f5",
        }

        const nextButton = {
            fontSize: "45px",
            position: "absolute",
            transform: "translate(0, -50px)",
            right: "32px",
            color: "f5f5f5",
            zIndex: 1,
            cursor: "pointer"
        }

        const prevButton ={
            fontSize: "45px",
            position: "absolute",
            transform: "translate(0, -50px)",
            left: "32px",
            color: "#f5f5f5",
            zIndex: "1",
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



        <div >
            <TestimonySlider testimonials={testimonials} />
        </div>
    )
}


export default NewTestimony;