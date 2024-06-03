import React from "react";
import { Grid } from "@mui/material";

export default function Blog() {
  return (
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
        Blog :
      </h1>
      <p style={{ fontSize: "40px" }}>This is Blog Page</p>
    </Grid>
  );
}
