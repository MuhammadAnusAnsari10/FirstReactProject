import React, { useContext } from "react";
import { Container, Grid, TextField } from "@mui/material";
import { DataTransfer } from "./Main";

export default function SearchBar() {
  const { SearchBarHnadler } = useContext(DataTransfer);
  return (
    <>
      <Container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search By Title : "
            variant="outlined"
            onChange={(e) => SearchBarHnadler(e.target.value)}
          />
        </Grid>
      </Container>
    </>
  );
}
