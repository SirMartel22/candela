import React from 'react';
import './Join.css'
import stageLight from '../../assets/stageLighting.jpg'


const Join = () => {


    return (

        <div className= "join-container">
            <div className="join-img">
                <img src={stageLight}/>
            </div>

            <div className="join-text">
                <h4>Join 200+ people who already trust us with their event</h4>
                <p>Adjust the responsiveness of all the section, 
                    link all the buttons, countdown to next event, do animation</p>
            </div>

        </div>
    )
}

export default Join;