import React, { useEffect, useRef } from "react";
import "aframe";
import "aframe-extras";

const CursorComponent = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Register custom shaders
    AFRAME.registerShader("cursor-shader", {
      schema: {
        color: { type: "color", is: "uniform" },
      },
      vertexShader: `
        varying vec2 vUV;

        void main() {
          vUV = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUV;
        uniform vec3 color;

        void main() {
          float dist = length(vUV - vec2(0.5));
          float alpha = 1.0 - smoothstep(0.4, 0.5, dist);
          gl_FragColor = vec4(color, alpha);
        }
      `,
    });

    // Update cursor material when component mounts
    const cursorEl = cursorRef.current.getObject3D("cursor");
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color("#ffffff") },
      },
    });
    cursorEl.setObject3D(
      "cursor",
      new THREE.Mesh(cursorEl.getObject3D("cursor").geometry, material)
    );
  }, []);

  return (
    <a-cursor
      ref={cursorRef}
      color="white"
      fuse="true"
      animation__click="property: components.cursor.material.uniforms.color.value; type: color; startEvents: click; easing: easeInCubic; dur: 150; from: #ffffff; to: #000000"
      animation__fusing="property: components.cursor.material.uniforms.color.value; type: color; startEvents: fusing; easing: easeInCubic; dur: 1500; from: #000000; to: #ffffff"
      animation__mouseleave="property: components.cursor.material.uniforms.color.value; type: color; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: #ffffff"
    >
      <a-entity
        cursor="fuse: true; fuseTimeout: 1500"
        geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02"
        position="0 0 -1"
        material="shader: cursor-shader"
      >
        <a-entity
          cursor="fuse: false"
          geometry="primitive: ring; radiusInner: 0.015; radiusOuter: 0.02"
          position="0 0 0.01"
          material="color: white"
        ></a-entity>
      </a-entity>
    </a-cursor>
  );
};

export default CursorComponent;
