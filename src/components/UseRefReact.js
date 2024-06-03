// import { React, useRef } from "react";
// function useRefReact() {
//   const myRef = useRef();
//   const btnHandler = () => {
//     // document.getElementById("heading").innerHTML = "world";
//     console.log((myRef.current.innerText = "vjhvhfvk.jhfkf"));
//   };
//   return (
//     <>
//       <h1 id="heading" ref={myRef}>
//         hello
//       </h1>
//       <p ref={myRef}>naslcsdjkcbsjdcjadflnkkl</p>
//       <button onClick={btnHandler}>click</button>
//     </>
//   );
// }

// export default useRefReact;

//  chat GPT code/////////////////

import React, { useRef } from "react";

function useRefReact() {
  // Create a ref using the useRef hook
  const myRef = useRef(null);
  console.log("rerender");
  // Callback function to assign the ref to a DOM element
  // const setRef = (element) => {
  //   myRef.current = element;
  // };

  // You can now use myRef to access the DOM element
  const handleClick = () => {
    myRef.current.focus(); // Example: Focus on the input element
  };

  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default useRefReact;
