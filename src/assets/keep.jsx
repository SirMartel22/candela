import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Gallery.css';


// const Gallery = () => {
//     const [images, setImages] = useState([])
//     const API_KEY = 'AIzaSyDILglxIUfxsippGxbGFD0XOjLIeprMz5U'
//     const FOLDER_ID = '1ZoghdudUBaHtHCjswvv9l4PG_M7-71tA?'

//     console.log(API_KEY);
//     console.log(FOLDER_ID);

//     useEffect(() => {
//         const fetchImages = async () => {
//             try {
//                 const response = await axios.get( `https://www.googleapis.com/drive/v3/files?q='1ZoghdudUBaHtHCjswvv9l4PG_M7-71tA' in parents&fields=files(id,name,webContentLink,mimeType)&key=AIzaSyDILglxIUfxsippGxbGFD0XOjLIeprMz5U`
//                 );
//                 console.log(response.data);
//                 const files = response.data.files.filter((files) => files.mimeType.startsWith('image/'));
//                 setImages(files);
//             }
//             catch(error) {
//                 console.error('Error fetching images', error);
//             }
//         };
//         fetchImages();
//     }, [])

//     return (

//         <div>
//             {images.length > 0 ? (images.map((image) => (
//                     <img key={image.id} 
//                     src={image.webContentLink} 
//                     alt={image.name}
//                     style={{width: '100%', height: 'auto'}} />
//                 ))
//             ):(
//                 <p>Loading Images...</p>
//             )}
//         </div>
//     );
// }

// // export default Gallery;


// import React from 'react';
// import {useEffect, useState } from 'react'
// import axios from 'axios'
// import './Gallery.css'

// const Gallery = () => {
//     //setting the state for images
//     const [images, setImages] = useState([])

//     //setting the state for loading
//     const [loading, setLoading] = useState(true);

//     //getting my api key and folder id
//     const API_KEY ='AIzaSyDILglxIUfxsippGxbGFD0XOjLIeprMz5U'
//     const FOLDER_ID ='1ZoghdudUBaHtHCjswvv9l4PG_M7-71tA'

//     // https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}' in parents&fields=files(id,name,webContentLink,mimeType)&key=${API_KEY}'

//     //initializing the useEffect hook
//     useEffect(() => {
//         const fetchImages = async () => {
//             try{
//                 const response = await axios.get(`https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}' in parents&fields=files(id,name,webContentLink,mimeType)&key=${API_KEY}`)
//                 console.log(response.data);
//                 const files = response.data.files.filter((file) => file.mimeType.startsWith('image/jpeg'));
//                 setImages(files);
//             } catch (error) {
//                 console.error('Error fetching images:', error.response ? error.response.data: error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchImages();
//     }, []);


//     return(
//         <div>
//             {loading ? (
//                 <p> Loading Images...</p>
//             ) : images.length > 0 ? (
//                 images.map((image) => {
//                     //use the correct view URL, avoiding export=download
//                     const src = `https://drive.google.com/uc?id=${image.id}`;
//                     console.log("Image URL:", src); //Log the exact URL
//                     return(
//                         <img key= {image.id} src={src} alt={image.name} 
//                         style={{width:'100%',height:'auto'}}
//                         onError = {(e) => console.log(`Failed to load ${src}`)} //Log if image fail to load
//                         />
//                     );
//                 })
//             ):(
//                 <p>No images found</p>
//             )}
//         </div>
//     );
// };

// export default Gallery

export default App
