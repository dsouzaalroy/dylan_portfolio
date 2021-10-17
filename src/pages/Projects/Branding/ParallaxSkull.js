import React, {useEffect, useState} from "react";
import skullcandy from "../../../assets/skullcandy_pattern.png"
import { Parallax } from 'react-scroll-parallax';
import './css/ParallaxSkull.css'


export default function ParallaxSkull(){
    const[disabled,setDisabled] = useState(true)
    useEffect(()=>{
        setDisabled(false);
    })
    
    return(
        <div className='setUp'>
            <div>
                <img className = 'skullcandy_pattern'src={skullcandy}></img>
            </div>
            <Parallax className="custom-class" x={[-20, 20]} tagOuter="figure" disabled={disabled}>
                <p>Complete Rebrand for</p>
            </Parallax>
            <Parallax className="custom-class" x={[20, -20]} tagOuter="figure" disabled={disabled}>
                <p>Skullcandy studios</p>
            </Parallax>
        </div>
    )
}