import React, {useEffect} from "react";
import { Slide } from 'react-slideshow-image';
import { Carousel } from 'react-responsive-carousel';
import Zoom from 'react-medium-image-zoom'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'react-medium-image-zoom/dist/styles.css'
import './css/SlideShow.css'

import slide2 from '../../../assets/slideshow/slide2.jpg'
import slide3 from '../../../assets/slideshow/slide1.jpg'
import slide0 from '../../../assets/slideshow/menu1.jpg'

// Stationary Slideshow
import stationary_1 from '../../../assets/slideshow/Stationary_Slideshow/stationary_1.png'
import stationary_2 from '../../../assets/slideshow/Stationary_Slideshow/stationary_2.png'
import folder from '../../../assets/slideshow/Stationary_Slideshow/folder.png'
import lanyard from '../../../assets/slideshow/Stationary_Slideshow/lanyard.png'
import visitingCard_1 from '../../../assets/slideshow/Stationary_Slideshow/visitingCard_1.png'
import visitingCard_2 from '../../../assets/slideshow/Stationary_Slideshow/visitingCard_2.png'
import duct_tape from '../../../assets/slideshow/Stationary_Slideshow/duct_tape.png'

// Apparel Slideshow
import bag_shirt from '../../../assets/slideshow/Apparel/bag_shirt.jpg'
import clock from '../../../assets/slideshow/Apparel/clock.jpg'
import shirt_back from '../../../assets/slideshow/Apparel/shirt_back.jpg'
import shirt_front from '../../../assets/slideshow/Apparel/shirt_front.jpg'
import shopbag from '../../../assets/slideshow/Apparel/shopbag.jpg'
import tshirt_2 from '../../../assets/slideshow/Apparel/tshirt_2.jpg'
import baatli from '../../../assets/slideshow/Apparel/baatli.jpg'

// Package Slideshow
import mockup_1 from '../../../assets/slideshow/Package/package1.jpg'
import mockup_2 from '../../../assets/slideshow/Package/package2.jpg'
import mockup_3 from '../../../assets/slideshow/Package/package3.jpg'
import mockup_4 from '../../../assets/slideshow/Package/package4.jpg'

// Website Slideshow
import moods12 from '../../../assets/slideshow/Website/12moods.png'
import product_final from '../../../assets/slideshow/Website/product_final.png'
import product_purchase from '../../../assets/slideshow/Website/product_purchase.png'
import signUp from '../../../assets/slideshow/Website/signUp.png'
import website from '../../../assets/slideshow/Website/website_2.png'

import BackToProject from '../BackToProject/backToProject'




let slideshow = '../../../assets/slideshow/'

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


    const slideStationary = [stationary_1, stationary_2, duct_tape, folder, lanyard, visitingCard_1, visitingCard_2]
    const slideApparel = [bag_shirt, clock, shirt_back, shirt_front, shopbag, tshirt_2, baatli]
    const slidePackage = [mockup_1, mockup_2, mockup_3, mockup_4]
    const slideWebsite = [moods12, product_final, product_purchase, signUp, website]

    return (
        <div className='setUp'>
            <div className='all_content_Slideshow'>

                <div id='logo_design' className='Slide_Title'>
                    <p>Logo Design</p>
                </div>
                <Carousel {...properties} >
                    <div>
                        <img className='resize' src={slide2} />
                    </div>
                    <div>
                        <img className='resize' src={slide3} />
                    </div>
                </Carousel>

                <div id='corporate_identity' className='Slide_Title'>
                    <p>Corporate Identity</p>
                </div>

                <Carousel {...properties}>
                    {slideStationary.map((n) => {
                        return (
                            <div>
                                <img src={n} />
                            </div>
                        )
                    })}

                </Carousel>

                <div id='apparel_design' className='Slide_Title'>
                    <p>Apparel Design</p>
                </div>

                <Carousel {...properties}>
                    {slideApparel.map((n) => {
                        return (
                            <div>

                                <img src={n} />
                            </div>
                        )
                    })}

                </Carousel>
                <div id='package_design' className='Slide_Title'>
                    <p>Package Design</p>
                </div>
                <Carousel {...properties}>
                    {slidePackage.map((n) => {
                        return (
                                    <div>
                                        <img src={n} />
                                    </div>
                        )
                    })}
                </Carousel>
                <div id='website_design' className='Slide_Title'>
                    <p>Website Design</p>
                </div>
                <Carousel {...properties}>
                    {slideWebsite.map((n) => {
                        return (
                            <div className='zoomA'>
                                    <img src={n} />
                            </div>
                        )
                    })}
                </Carousel>
                <BackToProject nextProject='#/Graphic_Design/'></BackToProject>

            </div>
        </div>
    )
}