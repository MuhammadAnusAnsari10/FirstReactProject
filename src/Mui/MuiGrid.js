import React from "react";
import {
  Card,
  Container,
  Grid,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import { colors } from "@mui/material";
import pic1 from "../images/1.jpg";
import pic2 from "../images/2.jpg";
import pic3 from "../images/3.jpg";
import pic4 from "../images/4.jpg";

export default function MuiGrid() {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                backgroundColor: colors.blue[800],
                padding: "12px",
                color: "white",
              }}
            >
              <h1>Card one # 1</h1>
              <CardMedia
                component="img"
                height="140"
                image={pic1}
                // alt="Card Image 1"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button
                varient="outlined"
                sx={{
                  border: "2px solid white",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "red",
                    border: "2px solid ",
                    borderRadius: "13px",
                    transition: "0.8s",
                  },
                }}
              >
                Click Here
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                backgroundColor: colors.blue[500],
                padding: "12px",
                color: "white",
              }}
            >
              <h1>Card two # 2</h1>
              <CardMedia
                component="img"
                height="140"
                image={pic2}
                // alt="Card Image 1"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button
                varient="outlined"
                sx={{
                  border: "2px solid white",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "blue",
                    border: "2px solid ",
                    borderRadius: "13px",
                    transition: "0.8s",
                  },
                }}
              >
                Click Here
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                backgroundColor: colors.deepPurple[500],
                padding: "12px",
                color: "white",
              }}
            >
              <h1>Card three # 3</h1>
              <CardMedia
                component="img"
                height="140"
                image={pic3}
                // alt="Card Image 1"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button
                varient="outlined"
                sx={{
                  border: "2px solid white",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "purple",
                    border: "2px solid ",
                    borderRadius: "13px",
                    transition: "0.8s",
                  },
                }}
              >
                Click Here
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                backgroundColor: colors.orange[500],
                padding: "12px",
                color: "white",
              }}
            >
              <h1>Card four # 4</h1>
              <CardMedia
                component="img"
                height="140"
                image={pic4}
                // alt="Card Image 1"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button
                varient="outlined"
                sx={{
                  border: "2px solid white",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "orange",
                    border: "2px solid ",
                    borderRadius: "13px",
                    transition: "0.8s",
                  },
                }}
              >
                Click Here
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
