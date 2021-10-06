import React, { Component } from 'react'
import Contents from './Contents'
import LandingPage from './LandingPage'
import Mouse from './Mouse'
import '../css/Main.css'
import AnimatedCursor from "react-animated-cursor"
export default class Main extends Component {

    render() {
        return (
            <div className='çontainer'>
                <AnimatedCursor
                innerSize={10}
                outerSize={50}
                color='255,255,255'
                outerAlpha={0.5}
                innerScale={0.7}
                outerScale={2}/>
                <section className='child'><LandingPage /></section>
                <section className='child'><Contents /></section>
            </div>
        )
    }
}
