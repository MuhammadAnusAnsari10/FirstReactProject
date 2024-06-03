import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange, green } from "@mui/material/colors";
import { Button, Card, Grid, Typography } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    warning: {
      main: "#ff0000",
    },
  },
});

export default function MuiTheme() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Checkbox></Checkbox>
      <Typography color="primary">Hello</Typography> */}

        <Grid container>
          <Grid item xs={3}>
            <Card sx={{ padding: "20px", margin: "5% 0" }}>
              <Typography color="warning">Card one </Typography>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
              <Button>Click Here </Button>
            </Card>
            <Card sx={{ padding: "20px" }}>
              <h1>Card two </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
              <Button>Click Here </Button>
            </Card>
            <Card sx={{ padding: "20px" }}>
              <h1>Card three </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
              <Button>Click Here </Button>
            </Card>
          </Grid>
        </Grid>
        <Button color="warning">hello</Button>
      </ThemeProvider>
    </>
  );
}
