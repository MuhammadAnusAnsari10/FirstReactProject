import React, { useContext } from "react";
import { CartItem } from "./Main";
import { ProductDataContext } from "../E-Commerce/Main";
import { Link } from "react-router-dom";

import {
  Card,
  Container,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  List,
  ListItem,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";

export default function Cart() {
  const { productsData, cartItem } = useContext(ProductDataContext);
  // const cartProducts = productsData.filter((product) =>
  //   cartItem.includes(product.id)
  // );

  const cartProducts = cartItem.map(
    (cart_product_ids) => productsData[cart_product_ids]
  );

  return (
    <Container>
      <List>
        <ListItem>
          <Grid container spacing={2} display="flex" justifyContent="center">
            {cartProducts.map((singleCartProduct) => (
              <Grid
                item
                xs={6}
                sx={{ marginTop: "12px" }}
                key={singleCartProduct.id}
              >
                <Card sx={{ padding: "35px 0 30px 30px" }}>
                  <Grid container spacing={2}>
                    <div
                      style={{
                        width: "140px",
                        height: "140px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundSize: "cover",
                      }}
                    >
                      <img
                        src={singleCartProduct.images[0]}
                        alt={singleCartProduct.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <Grid item xs={4}>
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {singleCartProduct.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {singleCartProduct.description}
                        </Typography>
                      </CardContent>
                    </Grid>
                    <Grid item xs={4}>
                      <CardContent>
                        <Typography variant="body2" color="textSecondary">
                          Rating:
                        </Typography>
                        <Rating
                          name="product-rating"
                          value={singleCartProduct.rating}
                          readOnly
                        />
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ListItem>
      </List>
    </Container>
  );
}
