import React from 'react'
import './Background.css'
import video1 from "../../assets/88481-606110665.mp4"
import image1 from "../../assets/shubham-sharan-6NqEMk91ayU-unsplash.jpg"
import image2 from "../../assets/max-brinton-kU2MOjKobNg-unsplash.jpg"
import image3 from "../../assets/peter-broomfield-m3m-lnR90uM-unsplash.jpg"

const Background = ({ playStatus, heroCount }) => { 
    if (playStatus) {
        return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>
        )
    } else if (heroCount === 0) {
        return <img src={image1} className='background fade-in' alt=''/>
    } else if (heroCount === 1) {
        return <img src={image2} className='background fade-in' alt=''/>
    } else if (heroCount === 2) {
        return <img src={image3} className='background fade-in' alt=''/>
    }
}

export default Background
