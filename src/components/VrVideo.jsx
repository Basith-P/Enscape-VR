import { useLocation } from "react-router-dom";

const VrVideo = () => {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/enscape-73b13.appspot.com/o/phobia%2Fspider.mp4?alt=media&token=44c6a40a-5c53-42bf-889b-e9cdba4d2fc0";

  const location = useLocation();
  const item = location.state.item;

  return (
    <a-scene loading-screen="dotsColor: white; backgroundColor: black">
      <a-assets>
        <video id="video" preload="auto" src={item.video} autoPlay></video>
      </a-assets>
      <a-videosphere
        src="#video"
        // src={url}
        rotation="0 -90 0"
        projection="equiangular"
        stereo="top-bottom"
      ></a-videosphere>
    </a-scene>
  );
};

export default VrVideo;
