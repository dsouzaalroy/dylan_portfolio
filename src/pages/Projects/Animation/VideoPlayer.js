import React from "react";
import HoverVideoPlayer from 'react-hover-video-player';
import './css/VideoPlayer.css'

export default function VideoPlayer(){
    return(
        <div className='setUp'>
            <div className='all_content_video_player'>
                <HoverVideoPlayer
                    className='video_1'
                    videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                />
            </div>

        </div>
    )
}