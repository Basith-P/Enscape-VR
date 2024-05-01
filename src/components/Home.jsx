import { Scene } from "aframe-react";
import "aframe";
import "aframe-text-geometry-component";

import ImagesGrid from "./ImagesGrid";
import { useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
import { useNavigate } from "react-router-dom";
import realaxItems from "./data/relax";
import phobiaItems from "./data/phobia";
import Button3D from "./common/Button3D";

const Home = () => {
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (window.location.pathname === "/") setIsAuthChecking(false);
        else navigate("/", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    });
  }, []);

  return isAuthChecking ? (
    <div className="flex items-center justify-center h-screen flex-col bg-gray-900 text-white">
      <p className="text-7xl font-sans">ENSCAPE</p>
      <p className="text-xl">Loading ...</p>
    </div>
  ) : (
    <Scene
      vr-mode-ui="enabled: true"
      loading-screen="dotsColor: white; backgroundColor: black"
    >
      <a-light type="directional" position="-2 3 -2" intensity="1"></a-light>

      <a-assets>
        {realaxItems.map((item) => (
          <img key={item.id} id={item.id} src={item.image} crossOrigin="anonymous" />
        ))}

        {phobiaItems.map((item) => (
          <img key={item.id} id={item.id} src={item.image} crossOrigin="anonymous" />
        ))}

        <img
          id="bg"
          src="https://live.staticflickr.com/5767/23825183405_04f3082715_6k.jpg"
          // src="https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg"
          // src="https://live.staticflickr.com/7220/27729016682_e66db1acba_b.jpg"
          // src="https://live.staticflickr.com/65535/51352228655_fa5577c3fa_k.jpg"
          crossOrigin="anonymous"
        />
      </a-assets>

      <a-sky src="#bg" rotation="0 100 0"></a-sky>
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

      <a-text
        value="ENSCAPE"
        position="0 5 -5"
        align="center"
        font="kelsonsans"
        width="6"
        color="black"
        wrap-count="20"
      ></a-text>

      <ImagesGrid
        position="-2 0 -3"
        rotation="0 50 0"
        title="Relaxation"
        items={realaxItems}
      />
      <ImagesGrid
        position="2 0 -3"
        rotation="0 -50 0"
        title="Phobia Treatment"
        items={phobiaItems}
      />

      <Button3D
        id="logout-button"
        position="0 0 -3"
        rotation="-70 0 0"
        title="Logout"
        onClick={() => auth.signOut()}
      />
    </Scene>
  );
};

export default Home;
