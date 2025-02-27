import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css';


const Gallery = () => {
    const [images, setImages] = useState([])
    const API_KEY = 'AIzaSyDILglxIUfxsippGxbGFD0XOjLIeprMz5U'
    const FOLDER_ID = '1ZoghdudUBaHtHCjswvv9l4PG_M7-71tA?usp=drive_link'

    console.log(API_KEY);
    console.log(FOLDER_ID);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get( `https://www.googleapis.com/drive/v3/files?q='1ZoghdudUBaHtHCjswvv9l4PG_M7-71tA' in parents&fields=files(id,name,webContentLink,mimeType)&key=AIzaSyDILglxIUfxsippGxbGFD0XOjLIeprMz5U`
                );
                // console.log(response.data);
                const files = response.data.files.filter((files) => files.mimeType.startsWith('image/'));
                setImages(files);
            }
            catch(error) {
                console.error('Error fetching images', error);
            }
        };
        fetchImages();
    }, [])

    return (

        <div>
            {images.length > 0 ? (images.map((image) => (
                    <img key={image.id} src={image.webContentLink} alt={image.name}
                    style={{width: '100%', height: 'auto'}} />
                ))
            ):(
                <p>Loading Images...</p>
            )}
        </div>
    );
}

export default Gallery;