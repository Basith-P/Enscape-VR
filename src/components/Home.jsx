import { Scene } from "aframe-react";
import "aframe";
import "aframe-text-geometry-component";

import { useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
import { useNavigate } from "react-router-dom";
import realaxItems from "./data/relax";
import phobiaItems from "./data/phobia";
import Button3D from "./common/Button3D";
import RelaxationScences from "./vr/RelaxationScences";
import PhobiaScenes from "./vr/PhobiaScenes";

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

  const backgrounds = [
    {
      id: "bg-1",
      src: "https://live.staticflickr.com/5767/23825183405_04f3082715_6k.jpg",
      rotation: "0 100 0",
    },
    {
      id: "bg-2",
      src: "https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg",
      rotation: "0 269 0",
    },
    {
      id: "bg-3",
      src: "https://live.staticflickr.com/7220/27729016682_e66db1acba_b.jpg",
      rotation: "0 -90 0",
    },
    {
      id: "bg-4",
      src: "https://live.staticflickr.com/65535/51352228655_fa5577c3fa_k.jpg",
      rotation: "0 71.5 0",
    },
  ];

  const [sky, setSky] = useState(backgrounds[0]);

  const setRandomSky = () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    while (backgrounds[randomIndex].id === sky.id) {
      randomIndex = Math.floor(Math.random() * backgrounds.length);
    }
    setSky(backgrounds[randomIndex]);
    // console.log("Sky changed", sky);
  };

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
      <a-light type="point" position="-2 3 -2" intensity="1"></a-light>

      <a-assets>
        {realaxItems.map((item) => (
          <img key={item.id} id={item.id} src={item.image} crossOrigin="anonymous" />
        ))}

        {phobiaItems.map((item) => (
          <img key={item.id} id={item.id} src={item.image} crossOrigin="anonymous" />
        ))}

        {backgrounds.map((bg) => (
          <img key={bg.id} id={bg.id} src={bg.src} crossOrigin="anonymous" />
        ))}
      </a-assets>

      {/* <a-sky src={`#${sky.id}`} rotation="0 -90 0"></a-sky> */}
      <a-sky src={`#${sky.id}`} rotation={sky.rotation}></a-sky>
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

      <RelaxationScences />
      <PhobiaScenes />

      <Button3D
        id="change-bg-button"
        position="0 .5 -3.5"
        rotation="-40 0 0"
        title="Change Background"
        width={2.5}
        onClick={setRandomSky}
      />
      <Button3D
        id="logout-button"
        position="-1.4 0 -3"
        rotation="-60 0 0"
        width={2.5}
        title="Request Feature"
        onClick={() => navigate("/request-feature")}
      />
      <Button3D
        id="logout-button"
        position="1.4 0 -3"
        rotation="-60 0 0"
        title="Logout"
        onClick={() => auth.signOut()}
        buttonColor="red"
      />
    </Scene>
  );
};

export default Home;
