import { Scene } from "aframe-react";
import "aframe";
import "aframe-text-geometry-component";

import ImagesGrid from "./ImagesGrid";

const Home = () => {
  return (
    <Scene
      vr-mode-ui="enabled: true"
      loading-screen="dotsColor: white; backgroundColor: black"
    >
      <a-sky
        src="https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg"
        rotation="0 -90 0"
      ></a-sky>
      <a-entity id="rig" position="0 1 0">
        <a-camera>
          <a-cursor
            color="white"
            fuse="true"
            geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02"
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
        // font="Oxanium"
        // font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt"
        width="6"
        color="white"
        wrap-count="20"
      ></a-text>

      {/* <a-entity text-geometry="value: What's up"></a-entity> */}

      <ImagesGrid position="-2 0 -3" rotation="0 50 0" />
      <ImagesGrid position="2 0 -3" rotation="0 -50 0" />
    </Scene>
  );
};

export default Home;
