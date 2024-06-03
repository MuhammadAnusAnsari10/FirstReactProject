import React, { useState, createContext, useEffect } from "react";
import Navigation from "./Navigation";
import Shop from "./Shop";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import LogIn from "./LogIn";
import ResetPassword from "../E-Commerce/ResetPassword";
import Logout from "./CheckUser";
import Popup from "./Popup";
// import Demo from "./Demo";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FireBase/FireBaseConfig";

export const ProductDataContext = createContext();

const Main = () => {
  const [productsData, setProductsData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  function searchTerm(searchTerm) {
    setSearch(searchTerm);
  }

  function searchCategory(category) {
    setCategory(category);
  }

  function addToCartHandler(cartItemId) {
    setCartItem([...cartItem, cartItemId]);
  }
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/");
      const json = await response.json();

      setProductsData(json.products);
      setIsLoading(false);

      localStorage.setItem("productsData", JSON.stringify(json.products));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    fetchData();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
        console.log(productsData);
      }
    });
  }, []);

  return (
    <ProductDataContext.Provider
      value={{
        productsData,
        addToCartHandler,
        cartItem,
        isLoading,
        searchTerm,
        searchCategory,
        search,
        category,
        isLogin,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Navigation />}>
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:pid" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />{" "}
          </Route>
          <Route path="/" element={<CreateAccount />} />
          <Route path="createAccount" element={<CreateAccount />} />
          <Route path="login" element={<LogIn />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </ProductDataContext.Provider>
  );
};

export default Main;
