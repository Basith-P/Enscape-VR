import { Scene, Entity } from "aframe-react";
import "aframe";
import ImagesGrid from "./ImagesGrid";

const Home = () => {
  return (
    <Scene>
      <a-sky
        src="https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg"
        rotation="0 -90 0"
      ></a-sky>
      <a-entity id="rig" position="0 1 0">
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

      <a-text
        value="ENSCAPE"
        position="0 4 -3"
        align="center"
        font="kelsonsans"
        width="6"
        color="white"
        wrap-count="20"
      ></a-text>

      <ImagesGrid position="-2 0 -3" rotation="0 50 0" />
      <ImagesGrid position="2 0 -3" rotation="0 -50 0" />

      {/* <Entity light={{ type: "point" }} /> */}
      {/* <Entity particle-system={{ preset: "snow" }} /> */}
    </Scene>
  );
};

export default Home;
