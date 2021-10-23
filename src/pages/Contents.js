import React, { Component } from "react";
import "../css/Contents.scss"
import { motion } from "framer-motion";
import animation from "../assets/Branding/animation_img.jpg"
import branding from "../assets/Branding/branding_img.png"
import graphic_design from "../assets/Branding/graphic_design_image.jpg"
class Contents extends Component {
    constructor(props) {
        super(props)
        this.changeToImage = this.changeToImage.bind(this)
        this.changeToDefault = this.changeToDefault.bind(this)
        this.counter = this.changeToDefault.bind(this);
        this.state = {
            bgImage: "",
            animations: { y: ["3%", "-3%"] }

        }
    }

    img_store = {
        "0": "",
        "1": branding,
        "2": graphic_design,
        "3": animation
    }

    render() {
        let bounceTransition = {
            y: {
                duration: 0.3,
                yoyo: Infinity,
                ease: "easeOut",
            }
        }

        const clearTransition = () => {
            this.state.animations = { y: [] }
            console.log(this.state.animations)
            bounceTransition = { y: {} };
        }

        return (
            <div className='setUp'>
                <div className='all_content_Contents'>
                    <ReturnImgDiv key={this.state.bgImage} value={this.state.bgImage} />
                    <div id="contents" className="reveal-text">
                        <ul>
                            <a href='#/Branding/'><motion.li className = 'hover' onHoverStart={clearTransition} animate={this.state.animations} transition={bounceTransition} value="1" onMouseEnter={this.changeToImage} onMouseOut={this.changeToDefault}>Branding</motion.li><br /></a>
                            <li value="2" className = 'hover' onMouseEnter={this.changeToImage} onMouseOut={this.changeToDefault}>Graphic Design</li><br />
                            <li value="3" className = 'hover' onMouseEnter={this.changeToImage} onMouseOut={this.changeToDefault}>Animation</li><br />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    changeToImage(e) {
        this.setState({ bgImage: this.img_store[e.target.value] })
    }
    changeToDefault() {
        this.setState({ bgImage: this.img_store[0] })
    }
}
function ReturnImgDiv(props) {
    const value = props.value;
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    console.log(value);
    return (<motion.img variants={variants} initial="hidden" animate="visible" transition={{ ease: "easeIn", duration: 0.5 }} class="bg" src={value} />);
}


export default Contents;