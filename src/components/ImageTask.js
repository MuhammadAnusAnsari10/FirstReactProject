import React, { useState } from "react";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
const ImageTask = () => {
  const [width, setWidth] = useState(100);

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  return (
    <>
      <h2>Image Editor</h2>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="range"
          id="width"
          min="100"
          max="400"
          value={width}
          onChange={handleWidthChange}
        />
        <span>{width}px</span>
      </div>
      <div>
        <img src={image1} width={width} alt="Resizable Image" />
        <img src={image2} width={width} alt="Resizable Image" />
        <img src={image3} width={width} alt="Resizable Image" />
      </div>
    </>
  );
};

export default ImageTask;
