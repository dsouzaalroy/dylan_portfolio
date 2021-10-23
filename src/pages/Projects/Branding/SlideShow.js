import React from "react";
import { Slide } from 'react-slideshow-image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './css/SlideShow.css'
import slide2 from '../../../assets/slideshow/slide2.jpg'
import slide3 from '../../../assets/slideshow/slide1.jpg'
import slide4 from '../../../assets/slideshow/bottle.jpg'
// Stationary Slideshow
import stationary_1 from '../../../assets/slideshow/Stationary_Slideshow/stationary_1.png'
import stationary_2 from '../../../assets/slideshow/Stationary_Slideshow/stationary_2.png'
import folder from '../../../assets/slideshow/Stationary_Slideshow/folder.png'
import lanyard from '../../../assets/slideshow/Stationary_Slideshow/lanyard.png'
import visitingCard_1 from '../../../assets/slideshow/Stationary_Slideshow/visitingCard_1.png'
import visitingCard_2 from '../../../assets/slideshow/Stationary_Slideshow/visitingCard_2.png'
import duct_tape from '../../../assets/slideshow/Stationary_Slideshow/duct_tape.png'

// Apparel Slideshow
import bag_shirt from '../../../assets/slideshow/Apparel/bag_shirt.png'
import clock from '../../../assets/slideshow/Apparel/clock.png'
import shirt_back from '../../../assets/slideshow/Apparel/shirt_back.png'
import shirt_front from '../../../assets/slideshow/Apparel/shirt_front.jpg'
import shopbag from '../../../assets/slideshow/Apparel/shopbag.png'
import tshirt_2 from '../../../assets/slideshow/Apparel/tshirt_2.png'
// import bag_shirt from '../../../assets/slideshow/Apparel/bag_shirt'



let slideshow='../../../assets/slideshow/'

export default function SlideShow() {

    const slideImages = [
        {
            url: 'https://preview.redd.it/rjrthgndnst71.png?width=960&crop=smart&auto=webp&s=18286a44f4560d11d86511e2f598c194d6cecc21',
        },
        {
            url: 'https://preview.redd.it/zb8gkd0oodt71.png?width=960&crop=smart&auto=webp&s=5ae18abd542603fe7383b564a11b1e8bc2665932',
        },
        {
            url: 'https://i.redd.it/eeuoexf7pdt71.png',
        },
    ];

    const properties = {
        showArrows:false,
        autoPlay:true,
        autoFocus:false,
        centerMode:true,
        dynamicHeight:true,
        infiniteLoop:true,
        showIndicators:true,
        showStatus:false,
        width:1700,
        interval:2000,
        centerSlidePercentage:50,
        className:'Carousel',
        thumbWidth:140
      };

      const slideStationary = [stationary_1,stationary_2,duct_tape,folder,lanyard,visitingCard_1,visitingCard_2]
      const slideApparel = [bag_shirt,clock,shirt_back,shirt_front,shopbag,tshirt_2]

    return (
        <div className='setUp'>
            <div className='all_content_Slideshow'>
                <Carousel
                {...properties}
                >
                <div>
                    <img className = 'resize' src={slide2} />
                </div>
                <div>
                    <img className = 'resize' src={slide3} />
                </div>
                </Carousel>
                

                <Carousel {...properties}>
                    {slideStationary.map((n) =>{
                        return(
                            <div>
                                <img src={n}/>
                            </div>
                        )
                    })}

                </Carousel>
                <Carousel {...properties}>
                    {slideApparel.map((n) =>{
                        return(
                            <div>
                                <img src={n}/>
                            </div>
                        )
                    })}

                </Carousel>
            </div>
        </div>
    )
}