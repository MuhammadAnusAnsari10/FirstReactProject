import React from "react";
import { Grid } from "@mui/material";

const Help = () => {
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
        Help :
      </h1>
      <p style={{ fontSize: "40px" }}>This is Help Page</p>
    </Grid>
  );
};

export default Help;
