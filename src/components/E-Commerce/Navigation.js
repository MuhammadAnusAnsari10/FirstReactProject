import React, { useState, useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { ProductDataContext } from "../E-Commerce/Main";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../FireBase/FireBaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Navigation() {
  const [value, setValue] = useState(0);
  const [isLogIn, setIsLogIn] = useState(false);
  const { cartItem } = useContext(ProductDataContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const logOut = () => {
    const userConfirmation = window.confirm("Do you Want to Logout ?");
    signOut(auth)
      .then((userConfirmation) => {
        toast.warn("You Are Logged Out", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: "yellow",
            color: "white",
          },
        });

        // alert("You Are Log Out");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogIn(true);
        const uid = user.uid;
      } else {
        setIsLogIn(false);
      }
    });
  }, []);

  const location = useLocation();

  // Define an array of paths where the navigation should not be displayed
  const hideNavigationPaths = ["/CreateAccount", "/LogIn"];

  // Check if the current path is in the array of paths to hide the navigation
  const shouldHideNavigation = hideNavigationPaths.includes(location.pathname);

  // If shouldHideNavigation is true, return null to not render the navigation
  if (shouldHideNavigation) {
    return null;
  }

  return (
    <>
      <Grid container>
        <Grid item xs={0} sm={0} md={0} lg={3}></Grid>
        <Grid
          item
          xs={6}
          sm={7}
          md={8}
          lg={5}
          display="flex"
          justifyContent="center"
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                justifyContent: "center",
                width: "100%",
                display: "flex",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Link to="/cart">
                  <Tab
                    label={
                      <Button startIcon={<ShoppingBasketIcon />}>
                        {cartItem.length}
                      </Button>
                    }
                    {...a11yProps(0)}
                  />
                </Link>
                <Link to="/shop">
                  <Tab label={<Button>Shop</Button>} {...a11yProps(1)} />
                </Link>
              </Tabs>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} sm={5} md={4} lg={4}>
          {isLogIn ? (
            <Button
              variant="contained"
              sx={{ marginTop: "2%" }}
              onClick={logOut}
            >
              Log out
            </Button>
          ) : (
            <>
              <Link to="/createAccount">
                <Button
                  variant="contained"
                  sx={{ marginRight: "1%", marginTop: "2%" }}
                >
                  Create Account
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="contained" sx={{ marginTop: "2%" }}>
                  Log in Account
                </Button>
              </Link>
            </>
          )}
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
}
