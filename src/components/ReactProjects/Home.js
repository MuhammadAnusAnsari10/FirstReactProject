import React, { useContext } from "react";
import { sendData } from "./ContextMainParent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { colors } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const Home = () => {
  const { productsData } = useContext(sendData);
  const featuredProducts = productsData.slice(0, 8);
  console.log(featuredProducts);
  const ButtonStyle = {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      backgroundColor: colors.deepPurple[500],
      "& .arrowIcon": {
        transform: "translateX(10px)",
        transition: "0.8s",
      },
    },
  };
  return (
    <>
      <Container>
        <Grid container spacing={3} marginTop="3%">
          {featuredProducts.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={product.images[0]}
                    title="green iguana"
                  />
                  <Typography variant="h6" sx={{ padding: "10px" }}>
                    {"Title : " + product.title}
                  </Typography>
                  <Typography variant="h6" sx={{ padding: "0 10px 10px 10px" }}>
                    {"Price : $" + product.price}
                  </Typography>
                  <Typography
                    variant="span"
                    sx={{ padding: "0 8px 8px 10px", fontSize: "22.5px" }}
                  >
                    Rating :
                  </Typography>
                  <Typography
                    variant="span"
                    sx={{ padding: "0 10px 10px 10px" }}
                  >
                    {Array.from(Array(Math.floor(product.rating))).map(
                      (_, index) => (
                        <StarIcon />
                      )
                    )}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid container>
          <Grid item>
            <Button
              variant="contained"
              component={Link}
              to="/shop"
              sx={ButtonStyle}
            >
              View All Products
              <KeyboardDoubleArrowRightIcon className="arrowIcon" />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
