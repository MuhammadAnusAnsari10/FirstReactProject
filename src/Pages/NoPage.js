import React from "react";
import { Grid, Typography } from "@mui/material";

export default function NoPage() {
  return (
    <Grid item sx={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: "60px",
          backgroundColor: "red",
          display: "inline-block",
          padding: "20px",
          color: "white",
        }}
      >
        <Typography sx={{ textAlign: "left", fontSize: "25px" }}>
          error :
        </Typography>
        Page Not Found !
      </h1>
    </Grid>
  );
}
