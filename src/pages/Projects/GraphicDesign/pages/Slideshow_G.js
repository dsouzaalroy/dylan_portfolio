import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../../Branding/css/SlideShow.css'
import '../css/Slideshow_G.css'

import img1 from '../../../../assets/Graphic_Design/Slideshow1/img1.jpg'
import img2 from '../../../../assets/Graphic_Design/Slideshow1/img2.jpg'
import img3 from '../../../../assets/Graphic_Design/Slideshow1/img3.jpg'
import img4 from '../../../../assets/Graphic_Design/Slideshow1/img4.jpg'
import img5 from '../../../../assets/Graphic_Design/Slideshow1/img5.jpg'

import img6 from '../../../../assets/Graphic_Design/Slideshow1/img6.jpg'
import img7 from '../../../../assets/Graphic_Design/Slideshow1/img7.jpg'
import img8 from '../../../../assets/Graphic_Design/Slideshow1/img8.jpg'

import img9 from '../../../../assets/Graphic_Design/Slideshow1/img9.jpg'
import img10 from '../../../../assets/Graphic_Design/Slideshow1/img10.jpg'
import img11 from '../../../../assets/Graphic_Design/Slideshow1/img11.jpg'
import img12 from '../../../../assets/Graphic_Design/Slideshow1/img12.jpg'

import BackToProject from '../../BackToProject/backToProject'

export default function Slideshow_G(){
    const properties = {
        showArrows: false,
        autoPlay: true,
        autoFocus: false,
        centerMode: true,
        dynamicHeight: true,
        infiniteLoop: true,
        showIndicators: true,
        showStatus: false,
        width: '100vw',
        interval: 2000,
        centerSlidePercentage: 50,
        className: 'Carousel',
        thumbWidth: '6%',
        thumbHeight: 'auto',
        stopOnHover: false,
    };

    return(
        <div className='setUp'>
            <div className = 'Slideshow_G'>
            <div id='logo_design' className='Slide_Title'>
                    <p>Logo Design</p>
                </div>
                <Carousel {...properties} >
                    <div>
                        <img className='resize' src={img1} />
                    </div>
                    <div>
                        <img className='resize' src={img2} />
                    </div>
                    <div>
                        <img className='resize' src={img3} />
                    </div>
                    <div>
                        <img className='resize' src={img4} />
                    </div>
                    <div>
                        <img className='resize' src={img5} />
                    </div>
                </Carousel>
                <div id='logo_design' className='Slide_Title'>
                    <p>Logo Design</p>
                </div>
                <Carousel {...properties} >
                    <div>
                        <img className='resize' src={img6} />
                    </div>
                    <div>
                        <img className='resize' src={img7} />
                    </div>
                    <div>
                        <img className='resize' src={img8} />
                    </div>
                </Carousel>
                <div id='logo_design' className='Slide_Title'>
                    <p>Logo Design</p>
                </div>
                <Carousel {...properties} >
                    <div>
                        <img className='resize' src={img9} />
                    </div>
                    <div>
                        <img className='resize' src={img10} />
                    </div>
                    <div>
                        <img className='resize' src={img11} />
                    </div>
                    <div>
                        <img className='resize' src={img12} />
                    </div>
                </Carousel>
                <BackToProject nextProject='#/Animation/'></BackToProject>
        </div>
        </div>
    )
}