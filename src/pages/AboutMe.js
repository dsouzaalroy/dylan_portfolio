import React, { Component } from 'react'
import '../css/AboutMe.css'
import chutiya from '../assets/photo.png'

class AboutMe extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='setUp'>
                <div className='all_content_AboutMe'>
                    <img className = 'chutiya' src={chutiya}/>
                    <div className = 'description'>
                        <p className = 'hello'>Hello</p>
                        <p className= 'about_text'>My name is <b>Dylan Fernandes</b>, I'm a <b>Digital Designer</b> based in India</p>
                        <p className= 'about_text'>I'm currently studying at Rachana Sansad College of Applied Art and craft</p>
                    </div>
                    <div className='CV'>
                    <p>View my CV</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default AboutMe;