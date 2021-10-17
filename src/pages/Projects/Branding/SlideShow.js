import React from "react";
import { Slide } from 'react-slideshow-image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './css/SlideShow.css'

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
        duration: 1000,
        autoplay: true,
        transitionDuration: 500,
        arrows: false,
        infinite: true,
        easing: "ease",
      };

    return (
        <div className='setUp'>
            <div className='all_content_Slideshow'>
                {/* <Slide {...properties}>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                                <span>{slideImage.caption}</span>
                            </div>
                        </div>))}
                </Slide> */}
                <Carousel
                showArrows={false}
                autoPlay={true}
                centerMode={true}
                dynamicHeight={true}
                infiniteLoop={true}
                showIndicators={true}
                showStatus={false}
                width={1700}
                interval={2000}
                centerSlidePercentage={50}
                className = 'Carousel'
                thumbWidth={100}
                >
                <div>
                    {/* 2560/1440p optimal */}
                    <img src='https://i.redd.it/dxergc4eqyt71.jpg' />
                </div>
                <div>
                    <img src="https://preview.redd.it/1pm4kag7rkt71.jpg?width=960&crop=smart&auto=webp&s=56a6bb3d413cbea14cdcc42d1c5bb721490168b7" />
                </div>
                <div>
                    <img src="https://i.redd.it/4k6anfkwtft71.png" />
                </div>
                </Carousel>
            </div>
        </div>
    )
}