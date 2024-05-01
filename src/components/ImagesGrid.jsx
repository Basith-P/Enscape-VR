import { useNavigate } from "react-router-dom";

const ImagesGrid = ({ position = "0 0 0", rotation = "0 0 0", title, items }) => {
  const navigate = useNavigate();

  const imgWidth = 2;
  const imgHeight = 1.5;

  // const headlinePos = "0 3 -3";

  return (
    <a-entity
      id="images-container"
      position={position}
      rotation={rotation}
      geometry="primitive: plane; width: 6.6; height: 5"
      material="color: #000000; opacity: 0.7"
    >
      {/* <a-entity
        position="-.1 2.5 0"
        geometry="primitive: plane; width: 6.2; height: 1"
        material="color: #000000; opacity: 0.5"
        text={`color: white; align: center; value: ${title}; width:6; wrapCount: 16`}
      ></a-entity> */}

      <a-text
        value={title}
        position="-.1 2.05 0.01"
        align="center"
        padding="0.1 0.1"
        width="10"
      ></a-text>

      {items.map((item, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const xPos = -2.1 + col * (imgWidth + 0.1);
        const yPos = 0.8 - row * (imgHeight + 0.5);

        // assets

        return (
          <a-entity key={item.id}>
            <a-image
              src={`#${item.id}`}
              position={`${xPos} ${yPos} 0.01`}
              width={imgWidth}
              height={imgHeight}
              look-at="#rig"
              onClick={() => navigate(`/scenes/${item.id}`, { state: { item } })}
              data-raycastable
            ></a-image>

            <a-text
              value={item.title}
              position={`${xPos} ${yPos - imgHeight / 2 - 0.2} 0.01`}
              align="center"
              padding="0.1 0.1"
            ></a-text>
          </a-entity>
          // </a-scene>
        );
      })}
    </a-entity>
  );
};

export default ImagesGrid;
