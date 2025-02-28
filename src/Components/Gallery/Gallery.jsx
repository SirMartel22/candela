import React, { useEffect, useState } from 'react';
import { useRef } from 'react'
import axios from 'axios';
import { gsap } from 'gsap'

import './Gallery.css';


const Gallery = () => {
    const [allImages, setAllImages] = useState([]);
    const [currentSet, setCurrentSet] = useState([])
    const [loading, setLoading] = useState(true);
    const imageRefs = useRef([]) //Refs for GSAP animations
    const API_KEY = process.env.REACT_APP_API_KEY;
    const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
    const API_SECRET = process.env.REACT_APP_API_SECRET;

    console.log(API_KEY);
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

                const response = await axios.get(
                    `/api/cloudinary/v1_1/${CLOUD_NAME}/resources/image/upload?max_results=50`,
                    {
                        headers: {Authorization: `Basic ${btoa(`${API_KEY}:${API_SECRET}`)}`},
                    }
                );

                console.log(response.data)

                const imageFiles = response.data.resources.map((file) => ({
                    id: file.public_id,
                    url: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_500/${file.public_id}`,
                    namee: 'gallery_image'
                }));

                localStorage.setItem('galleryImageURLs', JSON.stringify(imageFiles));
                setAllImages(imageFiles);
                setCurrentSet(imageFiles.slice(0, 6));
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

        const slideShowInterval = setInterval(() => {
            gsap.to(imageRefs.current, {
                opacity: 0.3, //Dim all images
                duration: 0.5,
                ease: 'power2.inOut',
            });

            const activeIndex = imageRefs.current.findIndex((ref) => ref.style.opacity === '1');
            const nextIndex = (activeIndex + 1) % 6;

            gsap.to(imageRefs.current[nextIndex], {
                opacity: 1, // Highlight the next image
                scale: 1.05,//Slight zoom for emphasis
                duration: 0.5,
                ease: 'power2.inOut',
            });
        }, 30000); //30 seconds per cycle (180s / 6 images)

        //initial animation
        gsap.set(imageRefs.current, { opacity: 0.3});
        gsap.set(imageRefs.current[0], { opacity: 1, scale: 1.05});

        return () => clearInterval(slideShowInterval);
    }, [currentSet]);

    //Outer rotation: New set of 6 every 3 minutes
    useEffect(() => {
        if (allImages.length === 0) return;

        const rotationInterval = setInterval(() => {
            setCurrentSet((prev) => {
                const currentStart = allImages.findIndex((img) => img.id === prev[0].id);
                const nextStart = (currentStart + 6) % allImages.length;
                const remaining = allImages.length - nextStart;

                return remaining >= 6
                ? allImages.slice(nextStart, nextStart + 6)
                : [...allImages.slice(nextStart), ...allImages.slice(0, 6 - remaining)];

            });
        }, 180000); //3 minutes per cycle (180s)

        return () => clearInterval(rotationInterval);
    }, [allImages]);


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