import React, { useContext } from "react";
import { sendData } from "./ContextMainParent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { Container, Grid, Skeleton } from "@mui/material";

const Shop = () => {
  const { productsData, isLoading } = useContext(sendData);

  return (
    <Container>
      {isLoading ? (
        <Grid container spacing={3} marginTop="3%">
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <Skeleton variant="rectangular" width={345} height={140} />
                <Skeleton variant="text" width={210} height={60} />
                <Skeleton variant="text" width={210} height={60} />
                <Skeleton variant="text" width={40} height={20} />

                <Typography variant="span" sx={{ padding: "0 10px 10px 10px" }}>
                  {Array.from(Array(5)).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={3} marginTop="3%">
          {productsData.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={product.images[1]}
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
                  Rating:
                </Typography>
                <Typography variant="span" sx={{ padding: "0 10px 10px 10px" }}>
                  {Array.from(Array(Math.floor(product.rating))).map(
                    (_, index) => (
                      <StarIcon key={index} />
                    )
                  )}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Shop;
