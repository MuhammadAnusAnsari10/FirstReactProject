import React, { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { ProductDataContext } from "./Main";
import {
  Container,
  Grid,
  Image,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
  Modal,
} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Style.css";
import LogIn from "./LogIn";
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SingleProduct() {
  const { pid } = useParams();
  const { productsData, addToCartHandler, isLogin } =
    useContext(ProductDataContext);
  const storeData = JSON.parse(localStorage.getItem("productsData"));
  const singleProduct = storeData.filter((product) => product.id == pid);
  // console.log(singleProduct);
  // console.log(productsData);
  console.log(pid);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (isLogin) {
      return setOpen(true);
    } else {
      return setOpen(false);
    }
  };

  return (
    <>
      {/*modal start  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <LogIn />
        </Box>
      </Modal>
      {/*  modal end*/}

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} marginTop="5%" className="image-container">
            {singleProduct[0].images.slice(0, 3).map((singleImage, index) => (
              <CardMedia
                key={index}
                component="img"
                image={singleImage}
                alt={`Product Image ${index + 1}`}
                className="product-image"
                sx={{ marginBottom: "4%" }}
              />
            ))}
          </Grid>

          <Grid item xs={12} md={5} marginTop="5%" className="image-container">
            {singleProduct[0].images.slice(2, 3).map((singleImage, index) => (
              <CardMedia
                key={index}
                component="img"
                image={singleImage}
                alt={`Product Image ${index + 4}`}
                className="product-image"
                sx={{
                  marginBottom: "4%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            ))}
          </Grid>

          <Grid item xs={12} md={4} marginTop="5%">
            <Card sx={{ padding: "15px" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {singleProduct[0].brand}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {singleProduct[0].title}
                </Typography>
                <Typography variant="h6" color="error">
                  ${singleProduct[0].price}
                </Typography>
                <Typography variant="p" paragraph>
                  {singleProduct[0].description}
                </Typography>

                {isLogin ? (
                  <Button
                    onClick={() => addToCartHandler(singleProduct[0].id)}
                    variant="contained"
                    sx={{ marginTop: "2%" }}
                  >
                    Add To Cart
                  </Button>
                ) : (
                  <Button
                    onClick={handleOpen}
                    sx={{ marginTop: "10px" }}
                    // startIcon={<ShoppingBasketIcon />}
                  >
                    Add to Cart
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
