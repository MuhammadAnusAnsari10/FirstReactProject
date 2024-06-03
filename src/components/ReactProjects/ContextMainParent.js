// import React, { createContext, useContext, useState } from "react";
// import ContextChildComopent from "./ContextChildComopent";
// import ContextInnerChild from "./ContextInnerChild";

// export const userValue = createContext();
// function ContextMainParent() {
//   const [value, setValue] = useState(0);
//   function countUpdater() {
//     setValue(value + 1);
//   }
//   return (
//     <userValue.Provider value={{ value, countUpdater }}>
//       <ContextChildComopent></ContextChildComopent>
//       <ContextInnerChild></ContextInnerChild>
//     </userValue.Provider>
//   );
// }

// export default ContextMainParent;

import React, { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Shop from "./Shop";
import ContextNavBar from "./ContextNavBar";

export const sendData = createContext();
export default function ContextMainParent() {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((response) => response.json())
      .then((json) => {
        setProductsData(json.products);
        setIsLoading(false);
      });
  }, []);
  //   console.log(productsData);
  return (
    <>
      <BrowserRouter>
        <sendData.Provider value={{ productsData, isLoading }}>
          <ContextNavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="about" element={<About />}></Route> */}
            {/* <Route path="contact" element={<Contact />}></Route> */}
            <Route path="Shop" element={<Shop />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Routes>
        </sendData.Provider>
      </BrowserRouter>
    </>
  );
}
