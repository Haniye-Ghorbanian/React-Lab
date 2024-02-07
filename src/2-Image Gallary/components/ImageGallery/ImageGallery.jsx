// ImageGallery.jsx
import React, { useState } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import "./ImageGallery.css";

function ImageGallery(props) {
  const [selectedImage, setSelectedImage] = useState(props.images[0]);

  function handleImageClick(image) {
    setSelectedImage(image);
  }

  return (
    <div className="image-gallery-container">
      <div className="thumbnail-container">
        {props.images.map((image, index) => (
          <Thumbnail key={index} image={image} onClick={handleImageClick} />
        ))}
      </div>
      <div className="selected-image-container">
        {selectedImage && (
          <div>
            <img
              src={selectedImage}
              alt="selected"
              className="selected-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageGallery;
