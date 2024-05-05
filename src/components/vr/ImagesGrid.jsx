import { useNavigate } from "react-router-dom";

// import loadingImage from "../assets/images/loading.webp";

const ImagesGrid = ({
  position = "0 0 0",
  rotation = "0 0 0",
  title,
  items,
  isLoading = false,
}) => {
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
      <a-text
        value={title}
        position="-.1 2.05 0.01"
        align="center"
        padding="0.1 0.1"
        width="10"
      ></a-text>

      {isLoading ? (
        <>
          <a-text value="Loading scenes" position="-1 .4 0" />
          <a-text value="Please wait" position="-.8 .8 0" />
        </>
      ) : (
        items.map((item, index) => {
          const row = Math.floor(index / 3);
          const col = index % 3;
          const xPos = -2.1 + col * (imgWidth + 0.1);
          const yPos = 0.8 - row * (imgHeight + 0.5);

          // assets

          return (
            <a-entity key={item.id}>
              <a-image
                src={item.imageUrl}
                // src={`#${item.id}`}
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
              />
              {item.rating && (
                <a-entity
                  material="color: #000000; opacity: 0.8"
                  geometry="primitive: plane; width: 0.5; height: 0.3"
                  position={`${xPos / 1.56} ${yPos - imgHeight / 2 + 0.15} 0.011`}
                >
                  <a-text
                    value={`${item.rating} *`}
                    position="0 0 0.01"
                    align="center"
                    padding="0.1 0.1"
                    // font size
                    scale="0.8 0.8 0"
                  />
                  <svg
                    className="w-6 h-6 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </a-entity>
              )}
            </a-entity>
            // </a-scene>
          );
        })
      )}
    </a-entity>
  );
};

export default ImagesGrid;
