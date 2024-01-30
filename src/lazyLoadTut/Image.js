import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import image from '../scrollEffect/images/e3c3e41086d582c37cd62891d5a6204b.jpg'
import image1 from '../scrollEffect/images/HD-wallpaper-macbook-air-m2-macos-ventura-macbook-apple-computer.jpg';
import image2 from '../scrollEffect/images/i.webp'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'

const Image = () => {

    const styleImage = {
        width: '50%',
    }
    return (
        <div>
            <h1>Lazy load</h1>
            <LazyLoadImage 
                src={image}
                style={styleImage}
                effect="blur"
                delayTime="5000"
                placeholderSrc={<h1>Loading...</h1>}
            />
            <LazyLoadImage 
                src={image1}
                style={styleImage}
                effect="black-and-white"
            />
            <LazyLoadImage 
                src={image2}
                style={styleImage}
                effect="opacity"
            />
        </div>
    )
}
export default Image;