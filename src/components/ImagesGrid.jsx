import { useNavigate } from "react-router-dom";

const ImagesGrid = ({ position = "0 0 0", rotation = "0 0 0" }) => {
  const items = [
    {
      id: "0",
      title: "Title 1",
      image: "https://live.staticflickr.com/661/21230969582_37cee367bd_k.jpg",
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

  const navigate = useNavigate();

  const imgWidth = 2;
  const imgHeight = 1.5;

  return (
    <a-entity id="images-container" position={position} rotation={rotation}>
      {/* {items.map((item, index) => {
        <a-assets>
          <img id={item.id} src={item.image} />
        </a-assets>;
      })} */}
      {items.map((item, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const xPos = -2.2 + col * (imgWidth + 0.1);
        const yPos = 3.4 - row * (imgHeight + 0.5);

        // assets

        return (
          <a-entity key={item.id}>
            <a-image
              key={item.id}
              // src={`#${item.id}`}
              src={item.image}
              position={`${xPos} ${yPos} -5`}
              width={imgWidth}
              height={imgHeight}
              look-at="#rig" // This means the image will always face the camera
              onClick={() => navigate(`/scenes/${item.id}`)}
            ></a-image>
            <a-text
              value={item.title}
              position={`${xPos} ${yPos - imgHeight / 2 - 0.2} -5`}
              align="center"
              padding="0.1 0.1"
            ></a-text>
          </a-entity>
        );
      })}
    </a-entity>
  );
};

export default ImagesGrid;
