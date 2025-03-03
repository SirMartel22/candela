import React from 'react';
import './Video.css'

import {useState, useEffect} from 'react';


const video = [
    {
        id:1,
        url:'https://www.youtube.com/embed/N8vF2gUt2Oo?si=1_91Em38-_Zv56jk'
    },

    {
        id:2,
        url:'https://www.youtube.com/embed/kYnRKOgZulU?si=9UtNvIts_pqzgUdj'
    },

    {
        id:3,
        url:'https://www.youtube.com/embed/5YVkwGUkf58?si=Ekl3_YuHSe9nD0wd'
    },
];

    const Video = () => { 
        
        const [selectedVideo, setSelectedVideo] = useState(null);

            return (

                <div className = "video-container">

                    <h1>Relive Video from Past Event By Candela</h1>
                    <p>Candela's technology lets you relive past events through immersive, high-quality video experiences.</p>

                  <div className="video-grid-container">
                    
                  <div className="video-grid">
                        {video.map((video) => (
                            <div key={video.id} className="video-item" onClick={() => setSelectedVideo(video.url) }>
                                <iframe
                                    src={video.url}
                                    title={`Video ${video.id}`}
                                    frameBorder ='0'
                                    allowFullScreen></iframe>
                            </div>
                        ))}
                    </div>


                    <div className="video-grid-btn-text">

                        <button className="explore btn">Explore more</button>

                        <p className="video-grid-text">
                        Step into the light and discover brilliance beyond limits.
                        </p>
                    </div>


                 </div>  
                   

                    {selectedVideo && (
                        <div className='modal' onClick = {() => setSelectedVideo(null)}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <span className="close" onClick={() => setSelectedVideo(null)}>$times;</span>
                                <iframe src={selectedVideo} title='Selected Video' frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    )}

                </div>
            );
        };

    export default Video;