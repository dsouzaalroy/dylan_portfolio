import React, { useEffect, useState, useRef } from "react";
import hoverEffect from "hover-effect";
import overlay from "../../../../assets/displacement_image.jpg"
import img1 from "../../../../assets/Graphic_Design/coke_1.png"
import img2 from "../../../../assets/Graphic_Design/coke_2.jpg"
import img3 from "../../../../assets/test_img.jpg"
import '../css/Coke.css'
 


export default function Coke() {

    const container = useRef(null);
    useEffect(() => {
        new hoverEffect({
            parent: container.current,
            intensity: .5,
            image1: img1,
            image2: img2,
            displacementImage: overlay,
            imagesRatio: 0.5625,

        })
    },[container])

    const styles ={
    }

    return (
            <div className='setUp'>
                <div className='center' style={{paddingTop:'20vh'}}>
                    <div
                        className='imgContainer'
                        id="imgContainer"
                        style={{height: '100vh',
                            width: '90vw',}}
                        ref={container}/>
                    </div>
            </div>
    )
}