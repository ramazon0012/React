import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image from './fa1c0177218dd52cd0ccc.jpg'
import "./main.scss";
// import SimpleReactLightbox from 'simple-react-lightbox';

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src={image} onDragStart={handleDragStart} role="presentation" />,
    <img src={image} onDragStart={handleDragStart} role="presentation" />,
    <img src={image} onDragStart={handleDragStart} role="presentation" />,
  ];

  return (
    <div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="EtNBCri4LkQ"
        onClose={() => setOpen(false)}
      />
      <button className="btn-primary" onClick={() => setOpen(true)}>
        VIEW DEMO
      </button>
      <AliceCarousel autoPlay={true} autoPlayInterval={3000}  mouseTracking items={items} />
    </div>
  );
};
export default Video;
