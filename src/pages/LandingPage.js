import React, { Component } from "react";
import { View, Text } from "react-native";
import { motion } from "framer-motion";
import "../css/LandingPage.css";
import scroll_mouse from "../assets/mouse_scroll.png"

export default class LandingPage extends Component {
  render() {
    const bounceTransition = {
        y: {
          duration: 0.5,
          yoyo: Infinity,
          ease: "easeInOut",
        }
      }
      const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    return (
      <motion.div variants={variants}initial="hidden" animate="visible" transition={{ ease: "easeIn", duration: 0.5 }} className="all_content">
        <div className="upper_text">
          <span className="small_help"> I help you </span>
          <span className="big_create">Create </span>
          <span className="uq_inverse"> Unique </span>
          <div className="white_box"></div>
        </div>
        <div className="lower_Text">
          <span className="bld_dsgn"> Design Experiences.</span>
        </div>
        <div><p id='desc'>Creative designer and Visualiser</p></div>
        <motion.img animate={{y:["15%", "-10%"]}} transition={bounceTransition} className ="mouse" src ={scroll_mouse}/>

      </motion.div>
    );
  }
}

