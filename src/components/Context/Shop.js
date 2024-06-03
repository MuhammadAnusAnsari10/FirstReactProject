import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {
  Card,
  Button,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [button, setButton] = useState("");
  const [expanded, setExpanded] = useState(Array(products.length).fill(false));

  const btnHandler = (receive) => {
    setButton(receive);
  };
  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json.products));
  }, []);
  return (
    <>
      {/* text area start  */}

      <Container>
        <Grid
          container
          justifyContent="center"
          spacing={2}
          sx={{ marginBottom: "30px" }}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Search By Brand:"
              variant="standard"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Grid>
        </Grid>
      </Container>

      {/* text area end  */}

      {/* buttons start  */}

      <Container>
        <Grid container>
          <Grid item sx={{ marginTop: "5px", marginBottom: "22px" }}>
            {Array.from(new Set(products.map((items) => items.brand))).map(
              (brandName) =>
                button === brandName ? (
                  <Button
                    variant="contained"
                    key={brandName}
                    sx={{ margin: "4px" }}
                    onClick={() => btnHandler(brandName)}
                  >
                    {brandName}
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    key={brandName}
                    sx={{ margin: "4px" }}
                    onClick={() => btnHandler(brandName)}
                  >
                    {brandName}
                  </Button>
                )
            )}
          </Grid>
        </Grid>
      </Container>

      {/* buttons end  */}

      {/* card start  */}

      <Container>
        <Grid container spacing={2}>
          {products
            // .filter((i) => i.brand.toLowerCase().includes(search.toLowerCase()))
            .filter((i) => button === i.brand || button === "")

            .map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.images[0]}
                    alt="Product"
                  />
                  <CardContent>
                    <Typography variant="h6">Brand: {item.brand}</Typography>
                    <Typography variant="h6">Title: {item.title}</Typography>
                    <Typography variant="h6">Price: ${item.price}</Typography>
                    <Typography variant="h6">Rating: {item.rating}</Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <ExpandMoreIcon
                      onClick={() => handleExpandClick(index)}
                      aria-expanded={expanded[index]}
                      aria-label="show more"
                    />
                  </CardActions>
                  <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography variant="body2" paragraph>
                        Description:
                      </Typography>
                      <Typography variant="body2" paragraph>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>

      {/* card end  */}
    </>
  );
};
export default Shop;
