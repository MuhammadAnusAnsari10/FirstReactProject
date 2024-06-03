import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Grid, List, ListItem } from "@mui/material";
// import Shop from "../components/Context/Shop";
const ContextNavBar = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        style={{ backgroundColor: "#ff9505" }}
      >
        <Grid item>
          <List
            sx={{ listStyleType: "none", textAlign: "center", display: "flex" }}
          >
            <ListItem>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Contact
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/shop"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Shop
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default ContextNavBar;
