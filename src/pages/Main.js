import React, { Component } from 'react'
import Contents from './Contents'
import LandingPage from './LandingPage'
import Statement from './Statement'
import Services from './Services'
import AboutMe from './AboutMe'
import '../css/Main.css'
import Branding from './Projects/Branding.js'
import CustomCursor from './CustomCursor'
import Colophone from './Colophone'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Main(){
        const onCursor = cursorType => {

        }
        return (
            <div className='çontainer'>
                <BrowserRouter>
                <CustomCursor/>
                    <Switch>
                        <Route exact path="/dylan_portfolio">
                            <section className='child'><LandingPage /></section>
                            <section className='child'><Statement /></section>
                            <section className='child'><Contents /></section>
                            <section className='child'><Services /></section>
                            <section className='child'><AboutMe /></section>
                            {/* <section className='child'><Colophone/></section> */}
                        </Route>
                        <Route path = "/Branding">
                            <Branding onCursor={onCursor}/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
