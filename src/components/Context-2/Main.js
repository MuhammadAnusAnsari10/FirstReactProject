import React, { useState, useEffect, createContext } from "react";
import Blog from "./Blog";
import SearchBar from "./SearchBar";

export const DataTransfer = createContext();

export default function Main() {
  const [post, setPost] = useState([]);
  const [SearchQueary, setSearchQueary] = useState("");

  const SearchBarHnadler = (searchBarReceiver) => {
    setSearchQueary(searchBarReceiver);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <>
      <DataTransfer.Provider value={{ post, SearchBarHnadler, SearchQueary }}>
        <SearchBar></SearchBar>
        <Blog></Blog>
      </DataTransfer.Provider>
    </>
  );
}
