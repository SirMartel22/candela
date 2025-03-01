import React, { useEffect, useState } from 'react';
import { useRef } from 'react'
import axios from 'axios';
import { gsap } from 'gsap'

import './Gallery.css';


const Gallery = () => {
    // setting state variable for all the data needed
    const [allImages, setAllImages] = useState([]);
    const [currentSet, setCurrentSet] = useState([])
    const [loading, setLoading] = useState(true);
    const imageRefs = useRef([]) //Refs for GSAP animations
    const [currentIndex, setCurrentIndex] = useState(0);
    const galleryRef = useRef([null])

    // these are secret keys for the api
    const API_KEY = import.meta.env.VITE_API_KEY;
    const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
    const API_SECRET = import.meta.env.VITE_API_SECRET;

    // console.log(API_KEY);
    // const FOLDER_ID = 'img/'

    //fetch and store image urls
    useEffect(() => {
        const fetchAndStoreImages = async () =>{
            try{
                const storedImages = localStorage.getItem('galleryImageURLs');
                if (storedImages){
                    const parsedImages = JSON.parse(storedImages);
                    setAllImages(parsedImages);
                    setCurrentSet(parsedImages.slice(0, 6));
                    setLoading(false);
                    return;
                }

                //Here i sent APi call to the server to request for the images needed
                const response = await axios.get(
                    `/api/cloudinary/v1_1/${CLOUD_NAME}/resources/image/upload?max_results=50`,
                    {
                        headers: {Authorization: `Basic ${btoa(`${API_KEY}:${API_SECRET}`)}`},
                    }
                );

                //log data gotten from server
                console.log(response.data)

                //looping through the files gotten fro the server
                const imageFiles = response.data.resources.map((file) => ({
                    id: file.public_id,
                    url: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_500/${file.public_id}`,
                    namee: 'gallery_image'
                }));

                //pushing the urls of the data gotten to the local storage
                localStorage.setItem('galleryImageURLs', JSON.stringify(imageFiles));
                setAllImages(imageFiles);
                setCurrentSet(imageFiles.slice(0, 5));
            } catch (error){
                console.error('Error fetching images:', error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAndStoreImages();
    }, []);

    //inner slideshow: Animate 6 images every 30 seconds with GSAP

    useEffect(() => {
        if (currentSet.length === 0 || !imageRefs.current.length) return;

        //initial positioning (showing 5 cards: 2 left, 1 center, 2 right)
        gsap.set(imageRefs.current, {
            x:(index) => (index - 2) * 80, // 80px spacing, centered at index 2
            zIndex: (index) => 5 - Math.abs(index - 2) * -1 + 6, // Middle card on top
            opacity: (index) => 1 - Math.abs(index - 2) * 0.4, //Full opacity in center
            scale: (index) => 1 - Math.abs(index - 2) * 0.2, // Largest in center
        });

        const slideShowInterval = setInterval(() => {
            gsap.to(imageRefs.current, {
                x: '-=80', //Move left by on card width
                opacity: (index) => 1 - Math.abs(index -1) * 0.4, // shift opacity center
                scale: (index) => 1 - Math.abs(index -1) * 0.2, // shift scale center
                zIndex: (index) => 5 - Math.abs(index - 1), //shift z-index center
                duration: 1,
                ease: 'power2.inOut',
            });

                //check if we need to update images
                setCurrentIndex((prev) => {
                    const nextIndex = prev + 1;
                    if (nextIndex + 2 >= currentSet.length && allImages.length > currentSet.length){
                        //subtly add new image from right
                        const newImageIndex = (currentSet.length) % allImages.length;
                        const newImage = allImages[newImageIndex];
                        setCurrentSet((prevSet) => {
                            const newSet = [...prevSet, newImage];
                            //remove leftmost image after it fades out
                            if(newSet.length > 5){
                                newSet.shift();
                            }

                            //Update refs after state change
                            setTimeout(() => {
                                imageRefs.current = imageRefs.current.slice(-5);
                                gsap.set(imageRefs.current[imageRefs.current.length - 1], {
                                    x: 160, //Position new card on right
                                    opacity: 0.2,
                                    scale: 0.6,
                                    zIndex: 1,
                                });
                            }, 0);

                            return newSet;
                        });
                    }
                    return nextIndex % allImages.length;
                });
        }, 5000);


        return () => clearInterval(slideShowInterval);
    }, [currentSet, allImages]);
   


    return (
        <div className = 'gallery'>
            {loading ? (
                <p>Loading Images...</p>
            ): currentSet.length > 0 ?(
                currentSet.map((image, index) => (
                    <img
                        key={image.id}
                        src={image.url}
                        alt={image.namee}
                        className='gallery-image'
                        ref={(el) => (imageRefs.current[index] = el)} // Assign Ref for GSAP
                        onError ={(e) => console.log(`failed to load ${image.url}`, )}
                        />
                ))
            ):(
                <p>No images found</p>
            )}
        </div>
    );
};

export default Gallery