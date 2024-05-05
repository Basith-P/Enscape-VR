import { useLocation, useNavigate } from "react-router-dom";

import stopIcon from "../assets/icons/stop.png";
import playIcon from "../assets/icons/play.png";
import pauseIcon from "../assets/icons/pause.png";

import { getStreamUrlFromShareUrl } from "@/utils/functions";
import ImageButton from "./common/ImageButton";
import { useState } from "react";

const VrVideo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isPlaying, setIsPlaying] = useState(true);

  const item = location.state.item;
  console.log("item", item);

  const url = getStreamUrlFromShareUrl(item.videoUrl);

  const togglePlay = () => {
    const video = document.querySelector("#video");
    if (isPlaying) video.pause();
    else video.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <a-scene loading-screen="dotsColor: white; backgroundColor: black">
      <a-assets>
        <video id="video" src={url} autoPlay preload="auto"></video>
        <img id="stop" src={stopIcon} />
        <img id="play" src={playIcon} />
        <img id="pause" src={pauseIcon} />
      </a-assets>

      <a-videosphere src="#video" rotation="0 -90 0"></a-videosphere>

      <a-entity id="r ig" position="0 0 0">
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

      <ImageButton
        src={isPlaying ? "#pause" : "#play"}
        position="-1 0 -2"
        rotation="-10 0 0"
        // rotation="-40 30 0"
        onClick={togglePlay}
      />
      <ImageButton
        src="#stop"
        position="1 0 -2"
        // rotation="-40 -30 0"
        rotation="-10 0 0"
        onClick={() => navigate("/rate", { state: item })}
      />
    </a-scene>
  );
};

export default VrVideo;
