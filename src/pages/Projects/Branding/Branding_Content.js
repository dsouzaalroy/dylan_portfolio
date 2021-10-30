import React from "react";
import './css/Branding_Content.css'
import  AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Branding_Content(){

    const styles ={textDecoration:'none',color:'inherit',display:'table',fontWeight:500}

    return(
        <div className='setUp'>
            <div className='all_content_Branding_Content'>
                <ul>
                    <li className = 'Title_Branding_Contents'>Contents</li>
                    <li className='hover'><AnchorLink style={styles} href='#logo_design'>Logo Design</AnchorLink></li><br/>
                    <li className='hover'><AnchorLink style={styles} href='#corporate_identity'>Corporate Identity</AnchorLink></li><br/>
                    <li className='hover'><AnchorLink style={styles} href='#apparel_design'>Apparel Design</AnchorLink></li><br/>
                    <li className='hover'><AnchorLink style={styles} href='#package_design'>Package Design</AnchorLink></li><br/>
                    <li className='hover'><AnchorLink style={styles} href='#website_design'>Website Design</AnchorLink></li><br/>
                </ul>
            </div>
        </div>
    )
} 