import React, { Component } from "react";
import "../css/Contents.css"
import { motion } from "framer-motion";

class Contents extends Component {
    constructor(props) {
        super(props)
        this.changeToImage = this.changeToImage.bind(this)
        this.changeToDefault = this.changeToDefault.bind(this)
        this.counter = this.changeToDefault.bind(this);
        this.state = {
            bgImage: "",
        }
    }

    img_store = {
        "0": "",
        "1": "https://i.redd.it/iuagl1twm8q71.jpg",
        "2": "https://preview.redd.it/0xs61hg0mnq71.png?width=640&crop=smart&auto=webp&s=4be743d62d15b8e723343f3177b06d1d3968f66e",
        "3": "https://i.redd.it/o9hd2jwvylq71.png",
        "4": "https://preview.redd.it/rzeo4iqnrmq71.png?width=640&crop=smart&auto=webp&s=cc424cca764378dea466ee00902cea17b3ca0020"
    }

    render() {
        return (
            <div>
                <ReturnImgDiv key={this.state.bgImage} value={this.state.bgImage} />
                <div id="contents" >
                    <ul>
                        <li value="1" onMouseEnter={this.changeToImage} onMouseOut={this.changeToDefault}>Branding</li><br/>
                        <li value="2" onMouseEnter={this.changeToImage} onMouseOut={this.changeToDefault}>Graphic Design</li><br/>
                        <li value="3" onMouseEnter={this.changeToImage} onMouseOut={this.changeToDefault}>Illustration</li><br/>
                        <li value="4" onMouseEnter={this.changeToImage} onMouseOut={this.changeToDefault}>Animation</li>
                    </ul>
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