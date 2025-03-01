import React from 'react'
import './Testimonials.css'
import {useState, useEffect} from 'react'



const Testimonials = () => {

        //getting a iterable testimonials instead of hardcoding it
        // inside the testimonials return statement
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

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1); 
        }, 5000); //Slide every 5 seconds

        return () => clearInterval(timer); //Cleanup on unmount
    }, [testimonials.length]);

    console.log("testimonial here " + testimonials);

    const testimonies = testimonials.map((testimony, index) => {
        console.log(testimony)
        return (

            <div
                key={index} 
                className={`testimony-card ${index === (currentIndex + 1) % testimonials.length? 'middle-testimony' : ''}`}
            >
                <p>{testimony.testimony}</p>
                <h4>{testimony.name}</h4>
                <h6>{testimony.post}</h6>
            </div>
        )
        
    })
    console.log("after using .map() method " + testimonies);
    return (

        <div className="testimonials-section">
            <div className="testimonials-description">
                <h1>What Sets Us Apart</h1>
                <p>At Candela, we don't just illuminate stages—we transform spaces into experiences. 
                    Our lights breathe life into every performance, creating moods that captivate audiences and elevate artists. 
                    From warm intimate glows to powerful dynamic beams, 
                    we craft the perfect ambience that makes each moment unforgettable. 
                    Lighting isn't just what we do—it's who we are.</p>

                    <button>Become our VVIP</button>
            </div>

            <div className="customer-testimonials">
                <div className="testimonials-slider" style = {{
                     transform: `translateY(-${currentIndex * 33.33}%)`,
                    transition: 'transform 0.5s ease-in-out'
                }}>
                    {testimonies}
                </div>
               
            </div>
           
        </div>

    )

}


export default Testimonials