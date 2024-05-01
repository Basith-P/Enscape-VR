import { useRef } from "react";

const Button3D = ({
  id,
  position = "0 0 0",
  rotation = "0 0 0",
  title,
  onClick,
  width = 1,
  wrapCount,
  opacity = 1,
  buttonColor = "red",
}) => {
  wrapCount = wrapCount || title.length;

  const buttonRef = useRef();

  function onMouseEnter() {
    if (buttonRef.current) buttonRef.current.setAttribute("scale", "1.1 1.1 1.1");
  }

  function onMouseLeave() {
    if (buttonRef.current) buttonRef.current.setAttribute("scale", "1 1 1");
  }

  return (
    <a-entity
      id={id}
      ref={buttonRef}
      position={position}
      rotation={rotation}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <a-box
        material={`color: ${buttonColor}; opacity: ${opacity}`}
        width={width + 0.6}
        height="0.5"
        depth="0.1"
        cursor-listener
        data-raycastable
      ></a-box>
      <a-text
        value={title}
        align="center"
        color="white"
        width={width}
        wrap-count={wrapCount}
        position="0 0 0.06"
      ></a-text>
    </a-entity>
  );
};

export default Button3D;
