import React, { Component,useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'; 
import { HashRouter, Switch, Route } from 'react-router-dom'
import Contents from './Contents'
import LandingPage from './LandingPage'
import Statement from './Statement'
import Services from './Services'
import AboutMe from './AboutMe'
import '../css/Main.css'
import Branding from './Projects/Branding/Branding'
import CustomCursor from './CustomCursor'
import Colophone from './Colophone'
import Connect from './Connect'
import SlideShow from './Projects/Branding/SlideShow'
import ParallaxSkull from './Projects/Branding/ParallaxSkull'
import Branding_Content from './Projects/Branding/Branding_Content';
import About from './Projects/Branding/About';
import Kisanjam from './Projects/GraphicDesign/pages/Kisanjam';
import Gallery from './Projects/GraphicDesign/pages/Gallery';
import Coke from './Projects/GraphicDesign/pages/Coke';
import Gallery2 from './Projects/GraphicDesign/pages/Gallery2';
import Slideshow_G from './Projects/GraphicDesign/pages/Slideshow_G';
import VideoPlayer from './Projects/Animation/VideoPlayer';

export default function Main() {
    const onCursor = cursorType => {

    }
    return (
        <div className='çontainer'>
            <HashRouter basename='/'>
                <CustomCursor />
                <Switch>
                    <Route exact path="/">
                        <section className='child'><LandingPage /></section>
                        <section className='child'><Statement /></section>
                        <section className='child'><Contents /></section>
                        <section className='child'><Services /></section>
                        <section className='child'><AboutMe /></section>
                        <section className='child'><Connect /></section>
                        <section className='child'><Colophone /></section>
                    </Route>
                    <Route path="/Branding" >
                        <ParallaxProvider>
                            <Branding onCursor={onCursor}/>
                            <ParallaxSkull />
                            <About/>
                            <Branding_Content/>
                            <SlideShow />
                        </ParallaxProvider>
                    </Route>
                    <Route path="/Graphic_Design" >
                        <Kisanjam/>
                        <Gallery/>
                        <Coke/>
                        <Gallery2/>
                        <Slideshow_G/>
                    </Route>
                    <Route path="/Animation" >
                        <VideoPlayer/>
                        
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}
