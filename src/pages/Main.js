import React, { Component } from 'react'
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
import Canvas_test from './Projects/Branding/Canvas_test';


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
                    <Route path="/Branding/" >
                        <ParallaxProvider>
                            <Branding onCursor={onCursor} />
                            <ParallaxSkull />
                            <About/>
                            <Branding_Content/>
                            <SlideShow />
                        </ParallaxProvider>
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}
