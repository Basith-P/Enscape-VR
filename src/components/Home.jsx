import { Scene } from "aframe-react";
import "aframe";
import "aframe-text-geometry-component";

import ImagesGrid from "./ImagesGrid";
import { useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
import { useNavigate } from "react-router-dom";

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

  const realaxItems = [
    {
      id: "0",
      title: "Title 1",
      image: "https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg",
    },
    {
      id: "2",
      title: "Title 2",
      image: "https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg",
    },
    {
      id: "3",
      title: "Title 3",
      image: "https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg",
    },
    {
      id: "4",
      title: "Title 4",
      image: "https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg",
    },
    {
      id: "5",
      title: "Title 5",
      image: "https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg",
    },
    {
      id: "6",
      title: "Title 6",
      image: "https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg",
    },
  ];

  const phobiaItems = [
    {
      id: "0",
      title: "Title 1",
      image: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    },
    {
      id: "2",
      title: "Title 2",
      image: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    },
    {
      id: "3",
      title: "Title 3",
      image: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    },
    {
      id: "4",
      title: "Title 4",
      image: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    },
    {
      id: "5",
      title: "Title 5",
      image: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    },
    {
      id: "6",
      title: "Title 6",
      image: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    },
  ];

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
      <a-sky
        src="https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg"
        rotation="0 -90 0"
      ></a-sky>
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
        // font="Oxanium"
        // font="https://cdn.aframe.io/fonts/Exo2SemiBold.fnt"
        width="6"
        color="white"
        wrap-count="20"
      ></a-text>
      {/* <a-entity
        position="0 5 -9"
        geometry="primitive: plane; width: auto; height: auto"
        material="color: #000"
        text="color: white; align: center; value: ENSCAPE; width:6; font: kelsonsans; wrapCount: 12;"
      ></a-entity> */}

      {/* <a-entity text-geometry="value: What's up"></a-entity> */}

      <ImagesGrid
        position="-2 0 -3"
        rotation="0 50 0"
        title="Relax"
        items={realaxItems}
      />
      <ImagesGrid
        position="2 0 -3"
        rotation="0 -50 0"
        title="Phobia"
        items={phobiaItems}
      />
    </Scene>
  );
};

export default Home;
