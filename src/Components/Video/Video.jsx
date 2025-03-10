import React from 'react';
import './Video.css'

import {useState, useEffect} from 'react';


const video = [
    {
        id:1,
        url: 'https://www.youtube.com/embed/I8_CzUszSW4?si=zIAZlsyChZ46KAoP'
    },

    {
        id:2,
        url: 'https://youtube.com/embed/nZDuX4Prg4Y?si=WJgqOx9nkim4ZiPy'
    },

    {
        id:3,
        url: 'https://www.youtube.com/embed/tBu8TS8Gc5o?si=6NtrK0N7ccFOnG83'
    },

    {
        id:4,
        url: 'https://www.youtube.com/embed/fQh_CjEu7XM?si=1q8oUwi8XN3nVkgd'
    },

    {
        id:5,
        url: 'https://www.youtube.com/embed/cuxWI-qenXI?si=Go10H16-DrPvkjk9y'
    },

    {
        id:6,
        // url:'https://www.youtube.com/embed/5YVkwGUkf58?si=Ekl3_YuHSe9nD0wd'
        url: 'https://www.youtube.com/embed/_ghv9qRX5RA?si=-on6RxF2bdSMw7hE'
    },
];

    const Video = () => { 
        
        const [selectedVideo, setSelectedVideo] = useState(null);

            return (

                <div className = "video-container" id='video'>

                    <div className="video-header">
                        <h1>Relive Video from Past Event By Candela</h1>
                        <p>Candela's technology lets you relive past events through immersive, high-quality video experiences.</p>
                    </div>
                    
                   

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