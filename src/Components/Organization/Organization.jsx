// import React from 'react';
// import {useState, useEffect} from 'react';
// import './Organization.css'
// import bowenLogo from '../../assets/bowen.png'
// import KwaraTvLogo from '../../assets/kwaraTv.jpg'
// import skilledAward from '../../assets/skilled-award.jpg'
// import pAssemblyLogo from '../../assets/p-assembly.png'
// import redeemersLogo from '../../assets/redeemers.png'
// import landmarkLogo from '../../assets/landmark.jpg'
// import KTvLogo from '../../assets/kwaraTv.jpg'
// import skAward from '../../assets/skilled-award.jpg'


// const Organization = () => {

//         const imageArr = [ 
//             bowenLogo, 
//             KwaraTvLogo, 
//             skilledAward, 
//             pAssemblyLogo,
//             redeemersLogo,
//             landmarkLogo,
//             KTvLogo,
//             skAward
//         ];
//         console.log(imageArr);

//         const setImage = imageArr.map((eachImage) => {

//             return(
//                 <div className="image" key={eachImage}>
//                     <img src={eachImage}/>
//                 </div>
//             )
//         })

//         console.log(setImage);

//     return (

//         <div className='organization-container'>

//             <div className="organization-head">
//                 <h1 className="head">
//                     30+ Big Organization Makes 
//                     Candela their Event Lighting Brand
//                 </h1>
//                 <p className="text">Many Organization have collaborated with 
//                     Candela and they trust us with their Event Lighting</p>
//             </div>

//             <div className="organization-png">
//                 {setImage}
//             </div>
//         </div>
//     )
// }

// export default Organization;