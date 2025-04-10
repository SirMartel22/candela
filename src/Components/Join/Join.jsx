import React from 'react';
import './Join.css'
import stageLight from '../../assets/stageLighting.jpg'
import { Link as ScrollLink } from 'react-scroll'


const Join = () => {


    return (

        <div className= "join-container">
            <div className="join-img">
                {/* <img src={stageLight}/> */}
            </div>

            <div className="join-text">
                <h4>Join 200+ people who already trust us with their event</h4>
                <p>Experience seamless stage lighting solutions trusted by over 200 clients. 
                    From concerts to weddings, we bring your events to life with brilliance and precision
                </p>

                 <button className="joinBtn">
                            <ScrollLink to='contact' spy={true} smooth={true} duration={800}>
                                Become part of the Family
                            </ScrollLink>
                </button>
            </div>

        </div>
    )
}

export default Join;