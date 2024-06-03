import React, { useState, useEffect } from "react";
export default function ReactUseEffect() {
  const [pk, setPk] = useState(0);
  const [ind, setInd] = useState(0);
  const [api, setApi] = useState([]);
  const indHandler = () => {
    setInd(ind + 1);
    console.log(ind);
  };
  const pkHandler = () => {
    setPk(pk + 1);
    console.log(pk);
  };

  const apiHandler = () => {
    setApi(!api);
  };

  useEffect(() => {
    console.log("render");
    return () => {
      console.log("done");
      // alert("Component Going To be update");
    };
  }, [api]);

  return (
    <>
      <h1>India</h1>
      <h1>{ind}</h1>
      <button onClick={indHandler}>Click</button>

      <h1>Pakistan</h1>
      <h1>{pk}</h1>
      <button onClick={pkHandler}>Click</button>
      <button onClick={apiHandler}>Api Render</button>
    </>
  );
}
