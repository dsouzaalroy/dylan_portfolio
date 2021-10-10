import React, { Component,useState,useEffect } from 'react'
import '../css/Statement.css'
import eye from '../assets/eye.png'


function Statement(){

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const speed = 0.7;
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {window.removeEventListener("scroll", handleScroll);
    };
    }, []);

 

        return (
            <div className="setUp">
                <div className="all_content_Statement">
                    <div className='same_line'>
                        <span className='creative'>Creative Thinking</span>
                        <span className='interactive'>Interactive Design</span>
                    </div>
                    <p className='statement_1' style ={{transform: `translateX(-${offsetY * speed}px)`}}>LETS BRING YOUR THOUGHTS</p>
                    <p className='statement_2'style ={{transform: `translateX(${offsetY * speed}px)`}}>TO ACTION.</p>
                    <p className='statement_1_2' style ={{transform: `translateX(-${offsetY * speed}px)`}}>LETS BRING YOUR THOUGHTS</p>
                    <p className='statement_2_2'style ={{transform: `translateX(${offsetY * speed}px)`}}>TO ACTION.</p>
                    <img className ='eye_image' src={eye}></img>
                </div>
            </div>
        )
    
}

export default Statement;