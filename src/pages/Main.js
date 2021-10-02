import React, { Component } from 'react'
import Contents from './Contents'
import LandingPage from './LandingPage'
import Mouse from './Mouse'
import '../css/Main.css'
import AnimatedCursor from "react-animated-cursor"
export default class Main extends Component {

    render() {
        return (
            <div>
                <AnimatedCursor style = {{}} 
                innerSize={0}
                outerSize={100}
                color='255,255,255'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}/>
                <Contents/>
                <LandingPage />
                {/* <Component/> */}
            </div>
        )
    }
}
