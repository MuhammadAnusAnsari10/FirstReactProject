import React, { useState } from "react";
export default function Counter({ attribute }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          attribute(count);
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </>
  );
}
