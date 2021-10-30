import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './backToProject.css'
import arrow_left from './arrow_left.png'
import arrow_right from './arrow_right.png'

const BackToProject= props =>{
    const style = {
        color: 'white',
        fontSize: '1vw'
    }
    const arrow_style = {
        display:'inline',
    }

    return (
        <div className='navigator_footer' style={style}>
                <a href={props.nextProject} className='nextProject'>
                        <p className ='hover' style={{height:30, textAlign:'center'}}>Go to next project</p>
                </a><br/>
                <a href='#/' className='back'>
                    <p className ='hover' style={{height:30, textAlign:'center'}}>Back</p>
                </a>
        </div>
    )
}
export default BackToProject