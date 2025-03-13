import React from 'react';
import {useState, useEffect} from 'react';
import './Test.css'
import bowenLogo from '../../assets/bowen.png'
import KwaraTvLogo from '../../assets/kwaraTv.jpg'
import skilledAward from '../../assets/skilled-award.jpg'
import pAssemblyLogo from '../../assets/p-assembly.png'
import redeemersLogo from '../../assets/redeemers.png'
import landmarkLogo from '../../assets/landmark.jpg'
import KTvLogo from '../../assets/kwaraTv.jpg'
import skAward from '../../assets/skilled-award.jpg'


const Testing = () => {

        const brandArr = [ 
            bowenLogo, 
            KwaraTvLogo, 
            skilledAward, 
            pAssemblyLogo,
            redeemersLogo,
            landmarkLogo,
            KTvLogo,
            skAward
        ];
        console.log(brandArr);

        const globalStyle = {
            
        }

        const showImage = brandArr.map((Image) => {

            console.log(Image);
            return(
                <div className="image" key={Image}>
                    <img src={Image}/>
                </div>
            )
        })

        console.log(showImage);

    return (

        <div className='organization-container'>

            <div className="organization-head">
                <h1 className="head">
                    30+ Big Organization Makes 
                    Candela their Event Lighting Brand
                </h1>
                <p className="text">Many Organization have collaborated with 
                    Candela and they trust us with their Event Lighting</p>
            </div>

            <div className="organization-png">
                {showImage}
            </div>
        </div>
    )
}

export default Testing;