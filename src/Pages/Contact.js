import React from "react";
import { Grid } from "@mui/material";

export default function Contact() {
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
        Contact :
      </h1>
      <p style={{ fontSize: "40px" }}>This is Contact Page</p>
    </Grid>
  );
}
