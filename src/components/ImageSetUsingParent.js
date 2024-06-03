import { useState } from "react";
export default function ImageSetUsingParent({ attr }) {
  const [width, setWidth] = useState(0);
  return (
    <>
      <input
        type="range"
        max="100"
        onChange={(e) => {
          attr(width);
          setWidth(e.target.value);
        }}
        value={width}
      />
    </>
  );
}
