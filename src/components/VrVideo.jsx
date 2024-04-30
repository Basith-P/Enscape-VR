import { useLocation, useNavigate } from "react-router-dom";

import stopIcon from "../assets/icons/stop.png";

const VrVideo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;

  return (
    <a-scene loading-screen="dotsColor: white; backgroundColor: black">
      <a-assets>
        <video id="video" preload="auto" src={item.video} autoPlay></video>
        <img id="stop" src={stopIcon} />
      </a-assets>
      <a-videosphere
        src="#video"
        rotation="0 -90 0"
        // projection="equiangular"
        // stereo="top-bottom"
      ></a-videosphere>

      <a-entity id="rig" position="0 1 0">
        <a-camera>
          <a-cursor
            color="white"
            fuse="true"
            raycaster="objects: [data-raycastable]"
            geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02"
            animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
            animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
            animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
          ></a-cursor>
        </a-camera>
      </a-entity>

      <a-image
        src="#stop"
        position="1 0 -2"
        width="0.5"
        height="0.5"
        rotation="-40 -30 0"
        onClick={() => navigate("/rate", { state: item })}
        // document.querySelector("#video").pause();
        data-raycastable
      ></a-image>
    </a-scene>
  );
};

export default VrVideo;
