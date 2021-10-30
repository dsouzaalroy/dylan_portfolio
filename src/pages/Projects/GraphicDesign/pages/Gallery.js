import React from 'react'
import gallery_1 from '../../../../assets/Graphic_Design/gallery_1.jpg'
import gallery_2 from '../../../../assets/Graphic_Design/gallery_2.png'
import gallery_3 from '../../../../assets/Graphic_Design/gallery_3.png'
import '../css/Gallery.css'


export default function Gallery() {

    const styles = {
        width: '28vw',
        padding: '25px 40px 25px 40px'
    }

    return (
        <div className='setUp'>
            <div style={{ margin: '0 auto', width: '50%', textAlign: 'center', color: 'white', fontSize: '2vw',paddingTop:'10vh'}}>Projects</div>
            <div className='center'>
            <div className='float_left'>
                    <div class="container">
                        <div className="content">
                                <div class="content-overlay"></div>
                                <img className="content-image" style={styles} src={gallery_1} />
                                <div className="content-details fadeIn-bottom" style={styles}>
                                    <h3 className="content-title">This is a title</h3>
                                    <p className="content-text">This is a short description</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='float_left'>
                    <div class="container">
                        <div className="content">
                                <div class="content-overlay"></div>
                                <img className="content-image" style={styles} src={gallery_2} />
                                <div className="content-details fadeIn-bottom" style={styles}>
                                    <h3 className="content-title">This is a title</h3>
                                    <p className="content-text">This is a short description</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='float_left'>
                    <div class="container">
                        <div className="content">
                                <div class="content-overlay"></div>
                                <img className="content-image" style={styles} src={gallery_3} />
                                <div className="content-details fadeIn-bottom" style={styles}>
                                    <h3 className="content-title">This is a title</h3>
                                    <p className="content-text">This is a short description</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}