import React, { useEffect, useState, useRef } from "react";
import hoverEffect from "hover-effect";
import overlay from "../../../../assets/displacement_image.jpg"
import img1 from "../../../../assets/Graphic_Design/kissan.png"
import img2 from "../../../../assets/Branding/graphic_design_image.jpg"
import img3 from "../../../../assets/test_img.jpg"
import '../css/Kisanjam.css'
 


export default function Kisanjam() {

    const container = useRef(null);
    useEffect(() => {

        new hoverEffect({
            parent: container.current,
            intensity: .1,
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
                <div
                    className='imgContainer'
                    id="imgContainer"
                    style={{width:'90vw',
                            height:'100vh'}}
                    ref={container}/>


            </div>
    )
}