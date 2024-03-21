import { Scene, Entity } from "aframe-react";
import "aframe";

const Home = () => {
  const imageUrls = [
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
  ];

  const imgWidth = 2;
  const imgHeight = 1.5;

  return (
    <Scene>
      <a-sky
        // src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
        src="https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg"
        // src={bgImage}
        rotation="0 -140 0"
      ></a-sky>
      {/* <a-assets>
    <video
      id="video"
      preload="auto"
      src={homeVideo}
      autoplay
      loop="true"
      crossOrigin="anonymous"
    ></video>
  </a-assets>
  <a-videosphere
    rotation="0 -90 0"
    src="#video"
    visible="false"
    autoplay
  ></a-videosphere> */}
      <a-entity
        id="rig"
        position="0 1 0"
        // rotate to the right
        rotation="0 -50 0"
      >
        <a-camera>
          <a-cursor
            color="white"
            fuse="true"
            animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
            animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
            animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
          ></a-cursor>
        </a-camera>
      </a-entity>
      <a-entity id="images-container" position="0 0 -3">
        {imageUrls.map((url, index) => {
          const row = Math.floor(index / 3);
          const col = index % 3;
          const xPos = -2.2 + col * (imgWidth + 0.1);
          const yPos = 3.4 - row * (imgHeight + 0.1);
          return (
            <a-image
              key={index}
              src={url}
              position={`${xPos} ${yPos} -5`}
              width={imgWidth}
              height={imgHeight}
              look-at="#rig"
              onClick={() => {
                console.log("clicked");
              }}
            ></a-image>
          );
        })}
      </a-entity>
      {/* <Entity light={{ type: "point" }} /> */}
      {/* <Entity particle-system={{ preset: "snow" }} /> */}
    </Scene>
  );
};

export default Home;
