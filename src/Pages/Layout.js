import { Link } from "react-router-dom";
import { Grid, List, ListItem } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        style={{ backgroundColor: "#ff9505" }}
      >
        <Grid item>
          <List
            sx={{ listStyleType: "none", textAlign: "center", display: "flex" }}
          >
            <ListItem>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Apple
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Samsung
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                OPPO
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/help"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Huawei
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/blog"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Infinix
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
