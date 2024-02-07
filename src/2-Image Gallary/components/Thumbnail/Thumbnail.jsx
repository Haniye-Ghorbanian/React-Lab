import { useState } from "react";
import React from "react";
import "./Thumbnail.css";

function Thumbnail(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    props.onClick(props.image);
    setIsClicked(true);
  };

  return (
    <div
    className={`thumbnail-container ${isClicked ? 'clicked' : ''}`}
    onClick={handleClick}
    >
      <img src={props.image} alt="thumbnail" className="thumbnail-image" />
    </div>
  );
}

export default Thumbnail;
