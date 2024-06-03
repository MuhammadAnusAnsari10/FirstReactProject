import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";

const pages = [
  "Home",
  "Service",
  "About",
  "PortFolio",
  "Team",
  "Pricing",
  "Contact",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function MuiWeb() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "white", boxShadow: "1" }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "primary",
                textDecoration: "none",
                fontSize: "40px",
              }}
            >
              OpenPage
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                justifyContent: "center", // Center the items horizontally
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "primary", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <Button variant="contained">Get Started</Button>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* // ////////////////  navigation end//////////////////////////////////////// */}
      {/* // ////////////////  header start/////////////////////////////////////////// */}
      <Grid container>
        <Grid item sx={{ marginTop: "8%" }} xs={12} sm={12} md={12} lg={12}>
          <Typography
            color="primary"
            align="center"
            variant="h3"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            One Page Bootstrap <br></br>Website Template
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            We are team of talented designers
          </Typography>
          <Button variant="contained" sx={{ textAlign: "center" }}>
            Get Started
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default MuiWeb;
