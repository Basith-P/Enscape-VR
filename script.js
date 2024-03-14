document.addEventListener("DOMContentLoaded", function () {
  const imageUrls = [
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
    "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg",
  ];

  const imgWidth = 2;
  const imgHeight = 1.5;

  const imagesContainer = document.getElementById("images-container");

  imageUrls.forEach((url, index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const xPos = -2.2 + col * (imgWidth + 0.1);
    const yPos = 3.4 - row * (imgHeight + 0.1);

    const imageEntity = document.createElement("a-entity");
    imageEntity.setAttribute("geometry", {
      primitive: "plane",
      width: imgWidth,
      height: imgHeight,
    });
    imageEntity.setAttribute("material", { src: url });
    imageEntity.setAttribute("position", { x: xPos, y: yPos, z: -5 });

    // imageEntity.addEventListener("click", function () {
    //   // Navigate to a link when the image is clicked
    //   window.location.href = "https://www.google.com"; // Change the URL to your desired link
    // });

    imagesContainer.appendChild(imageEntity);
  });
});
