import React, { useContext, useState } from "react";
import { ProductDataContext } from "./Main";
import { CartContext } from "./Main";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import {
  Container,
  Grid,
  Button,
  List,
  ListItem,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Skeleton,
  Rating,
  Modal,
  Box,
  style,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
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

const Shop = () => {
  const {
    productsData,
    addToCartHandler,
    isLoading,
    search,
    category,
    isLogin,
  } = useContext(ProductDataContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* // modal/// */}
      <Modal
        open={open && !isLogin}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <LogIn />
        </Box>
      </Modal>
      {/* moadal */}
      <Container>
        {/* search bar start */}
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        {/* search bar end */}

        <List>
          <ListItem>
            {/* for loading start  */}
            {isLoading ? (
              <Grid container spacing={3}>
                {Array.from({ length: 4 }).map((_, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                      <Skeleton
                        variant="rectangular"
                        width={345}
                        height={140}
                      />
                      <Skeleton variant="text" width={210} height={60} />
                      <Skeleton variant="text" width={210} height={60} />
                      <Skeleton variant="text" width={40} height={20} />

                      <Typography
                        variant="span"
                        sx={{ padding: "0 10px 10px 10px" }}
                      >
                        {Array.from(Array(5)).map((_, index) => (
                          <StarIcon key={index} />
                        ))}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid container spacing={3}>
                {productsData
                  .filter((i) =>
                    i.brand.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((product) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card style={{ maxWidth: 345, height: "100%" }}>
                          <Link
                            to={`/shop/${product.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <CardMedia
                              sx={{ height: 140 }}
                              image={product.images[0]}
                              title="green iguana"
                            />
                            <Typography
                              variant="h6"
                              sx={{
                                padding: "10px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                textDecoration: "none",
                              }}
                            >
                              {"Title : " + product.title}
                            </Typography>
                          </Link>
                          <Typography
                            variant="h6"
                            sx={{ padding: "0 10px 10px 10px" }}
                          >
                            {"Price : $" + product.price}
                          </Typography>
                          <Typography
                            variant="span"
                            sx={{
                              padding: "0 8px 8px 10px",
                              fontSize: "22.5px",
                            }}
                          >
                            Rating :
                          </Typography>
                          <Rating
                            name="half-rating-read"
                            defaultValue={product.rating}
                            precision={0.1}
                            readOnly
                          />

                          {isLogin ? (
                            <Button
                              onClick={() => addToCartHandler(product.id)}
                              sx={{ marginTop: "10px" }}
                              startIcon={<ShoppingBasketIcon />}
                            >
                              Add to Cart
                            </Button>
                          ) : (
                            <Button
                              onClick={handleOpen}
                              sx={{ marginTop: "10px" }}
                              startIcon={<ShoppingBasketIcon />}
                            >
                              Add to Cart
                            </Button>
                          )}
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            )}
          </ListItem>
        </List>
      </Container>
    </>
  );
};

export default Shop;
