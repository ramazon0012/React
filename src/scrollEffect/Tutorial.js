import React, {useEffect} from "react";
import './tutorial.css'
import Aos from "aos";
import "aos/dist/aos.css";
import Image1 from './images/HD-wallpaper-macbook-air-m2-macos-ventura-macbook-apple-computer.jpg';
import Image2 from './images/e3c3e41086d582c37cd62891d5a6204b.jpg';
import Image3 from './images/i (1).webp';
import Image4 from './images/img8.jpg';

const Tutorial = () => {

    useEffect(() => {
        Aos.init({
        });
    })
    return(
        <div>
            <div className="imageSection">
                <img data-aos="fade-right" data-aos-duration="1500" src={Image1} />
                <img data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear" src={Image2} />
                <img data-aos="fade-up-left" data-aos-delay="1000" data-aos-duration="500" src={Image3} />
                <img data-aos="zoom-in" data-aos-duration="900" src={Image4} />
            </div>
        </div>
    );
}
export default Tutorial;