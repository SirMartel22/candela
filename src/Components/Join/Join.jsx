import React from 'react';
import './Join.css'
import stageLight from '../../assets/stageLighting.jpg'


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
            </div>

        </div>
    )
}

export default Join;