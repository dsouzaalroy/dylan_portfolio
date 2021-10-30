import React from 'react'
import gallery_1 from '../../../../assets/Graphic_Design/book_1.png'
import gallery_2 from '../../../../assets/Graphic_Design/book_2.png'
import gallery_3 from '../../../../assets/Graphic_Design/book_3.png'
import gallery_4 from '../../../../assets/Graphic_Design/book_4.png'

import '../css/Gallery.css'

export default function Gallery2(){

    const styles = {
        width:'34vw',
        padding:'25px 25px 25px 25px'
    }

        return(
            <div className='setUp' style={{height:'200vh'}}>
                <div style={{margin:'0 auto', width:'50%', textAlign:'center', color:'white', fontSize:'2vw',paddingTop:'20vh'}}>Projects</div>
                <div className='center'>
                    <div>
                        <img src={gallery_1} style={styles}/>
                        <img src={gallery_2} style={styles}/><br/>
                        <img src={gallery_3} style={styles}/>
                        <img src={gallery_4} style={styles}/>
                    </div>
                </div>
            </div>
        )
}