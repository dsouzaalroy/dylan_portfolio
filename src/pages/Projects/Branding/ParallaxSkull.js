import React, {useEffect, useState} from "react";
import skullcandy from "../../../assets/skullcandy_pattern.png"
import { Parallax } from 'react-scroll-parallax';
import './css/ParallaxSkull.css'


export default function ParallaxSkull(){
    const[disabled,setDisabled] = useState(false)
    useEffect(()=>{
        setDisabled(false);
    })
    
    return(
        <div className='setUp'>
            <div>
            </div>
            <div className ='custom_class'>
            <div className='same_line'>
                        <span className='academic'>Academic Project</span>
                        <span className='year'>Year:2019-2020</span>
                    </div>
            <Parallax x={[-20, 20]} tagOuter="figure">
                <p className='parallax_1'>Complete Rebrand for</p>
                <p className='parallax_1_1'>Complete Rebrand for</p>
            </Parallax>
            <Parallax x={[20, -20]} tagOuter="figure">
                <p className='parallax_2'>Skullcandy studios</p>
                <p className='parallax_2_1'>Skullcandy studios</p>
            </Parallax>
            <img className = 'skullcandy_pattern'src={skullcandy}></img>
            </div>
        </div>
    )
}   