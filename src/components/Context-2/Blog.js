import React, { useContext } from "react";
import { DataTransfer } from "./Main";
import { Card, Container, container, Grid } from "@mui/material";

export default function Blog() {
  const { post, SearchQueary } = useContext(DataTransfer);
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {post
            .filter((i) =>
              i.title.toLowerCase().includes(SearchQueary.toLowerCase())
            )
            .map((item) => (
              <Grid item xs={4}>
                <Card sx={{ padding: "10px" }}>
                  <h1>{"ID : " + item.id}</h1>
                  <h5>{"Title : " + item.title}</h5>
                  <p>{"Body  : " + item.body}</p>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}
