import { Container, Grid } from "@mui/material";
import React from "react";

function About() {
  return (
    <>
      <Grid item sx={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "60px",
            backgroundColor: "#ff9505",
            display: "inline-block",
            padding: "20px",
            color: "white",
          }}
        >
          About :
        </h1>
        <p style={{ fontSize: "40px" }}>This is About Page</p>
      </Grid>
    </>
  );
}

export default About;
