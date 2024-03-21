const ImagesGrid = ({
  position = "0 0 0",
  rotation = "0 0 0",
  scale = "1 1 1",
  color = "white",
  lookAt = "#rig",
}) => {
  const imageUrls = [
    "https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg",
    "https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
  ];

  const imgWidth = 2;
  const imgHeight = 1.5;

  return (
    <a-entity id="images-container" position={position} rotation={rotation}>
      {imageUrls.map((url, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const xPos = -2.2 + col * (imgWidth + 0.1);
        const yPos = 3.4 - row * (imgHeight + 0.1);
        return (
          <a-image
            key={index}
            src={url}
            position={`${xPos} ${yPos} -5`}
            width={imgWidth}
            height={imgHeight}
            look-at="#rig"
            onClick={() => {
              console.log("clicked");
            }}
          ></a-image>
        );
      })}
    </a-entity>
  );
};

export default ImagesGrid;
