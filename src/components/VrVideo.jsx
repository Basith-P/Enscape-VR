import Video from "../assets/progressive.mp4";
import Maldives from "../assets/maldives.mp4";

const VrVideo = () => {
  return (
    <a-scene loading-screen="dotsColor: white; backgroundColor: black">
      <a-assets>
        <video id="video" preload="auto" src={Maldives} autoPlay></video>
      </a-assets>
      <a-videosphere
        src="#video"
        rotation="0 -90 0"
        projection="equiangular"
        stereo="top-bottom"
      ></a-videosphere>
    </a-scene>
  );
};

export default VrVideo;
