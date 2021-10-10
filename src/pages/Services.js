import React,{Component} from "react";
import '../css/Services.css'

class Services extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='setUp'>
                <div className='all_content_Services'>
                        <p className = 'Title'>SERVICES</p>
                    <div className = 'Services'>
                        <p>I want to help my clients bring about a postitive change</p>
                        <p>While using an impactful and fun design process</p>
                    </div>
                    <br></br>
                    <div className = 'Tools'>
                        <p className = 'Title'>TOOLS</p>
                        <p>Adobe Illustrator / Photoshop / After Effects / Premier Pro / XD</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;