import { React, useContext } from "react";
import { ProductDataContext } from "./Main";
import {
  Container,
  Grid,
  Button,
  List,
  ListItem,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

export default function SearchBar() {
  const { productsData, searchTerm, searchCategory, search, category } =
    useContext(ProductDataContext);
  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ marginBottom: "30px" }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Search By Brand:"
            variant="standard"
            onChange={(e) => searchTerm(e.target.value)}
            value={search}
          />
        </Grid>
        <FormControl sx={{ m: 3.5, minWidth: 220 }} size="small">
          <InputLabel id="demo-select-small-label">Select Category</InputLabel>
          <Select onChange={(e) => searchCategory(e.target.value)}>
            <MenuItem value="">
              <em>Select Category</em>
            </MenuItem>
            {Array.from(new Set(productsData.map((item) => item.category))).map(
              (productCategory) => (
                <MenuItem value={productCategory}>{productCategory}</MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
