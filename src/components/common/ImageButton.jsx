const ImageButton = ({
  src,
  position,
  width = "0.5",
  height = "0.5",
  rotation,
  opacity = "0.8",
  onClick,
}) => {
  return (
    <a-image
      src={src}
      position={position}
      width={width}
      height={height}
      rotation={rotation}
      opacity={opacity}
      onClick={onClick}
      // document.querySelector("#video").pause();
      data-raycastable
    ></a-image>
    // <a-entity
    //   position={position}
    //   rotation={rotation}
    //   onClick={onClick}
    //   cursor-listener
    //   data-raycastable
    // >
    //   <a-box
    //     material={`color: white; opacity: ${opacity}`}
    //     width={width + 0.5}
    //     height={height + 0.5}
    //     depth="0.1"
    //   ></a-box>
    //   <a-image src={src} width={width} height={height} position="0 0 0.06"></a-image>
    // </a-entity>
  );
};

export default ImageButton;
