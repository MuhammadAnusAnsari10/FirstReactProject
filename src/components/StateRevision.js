import { Input } from "@mui/base";
import { TextField, Button, useStepContext } from "@mui/material";
import React, { useState } from "react";

export default function StateRevision() {
  const [inpState, setInpState] = useState("");
  const [updateState, setUpdateState] = useState({
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: ["Apple", "samsung", "oppo"],
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  });

  console.log(updateState);

  const changedValue = () => {
    setUpdateState((prevUpdateState) => {
      const updatedBrand = [...prevUpdateState.brand];
      updatedBrand[1] = inpState;

      return {
        ...prevUpdateState,
        brand: updatedBrand,
      };
    });
  };

  return (
    <>
      <h4> Title : {updateState.title}</h4>
      <h4>Description :{updateState.description}</h4>
      <h4>Price :{updateState.price}</h4>
      <h4>Rating :{updateState.rating}</h4>
      <h4>Stock :{updateState.stock}</h4>
      <h4>Category : {updateState.category}</h4>
      <ul>
        <h4>
          Brand:
          {updateState.brand.map((p) => (
            <li>{p}</li>
          ))}
        </h4>
      </ul>
      <TextField onChange={(e) => setInpState(e.target.value)} />
      <Button variant="contained" onClick={changedValue}>
        Change
      </Button>
    </>
  );
}
