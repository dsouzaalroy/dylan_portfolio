import React, { Component } from 'react'
import '../css/AboutMe.css'
import dylan from '../assets/photo.png'
import dylan_cv from '../assets/dylan_cv.pdf'


class AboutMe extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='setUp'>
                <div className='all_content_AboutMe'>
                    <img className = 'dylan' src={dylan}/>
                    <div className = 'description'>
                        <p className = 'hello'>Hello</p>
                        <p className= 'about_text'>My name is <b>Dylan Fernandes</b>, I'm a <b>Digital Designer</b> based in India</p>
                        <p className= 'about_text'>I'm currently studying at Rachana Sansad College of Applied Art and craft</p>
                    </div>
                    <div className='CV'>
                    <a href={dylan_cv} target="_blank"><p className="hover">View my CV</p></a>
                    </div>
                </div>
            </div>
        )
    }

}

export default AboutMe;