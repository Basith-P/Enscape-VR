import { useNavigate } from "react-router-dom";

const ImagesGrid = ({ position = "0 0 0", rotation = "0 0 0", title, items }) => {
  const navigate = useNavigate();

  const imgWidth = 2;
  const imgHeight = 1.5;

  // const headlinePos = "0 3 -3";

  return (
    <>
      <a-entity id="images-container" position={position} rotation={rotation}>
        {/* {items.map((item, index) => {
        <a-assets>
          <img id={item.id} src={item.image} />
        </a-assets>;
      })} */}
        <a-entity
          position="0 4.8 -5"
          geometry="primitive: plane; width: auto; height: 1"
          material="color: #000000; opacity: 0.5"
          text={`color: white; align: center; value: ${title}; width:6; wrapCount: 16`}
        ></a-entity>
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
                data-raycastable
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
    </>
  );
};

export default ImagesGrid;
